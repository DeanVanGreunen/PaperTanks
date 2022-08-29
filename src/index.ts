import StateMachine from "./StateMachine";



window.addEventListener("load", async () => {
    // load fonts here
    const myFont = new FontFace('PencilRegular', 'url(assets/fonts/Pencil-Regular.ttf)');
    await myFont.load();
    (document as any).fonts.add(myFont);
    
    // get canvas
    const canvas = document.querySelector("canvas");
    // create state machine and pass in canvas
    let state = new StateMachine(canvas);
    // initialize statemachine
    state.init();
    
    // start game loop
    window.requestAnimationFrame(time => {
        state.previousTime = time;
        // request again but invoke loop function with time passed
        window.requestAnimationFrame(state.loop);
    });
})