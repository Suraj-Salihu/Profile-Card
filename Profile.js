document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let profileCard = document.querySelector(".profile-card");
        if (profileCard) {
            profileCard.classList.remove("loading");

            // Update text content
            document.querySelector(".user-name").innerHTML = "Suraj Salihu";
            document.querySelector(".user-title").innerHTML = "Web & App Developer";
            document.querySelector(".user-about").innerHTML = 
                "Passionate About Technology, AI, And Coding. I Constantly Explore Innovative Solutions To Real-World Problems.";

            // Ensure images are properly displayed
            document.querySelector(".cover-img").style.display = "block";
            document.querySelector(".avatar-img").style.display = "block";

            // Remove skeleton effect
            document.querySelectorAll(".skeleton").forEach(el => {
                el.classList.remove("skeleton");
            });
        }
    }, 2000); // Single timeout to ensure a smooth transition
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".profile-card").classList.remove("loading");
    }, 2000); // Simulating a loading effect
});
