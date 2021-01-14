import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



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
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//   return {
//     type: ADD_TODO, 
//     text 
//   }
// }
// const deleteToDo = (id) => {
//   return {
//     type: deleteToDo, 
//     id
//   }
// }

// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TODO: 
//       return [ { text: action.text, id: Date.now() }, ...state ];
//     case DELETE_TODO:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const dispatchAddToDo = (text) => {
//   store.dispatch(addToDo(text));
// }

// const dispatchDeleteToDo = (e) => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id))
// }

// const painToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach((toDo) => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "Delete";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// };

// store.subscribe(painToDos);

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   console.log(toDo);
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);


