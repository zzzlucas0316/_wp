document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.querySelector(".post-box button");
  const textarea = document.querySelector(".post-box textarea");
  const container = document.querySelector(".container");

  postButton.addEventListener("click", function () {
    const content = textarea.value.trim();

    if (content === "") {
      alert("請輸入貼文內容！");
      return;
    }

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    postDiv.innerHTML = `
      <div class="author">你自己</div>
      <div class="content">${escapeHtml(content)}</div>
      <div class="comments">💬 尚無留言</div>
      <div class="comment-form">
        <input type="text" placeholder="輸入留言..." />
        <button class="comment-btn">留言</button>
      </div>
    `;

    // 插入新貼文
    container.insertBefore(postDiv, container.children[1]);

    // 綁定留言按鈕事件
    bindCommentEvent(postDiv);

    textarea.value = "";
  });

  // 綁定留言事件的函式
  function bindCommentEvent(postElement) {
    const commentBtn = postElement.querySelector(".comment-btn");
    const commentInput = postElement.querySelector("input");
    const commentsDiv = postElement.querySelector(".comments");

    commentBtn.addEventListener("click", function () {
      const comment = commentInput.value.trim();
      if (comment === "") {
        alert("請輸入留言內容！");
        return;
      }

      // 如果是 "尚無留言"，清空
      if (commentsDiv.textContent.includes("尚無留言")) {
        commentsDiv.innerHTML = "";
      }

      const commentText = document.createElement("div");
      commentText.innerHTML = `💬 你：${escapeHtml(comment)}`;
      commentsDiv.appendChild(commentText);
      commentInput.value = "";
    });
  }

  // 安全轉換輸入，防止 XSS
  function escapeHtml(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // 頁面載入時如果有初始貼文，也綁定留言事件
  document.querySelectorAll(".post").forEach(post => bindCommentEvent(post));
});
