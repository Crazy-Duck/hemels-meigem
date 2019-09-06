(() => {
    [].forEach.call(document.getElementsByClassName("offer"), el => {
        el.addEventListener("click", () => {
            el.querySelector(".front").classList.toggle("hide");
            el.querySelector(".back").classList.toggle("hide");
        });
    });
})();