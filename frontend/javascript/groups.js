document.addEventListener('DOMContentLoaded', () => {
    const groupButtons = document.querySelectorAll('.groups-container .box button');

    groupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const groupName = button.parentElement.querySelector('h2').textContent;
            if (button.textContent === 'Join') {
                button.textContent = 'Open';
                button.style.backgroundColor = '#31572C';
                button.style.color = 'white';

                addToChats(groupName);
            } else {
                openGroupChat(groupName);
            }
        });
    });
});

function addToChats(groupName) {
    const chatsContainer = localStorage.getItem('chats') 
        ? JSON.parse(localStorage.getItem('chats')) 
        : [];

    if (!chatsContainer.includes(groupName)) {
        chatsContainer.push(groupName);
        localStorage.setItem('chats', JSON.stringify(chatsContainer));
        alert(`${groupName} has been added to your chats!`);
    } else {
        alert(`${groupName} is already in your chats.`);
    }
}

function openGroupChat(groupName) {
    alert(`Opening chat for ${groupName}.`);
    window.location.href = `chats.html?group=${encodeURIComponent(groupName)}`;
}
