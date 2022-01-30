$('.start-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1500,
  prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-1.svg" alt=""></button>',
  nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-2.svg" alt=""></button>',
    autoplay: true,
    fade: true,
});

$('.clients__inner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 770,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 1
     }
    },{
      breakpoint: 560,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
    }],
});

$('.carExample__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 1
     }
    },{
      breakpoint: 680,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
    }],
});
$('.topCar__inner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Face Comments
const comments = document.querySelectorAll('.comments__inner-box');
comments.forEach((comment) => {
  comment.addEventListener("click", () => {
    comment.classList.toggle("active");
  })
})

// Face Questions
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})

// Menu toggleBtn__menu
document.querySelector('.toggleBtn').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('changeMenu')
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Send Messag
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});