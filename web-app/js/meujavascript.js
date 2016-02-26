window.onload = function() {
	var rects = document.getElementsByClassName('rect');
	
	for (var i = 0; i < rects.length; i++) {
		var elem = rects[i];
		elem.onmouseenter = function() {
			this.setAttribute('fill', '#F6AE2D');
			this.setAttribute('cursor', 'pointer');
		};

		elem.onmouseout = function() {

			this.setAttribute('fill', '#FCC71F');
			//troccaZero();
		};
	}	
}

// starter modal

$(document).ready(function(){ 
    $('.modal-trigger').leanModal();
});

// starter acordion

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false 
    });
});

//tooltip

$(function(){
	$("*[rel=tooltip]").hover(function(e){
		$("body").append('<div class="tooltip">'+$(this).attr('title')+'</div>');
			$('.tooltip').css({
				top: e.pageY - 50,
				left: e.pageX + 20
			}).fadeIn();
	}, function(){
		$('.tooltip').remove();
	}).mousemove(function(e){
		$('.tooltip').css({
				top: e.pageY - 50,
				left: e.pageX + 20
		})
	})
});

//Materialize select/datepicker
$(document).ready(function() {
	$('select').material_select();
	});

$('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
});
