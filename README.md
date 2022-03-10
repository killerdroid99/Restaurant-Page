# Restaurant-Page LIVE PREVIEW: https://valhalla-restaurants.netlify.app/

HTML equivalent of JS rendered components: 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- Navbar component -->
    <nav class="nav-bar">
        <h1>
            🍻Valhalla
        </h1>
        <ul>
            <li id="home-link">Home</li>
            <li id="menu-link">Menu</li>
            <li id="contact-link">Contact</li>
        </ul>
    </nav>

    <!-- Home page component -->
    <div class="main">
        <h1>We Simply <em>Care</em> For Good Food By Nature...</h1>
        <h4>Visit us if you want to taste the exquisite cuisine of <em>Valhalla</em></h4>
        <div class="box"></div>
        <h2>Check out our divine <a>Menu</a></h2>

    </div>

    <!-- Menu page component -->
    <div class="container">
        <h1>★━━━━━━━━━━ Today's Menu ━━━━━━━━━━★</h1>
        <div class="menu">
            <!-- Card components -->
            <div class="card">
                <h2>Viking Mega Burger</h2> <em>~ $3.49</em>
                <div>
                    <img src="./assets/burger.png" alt="burger">
                    <p>Authentic buns, crispy patty to top with fresh tomatoes, lettuces, onions along with our
                        spicy
                        viking sauce</p>
                </div>
            </div>

            <div class="card">
                <h2>Special Viking Pizza</h2> <em>~ $4.99</em>
                <div>
                    <img src="./assets/pizza.png" alt="burger">
                    <p>Topped with some combination of olive oil, oregano, tomato, olives, fresh mozzarella and
                        parmesan cheese</p>
                </div>
            </div>

            <div class="card">
                <h2>Tuna Salad</h2> <em>~ $4.99</em>
                <div>
                    <img src="./assets/salad.png" alt="burger">
                    <p>
                        Our signature Tuna Salad, just taste it once....

                    </p>
                </div>
            </div>

            <div class="card">
                <h2>Classic mug ór beer</h2> <em>~ $2.49</em>
                <div>
                    <img src="./assets/beer.png" alt="burger">
                    <p>A viking meal isn't a viking meal without beer....</p>
                </div>
            </div>

            <!-- Contact page component -->
            <div class="container">
                <h1>★━━━━━━━━━━ Contact Us ━━━━━━━━━━★</h1>
                <div class="card contact">
                    <ul>
                        <li><strong>Address</strong> : 3000 N Federal Hwy, Fort Lauderdale, Florida 33306, United States
                        </li>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.947912145663!2d-80.11723918446438!3d26.165825798140038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901f3e060f0c9%3A0x8067be59876a223!2s3000%20N%20Federal%20Hwy%2C%20Fort%20Lauderdale%2C%20FL%2033306%2C%20USA!5e0!3m2!1sen!2sin!4v1646915713864!5m2!1sen!2sin"
                            width="400" height="300" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>
                        <li><strong>Phone</strong> : (954) 561-5333, (773) 472-0900</li>
                        <li><strong>Timings</strong> : Monday to Friday 9am to 9pm, Saturday and Sunday 10am to 10pm
                        </li>
                        <li><strong>Mail Us</strong> :</li>
                        <form>
                            <input type="email" placeholder="Your Email...">
                            <textarea cols="20" rows="5" placeholder="Message..."></textarea>
                            <button>Send</button>
                        </form>
                    </ul>
                </div>
            </div>


        </div>
    </div>

</body>

</html>
