// Create Navbar

var menuBtn = document.getElementById("menuBtn");
        var sideNav = document.getElementById("sideNav");
        var menu = document.getElementById("menu");
        sideNav.style.left = "-250px";
        menuBtn.onclick = function () {
            if (sideNav.style.left == "-250px") {
                sideNav.style.left = "0";
                menu.src = "./imgs/close.png";
            } else {
                sideNav.style.left = "-250px";
                menu.src = "./imgs/menu.png"
            }
        }

 // Create Countdown Timer   
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "26 July 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds) % 60;
   
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);    
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();

setInterval(countdown, 1000);  

// Tab Teacher

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active")
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";


tabs.forEach((tab,index) => { 
    const pane = panes[index];
    tab.onclick = function() {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = tab.offsetLeft + "px";
        line.style.width = tab.offsetWidth + "px";

        tab.classList.add("active");
        pane.classList.add("active");
    }
})

// Buy Course

const buyBtns = document.querySelectorAll('.submit-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.modal-container');
const buySuccess = document.getElementById('buy-course');

function showBuyCourse (){
    modal.classList.add('open');
}

function hideBuyCourse (){
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyCourse);
}
modalClose.addEventListener('click', hideBuyCourse);
modal.addEventListener('click', hideBuyCourse);
modalContainer.addEventListener('click',e =>{
    e.stopPropagation()
})

buySuccess.addEventListener('click',e =>{
    alert('Chúc mừng bạn đã đăng kí thành công!');
    hideBuyCourse ();
})

// Slider

let counter = 1 ;
setInterval(function(){
    document.getElementById('radio'+ counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
},3000);

// Lazy load 

const animation = document.querySelectorAll('.anim');

observer = new IntersectionObserver ((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`
        } else {
            entry.target.style.animation = 'none';
        }
    })
})

animation.forEach(anima => {
    observer.observe(anima)
})

// SendBtn

const SendBtn = document.querySelector('.send-btn');

