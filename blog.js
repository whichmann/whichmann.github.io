class Blog {
  constructor() {
    this.posts = [];
    this.localStorageKey = "posts";
  }

  async addPost(title, body) {
    const post = {
      title,
      body,
      createdAt: new Date(),
      id: crypto.randomUUID(),
    };
    let localPosts = JSON.parse(
      localStorage.getItem(this.localStorageKey) || "[]"
    );
    localPosts?.unshift(post);
    localStorage.setItem(this.localStorageKey, JSON.stringify(localPosts));
    this.posts = localPosts;
    return post;
  }

  async getPosts() {
    let localPosts = JSON.parse(
      localStorage.getItem(this.localStorageKey) || "[]"
    );
    this.posts = localPosts;
    this.posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return this.posts;
  }

  async deletePost(id) {
    const localPosts = await this.getPosts();
    const remainingPosts = localPosts.filter((post) => post.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(remainingPosts));
    this.posts = remainingPosts;
    return true;
  }

}

class BlogUI {
  constructor(blog) {
    this.blog = blog;
    this.form = document.getElementById("postForm");
    this.titleInput = document.getElementById("title");
    this.bodyInput = document.getElementById("body");
    this.postsDiv = document.getElementById("posts");
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    this.renderPosts();
  }

  async handleSubmit(e) {
    e.preventDefault();
    const title = this.titleInput.value.trim();
    const body = this.bodyInput.value.trim();
    if (title && body) {
      await this.blog.addPost(title, body);
      this.titleInput.value = "";
      this.bodyInput.value = "";
      this.renderPosts();
    }
  }

  async renderPosts() {
    const posts = await this.blog.getPosts();
    this.postsDiv.innerHTML = "";
    if (!posts || posts.length === 0) {
      this.postsDiv.innerHTML = "<p class='no-posts'>No posts yet.</p>";
      return;
    }
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      const date = new Intl.DateTimeFormat("en", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "Europe/Warsaw",
      }).format(new Date(post.createdAt))
      postDiv.className = "post alert-box outer-border scale-down";
      postDiv.innerHTML = `
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
        <div class="post-date">${date}</div>
        <div class="post-controls">
        <button data-id="${post.id}" class="post-control delete-btn"><img height="auto" src="icons/delete.svg" alt="Delete" /></button>
        <button class="post-control edit-btn"><img height="auto" src="icons/edit.svg" alt="Edit" /></button>
        </div>
      `;
      // Add event listener to the delete button
      postDiv
        .querySelector(".delete-btn")
        .addEventListener("click", async (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          await this.blog.deletePost(id);
          this.renderPosts();
        });
      this.postsDiv.appendChild(postDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const blog = new Blog();
  new BlogUI(blog);
});
