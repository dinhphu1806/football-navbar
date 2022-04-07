
// $(document).ready(function(){
//     $('.icon-bar').click(function(){
//         $('ul').toggleClass('show')
//     });
// });
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   // toggle nav ul
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');

    // animate Links
        navLinks.forEach((link, index) => { //biến navLinks sẽ duyệt qua từng thẻ li
            // console.log(index); //check F12 liệt kê ra 7 element li từ 0->6
            if(link.style.animation) {
                link.style.animation = '';
            }else {
                // console.log(index / 7);
                link.style.animation = `navLinksFadein 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        
        });
    });
}
navSlide();