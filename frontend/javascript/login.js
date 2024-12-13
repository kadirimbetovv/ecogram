function toggleHelp() {
    const helpSection = document.getElementById('help-section');
    helpSection.style.display = helpSection.style.display === 'none' ? 'block' : 'none';
}
document.getElementById("signinForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            credentials: 'include', 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();

        if (response.ok) {
            alert("Login successful! Redirecting to the homepage...");
            window.location.href = "../html/index.html";
        } else {
            alert(data.message || "Invalid username or password.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});