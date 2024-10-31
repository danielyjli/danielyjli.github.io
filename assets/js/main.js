/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorALl('section[id]')

const scrollActive =()=>{
    const scrollDown=window.scrollY

    sections.forEach(Current =>{
        const sectionHeight =current.offsetHeight,
        sectionTop =current.offsetTop - 58
        sectionId= current.getAttribute('id'),
        sectionsClass =document.querySelector('.nav__menu a[href*=' + sectionId +']')
        if(scrollDown>sectionTop &&scrollDown <= sectionTop +sectionHeight){
            sectionsClass.classList.add('active-link')
        }
            sectionsClass.classList.remove('active-link')
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
