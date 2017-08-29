function color() {
    var colors = ['#ffaf05', 'red', 'blue', '#62f441', /*'yellow', '#f442e8'*/];

    var size = 4;
    var blockWidth = 100;
    var data = [];
    var score = 0;
    var newScore = (size * size) * 0.5;
    var $view = $('#colorpad');
    var i, j;
    var $block;
    var click;
    var $scoreView = $('#score');

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

                    countScore(this.id);
                });

                data[i + '-' + j] = rand;

            }
    }

    fillTable();

    function countScore(id) {

        $('#' + id).css('background-color', data[id]);

        if (!click)
        {
            click = id;
            return;
        }

        if (data[click] === data[id])
        {
            score += 1;
            $('#' + click).css('background-color', 'disabled');
            $('#' + id).css('background-color', 'disabled');
            click = null;
        }
        else
        {
            setTimeout(function (){
                $('#' + click).css('background-color', '');
                $('#' + id).css('background-color', '');
                click = null;
            }, 0.9500)
        }



        // if($block.click /*&& data[this.id] === data[this.id]*/ )
        //alert(data);
    }


}
color();