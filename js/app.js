$( document ).ready(function() {
  
  /*Sub Menu Header*/
  var shop = $('.shopMenuClick');
  var shopSubMenu = $('#subMenu1');

  shop.on('click', function(e){
     shopSubMenu.slideToggle();

   e.preventDefault();
  })
  
  var wireless = $('.wirelessMenuClick');
  var wirelessSubMenu = $('#subMenu2');

  wireless.on('click', function(e){
     wirelessSubMenu.slideToggle();
     e.preventDefault();
  });

   var support = $('.supportMenuClick');
   var supportSubMenu = $('#subMenu3');
   
   support.on('click', function(e){
    supportSubMenu.slideToggle();
   e.preventDefault();
   });


   var search = $('.search');
   var searchSubMenu = $('#subMenu4');

    search.on('click', function(e){
       searchSubMenu.slideToggle();
       e.preventDefault();
    })







  
  
  
  
  
  
  /*Headphone.html section*/

   var mainImg = $('#mainImg');
    var imgs = $('#galleryImgs');
   
     imgs.on('click', function(e){ 
        mainImg.attr('src', e.target.src);
        e.preventDefault();
      
      })

   });

