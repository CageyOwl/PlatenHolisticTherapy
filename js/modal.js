const refs = {
    bdrop: document.querySelector(".backdrop"),
    sendBtn: document.querySelector(".submit-btn"),
    crossIco: document.querySelector(".modal__icon"),
};

function changeModalState() {
    refs.bdrop.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
}

refs.sendBtn.addEventListener("click", event => {
    event.preventDefault();
    changeModalState();
});

refs.bdrop.addEventListener("click", event => {
    if (event.target !== event.currentTarget) return;
    changeModalState();
});

refs.crossIco.addEventListener("click", event => {
    changeModalState();
});