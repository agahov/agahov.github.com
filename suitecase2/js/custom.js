//jQuery(document).ready(function(){
$(document).ready(function ()
{
    $("#hiddenObject").css("visibility", "hidden");
    
    
    $("#checkBtn").click(function (e) 
    {

         e.preventDefault();
        
        var actorName = $("#actorName").val();
        var psw = $("#psw").val();   
        
        if (actorName == "petrovtraining@sportclub.com")
        {
            
            
            
            if (psw == "42")
            {
            
                
            $("#hiddenObject").css("visibility", "visible");
                
            $("#questForm").slideUp();    
            $("#questForm").css("visibility", "hidden");
            }
        }
        
        
        
        
        
    });
    
});





