document.getElementById("generate-form").addEventListener("click", function(event){
    event.preventDefault();
});

$(document).ready(function(){

    var button = $('#generate');
    button.click(function(event){

        var source = $('#source').val();
        var data = JSON.parse(JSON.stringify(source));

        $.ajax({
            type: 'POST',
            data: data,
            contentType: 'application/json',
            success: function (data) {
                $('#result').empty().append(data);
            },
            error: function (error) {
              alert('server: Failed to build CSV file', error);
            }
          });

    });

   
});

