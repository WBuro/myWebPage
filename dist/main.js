//DARK THEMA

const themeButton = document.getElementById("themeButton");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
}

themeButton.addEventListener("click", function() {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  const currentTheme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);

  const icon = themeButton.querySelector(".icon");
  icon.classList.toggle("light-icon", currentTheme === "light");
  icon.classList.toggle("dark-icon", currentTheme === "dark");
});


//DATE

const firstDateElement = document.getElementById("firstDate");
const lastDateElement = document.getElementById("lastDate");

const firstDate = new Date("2023-06-24");
const lastDate = new Date();

const differenceInMilliseconds = lastDate - firstDate;
const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

lastDateElement.textContent = `  ${differenceInDays} days ago `;


//BACK TO TOP

const backToTopButton = document.getElementById("backToTopButton");

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//PROJECT FILTER

const btns =document.querySelectorAll('.buttons button');
const imgs=document.querySelectorAll('.images img');

for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener('click',filterImg);
}

function setActiveBtn(e){
    btns.forEach(btn =>{
        btn.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}

function filterImg(e){
    setActiveBtn(e);
    imgs.forEach(img =>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);

        if(imgType !== btnType){
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

btns[0].addEventListener('click',(e)=>{
    setActiveBtn(e);
    imgs.forEach(img =>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
    });
});