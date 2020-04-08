$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel({ interval: 5000 });

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#myCarousel").carousel(3);
    });
    $(".item5").click(function () {
        $("#myCarousel").carousel(4);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#myCarousel").carousel("next");
    });
});

/*Player*/
$(function valid(){
    $('form').submit(function(){
        if($("#your-message:text").val() =<100 ){
           span.innerHTML ='Nội dung phải nhiều hơn 100 ký tự';      
           };

    });
});