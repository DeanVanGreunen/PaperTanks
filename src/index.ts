import StateMachine from "./StateMachine";



window.addEventListener("load", async () => {
    // load fonts here
    const myFont = new FontFace('PencilRegular', 'url(assets/fonts/Pencil-Regular.ttf)');
    await myFont.load();
    (document as any).fonts.add(myFont);

    // start game
    const canvas = document.querySelector("canvas");
    let state = new StateMachine(canvas);
    state.init();
    
})