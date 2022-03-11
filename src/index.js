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
	if (
		document.getElementById("home-link").style.cssText !==
		"border-bottom: 5px solid purple; border-radius: 10px; color: azure;"
	) {
		HomePage.style.animation = "createEffect 1s";
		MenuPage.style.animation = "tabEffect 1s";
		ContactPage.style.animation = "tabEffect 1s";

		document.getElementById("home-link").style.cssText =
			"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
		document.getElementById("menu-link").style.cssText = "";
		document.getElementById("contact-link").style.cssText = "";

		setTimeout(() => {
			MenuPage.remove();
			ContactPage.remove();
			content.appendChild(HomePage);
		}, 600);
	}
});

document.getElementById("menu-link").addEventListener("click", () => {
	if (
		document.getElementById("menu-link").style.cssText !==
		"border-bottom: 5px solid purple; border-radius: 10px; color: azure;"
	) {
		MenuPage.style.animation = "createEffect 1s";
		HomePage.style.animation = "tabEffect 1s";
		ContactPage.style.animation = "tabEffect 1s";

		document.getElementById("menu-link").style.cssText =
			"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
		document.getElementById("home-link").style.cssText = "";
		document.getElementById("contact-link").style.cssText = "";

		setTimeout(() => {
			HomePage.remove();
			ContactPage.remove();
			content.appendChild(MenuPage);
		}, 600);
	}
});

document.getElementById("contact-link").addEventListener("click", () => {
	if (
		document.getElementById("contact-link").style.cssText !==
		"border-bottom: 5px solid purple; border-radius: 10px; color: azure;"
	) {
		ContactPage.style.animation = "createEffect 1s";
		HomePage.style.animation = "tabEffect 1s";
		MenuPage.style.animation = "tabEffect 1s";

		document.getElementById("contact-link").style.cssText =
			"border-bottom: 5px solid purple; border-radius: 10px; color: azure;";
		document.getElementById("home-link").style.cssText = "";
		document.getElementById("menu-link").style.cssText = "";

		setTimeout(() => {
			HomePage.remove();
			MenuPage.remove();
			content.appendChild(ContactPage);
		}, 600);
	}
});
