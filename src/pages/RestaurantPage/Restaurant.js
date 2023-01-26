import './Restaurant.css'
import English from './Images/English.jpeg'
import Continental from './Images/Continental.jpeg'
import America from './Images/American.jpeg'
import Buffet from'./Images/Buffet.jpeg'
import Regional from './Images/Regional.jpeg'
import Healthy from './Images/Healthy.jpeg'
import Chickentomato from './Images/Chickentomato.jpg'
import Pilau from './Images/Pilau.jpg'
import Nyamachoma from './Images/Nyamachoma.jpeg'
import Crispychicken from './Images/crispychicken.jpg'
import Figthyme from './Images/figcocktail.jpg'
import Fruitsmoothie from './Images/Fruitsmoothie.jpeg'
import Bluelagoon from './Images/Bluelagoon.jpg'
import Passion from './Images/Passion.jpeg'
import Lemonade from './Images/Lemonade.jpeg'
import KoreanFried from './Images/KoreanFried.png'
import Burger from './Images/burger.png'
import Cheescake from './Images/Cheesecake.jpg'
import Coffee from './Images/IceCoffee.jpg'
import Freakshake from './Images/Freakshake.jpeg'
import Roastpotato from './Images/Roastpotato.jpeg'
import Pizza from './Images/Pizza.jpeg'
import Seafood from './Images/Seafood.jpg'
import Mango from './Images/Mango.jpeg'
import Spaghetti from './Images/Spaghetti.jpg'
import Fishcurry from './Images/Fishcurry.jpg'
import Freshcoffee from'./Images/Freshcoffee.jpg'

const Restaurant = () => {
    return (  
        <div className="restautant">

<section class="gallery" id="gallery">
<div class="content">
            <h1 class="heading"> our <span> Restaurant </span> </h1>

            <p>Mahali Mzuri Restaurant is one of Nairobi's most iconic food joints . Our website is a feast for the senses, including bright colors, cheeky line illustrations and mouthwatering food photography. </p>
        </div>

<h1 class="heading"> our  <span> Breakfast </span> </h1>

<div class="box-container">

    <div class="box">
    <img class="image" src={English} alt="" />
        <div class="content">
            <h3>English Breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Continental} alt="" />
        <div class="content">
            <h3>Continental Breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={America} alt="" />
        <div class="content">
            <h3>American Breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Buffet} alt="" />
        <div class="content">
            <h3>Buffet Breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Regional} alt="" />
        <div class="content">
            <h3>Regional Breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Healthy} alt="" />
        <div class="content">
            <h3>Healthy Breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>

</div>

</section>



<section class="speciality" id="speciality">

<h1 class="heading"> our <span>Dinner</span> </h1>

<div class="box-container">

    <div class="box">
        <img class="image" src={Chickentomato} alt="" />
        <div class="content">
            <img src="images/s-1.png" alt="" />
            <h3>Chicken, tomato salad</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Pilau} alt="" />
        <div class="content">
            <img src="images/s-2.png" alt="" />
            <h3>Pilau</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Nyamachoma} alt="" />
        <div class="content">
            <img src="images/s-3.png" alt="" />
            <h3>Nyama Choma</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Crispychicken} alt="" />
        <div class="content">
            <img src="images/s-4.png" alt="" />
            <h3>Crispy Chicken with Soya base</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Spaghetti} alt="" />
        <div class="content">
            <img src="images/s-5.png" alt="" />
            <h3>Spaghetti dish</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Fishcurry} alt="" />
        <div class="content">
            <img src="images/s-6.png" alt="" />
            <h3>Fish curry</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>

</div>

</section>


<section class="popular" id="popular">

<h1 class="heading"> most <span>popular</span> drinks </h1>

<div class="box-container">

    <div class="box">
        <span class="price"> Ksh.200 </span>
        <img src={Figthyme} alt="" />
        <h3>Fig Thyme Shrub Cocktail</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
    <div class="box">
    <span class="price"> Ksh.200 </span>
        <img src={Mango} alt="" />
        <h3>Mango shake</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
    <div class="box">
    <span class="price"> Ksh.200 </span>
        <img src={Fruitsmoothie} alt="" />
        <h3>Blue berry smoothie</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
    <div class="box">
    <span class="price"> Ksh.200 </span>
        <img src={Bluelagoon} alt="" />
        <h3>Blue lagoon</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
    <div class="box">
    <span class="price"> Ksh.200 </span>
        <img src={Passion} alt="" />
        <h3>Passion</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
\    </div>
    <div class="box">
    <span class="price"> Ksh.200 </span>
        <img src={Lemonade} alt="" />
        <h3>Iced lemonade</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>

</div>

</section>


<section class="gallery" id="gallery">

<h1 class="heading"> our food <span> gallery </span> </h1>

<div class="box-container">

    <div class="box">
    <img class="image" src={KoreanFried} alt="" />
        <div class="content">
            <h3>Korean Chicken</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Burger} alt="" />
        <div class="content">
            <h3>tasty burger</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Cheescake} alt="" />
        <div class="content">
            <h3>Cheese cake</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Coffee} alt="" />
        <div class="content">
            <h3>Ice coffee</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Freakshake} alt="" />
        <div class="content">
            <h3>Freakshake</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Freshcoffee} alt="" />
        <div class="content">
            <h3>Fresh coffee</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Roastpotato} alt="" />
        <div class="content">
            <h3>Roast Potatoes </h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Pizza} alt="" />
        <div class="content">
            <h3>Pizza</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Seafood} alt="" />
        <div class="content">
            <h3>Sea food</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>

</div>

</section>

        </div>
    );
}
 
export default Restaurant;