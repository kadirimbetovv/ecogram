document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.querySelector('.chat-messages');

    function addMessage(text, type) {
        const message = document.createElement('div');
        message.classList.add('message', type);

        const messageText = document.createElement('p');
        messageText.classList.add('message-text');
        messageText.innerText = text;

        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        const now = new Date();
        messageTime.innerText = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

        message.appendChild(messageText);
        message.appendChild(messageTime);
        chatMessages.appendChild(message);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const text = messageInput.value.trim();
        if (text) {
            addMessage(text, 'sent');
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
    const chatsContainer = document.getElementById('chats-container');
    const chats = localStorage.getItem('chats') 
        ? JSON.parse(localStorage.getItem('chats')) 
        : [];

    chats.forEach(chat => {
        const chatBox = document.createElement('div');
        chatBox.classList.add('box');
        chatBox.innerHTML = `
            <h2>${chat}</h2>
            <button onclick="openGroupChat('${chat}')">Open</button>
        `;
        chatsContainer.appendChild(chatBox);
    });

    window.openGroupChat = (groupName) => {
        alert(`Opening chat for ${groupName}.`);
        window.location.href = `group_chat.html?group=${encodeURIComponent(groupName)}`;
    };
});
