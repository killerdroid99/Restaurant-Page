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

HomePage.style.transition = "0.3s";
MenuPage.style.transition = "0.3s";
ContactPage.style.transition = "0.3s";

content.appendChild(HomePage);

document.getElementById("home-link").style.cssText =
	"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";

document.getElementById("home-link").addEventListener("click", () => {
	HomePage.style.animation = "createEffect 1s";
	MenuPage.style.animation = "tabEffect 1s";
	ContactPage.style.animation = "tabEffect 1s";

	setTimeout(() => {
		MenuPage.remove();
		ContactPage.remove();
		content.appendChild(HomePage);
		document.getElementById("home-link").style.cssText =
			"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
		document.getElementById("menu-link").style.cssText = "";
		document.getElementById("contact-link").style.cssText = "";
	}, 600);
});

document.getElementById("menu-link").addEventListener("click", () => {
	MenuPage.style.animation = "createEffect 1s";
	HomePage.style.animation = "tabEffect 1s";
	ContactPage.style.animation = "tabEffect 1s";

	setTimeout(() => {
		HomePage.remove();
		ContactPage.remove();
		content.appendChild(MenuPage);
		document.getElementById("menu-link").style.cssText =
			"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
		document.getElementById("home-link").style.cssText = "";
		document.getElementById("contact-link").style.cssText = "";
	}, 600);
});

document.getElementById("contact-link").addEventListener("click", () => {
	ContactPage.style.animation = "createEffect 1s";
	HomePage.style.animation = "tabEffect 1s";
	MenuPage.style.animation = "tabEffect 1s";

	setTimeout(() => {
		HomePage.remove();
		MenuPage.remove();
		content.appendChild(ContactPage);
		document.getElementById("contact-link").style.cssText =
			"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
		document.getElementById("home-link").style.cssText = "";
		document.getElementById("menu-link").style.cssText = "";
	}, 600);
});
