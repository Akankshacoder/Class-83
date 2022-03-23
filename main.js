canvas= document.getElementById("mc");
         
       ctx= canvas.getContext("2d");
       
       canvas.addEventListener("touchstart",my_touchstart);
       function my_touchstart(e){
       lpx=e.touches[0].clientX-canvas.offsetLeft;
       lpy=e.touches[0].clientY-canvas.offsetTop;
       }
      
       
       canvas.addEventListener("touchmove",my_touchmove);
       function my_touchmove(e){
           cpx=e.touches[0].clientX-canvas.offsetLeft;
           cpy=e.touches[0].clientY-canvas.offsetTop;
          
               ctx.beginPath();
               ctx.linewidth =5;
               ctx.strokeStyle ="red";
ctx.moveTo(lpx,lpy);
ctx.lineTo(cpx,cpy);
               ctx.stroke();
          
          lpx=cpx;
           lpy=cpy;
       }
      
       
       