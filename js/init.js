// log version
console.log("nightTab version", version.get());
const init = () => {
    data.init();
    state.init();
    bookmarks.init();
    menu.init();
    accent.init();
    link.init();
    control.init();
    greeting.init();
    transitional.init();
    date.init();
    clock.init();
    keyboard.init();
    layout.init();
    background.init();
    search.init();
    title.init();
    header.init();
    theme.init();
};

init();
