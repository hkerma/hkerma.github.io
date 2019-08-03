$(document).ready(function(){
	
	var s = window.screen;
	var width = q.width = $(document).width();
	var height = q.height = $(document).height();;
	var yPositions = Array(300).join(0).split('');
	var ctx=q.getContext('2d');

	var draw = function () {
	  ctx.fillStyle='rgba(0,0,0,0.08)';
	  ctx.fillRect(0,0,width,height);
	  ctx.fillStyle='#0F0';
	  ctx.font = '10pt Georgia';
	  yPositions.map(function(y, index){
		text = String.fromCharCode(1e2+Math.random()*33);
		x = (index * 10)+10;
		q.getContext('2d').fillText(text, x, y);
		if(y > 1000 + Math.random()*2e5)
		{
		  yPositions[index]=0;
		}
		else
		{
		  yPositions[index] = y + 10;
		}
	  });
	};

	RunMatrix();

	function RunMatrix()
	{
	if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
		Game_Interval = setInterval(draw, 33);
	}

	function StopMatrix()
	{
	clearInterval(Game_Interval);
	}


	
	$(".pause").click(function(){
		StopMatrix();
		$(this).toggleClass("pause play");
	});
	
	$(".play").click(function(){
		RunMatrix();
		$(this).toggleClass("play pause");
	});
	
	$(window).resize(function(){
		console.log("yeah boy");
		var width = q.width = $(document).width();
		var height = q.height = $(document).height();
		ctx.fillStyle='rgba(0,0,0,0.06)';
		ctx.fillRect(0,0,width,height);
		ctx.fillStyle='#0F0';
	});

	

})

