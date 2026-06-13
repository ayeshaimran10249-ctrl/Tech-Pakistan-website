

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Welcome to Tech Pakistan 🚀");
});
const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML = "☀️";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.innerHTML = "🌙";
    }

});