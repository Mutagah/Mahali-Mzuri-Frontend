import './Restaurant.css'
import English from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/English.jpeg'
import Continental from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Continental.jpeg'
import America from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/American.jpeg'
import Buffet from'/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Buffet.jpeg'
import Regional from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Regional.jpeg'
import Healthy from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Healthy.jpeg'
import Chickentomato from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Chickentomato.jpg'
import Pilau from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Pilau.jpg'
import Nyamachoma from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Nyamachoma.jpeg'
import Crispychicken from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/crispychicken.jpg'
import Figthyme from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/figcocktail.jpg'
import Fruitsmoothie from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Fruitsmoothie.jpeg'
import Bluelagoon from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Bluelagoon.jpg'
import Passion from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Passion.jpeg'
import Lemonade from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Lemonade.jpeg'
import KoreanFried from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/KoreanFried.png'
import Burger from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/burger.png'
import Cheescake from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Cheesecake.jpg'
import Coffee from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/IceCoffee.jpg'
import Freakshake from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Freakshake.jpeg'
import Roastpotato from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Roastpotato.jpeg'
import Pizza from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Pizza.jpeg'
import Seafood from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Seafood.jpg'
import Mango from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Mango.jpeg'
import Spaghetti from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Spaghetti.jpg'
import Fishcurry from '/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Fishcurry.jpg'
import Freshcoffee from'/home/zamzam/Desktop/Development/PostSchoolProjects/Mahali-Mzuri-Hotel/Mahali-Mzuri-Frontend/src/pages/Restaurant/images/Freshcoffee.jpg'

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
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={America} alt="" />
        <div class="content">
            <h3>American Breakfast</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Buffet} alt="" />
        <div class="content">
            <h3>Buffet Breakfast</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Regional} alt="" />
        <div class="content">
            <h3>Regional Breakfast</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>
    <div class="box">
        <img src={Healthy} alt="" />
        <div class="content">
            <h3>Healthy Breakfast</h3>
            <h3>Ksh.500</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        </div>
    </div>

</div>

</section>










          {/* <section class="home" id="home">

        <div class="content">
            <h3>Mahali Mzuri Restaurant</h3>
            <p>Mahali Mzuri Restaurant is one of Nairobi's most iconic food joints . Our website is a feast for the senses, including bright colors, cheeky line illustrations and mouthwatering food photography. </p>
        </div>

        <div class="image">
            <img src="images/home-img.png" alt="" />
        </div>

     </section> */}

{/* 
<section class="speciality" id="speciality">

<h1 class="heading"> our <span>Breakfast</span> </h1>

<div class="box-container">

    <div class="box">
        <img class="image" src={English} alt="" />
        <div class="content">
            <img src="" alt="" />
            <h3>English breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>The full or English breakfast is a more elaborate meal and requires more preparation in the dining room before service than other meals. The menu may consist of from two to eight courses</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Continental} alt="" />
        <div class="content">
            <img src="images/s-2.png" alt="" />
            <h3>Continental breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>The traditional Continental BF consisted simply of hot croissant, brioche or toast, butter and preserves and coffee as the beverage. The current trend in the continental BF menu is towards offering a wider variety of choices.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={America} alt="" />
        <div class="content">
            <img src="" alt="" />
            <h3>American breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>The American Breakfasts also offers multiple courses as a part of the meal, and Is similar to an English Breakfasts, except that American Breakfast does not offer any fish dish on the menu.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Buffet} alt="" />
        <div class="content">
            <img src="images/s-4.png" alt="" />
            <h3>Buffet breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Regional} alt="" />
        <div class="content">
            <img src="" alt="" />
            <h3>Regional breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Other Regional Breakfast like South Indian, North Indian, Japanese, Chinese, Vietnamese etc.</p>
        </div>
    </div>
    <div class="box">
        <img class="image" src={Healthy} alt="" />
        <div class="content">
            <img src="images/s-6.png" alt="" />
            <h3>Healthy breakfast</h3>
            <h3>Ksh.1200</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>
    </div>

</div>

</section> */}



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