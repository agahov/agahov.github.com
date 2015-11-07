//jQuery(document).ready(function(){
$(document).ready(function ()
{
    $("#hiddenObject").css("visibility", "hidden");
    
    $("#hiddenObject2").css("visibility", "hidden");
    
    
    $("#checkBtn").click(function (e) 
    {

         e.preventDefault();
        
        var actorName = $("#actorName").val();
        var psw = $("#psw").val();   
        
        if (actorName == "Arnold" || actorName == "arnold" || actorName == "Арнольд" || actorName == "арнольд" )
        {
            
            
            
            if (psw == "140")
            {
            
                
            $("#hiddenObject").css("visibility", "visible");
                
            $("#questForm").slideUp();    
            $("#questForm").css("visibility", "hidden");
            }
        }
        
          if (actorName == "Hugh" || actorName == "hugh" || actorName == "хью" || actorName == "Хью" )
        {
            
            
            
            if (psw == "21210733")
            {
            
                
            $("#hiddenObject2").css("visibility", "visible");
                
            $("#questForm").slideUp();    
            $("#questForm").css("visibility", "hidden");
            }
        }

        
        
        
    });
    
});





