document.getElementById("input-bar").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();  // prevent form submission if any

        const userMessage = e.target.value.trim();
        if (!userMessage) return;

        // Display user message in the list
        const userLi = document.createElement("li");
        userLi.textContent = userMessage;
        userLi.id = "user-me";
        document.getElementById("messages").appendChild(userLi);

        // Clear input
        e.target.value = "";

        // Send input to backend
        fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: userMessage }),
        })
        .then((response) => response.json())
        .then((data) => {
            // Display backend response in the list
            const botLi = document.createElement("li");
            botLi.textContent = data.reply; // Assuming backend sends {reply: "..."}
            botLi.id = "gemini-me";
            document.getElementById("messages").appendChild(botLi);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
});
