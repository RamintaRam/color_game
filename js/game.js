function color() {
    var colors = ['#3E4D67', '#E4858D', '#F3D189', '#536584', '#D5724B', '#B0475E'];

    var size = 4;
    var blockWidth = 100;
    var data = [];
    var score = 0;
    var maxScore = (size * size) * 0.5;
    var $view = $('#colorpad');
    var i, j;
    var $block;
    var click;
    var $scoreView = $('#score');
    var ids = [];

    $view.css('width', size * blockWidth);
    $view.css('height', size * blockWidth);

    function fillTable() {

        for (i = 0; i < size; i++)
            for (j = 0; j < size; j++) {
                var $block = $('<div id="' + i + '-' + j + '" class="block"></div>');

                $block.css('width', blockWidth);
                $block.css('height', blockWidth);

                $view.append($block);


                $block.click(function (e) {

                    countScore(this.id);
                });

                ids.push(i + '-' + j);
            }


        for(i = 0; i < maxScore; i++)
        {
            var rand = (colors[Math.floor(Math.random() * colors.length)]);

            var first = ids.splice(Math.round(Math.random() * (ids.length - 1)), 1);

            var second = ids.splice(Math.round(Math.random() * (ids.length - 1)), 1);

            data[first] = rand;
            data[second] = rand;
        }

        // console.log(data);
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