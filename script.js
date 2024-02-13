document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch Valentine's Day message from the server
    function fetchValentineMessage() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "valentines.py", true); // Adjust the path if needed
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // Update the valentine-message div with the received message
                document.getElementById("valentine-message").innerText = xhr.responseText;
                document.getElementById("valentine-message").style.display = "block"; // Show the message
            }
        };
        xhr.send();
    }

    // Function to handle click event
    function handleClick(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        // Fetch the Valentine's Day message when the link is clicked
        fetchValentineMessage();
    }

    // Attach click event listener to the link
    document.getElementById("show-message-link").addEventListener("click", handleClick);
});
