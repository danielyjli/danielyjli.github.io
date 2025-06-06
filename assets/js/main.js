/*=============== SHOW MENU ===============*/

    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')

const scrollActive =()=>{
    const scrollDown=window.scrollY

    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight,
        sectionTop =current.offsetTop - 58,
        sectionId= current.getAttribute('id'),
        sectionsClass =document.querySelector('.nav__list a[href*=' + sectionId +']')
        if(scrollDown> sectionTop && scrollDown <= sectionTop +sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
             sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
