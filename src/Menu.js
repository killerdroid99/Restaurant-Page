import Card from "./Card";

const Menu = () => {
	const menuContainer = document.createElement("div");
	const h1 = document.createElement("h1");
	const menu = document.createElement("div");

	menuContainer.classList.add("container");
	menu.classList.add("menu");
	h1.innerText = "★━━━━━━━━━━ Today's Menu ━━━━━━━━━━★";

	const c1 = Card(
		"Viking Mega Burger",
		3.49,
		"./assets/burger.png",
		"Authentic buns, crispy patty to top with fresh tomatoes, lettuces, onions along with our spicy viking sauce"
	);
	const c2 = Card(
		"Special Viking Pizza",
		4.99,
		"./assets/pizza.png",
		"Topped with some combination of olive oil, oregano, tomato, olives, fresh mozzarella and parmesan cheese"
	);
	const c3 = Card(
		"Tuna Salad",
		4.99,
		"./assets/salad.png",
		"Our signature Tuna Salad, just taste it once...."
	);
	const c4 = Card(
		"Classic mug ór beer",
		2.49,
		"./assets/beer.png",
		"A viking meal isn't a viking meal without beer...."
	);

	menu.appendChild(c1);
	menu.appendChild(c2);
	menu.appendChild(c3);
	menu.appendChild(c4);
	menuContainer.appendChild(h1);
	menuContainer.appendChild(menu);

	return menuContainer;
};

export default Menu;
