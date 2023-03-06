$( document ).ready(function() {
    data1=[]
    $("#save").on('click',function(){
        var data = [];
        for (let i = 1; i < 80; i+=2) {
            $.each($(`input[name='ques_${i}']:checked`), function(){            
                data.push($(this).val());
                
            });
        }
        
        if (data.length == 40) {
            return true;
        }
        else{
            $('#question_val').html("<b>***Some Question are not fill***</b>");
            return false;
        }
    });

    
});