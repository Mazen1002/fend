/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// beginning gobal variables
const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.page__header');
const footer = document.querySelector('.page__footer');
// the last global variables


// to Start build the navigation bar
function buildNav(){
    sections.forEach(section => {
        //we can create the li element that there is  inside the ul
        const navButton = document.createElement('li');
        //to insert the html text to  the li
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        //to append the li to the ul
        navList.appendChild(navButton);

        //so we can scroll Behavior Function Invoke by this code
        scrollBehavior(navButton, section);
    });
    //if we want to append the ul to the nav
    navBar.appendChild(navList);
}

// to build nav function 
buildNav();

//End build the nav

// to scroll to anchor ID using scrollTO event
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// now end of scroll to anchor iD using scrollTO event


// we can start Set the Section class _active_ when it close to the top of viewport
function activeSection (){
    // we r gonna select all anchor using "menu__link" class
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        //to get the boundingrect for each section 
        const sectionBond = section.getBoundingClientRect();
        //if we want to check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            //section in viewport accourding to top and bottom boundings
            //add your active clas class to the specific section
            section.classList.add("your-active-class");
            //add active button class to the specific nav button according to section ID
            navActive[i].classList.add("active_button");
        } else{
            // we can remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// this is the end of set the section class _active_ when it near to the top of viewport

// To start of toggle the Navigation Bar according to the user scroll activity we can do 
function toggleNavBar(){
    let userScroll;
    // The default Settings for NavBar while scrolling
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    // cleartimeout throughout the scrolling
    window.clearTimeout( userScroll );
    //The Timeout to run after scrolling ends
    userScroll = setTimeout(function() {
        //The Settings Executed on Navigation Bar aftert the  Timeout finished ^^
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}
//  this is the end of toggle the Navigation Bar according to user scroll activity


// The Start of the scroll event to execute the functions of activeSection and toggle Navigation Bar 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
// the end of the Scroll Event to execute the functions of _activeSection_ and toggle Navigation Bar 


// to start of GO UP Button
// we create the div element for the button 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// so we can scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
//this is the end of GO UP Button


