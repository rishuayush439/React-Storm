/*
  <div  id = "parent">
     <div id = "child">
         <h1>I'm h1 tag</h1>
         <h2>I'm h1 tag</h2>
     </div>
       <div id = "child2">
         <h1>I'm h1 tag</h1>
         <h2>I'm h1 tag</h2>
     </div>
  </div>

  ReactElement(Object) => HTML(Browser understands)

    React.createElement() is used to create a React element.
    React.createElement(type, props, children) returns a React element.
    type: The type of the element (e.g., "div", "h1", etc.)
    props: An object containing the properties of the element (e.g., id, className, etc.)
    children: The children of the element, which can be other React elements or text.
     

*/

const parent = React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
    "div",
    {id:"child"} , 
     [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
]),
React.createElement(
    "div",
    {id:"child2"} , 
     [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
]),
   ]);


// const heading  = React.createElement(
//     "h1",
//     {id : "heading", xyz: "abc"},
//     "Hello World from React!"
//     );

     console.log(parent);
    

const root = ReactDOM.createRoot(document.getElementById("root"));

  

root.render(parent);

