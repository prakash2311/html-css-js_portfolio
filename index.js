$(document).ready(function($) {
  function animateElements() {
    $('.progressbar').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 60 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percentage,
          thickness: 10,
          fill: {
            color: '#1B58B8'
          }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('div').text((stepValue*100).toFixed(0) + "%");

        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
});


//skill bar

$(document).ready(function(){
	var skillBar = $('.skill-body');
	$(window).scroll(function(){
		var SkillLocation = $("#about").offset().top;
		var scrollLocation = $(this).scrollTop();

		skillBar.each(function(){
			if(SkillLocation - 150 <= scrollLocation)
			{
				$(this).find('.inner-skill-bar').animate({width:$(this).attr('data-percent')}, 1000);
			}
		});
	});
});




           //=========== resume timeline animation===========//

           function qs(selector, all = false) {
               return all ? document.querySelectorAll(selector) : document.querySelector(selector)
           }

           const sections = qs('.section', true);
           const timeline = qs('.timeline');
           const line = qs('.line');
           line.style.bottom = `calc(100% - 10px)`;
           let prevScrollY = window.scrollY;
           let up, down;
           let full = false;
           let set = 0;
           const targetY = window.innerHeight * 0.8;

           function scrollHandler(e){
               const{
                   scrollY
               } = window;
               up = scrollY < prevScrollY;
               down = !up;
               const timelineRect = timeline.getBoundingClientRect();
               const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

               const dist = targetY - timelineRect.top
               console.log(dist);

               if (down && !full){
                   set = Math.max(set, dist);
                       line.style.bottom = `calc(100% - ${set}px)`
               }

               if (dist > timeline.offsetHeight + 50 && !full){
                   full = true;
                   line.style.bottom = `-50px`
               }

               sections.forEach(item => {
                   //console.log(items);
                   const rect = item.getBoundingClientRect();

                   if(rect.top + item.offsetHeight / 5 < targetY) {
                       item.classList.add('show-me')
                   }
               });

               prevScrollY = window.scrollY;
           }

           scrollHandler();
           line.style.display = 'block';
           window.addEventListener('scroll', scrollHandler)



          //=========== timeline animation end===========//
