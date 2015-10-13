$(document).ready(function(){
	$("body").append("<div class='main_div'></div>");
	var w=16;//ширина (количество клеток)
	var h=16;//высота (количество клеток)
	
	//пока что так, потому что нельзя называть классы цифрами
	var name_of_class = ["one","two","three","four",
						"five","six","seven","eight",
						"nine","ten","eleven","twelve",
						"thirteen","fourteen","fifteen","sixteen"];
	
	//для наглядности делаем рамку дива
	$(".one").css("border","3px solid black");
	//создаем сетку дивов
	for (var i = 0; i < w; i++) {
		for (var k = 0; k < h; k++) {
			//$(".main_div").append("<div class='"+name_of_class[i]+"'>"+k+"-столбец "+i +"-строка"+"</div>");
			$(".main_div").append("<div class='"+name_of_class[i]+"'>"+k+" "+i+"</div>");
			if(k==15){
				$(".main_div").append("<div>________________________________________________________</div>");
			};
		};
	};

	//задаем параметры отображения блоков div
	for (var i = 0; i < name_of_class.length; i++) {
		$("."+name_of_class[i]).css("display","inline-table");
		$("."+name_of_class[i]).css("border","3px solid black");
		$("."+name_of_class[i]).css("padding","5px");
		$("."+name_of_class[i]).css("margin","2px");
		$("."+name_of_class[i]).css("max-width","30px");
		$("."+name_of_class[i]).css("max-height","30px");
		$("."+name_of_class[i]).css("min-width","5px");
		$("."+name_of_class[i]).css("min-height","5px");
	};

});