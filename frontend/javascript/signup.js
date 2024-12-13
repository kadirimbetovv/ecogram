function toggleHelp() {
    const helpSection = document.getElementById('help-section');
    helpSection.style.display = helpSection.style.display === 'none' ? 'block' : 'none';
}
document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullName, email, username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Account created successfully! Redirecting to login page...");
            window.location.href = "login.html";
        } else {
            alert(data.message || "Error signing up. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
