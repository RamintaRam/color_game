function color() {
    var colors = ['#ffaf05', 'red', 'blue', '#62f441', 'yellow',  '#f442e8'];

    var size = 4;
    var blockWidth = 100;
    var data = [];
    var score = 0;
    var newScore = (size * size) * 0.5;
    var $view = $('#colorpad');
    var i, j;
    var $block;

    $view.css('width', size * blockWidth);
    $view.css('height', size * blockWidth);

    function fillTable() {
        for (i = 0; i < size; i++)
            for (j = 0; j < size; j++) {
                var rand = colors[Math.floor(Math.random() * colors.length)];
                var $block = $('<div id="' + i + '-' + j + '" class="block"></div>');

                $block.css('width', blockWidth);
                $block.css('height', blockWidth);

                $view.append($block);

                $block.click(function (e) {
                    $(this).css('background-color', data[this.id]);
                });

                data[i + '-' +j] = rand;
            }
    }

    fillTable();

    function randomizeColors() {
        alert(colors[Math.floor(Math.random() * colors.length)]);
    }


}
color();