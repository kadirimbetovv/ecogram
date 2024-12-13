function flipCard(card) {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
        const hashtag = card.getAttribute('data-hashtag');
        const postsContainer = card.querySelector('.posts-container');
        const noPostsMessage = postsContainer.querySelector('.no-posts-message');

        const posts = getPosts(hashtag); 

        postsContainer.innerHTML = '';

        if (posts.length === 0) {
            noPostsMessage.style.display = 'block';
            postsContainer.appendChild(noPostsMessage);
        } else {
            noPostsMessage.style.display = 'none';
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.textContent = post.caption;
                postsContainer.appendChild(postElement);
            });
        }
    }
}

function getPosts(hashtag) {
    const samplePosts = {
        '#GreenQuest': [{ caption: 'Save the Earth!' }, { caption: 'Go green today!' }],
        '#EcoAction': [{ caption: 'Act for the planet!' }],
        '#EarthForward': []
    };

    return samplePosts[hashtag] || [];
}
