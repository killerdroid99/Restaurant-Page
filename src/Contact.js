const Contact = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	const contact = document.createElement("div");
	const ul = document.createElement("ul");
	const addr = document.createElement("li");
	const phn = document.createElement("li");
	const time = document.createElement("li");
	const mail = document.createElement("li");
	const s1 = document.createElement("strong");
	const s2 = document.createElement("strong");
	const s3 = document.createElement("strong");
	const s4 = document.createElement("strong");
	const map = document.createElement("iframe");
	const form = document.createElement("form");
	const input = document.createElement("input");
	const textArea = document.createElement("textarea");
	const btn = document.createElement("button");

	container.classList.add("container");
	h1.innerText = "★━━━━━━━━━━ Contact Us ━━━━━━━━━━★";
	contact.classList.add("card", "contact");
	s1.innerText = "Address";
	s2.innerText = "Phone";
	s3.innerText = "Timings";
	s4.innerText = "Mail Us";
	addr.innerText =
		" : 3000 N Federal Hwy, Fort Lauderdale, Florida 33306, United States";
	addr.insertAdjacentElement("afterbegin", s1);
	map.src =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.947912145663!2d-80.11723918446438!3d26.165825798140038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901f3e060f0c9%3A0x8067be59876a223!2s3000%20N%20Federal%20Hwy%2C%20Fort%20Lauderdale%2C%20FL%2033306%2C%20USA!5e0!3m2!1sen!2sin!4v1646915713864!5m2!1sen!2sin";
	map.width = "400";
	map.height = "300";
	map.style = "border:0;";
	map.allowFullscreen = true;
	map.loading = "lazy";

	phn.innerText = " : (954) 561-5333, (773) 472-0900";
	phn.insertAdjacentElement("afterbegin", s2);
	time.innerText =
		" : Monday to Friday 9am to 9pm, Saturday and Sunday 10am to 10pm";
	time.insertAdjacentElement("afterbegin", s3);
	mail.insertAdjacentElement("afterbegin", s4);
	input.type = "email";
	input.placeholder = "Your Email...";
	textArea.cols = 20;
	textArea.rows = 5;
	textArea.placeholder = "Message...";
	btn.innerText = "Send";

	ul.appendChild(addr);
	ul.appendChild(map);
	ul.appendChild(time);
	ul.appendChild(phn);
	ul.appendChild(mail);
	form.appendChild(input);
	form.appendChild(input);
	form.appendChild(textArea);
	form.appendChild(btn);
	ul.appendChild(form);
	contact.appendChild(ul);
	container.appendChild(h1);
	container.appendChild(contact);

	return container;
};

export default Contact;
