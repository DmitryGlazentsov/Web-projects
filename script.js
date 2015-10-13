/*
1+. Создайте веб-страницу с сеткой 16x16, состоящей из квадратных элементов <div>
2+. Добавьте эффект при наведении, чтобы квадрат менял свой цвет, когда вы проводите
 над ним курсор мыши, оставляя ?"пикселизованый"? след на сетке подобно тому, что оставляет ручка.
    a.Что происходит, когда вы наводите мышь? Ну, вы наводите (hover), вам нужно войти в
     div (enter) и покинуть его (leave). Любое из этих событий будет хорошим началом.
    b.Здесь снова несколько способов изменить цвет - добавить новый класс (addClass),
     изменить фон div-a индивидуально, и так далее.
3. Добавьте над сеткой кнопку, которая будет очищать сетку и отправлять пользователю всплывающее 
сообщение с вопросом, сколько квадратов должно быть на стороне новой сетки. Когда пользователь 
вводит число, новая сетка должна быть создана в том же месте, где и старая, чистая и одноцветная.
 Новый лист для наброска! 
*/

/*ПЕРВАЯ ЧАСТЬ ЗАДАНИЯ*/
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
	var $some_text = "  ";
	//создаем сетку дивов
	for (var i = 0; i < w; i++) {
		for (var k = 0; k < h; k++) {
			//$(".main_div").append("<div class='"+name_of_class[i]+"'>"+k+"-столбец "+i +"-строка"+"</div>");
			$(".main_div").append("<div class='"+name_of_class[i]+"'>5</div>");
			if(k==h-1){
				$(".main_div").append("<div></div>");
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
		$("."+name_of_class[i]).css("min-width","20px");
		$("."+name_of_class[i]).css("min-height","20px");
	};

	/*ВТОРАЯ ЧАСТЬ ЗАДАНИЯ*/
	$("div").mouseenter(function(){
		$(".main_div").addClass("main_div_color");//для того, чтобы общий див, в котором остальные, не перекрашивался
		$(this).removeClass("no_color");
		$(this).addClass("green");
		
	});

	$("div").mouseleave(function(){
		$(this).removeClass("green");
		$(this).addClass("no_color");
		$(".main_div").addClass("main_div_color"); //для того, чтобы общий див, в котором остальные, не перекрашивался
	});

	/*ТРЕТЬЯ ЧАСТЬ ЗАДАНИЯ*/
	
	
});