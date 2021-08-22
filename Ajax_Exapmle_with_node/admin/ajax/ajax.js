/*$(document).ready(function(){
    window.ParsleyValidator.addValidator('checkemail',{
        validateString:function(value){
            return $.ajax({
                url:'/check_admin_email',
                method:'post',
                data:{email:value},
                dataType:'json',
                success:function(data){
                    if(data.success){
                        return true;
                    }
                }

            })




        }
    });
    $('#admin_registration').parsley();



    $('#admin_registration').on('submit',function(event){
        event.preventDefault();
        $.ajax({
            url:'/admin_registration',
            method:'post',
            data:$(this).serialize(),
            dataType:'json',
            beforeSend:function(){
                $('#admin_register_btn').attr('disabled',disabled);
                $('#admin_register_btn').val('Please Wait');

            },
            success:function(data){
                if(data.success){
                    $('#alert_msg').html('<div class="alert alert-success" > Succesfully Register</div>');
                   console.log('Register Successs');
                   $('#admin_registration')[0].reset();
                   $('#admin_register_btn').attr('disabled',false);
                   $('#admin_register_btn').val('Register');
                }
            }

        })
    });
});
*/