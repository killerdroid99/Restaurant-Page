const Home = () => {
	const main = document.createElement("div");
	const h1 = document.createElement("h1");
	const h2 = document.createElement("h2");
	const h4 = document.createElement("h4");
	const em1 = document.createElement("em");
	const em2 = document.createElement("em");
	const div = document.createElement("div");

	main.classList.add("main");
	em1.innerText = "Care";
	h1.innerText = "We Simply ";
	h1.appendChild(em1);
	// h1.innerText = "";
	em1.insertAdjacentText("afterend", " For Good Food By Nature...");
	h4.innerText = "Visit us if you want to taste the exquisite cuisine of ";
	em2.innerText = "Valhalla";
	h4.appendChild(em2);
	div.classList.add("box");
	h2.innerText = "Check out Today's Menu";

	main.appendChild(h1);
	main.appendChild(h4);
	main.appendChild(div);
	main.appendChild(h2);

	return main;
};

export default Home;
