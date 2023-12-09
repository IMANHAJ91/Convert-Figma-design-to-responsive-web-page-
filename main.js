function make_active(x){
    for(var i=0;i<4;i++)
    {
        if(i===x){
             document.querySelectorAll(".review-dot")[i].classList.add("active");
             document.getElementById("review-box-"+i).style.display="flex";


        }
   else{
    document.querySelectorAll(".review-dot")[i].classList.remove("active");
    document.getElementById("review-box-"+i).style.display="none";

   }
        
    
}}

  

