$(".container1").append("<div class='black'>black</div>")
		$(".red").before("<div class='white'>white</div>")
		$(".pink").before("<p class='yellow'>Paragraph yellow</p>")
		$(".container2 p").each( function(i){
          //console.log(i)
		  var content = $(this).text()
		  //console.log(content)
		  $(this).replaceWith(`<a href= "http://${content}">${content}</a>`)
		}
		)
		$(".container3 img").wrap("<figure class='fig'></figure>")
		$(".fig").append("<figcaption>Coffee</figcaption>")
		//*********************************************
		$(".container4 table td.col-age").empty()
		$(".container4 table td").each(function(i){
			//console.log(i)
			var content = $(this).text()
		   // console.log(content)
			if(content.includes("mohsen")){
				$(this).addClass("man")
			}
	   
		if($(this).hasClass("your-email")){
			$(this).removeClass("your-email")
		}else{
			$(this).addClass("your-email")
		}	
		})
		
		$(".container5 li").each(function(i){
			//console.log(i)
			if($(this).index()%3 != 0 ){
               $(this).empty()
			}
		})
        $(".container6 input").each(function(i){
			//console.log(i)
			var atrrebute =$(this).attr("name")
			//console.log(atrrebute)
			if(atrrebute==="username"){
				$(this).attr("value","Mostafa Mahmoud")
			}
			if(atrrebute==="remember"){
				$(this).attr("checked","true")
			}
		})
		