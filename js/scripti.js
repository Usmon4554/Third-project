const burgerMenu = document.querySelector(".burger-menu"),
    burgerBg = document.querySelector(".burger-bg"),
    divbigMob = document.querySelector(".block-divbig"),
    backBtn = document.querySelector(".upper-divbig");

    burgerMenu.addEventListener("click", function (){
        burgerBg.style.display = "block";
        divbigMob.style.transform = 'translateY(100vh)';

        setTimeout(() => {
            divbigMob.style.opacity = '1';
        }, 200);

        setTimeout(() => {
            divbigMob.style.transform = 'scaleY(1)'
        }, 200);
    });

    backBtn.addEventListener("click", function(){
        divbigMob.style.transform = 'translateY(-100vh)'

        setTimeout(() => {
            divbigMob.style.transform = 'scaleY(0)';
        }, 200);

        setTimeout(() => {
            burgerBg.style.display = 'none';
        }, 400);

        setTimeout(() => {
            divbigMob.style.opacity = '0'
        }, 40);
    });