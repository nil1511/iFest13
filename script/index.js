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
	
	$('.event div:not(.opened)').click(function(e){
		if($(e.currentTarget).hasClass('opened'))
			return;
		var offset = $(e.currentTarget).offset();
		var off=$('#events').offset();
		var mt = off.top-offset.top;
		var ml = off.left-offset.left;
		$(e.currentTarget).transition({
			width:w*0.92+'px',
			height:h*0.75+'px',
			marginLeft:ml+'px',
			marginTop:mt+'px'
			},'1000','easeOutBack',
    		function(){
			 $(e.currentTarget).addClass('opened');
		});
	});

	$('#c1,#c2,#c3,#c4,#c5,#c6').hover(function(e){
			$('#'+e.currentTarget.id+' .ccon').show().animate({
			height:'100px'
			},'slow',function(){
				$('#'+e.currentTarget.id+' .ccon div').fadeIn(200);
			});
	},function(e){
			$('#'+e.currentTarget.id+' .ccon div').fadeOut(200);
			$('#'+e.currentTarget.id+' .ccon').animate({
			height:'0px'
		},'slow',function(){
			$('#'+e.currentTarget.id+' .ccon').hide();
		});
	},250);

	$('#eventHolder').css('margin-top',-$('#eventHolder').height()/2+'px');
		

	// $('.dis input').on('blur',function(e){
	// 	console.log(e.currentTarget,$('.dis input').val());
	// 	if($('.dis input').val()!=''){
	// 		var a=$('.dis').next().next('div');
	// 		$('.dis').removeClass('dis').addClass('diss');
	// 		a.addClass('dis');
	// 	}
	// });

	$('#regcontainer').slimScroll({
		height:$('#regcontainer').height()+'px'
	});
});