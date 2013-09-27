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
	// $('.view').css('background-size',$('.view').width()+'px '+$('.view').height()+'px');
	$('#menuul li').click(function(e){
		switch(e.currentTarget.innerHTML){
			case "Home":
				$(".ccontainer").transition({marginLeft:"0%"},'700','easeOutBack');
				break;
			case "About":
				$(".ccontainer").transition({marginLeft:"-100%"},'700','easeOutBack');
				break;
			case "Events":
				$(".ccontainer").transition({marginLeft:"-200%"},'700','easeOutBack');
				break;
			case "Register":
				$(".ccontainer").transition({marginLeft:"-300%"},'700','easeOutBack');
				break;
			case "Sponsor":
				$(".ccontainer").transition({marginLeft:"-400%"},'700','easeOutBack');
				break;
			case "Coordinators":
				$(".ccontainer").transition({marginLeft:"-500%"},'700','easeOutBack');
				break;
			case "Reach us":
				$(".ccontainer").transition({marginLeft:"-600%"},'700','easeOutBack');
				break;
		}
	});

	$(document).keyup(function(e){
		// console.log(e);
		if($('.event div.opened')['length']){
			$('.eventcont').css('font-size','10px');
			$('.event div.opened').transition({
			width:'120px',
			height:'120px',
			marginLeft:'0px',
			marginTop:'0px'
			},'700','easeInBack',
    		function(){
			 $('.event div.opened').removeClass('opened');	
			});
		}

	});
	var eclick = false;

	$('.event div.eventdialog:not(.opened)').click(function(e){
		if($(e.currentTarget).hasClass('opened'))
			return;
		if(!eclick){
			eclick=true;
		var offset = $(e.currentTarget).offset();
		var off=$('#events').offset();
		var mt = off.top-offset.top;
		var ml = off.left-offset.left;
		$(e.currentTarget).transition({
			width:w*0.92+'px',
			height:h*0.75+'px',
			marginLeft:ml+'px',
			marginTop:mt+'px'
			},'700','easeOutBack',
    		function(){
			 $(e.currentTarget).addClass('opened');
			 $('.eventcont').css('font-size','20px');
			eclick=false;
		});
		}
	});

	$('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8').hover(function(e){
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
			$('#'+e.currentTarget.id+' .ccon div').hide();
		});
	},250);
	if($('#eventHolder').outerHeight(true)<$('#events').height())
	{ $('#eventHolder').css('margin-top',-$('#eventHolder').height()/2+'px');
	}else{
		$('#eventHolder').css('top','0px');

		$('#eventHolder').slimScroll({
			height:$('#events').height()+'px'
		});
	}
			

	$('#aboutholder').slimScroll({
		height:$('#about').height()+'px'
	});

	$('#home p').slimScroll({
		height:$('#home').height()+'px'
	});
	$('#regcontainer').slimScroll({
		height:$('#regcontainer').height()+'px'
	});
	$('#mapcscroll').width($('#mapc').width());
	$('#mapc').slimScroll({
		height:$('#map').height()+'px'
	});
});