$(function(){
	var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	$('#container').width(6*w);
	$('.ccontainer').width(w);
	// $('.view').width(w*0.92);
	$('#aboutcontain').css('left',w+'px');
	$('#eventscontain').css('left',2*w+'px');
	$('#registercontain').css('left',3*w+'px');
	$('#sponsorcontain').css('left',4*w+'px');
	$('#coordinatorscontain').css('left',5*w+'px');
	$('#reachuscontain').css('left',6*w+'px');
	$('#regcoming').width($('.view').width()).height($('.view').height());
	$('#menuul li').click(function(e){
		console.log();
		switch(e.currentTarget.innerHTML){
			case "Home":
				$(".ccontainer").animate({marginLeft:"0%"});
				break;
			case "About":
				$(".ccontainer").animate({marginLeft:"-100%"});
				break;
			case "Events":
				$(".ccontainer").animate({marginLeft:"-200%"});
				break;
			case "Register":
				$(".ccontainer").animate({marginLeft:"-300%"});
				break;
			case "Sponsor":
				$(".ccontainer").animate({marginLeft:"-400%"});
				break;
			case "Coordinators":
				$(".ccontainer").animate({marginLeft:"-500%"});
				break;
			case "Reach us":
				$(".ccontainer").animate({marginLeft:"-600%"});
				break;
		}

	});
		$('.dis input').on('blur',function(e){
		console.log(e.currentTarget,$('.dis input').val());
		if($('.dis input').val()!=''){
			var a=$('.dis').next().next('div');
			$('.dis').removeClass('dis').addClass('diss');
			a.addClass('dis');
		}

	})

});