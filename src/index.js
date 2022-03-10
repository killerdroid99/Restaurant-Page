import Navbar from "./components/Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";

const Nav = Navbar();
const content = document.getElementById("content");
content.appendChild(Nav);
let HomePage = Home();
let MenuPage = Menu();
let ContactPage = Contact();
content.appendChild(HomePage);

document.getElementById("home-link").style.cssText =
	"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";

document.getElementById("home-link").addEventListener("click", () => {
	MenuPage.remove();
	ContactPage.remove();
	content.appendChild(HomePage);
	document.getElementById("home-link").style.cssText =
		"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
	document.getElementById("menu-link").style.cssText = "";
	document.getElementById("contact-link").style.cssText = "";
});

document.getElementById("menu-link").addEventListener("click", () => {
	HomePage.remove();
	ContactPage.remove();
	content.appendChild(MenuPage);
	document.getElementById("menu-link").style.cssText =
		"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
	document.getElementById("home-link").style.cssText = "";
	document.getElementById("contact-link").style.cssText = "";
});

document.getElementById("contact-link").addEventListener("click", () => {
	HomePage.remove();
	MenuPage.remove();
	content.appendChild(ContactPage);
	document.getElementById("contact-link").style.cssText =
		"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
	document.getElementById("home-link").style.cssText = "";
	document.getElementById("menu-link").style.cssText = "";
});
