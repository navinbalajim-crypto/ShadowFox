window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const roles = [
    "Java Developer",
    "DSA Enthusiast",
    "Problem Solver",
    "Web Developer"
];

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
    const typing = document.getElementById("typing");

    setInterval(() => {
        index = (index + 1) % roles.length;
        typing.textContent = roles[index];
    }, 2000);
});