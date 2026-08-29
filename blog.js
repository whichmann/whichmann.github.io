import './style.css';
import 'gameMfe/Game';

const game = document.createElement('game-tetris');

document.getElementById('game').appendChild(game);

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

  async updatePost(id, updatedValues) {
    const localPosts = await this.getPosts();
    const updatedPosts = localPosts.map((post) => {
      if (post.id !== id) return post;
      return {
        ...post,
        ...updatedValues,
      };
    });
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedPosts));
    this.posts = updatedPosts;
    return true;
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
    this.editingPostId = null;
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    this.renderPosts();
  }

  escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  renderActionButtons(post, isEditing) {
    if (isEditing) {
      return `
        <div class="post-controls">
          <button data-id="${post.id}" class="post-control confirm-edit-btn" title="Save changes" aria-label="Save changes">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M9.55 15.15 6.7 12.3l-1.4 1.4 4.25 4.25 9.9-9.9-1.4-1.4z"/>
            </svg>
          </button>
          <button data-id="${post.id}" class="post-control cancel-edit-btn" title="Cancel changes" aria-label="Cancel changes">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71 13.41 10.6l4.89 4.89-1.41 1.41L12 12.01 7.12 16.9 5.7 15.49l4.89-4.89L5.7 5.71 7.12 4.3l4.89 4.89 4.89-4.89z"/>
            </svg>
          </button>
        </div>
      `;
    }

    return `
      <div class="post-controls">
        <button data-id="${post.id}" class="post-control delete-btn" title="Delete post" aria-label="Delete post">
          <img height="auto" src="/icons/delete.svg" alt="Delete" />
        </button>
        <button data-id="${post.id}" class="post-control edit-btn" title="Edit post" aria-label="Edit post">
          <img height="auto" src="/icons/edit.svg" alt="Edit" />
        </button>
      </div>
    `;
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
      const isEditing = this.editingPostId === post.id;
      const date = new Intl.DateTimeFormat("en", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "Europe/Warsaw",
      }).format(new Date(post.createdAt));

      postDiv.className = "post alert-box outer-border scale-down";
      postDiv.innerHTML = `
        ${isEditing ? `
          <textarea class="post-title-input" rows="1">${this.escapeHtml(post.title)}</textarea>
          <textarea class="post-body-input" rows="4">${this.escapeHtml(post.body)}</textarea>
        ` : `
          <div class="post-title">${this.escapeHtml(post.title)}</div>
          <div class="post-body">${this.escapeHtml(post.body)}</div>
        `}
        <div class="post-date">${date}</div>
        ${this.renderActionButtons(post, isEditing)}
      `;

      const deleteButton = postDiv.querySelector(".delete-btn");
      if (deleteButton) {
        deleteButton.addEventListener("click", async (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          await this.blog.deletePost(id);
          this.renderPosts();
        });
      }

      const editButton = postDiv.querySelector(".edit-btn");
      if (editButton) {
        editButton.addEventListener("click", () => {
          this.editingPostId = post.id;
          this.renderPosts();
        });
      }

      const confirmButton = postDiv.querySelector(".confirm-edit-btn");
      if (confirmButton) {
        confirmButton.addEventListener("click", async (e) => {
          const id = e.currentTarget.getAttribute("data-id");
          const titleInput = postDiv.querySelector(".post-title-input");
          const bodyInput = postDiv.querySelector(".post-body-input");
          const title = titleInput?.value.trim();
          const body = bodyInput?.value.trim();

          if (!title || !body) return;

          await this.blog.updatePost(id, { title, body });
          this.editingPostId = null;
          this.renderPosts();
        });
      }

      const cancelButton = postDiv.querySelector(".cancel-edit-btn");
      if (cancelButton) {
        cancelButton.addEventListener("click", () => {
          this.editingPostId = null;
          this.renderPosts();
        });
      }

      this.postsDiv.appendChild(postDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const blog = new Blog();
  new BlogUI(blog);
});
