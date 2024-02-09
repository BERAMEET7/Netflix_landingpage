let buttons = document.querySelectorAll(".all-things button");

buttons.forEach((element, index) => {
    element.addEventListener('click', () => {
        let htcon = document.querySelectorAll(".hidden-div")[index];
        let icon = document.querySelectorAll(".all-things button img")[index];
        htcon.classList.toggle("hidden-div-1");
        icon.classList.toggle("rotate");
    });
});
