import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";

const Nav = Navbar();
const content = document.getElementById("content");
content.appendChild(Nav);
let HomePage = Home();
let MenuPage = Menu();
content.appendChild(HomePage);

document.getElementById("home-link").addEventListener("click", () => {
	MenuPage.remove();
	content.appendChild(HomePage);
});

document.getElementById("menu-link").addEventListener("click", () => {
	HomePage.remove();
	content.appendChild(MenuPage);
});
