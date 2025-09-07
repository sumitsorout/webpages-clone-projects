const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem = document.querySelector('.elem-container');
var fixed= document.querySelector('.fixed-image');
elem.addEventListener("mouseenter",function(){
  fixed.style.display = "block";
});
elem.addEventListener("mouseleave",function(){
  fixed.style.display = "none";
});

var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter",function(){
    var image = elem1.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})
var elem2 = document.querySelector("#elem2")
elem2.addEventListener("mouseenter",function(){
    var image = elem2.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})
var elem3 = document.querySelector("#elem3")
elem3.addEventListener("mouseenter",function(){
    var image = elem3.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})
var elem4 = document.querySelector("#elem4")
elem4.addEventListener("mouseenter",function(){
    var image = elem4.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})
var elem5 = document.querySelector("#elem5")
elem5.addEventListener("mouseenter",function(){
    var image = elem5.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})
var elem6 = document.querySelector("#elem6")
elem6.addEventListener("mouseenter",function(){
    var image = elem6.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})
var elem7 = document.querySelector("#elem7")
elem7.addEventListener("mouseenter",function(){
    var image = elem7.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
})

  const hoverItems = document.querySelectorAll('.hoverimg');
  const previewImage = document.getElementById('preview-image');

  hoverItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imageUrl = item.getAttribute('data-image');
      previewImage.src = imageUrl;
    });

  //   item.addEventListener('mouseleave', () => {
  //     previewImage.src = ''; // Clear image on mouse out (optional)
  //   });
  });

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 60,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

