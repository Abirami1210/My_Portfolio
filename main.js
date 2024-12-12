// (function($){
//     "use strict"
// $(window).scroll(function(){
//     if($(this).scrollTop() > 200){
//         $('.navbar').fadeIn('slow').css('display','flex');
//     }
//     else{
//         $('.navbar').fadeOut('slow').css('display','none');
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // All the sections
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    window.addEventListener("scroll", () => {
      let currentSection = "";
  
      // Check which section is in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
  
      // Highlight the corresponding nav link
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    });
  });
  
  
  

    var typed = new Typed('#typed',{
        strings:['UI Developer', 'Front-End Developer','Web Developer'],
    
        typeSpeed:100,
      });
    
// skill



    (jQuery);