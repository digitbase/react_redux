import { createStore } from "redux";
import reducer from "./reducer";

console.log("this is store index.js");
const store = createStore(reducer);

export default store;
