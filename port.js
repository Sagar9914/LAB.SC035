document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling effect
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form submission alert
    document.querySelector(".contact form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        this.reset();
    });

    // Skill tags animation
    const skills = document.querySelectorAll(".skills .tags span");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = "scale(1.1)";
            skill.style.transition = "transform 0.3s ease-in-out";
            setTimeout(() => {
                skill.style.transform = "scale(1)";
            }, 300);
        }, index * 200);
    });
});

// Function to toggle project details
function toggleProjectDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
