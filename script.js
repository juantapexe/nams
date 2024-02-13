document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch Valentine's Day message from the server
    function fetchValentineMessage() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "valentines.py", true); // Adjust the path if needed
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // Update the valentine-message div with the received message
                document.getElementById("valentine-message").innerText = xhr.responseText;
            }
        };
        xhr.send();
    }

    // Fetch the Valentine's Day message when the page loads
    fetchValentineMessage();
});
