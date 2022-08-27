import StateMachine from "./StateMachine";


window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    let state = new StateMachine(canvas);
    state.init();
})