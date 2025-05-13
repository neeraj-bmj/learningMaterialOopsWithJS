// create Element with the help of javascript.
// First Element
const Nav1 = document.createElement('h1');
Nav1.innerText= "Something went wrong!";
Nav1.style.fontSize = "40px";
Nav1.style.backgroundColor = "red";
Nav1.style.color = "YELLOW";
Nav1.style.padding = "20px";
// Second Element
const Nav2 = document.createElement('h1');
Nav2.innerText= "Solved All Problems!";
Nav2.style.fontSize = "40px";
Nav2.style.backgroundColor = "red";
Nav2.style.color = "YELLOW";
Nav2.style.padding = "20px";
//Render in the page
// const root = document.getElementById("root");
// root.append(Nav1);
// root.append(Nav2);

// Create Element in js By function
// const styles = { padding : "20px", backgroundColor :"yellow" , color : "red"}
const React = {
   elementCreate : function(tag, stylesObj, data){
    const element1 = document.createElement(tag);
    for (const key in stylesObj) {
        element1.style[key] = stylesObj[key];
    }
    if(typeof data === 'object'){
        for (const val of data) {
            element1.append(val);
        }
    } else {
        element1.innerText = data;
    }
    return element1;
   }
}
const ReactDom = {
    render : function( elem , root ){
        root.append(elem)
    }
}
const element_1 = React.elementCreate('h1', { padding : "20px",fontSize : "50px", backgroundColor :"yellow" , color : "red"},"hello Champs!")
const element_2 = React.elementCreate('h1', { padding : "20px", backgroundColor :"red" , color : "yellow"},"how are you!")

// create a UnOrdered List
const list1 = React.elementCreate('li', {}, "HTML");
const list2 = React.elementCreate('li', {}, "CSS");
const list3 = React.elementCreate('li', {}, "JAVASCRIPT");
const UnOrderedList = React.elementCreate('ul', {backgroundColor: " blue", fontSize : "30px" , color : "green"},[list1, list2, list3]);
// Render Element
// const root = document.getElementById("root");
// root.append(element_1);
// root.append(element_2); 

// Render Element
ReactDom.render(element_1 , document.getElementById('root'));
ReactDom.render(element_2 ,  document.getElementById('root'));
ReactDom.render(UnOrderedList ,  document.getElementById('root'));

