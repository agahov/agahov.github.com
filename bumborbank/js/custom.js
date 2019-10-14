//jQuery(document).ready(function(){
$(document).ready(function ()
{
    $("#hiddenObject").css("visibility", "hidden");
    
    
    $("#checkBtn").click(function (e) 
    {

         e.preventDefault();
        
        
        var psw = $("#psw").val();   
        var pswUpCase = psw.toUpperCase();
        
        if (pswUpCase == "НОЖНИЦЫ"|| pswUpCase == "yj;ybws".toUpperCase())
        {
            
                
            $("#hiddenObject").css("visibility", "visible");
                
            $("#questForm").slideUp();    
            $("#questForm").css("visibility", "hidden");

        }
 
    });

    $("#moneyBtn").click(function (e) 
    {

         e.preventDefault();
         document.getElementById('audiotag1').play();
        
       
 
    });


    $(".moneyimage")
    .mouseover(function () {
    $(this).attr("src", "img/bank_hover_btn.png");
})
    .mouseout(function () {
    $(this).attr("src", "img/bank_btn.png");
});



    $("#moneyImg").click(function (e) 
    {

         e.preventDefault();
         document.getElementById('audiotag1').play();
        
       
 
    });
 
   

    
});





