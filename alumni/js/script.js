let btnLogo = document.getElementById('logo');
let menuD = document.getElementById('nav-m');

btnLogo.addEventListener('click', function(){
    menuD.classList.toggle('mostrarM');
});


//console.log(menuD)


$(document).ready(function(){
    $(".ver").on("click", function(){
       $(".p1").toggleClass("ocultar");
       $(".p2").slideToggle(0);
       if($(this).text() == "Ver más")
         $(this).text("Ver menos");
       else
         $(this).text("Ver más");
         
       return false;
    });
 });