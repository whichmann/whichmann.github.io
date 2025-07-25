class Blog {
  constructor() {
    this.apiUrl = "http://localhost:3001/posts";
    this.posts = [];
    this.localStorageKey = "posts";
  }

  async addPost(title, body) {
    const post = {
      title,
      body,
      date: new Date().toLocaleString(),
      id: crypto.randomUUID(),
    };
    try {
      const res = await fetch(this.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      console.log({ res });
      if (!res.ok) {
        throw new Error("Server error");
      }
      const newPost = await res.json();
      this.posts.unshift(newPost);
      return newPost;
    } catch (err) {
      console.log("not here");
      // Fallback to localStorage
      let localPosts = JSON.parse(
        localStorage.getItem(this.localStorageKey) || "[]"
      );
      // Simulate an id
      localPosts.unshift(post);
      localStorage.setItem(this.localStorageKey, JSON.stringify(localPosts));
      this.posts = localPosts;
      return post;
    }
  }

  async getPosts() {
    try {
      const res = await fetch(this.apiUrl);
      if (!res.ok) throw new Error("Server error");
      this.posts = await res.json();
      // Sort by date descending if needed
      this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      return this.posts;
    } catch (err) {
      // Fallback to localStorage
      let localPosts = JSON.parse(
        localStorage.getItem(this.localStorageKey) || "[]"
      );
      this.posts = localPosts;
      this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      return this.posts;
    }
  }

  async deletePost(id) {
    try {
      const res = await fetch(`${this.apiUrl}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Server error");
      // Remove from local posts array
      this.posts = this.posts.filter((post) => post.id !== id);
      return true;
    } catch (err) {
      console.log({ err });
      // Fallback to localStorage
      let localPosts = JSON.parse(
        localStorage.getItem(this.localStorageKey) || "[]"
      );
      localPosts = localPosts.filter((post) => post.id !== id);
      localStorage.setItem(this.localStorageKey, JSON.stringify(localPosts));
      this.posts = localPosts;
      return true;
    }
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
    console.log({ posts });
    this.postsDiv.innerHTML = "";
    if (posts.length === 0) {
      this.postsDiv.innerHTML = "<p class='no-posts'>No posts yet.</p>";
      return;
    }
    posts.forEach((post) => {
      console.log({ bod: post.body });
      const postDiv = document.createElement("div");
      postDiv.className = "post alert-box outer-border scale-down";
      postDiv.innerHTML = `
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
        <div class="post-date">${post.date}</div>
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
