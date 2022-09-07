import StateMachine from "./StateMachine";



window.addEventListener("load", async () => {
    // load fonts here
    const myFont = new FontFace('PencilRegular', 'url(assets/fonts/Pencil-Regular.ttf)');
    await myFont.load();
    (document as any).fonts.add(myFont);
    const myFont2 = new FontFace('QuicksandLight', 'url(assets/fonts/Quicksand-Light.ttf)');
    await myFont2.load();
    (document as any).fonts.add(myFont2);
    const myFont3 = new FontFace('QuicksandMedium', 'url(assets/fonts/Quicksand-Medium.ttf)');
    await myFont3.load();
    (document as any).fonts.add(myFont3);
    
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