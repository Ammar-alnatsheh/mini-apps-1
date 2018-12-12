document.getElementById("generate-form").addEventListener("click", function(event){
    event.preventDefault();
});

$(document).ready(function(){

    var button = $('#generate');
    button.click(function(event){

        var source = $('#source').val();

        $.ajax({
            type: 'POST',
            data: source,
            contentType: 'application/json',
            success: function (data) {
                $('#result').empty().append(data);
            },
            error: function (data) {
              alert('server: Failed to build CSV file', data);
            }
          });

    });

   
});

