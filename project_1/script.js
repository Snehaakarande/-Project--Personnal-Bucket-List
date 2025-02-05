// Get the modal
const modal = document.getElementById("login-modal");

// Get the login link and the close button
const loginLink = document.getElementById("login-link");
const closeBtn = document.querySelector(".close-btn");

// When the user clicks the login link, open the login modal
loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    modal.style.display = "block"; // Show the modal
});

// When the user clicks the close button, close the modal
function closeLoginModal() {
    modal.style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Close the modal if clicked outside
    }

    // Function to handle cancel action on the registration page
    function cancelRegistration() {
        // Clear all form fields
        document.getElementById("register-form").reset();
    }
    // Function to navigate to the main page when the Cancel button is clicked
    function goToMainPage() {
        // Redirect the user to the main page (replace with your main page URL)
        window.location.href = 'index.html'; // Replace 'index.html' with your main page URL
    }


};


// Function to navigate to the main page when the Cancel button is clicked
function goToMainPage() {
    // Redirect the user to the main page (replace with your main page URL)
    window.location.href = 'index.html'; // Replace 'index.html' with your main page URL
}


document.getElementById('loginBtn').addEventListener('click', function() {
    // Display the success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Redirect to the main page after 2 seconds (you can adjust the time as needed)
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace 'mainPage.html' with your actual page
    }, 2000); // 2000 milliseconds = 2 seconds
});