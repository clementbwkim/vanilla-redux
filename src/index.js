import { createStore } from "redux";

//vanilla redux counter
// //state :: application에서 바뀌는 data를 말한다

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// let number = document.querySelector("span");
// number.innerText = 0;

// const PLUS = "PLUS";
// const MINUS = "MINUS";
// //store and reducer -> always together
// //reducer is a function which modifies data ex) increase or decrease count
// //it changes data and if it returns sth, it is also data of application 
// const countModifier = (count = 0, action) => {
//   // if(action.type === "PLUS") {
//   //   return count + 1;
//   // }else if(action.type === "MINUS") {
//   //   return count - 1;
//   // }else {
//   //   return count;
//   // }
//   switch(action.type){
//     case PLUS:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// }
// const countStore = createStore(countModifier); //expected the reducer to be a function 

// const onChange = () => {
//   number.innerText = countStore.getState();
// }
// countStore.subscribe(onChange);
// // //dispatch :: sending message to countModifier
// // countStore.dispatch({ type: "PLUS" });
// // countStore.dispatch({ type: "MINUS" });

// const handlePlus = () => {
//   countStore.dispatch({ type: PLUS});
// }
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS});
// }
// plus.addEventListener("click", handlePlus); //handlePlus() :: click 후 호출하는 것이기 때문에 ()를 붙이지 않는다
// minus.addEventListener("click", handleMinus); 


//pure redux todo list 
const form = document.querySelector("form");
const input = document.querySelector("input");
// const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";


const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: 
      return [...state, { text: action.type }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  console.log(toDo);
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo});
};

form.addEventListener("submit", onSubmit);


