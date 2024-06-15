document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal");
    var openModalBtn = document.getElementById("openModal");
    var closeModalBtn = document.querySelector(".close-modal");

    // Open modal
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal when close button is clicked
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicked outside of the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});