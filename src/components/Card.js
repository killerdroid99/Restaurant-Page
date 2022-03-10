const Card = (title, price, imgURL, desc) => {
	const card = document.createElement("div");
	const h2 = document.createElement("h2");
	const em = document.createElement("em");
	const img = document.createElement("img");
	const description = document.createElement("p");
	const div = document.createElement("div");

	card.classList.add("card");
	h2.innerText = title;
	em.innerText = `~ $${price}`;
	img.src = imgURL;
	description.innerText = desc;

	card.appendChild(h2);
	card.appendChild(em);
	div.appendChild(img);
	div.appendChild(description);
	card.appendChild(div);

	return card;
};

export default Card;
