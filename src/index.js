import './style.css'

const content = document.querySelector('.content')

console.log("it worked!")

const intro = document.createElement('div');
const tabs = document.createElement('div');

intro.classList.add('intro')
tabs.classList.add('tabs')

const intro_title2 = document.createElement('h1');
const intro_title1 = document.createElement('h1');
intro_title2.innerHTML = "<h2>THE</h2><h1>RESTAURANT</h1>\
<section class='introtext'><p>Situated in San Francisco's historic Jackson Square, Lindsay and Chef Michael Tusk's celebrated Quince features Californian contemporary cuisine with Italian influences.</p></section>";
intro.appendChild(intro_title2)

const home ='<div class="nav_con"><div class="hometab tabs_nav tabs_nav_click"><h5>Home</h5></div><div class="menutab tabs_nav tabs2"><h5>Menus</h5></div><div class="contacttab tabs_nav"><h5>Contact</h5></div></div><div class="tabBody"><h2>Order Tasty & Fresh Food anytime!</h2><img src="food.png"><h6>Reviews</h6><p>Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.</p><p class="bold_p">-Rooney</p></div>'
const menu ='<div class="nav_con"><div class="hometab tabs_nav "><h5>Home</h5></div><div class="menutab tabs_nav tabs2 tabs_nav_click"><h5>Menus</h5></div><div class="contacttab tabs_nav"><h5>Contact</h5></div></div><div class="tabBody"><h2>Our Menus</h2><p>All of our menus created with heart</p><div class="menus"><div class="menu-item"><img class="menu_food" src="food1.png"><p>Maccaroni with Cheese</p></div><div class="menu-item"><img class="menu_food" src="food2.png"><p>Poached Egg Avocado</p></div><div class="menu-item"><img class="menu_food" src="food3.png"><p>Sushi</p></div><div class="menu-item"><img class="menu_food" src="food4.png"><p>Pancake Honey</p></div></div></div>'
const contact ='<div class="nav_con"><div class="hometab tabs_nav "><h5>Home</h5></div><div class="menutab tabs_nav tabs2 "><h5>Menus</h5></div><div class="contacttab tabs_nav tabs_nav_click"><h5>Contact</h5></div></div><div class="tabBody"><h2>Find Us Here</h2><div class="location"><h6>San Francisco Jackson Square</h6><p>Contact Us: +1 202-918-2132</p><img src="resto.png"></div></div>'

tabs.innerHTML=home

content.appendChild(intro)
content.appendChild(tabs)


function refresh(){
    const hometab = document.querySelector('.hometab')
    const menutab = document.querySelector('.menutab')
    const contacttab = document.querySelector('.contacttab')
    hometab.addEventListener('click', ()=>{
        tabs.innerHTML = "";
        tabs.innerHTML=home
        refresh()
    })
    menutab.addEventListener('click', ()=>{
        tabs.innerHTML=""
        tabs.innerHTML=menu
        refresh()
    })
    contacttab.addEventListener('click', ()=>{
        tabs.innerHTML = "";
        tabs.innerHTML=contact
        refresh()
    })
}

refresh()



