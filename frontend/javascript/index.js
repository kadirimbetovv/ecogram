document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('like-btn');
    const likeCount = document.getElementById('like-count');
    const commentButton = document.getElementById('comment-btn');
    const commentsSection = document.getElementById('comments-section');
    const commentInput = document.getElementById('comment-input');
    const sendCommentButton = document.getElementById('submit-comment-btn');
    const commentsContainer = document.getElementById('comments-container');
  
    let isLiked = false;
  
    const user = {
      username: 'JohnDoe',
      profilePic: 'https://via.placeholder.com/40',
    };
  
    likeButton.addEventListener('click', () => {
      const likes = parseInt(likeCount.textContent, 10);
      if (isLiked) {
        likeCount.textContent = likes - 1;
        isLiked = false;
      } else {
        likeCount.textContent = likes + 1;
        isLiked = true;
      }
    });
  
    commentButton.addEventListener('click', () => {
      if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
      } else {
        commentsSection.style.display = 'none';
      }
    });
  

    sendCommentButton.addEventListener('click', () => {
      const commentText = commentInput.value.trim();
      if (commentText) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
  
        const profilePic = document.createElement('img');
        profilePic.src = user.profilePic;
        profilePic.alt = `${user.username}'s profile picture`;
        profilePic.className = 'profile-pic';

        const usernameElement = document.createElement('span');
        usernameElement.className = 'username';
        usernameElement.textContent = user.username;

        const commentTextElement = document.createElement('p');
        commentTextElement.className = 'comment-text';
        commentTextElement.textContent = commentText;
  
        commentElement.appendChild(profilePic);
        commentElement.appendChild(usernameElement);
        commentElement.appendChild(commentTextElement);

        commentsContainer.appendChild(commentElement);

        commentInput.value = '';
      }
    });
  });
  