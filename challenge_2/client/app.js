document.getElementById("generate-form").addEventListener("click", function(event){
    event.preventDefault();
});

$(document).ready(function(){

    $('#read').change(function(event){
        var control = document.getElementById("read");   
        $('#source').empty();
        var reader = new FileReader();        
        reader.onload = function(event){
            var contents = event.target.result; 
            document.getElementById('source').value = contents;          
        };        
        reader.onerror = function(event){
            console.error("File could not be read! Code " + event.target.error.code);
        };        
        reader.readAsText(control.files[0]);        
    });
    
    $('#generate').click(function(event){

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

