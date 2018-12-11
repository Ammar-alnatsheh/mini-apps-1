$(document).ready(function(){

    var button = $('#generate');
    button.click(function(event){

        var source = $('#source').val();
        $('#result').empty().append(source);

    });

   
});
