function changeModalState(backdropNode) {
    backdropNode.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
}

export { changeModalState };