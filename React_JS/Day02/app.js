// React Part 02

const elem1 = React.createElement('h1', { }, "abcdefghijklmnopqrstuvwxyz");
// const render = ReactDOM.render(elem1, document.getElementById('root'));
const reactRootContainer = ReactDOM.createRoot(document.getElementById('root'));
reactRootContainer.render(elem1);