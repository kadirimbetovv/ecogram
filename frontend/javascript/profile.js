function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    const createPostSection = document.querySelector('.create-post-container');

    tabs.forEach(tab => {
        tab.style.display = tab.id === tabName ? 'block' : 'none';
    });

    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase() === tabName);
    });

    if (tabName === 'liked') {
        createPostSection.style.display = 'none'; 
    } else if (tabName === 'posts') {
        createPostSection.style.display = 'block'; 
    }
}

function saveProfile() {
    const username = document.getElementById('username-input').value;
    const bio = document.getElementById('bio-input').value;
    const profilePicUrl = document.getElementById('profile-pic-input').value;

    document.getElementById('profile-username').textContent = username;
    document.getElementById('profile-bio').textContent = bio;
    document.getElementById('profile-picture').src = profilePicUrl;

    alert('Profile updated successfully!');
}

function createPost() {
    const photoInput = document.getElementById('post-photo');
    const captionInput = document.getElementById('post-caption');

    if (photoInput.files.length === 0 || captionInput.value.trim() === '') {
        alert('Please upload a photo and add a caption.');
        return;
    }

    const photoUrl = URL.createObjectURL(photoInput.files[0]);
    const caption = captionInput.value;

    const newPost = document.createElement('div');
    newPost.className = 'post-card';
    newPost.innerHTML = `
        <img src="${photoUrl}" alt="Post Image" class="post-image">
        <div class="post-overlay">
            <p class="post-caption">${caption}</p>
            <button class="like-button" onclick="likePost(this)">❤</button>
        </div>
    `;

    const postsGrid = document.querySelector('.posts-grid');
    postsGrid.appendChild(newPost);

    photoInput.value = '';
    captionInput.value = '';

    alert('Post created successfully!');
}

function likePost(button) {
    const post = button.closest('.post-card');
    const likedPostsGrid = document.getElementById('liked-posts-grid');
    const noLikedPostsMessage = document.getElementById('no-liked-posts-message');

    const likedPost = post.cloneNode(true);
    likedPost.querySelector('.like-button').remove();
    likedPostsGrid.appendChild(likedPost);

    noLikedPostsMessage.style.display = 'none';

    alert('Post liked!');
}
