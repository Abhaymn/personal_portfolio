let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{

    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    });

    //sticky header
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);


// remove toggle and navbar when click navbar links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
} 


// rinth

// $("#submit-form").submit((e) => {
//     e.preventDefault();
//     $.ajax({
//       url: "https://script.google.com/macros/s/AKfycbwPFb9dBW7FXMoUzzkRAYyQKLulYz0hOrj_VfDmoeo6bfkSddKShMk6SeRreIoH22mBCQ/exec",
//       data: $("#submit-form").serialize(),
//       method: "post",
//       success: function (response) {
//         alert("Form submitted successfully");
//         window.location.reload();
//         //window.location.href="https://google.com"
//       },
//       error: function (err) {
//         alert("Something Error");
//       },
//     });
// })