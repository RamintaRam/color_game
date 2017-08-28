function color() {
    var colors = ['red', 'blue', 'gray', 'yellow', 'pnik'];

    var size = 4;
    var data = [];
    var score = 0;
    var newScore = (size * size) * 0.5;
    var $view = $('#colorpad');
    var i, j;

    function fillTable() {
        for (i = 0; i < size; i++)
            for (j = 0; j < size; j++) {

                var rand = colors[Math.floor(Math.random() * colors.length)];
                var $block = $('<div class="block" style="background-color: ' + rand + '"></div>');
                $view.append($block);

            }
        $view.click(function () {
            randomizeColors();
        })


    }

    fillTable();

    function randomizeColors() {
        alert(colors[Math.floor(Math.random() * colors.length)]);

    }


}
color();