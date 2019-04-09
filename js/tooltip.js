//всплывающие подсказки
$(function() {
    $("a, label, div, p, button, h3").each(function(b) {//работа с элементом (ссылка)
        if (this.title) {
            var c = this.title;
            var x = 0;//расположение по горизонтали(left)
            var y = 35;//расположение по вертикали (top)
            $(this).mouseover(function(d) {
                this.title = "";
                $("body").append('<div id="tooltip">' + c + "</div>");
                $("#tooltip").css({
                    left: (d.pageX + x) + "px",
                    top: (d.pageY + y) + "px",
                    opacity: "0.9"//полупрозрачность
                }).show(100)//скорость появления подсказки
            }).mouseout(function() {
                this.title = c;
                $("#tooltip").remove()
            }).mousemove(function(d) {
                $("#tooltip").css({
                    left: (d.pageX + x) + "px",
                    top: (d.pageY + y) + "px"
                })
            })
        }
    })
    });