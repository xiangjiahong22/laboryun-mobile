/*common javascript 2016-08-04*/
(function($){
	$().ready(function(){
		
		////slider
		//if($('#slider').length){
		//	var sliderLength=$('#slider .mui-slider-item').length-2;
		//	var sliderDotHtml='';
		//	for(var i=0;i<sliderLength;i++){
		//		sliderDotHtml+='<div class="mui-indicator"></div>';
		//	}
		//
		//	$('.mui-slider-indicator').html(sliderDotHtml);
		//	$('.mui-slider-indicator .mui-indicator').eq(0).addClass('mui-active');
		//}
		
		
		var winScreen=window.screen.width;
	    if(winScreen>=640){
	      winScreen=320;
	    }
	    $('html').css('font-size',winScreen/10+'px');
	   
	   
	   
	})
})(jQuery);
