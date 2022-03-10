const Navbar = () => {
	const nav = document.createElement("nav");
	const h1 = document.createElement("h1");
	const ul = document.createElement("ul");
	const home = document.createElement("li");
	const menu = document.createElement("li");
	const contact = document.createElement("li");

	nav.classList.add("nav-bar");
	h1.innerText = "🍻Valhalla";
	home.innerText = "Home";
	home.id = "home-link";
	menu.innerText = "Menu";
	menu.id = "menu-link";
	contact.innerText = "Contact";
	contact.id = "contact-link";

	ul.appendChild(home);
	ul.appendChild(menu);
	ul.appendChild(contact);
	nav.appendChild(h1);
	nav.appendChild(ul);
	return nav;
};

export default Navbar;
