import ReactDom from "react-dom";
import App from "./Components/App/App";
import "./assets/css/reset.css";


const root = document.querySelector(".root");

ReactDom.render(<App/>, root);