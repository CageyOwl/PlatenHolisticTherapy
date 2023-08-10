import { changeModalState } from "./common.js";

const refs = {
    bdrop: document.querySelector(".backdrop"),
    sendBtn: document.querySelector(".submit-btn"),
    crossIco: document.querySelector(".ico-modal-close"),
};

refs.sendBtn.addEventListener("click", event => {
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    for (let i of inputs) {
        if (!i.value) {
            alert("Информация для обратной связи с Вами необходима!");
            return;
        }
    }
    changeModalState(refs.bdrop);
});

refs.bdrop.addEventListener("click", event => {
    if (event.target !== event.currentTarget) return;
    changeModalState(refs.bdrop);
});
refs.crossIco.addEventListener("click", event => {
    changeModalState(refs.bdrop);
});