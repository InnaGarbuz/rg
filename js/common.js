
$(document).ready(function($){
  var path = window.location.pathname.split("/").pop();
  if ( path == '' ) {
    path = 'index.html';
  }
  var activeLink = $('.navigations .nav-bar li a[href="'+path+'"]');
      // activeParent = activeLink.closest('.dropdown');
    activeLink.addClass('active');
    // activeParent.find('a.dropdown-toggle').addClass('active');

// $(function () {                                      
//     $('.navigations .nav-bar li a').each(function () {             
//         var location = window.location.pathname.split("/").pop();
//         var link = this.href;                
//         if(location == link) {               
//             $(this).addClass('active');  
//         }
//     });
// });

$('.menu-cont').on('click', function() {
  
  $('.menu').toggleClass('active'); 
  $('.navigations').slideToggle(200);

});

(function(s) {
  var n;
  s(".tabss").on("click", "li:not(.active)", function() {
    n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
  }), s.fn.dmtabs = function(n) {
    s(this).addClass("active").siblings().removeClass("active"), n.find(".cont_tabs").eq(s(this).index()).show(0,function() {
      s(this).addClass("open_tab")
    }).siblings(".cont_tabs").hide(0, function() {
      s(this).removeClass("open_tab")
    })
  }
})(jQuery);


  $('.your-class').slick({
  autoplay: false,
  slidesToShow: 1,
  arrows: false,
  dots: true,

  });


$('.memory-dogs').slick({
  autoplay: true,
  slidesToShow: 1,
  arrows: false,
  });

var i=0;

$('#showContent, #HideContent').click(function(){
i = 1 - i;
if ( i == 1) {
$("#content").show("slow");
$("#showContent").css("display","none");
$("#HideContent").css("display","block");

} else {
$("#content").hide("slow");
$("#HideContent").css("display","none");
$("#showContent").css("display","block");
}
return false;
});

$("a.gallery").fancybox();
});

