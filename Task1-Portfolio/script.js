const text = [
    "Java Developer",
    "Front-End Developer",
    "DSA Enthusiast",
    "Web Developer"
];

let index = 0;

const typing = document.getElementById("typing");

setInterval(() => {
    index = (index + 1) % text.length;
    typing.textContent = text[index];
}, 2000);