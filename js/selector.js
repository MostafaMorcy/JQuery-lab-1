$(document).ready(function () {
    $(".container1 div").each(function (i) {
        //console.log(i)
        var divcolor = $(this).attr("class")
        //console.log(divcolor)
        $(this).css("background-color", `${divcolor}`)
        var pracolor = $(this).children().attr("class")
        //console.log(pracolor)
        $(this).children().css("color", `${pracolor}`)

    })
    //************************************
    $(".container2 a").each(function (i) {
        //console.log(i)
        var hreff = $(this).attr("href")
        //console.log(hreff)
        if (hreff.includes("google")) {
            $(this).text("google")
        }
        if (hreff.includes("org")) {
            $(this).text("IEEE")
        }
        if (hreff.includes("https")) {
            $(this).text("Facebook")
        }
        if (hreff.slice(0, 4) == "http") {
            $(this).append(" Official Website")
        }

    })
    //*************************************************
    $(".container3 figure:eq(2) img").attr("src","img/orange.png")
    $(".container3 figure:eq(2) figcaption").text("fig.3 - Orange Juice")
    //**************************************************
    $(".my-name").attr("style","color:blue")
    //***********************************************
    $(".container4 table td:odd").attr("style","background-color:pink")
    $(".row3 td:eq(1)").css("font-weight","bold")
    $(".container5 ul li:eq(1)").css("font-style","italic")
    $(".task4 ol li:eq(2)").css("color","red")
})