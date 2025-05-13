// // React Part 02

const elem1 = React.createElement('h1', {id : "first", className : "one", style:{backgroundColor : "yellow", padding : "20px", fontSize : "30px", color : "white"} }, "TheSoloFighter257");
const elem2 = React.createElement('h1', {id : "second", className : "second", style:{backgroundColor : "red", padding : "20px", fontSize : "30px", color :"lightblue"} }, "Honesty is the best policy.");
// const render = ReactDOM.render(elem1, document.getElementById('root'));

const firstDiv = React.createElement('h1', {} , [elem1, elem2])



const reactRootContainer = ReactDOM.createRoot(document.getElementById('root'));
// reactRootContainer.render(elem1);
// reactRootContainer.render(elem2);
reactRootContainer.render(firstDiv);





{/* <div>
    <h1>TheSoloFighter257</h1>
    <h1>Honesty is the best policy.</h1>
</div> */}