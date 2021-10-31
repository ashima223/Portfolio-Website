$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling 

    $(`a[href*="#"`).on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
          500,
          'linear'
        );
    });

});

document.getElementById("img1").onclick = function () {
    location.href = "https://ashima223.github.io/Notes/";
  };

document.getElementById("img2").onclick = function () {
    location.href = "https://ashima223.github.io/listen-my-playlist/";
  };

document.getElementById("img3").onclick = function () {
    location.href = "https://ashima223.github.io/percentage-calculator/";
  };

document.getElementById("img4").onclick = function () {
    location.href = "https://ashima223.github.io/drive-the-bike/";
  };

document.getElementById("img5").onclick = function () {
    location.href = "https://ashima223.github.io/Covid19/";
  };

document.getElementById("img6").onclick = function () {
    location.href = "https://ashima223.github.io/Clock/";
  };