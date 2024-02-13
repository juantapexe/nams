document.addEventListener("DOMContentLoaded", function() {
    function fetchValentineMessage() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "valentines.py", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                document.getElementById("valentine-message").innerText = xhr.responseText;
            }
        };
        xhr.send();
    }

    
    fetchValentineMessage();
});
