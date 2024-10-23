// Function to handle chatbot responses
document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

// Listen for the "Enter" key to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    // Do nothing if input is empty
    if (userInput.trim() === "") return;

    // Display user message
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById("user-input").value = "";

    // Generate and display bot response
    const botMessage = document.createElement("p");
    botMessage.textContent = "Bot: " + getBotResponse(userInput);
    chatBox.appendChild(botMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("name")) {
        return "My name is Naveenkumar!";
    } else if (input.includes("college")) {
        return "I'm currently studying at MIT Chennai.";
    } else if (input.includes("skills")) {
        return "I am proficient in C, C++, Python, HTML, and CSS.";
    } else if (input.includes("project")) {
        return "I have worked on a project replicating the voting ballot using C.";
    }else if (input.includes("contact")) {
        return "Gmail:naveengoogl2006   Phone:8838107424";
    }else if (input.includes("crush")) {
        return "Not Valid! Ask valid questions";
    }else if (input.includes("hi")) {
        return "hello";
    } else if (input.includes("hello")) {
        return "Hello!";
    }else if (input.includes("how are you")) {
        return "I'm fine. What about you?";
    }
    else if (input.includes("fine")) {
        return "How can i help you?";
    }else {
        return "I'm not sure how to answer that. Can you ask something else?";
    }
}
