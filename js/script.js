var $counter = 0;

$('#cat').click(function () {

    $counter += 1;

    $('h2').text("Number of Cat Clicks: " + $counter);

});
