$(document).ready(function(){
    $("#sign_up").click(function(){
        const user_id = $("#user_id").val();
        const pwd = $("#pwd").val();
        const name = $("#name").val();
        const user_num = $("#user_num").val();
        const send_params={
            user_id,
            pwd,
            name,
            user_num
        };
        $.post('/member_insert',send_params,function(data,status){
            const parsed_data=JSON.parse(data);
            $("#login-form").html("<h1>"+parsed_data.msg+"</h1><br><a href='/'>Login</a>");
        });//post
    });//signup

    $("#login_btn").click(function(){
        //alert();
        const login_id = $("#login_id").val();
        const login_pwd = $("#login_pwd").val();
        const send_params={
            user_id: login_id,
            pwd: login_pwd
        }
        $.post('/login',send_params,function(data,status){
            alert();
            try{
                
                alert(JSON.parse(data).msg);
                
                $("#login_id").val()="";
                $("#idnumber_div").html();

            }catch{
                window.location.reload(true);
            }
        });//post
    });//login_btn

    $('#logout_btn').click(function(){
        $.get("/logout",function(data,status){
            location.reload(true);
        });
    });//logout_btn

    $('#about_logout').click(function(){
        $.get("/about_logout",function(data,status){
            location.reload(true);
        })
    })//about_logout
});