import Navbar from "./navbar";
import Home from "./Home";

const nav = Navbar();
const content = document.getElementById("content");
content.appendChild(nav);
content.appendChild(Home());
