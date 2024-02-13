document.addEventListener("DOMContentLoaded", function() {
    function fetchValentineMessage() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://your-flask-app-url/valentine-message", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                document.getElementById("valentine-message").innerText = xhr.responseText;
                document.getElementById("valentine-message").style.display = "block"; // Show the message
            }
        };
        xhr.send();
    }

    function handleClick(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        fetchValentineMessage();
    }

    document.getElementById("show-message-link").addEventListener("click", handleClick);
});
