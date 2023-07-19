const refs = {
    form: document.querySelector("form.record"),
    inputs: getInputs,
    sendBtn: document.querySelector(".submit-btn"),
};

function getInputs() {
    return [...document.querySelectorAll("input"), document.querySelector("#problem")];
}

refs.sendBtn.addEventListener("click", event => {
    event.preventDefault();
    const fieldsInfo = {};
    for (let field of getInputs()) {
        fieldsInfo[field.id] = field.value;
    }
    // for (let field of fieldsInfo) {
    //     if (field.id === "problem") continue;
    //     if (!field.value) alert("All inputs are required!");
    // }
    refs.form.reset();
});