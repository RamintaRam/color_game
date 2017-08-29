function color() {
    var colors = ['#91D9C8', '#D991A2', '#D1DCFF', '#62f441', '#A9A986'];

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
    var ids = ['0-0', '0-1', '0-2', '0-3', '1-0', '1-1', '1-2', '1-3', '2-0', '2-1', '2-2', '2-3', '3-0', '3-1', '3-2', '3-3',];

    $view.css('width', size * blockWidth);
    $view.css('height', size * blockWidth);

    function fillTable() {
        var index = ids.splice(1, 1);
        console.log(index);
        for (i = 0; i < size; i++)
            for (j = 0; j < size; j++) {
                // for (i = 0; i < score; i++)
                //     for (j = 0; j < score; j++) {
                        ids.splice(1, 1);
                        ids.splice(3, 1);
                        ids.splice(5, 1);
                        ids.splice(7, 1);
                        ids.splice(9, 1);
                        ids.splice(11, 1);
                        ids.splice(13, 1);
                        ids.splice(15, 1);



                        var rand = (colors[Math.floor(Math.random() * colors.length)]);
                        var $block = $('<div id="' + i + '-' + j + '" class="block"></div>');

                        $block.css('width', blockWidth);
                        $block.css('height', blockWidth);

                        $view.append($block);


                        $block.click(function (e) {

                            countScore(this.id);
                        });

                        data[i + '-' + j] = rand;

                    // }
            }
    }

    fillTable();

    function countScore(id) {

        $('#' + id).css('background-color', data[id]);

        if (!click) {
            click = id;
            return;
        }

        if (data[click] === data[id]) {
            score += 1;
            $('#' + click).css('background-color', 'disabled');
            $('#' + id).css('background-color', 'disabled');
            click = null;
        }
        else {
            setTimeout(function () {
                $('#' + click).css('background-color', '');
                $('#' + id).css('background-color', '');
                click = null;
            }, 900)
        }


        // if($block.click /*&& data[this.id] === data[this.id]*/ )
        //alert(data);
    }


}
color();