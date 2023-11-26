var canvas= new fabric.Canvas("myCanvas");
player_x= 10
player_y= 10
block_width= 30
block_height= 30 
var player_object="";
var block_image_object="";

function playerobject(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
        console.log("creacion del personaje")
    })
} 
function block_image_object(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object)
    })
}
window.addEventListener("myKeydown",myKeydown)
function myKeydown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed);
     if(e.shiftKey == true && keyPressed == '80') 
     { console.log("Se presiona p y shift al mismo tiempo"); 
     block_image_width = block_image_width + 10;
      block_image_height = block_image_height + 10; 
      document.getElementById("current_width").innerHTML = block_image_width;
       document.getElementById("current_height").innerHTML = block_image_height; 
    } 
 }
      if(e.shiftKey && keyPressed == '77') 
      {console.log("Se presiona m y shift al mismo tiempo"); 
      block_image_width = block_image_width - 10; 
      block_image_height = block_image_height - 10; 
      document.getElementById("current_width").innerHTML = block_image_width; 
      document.getElementById("current_height").innerHTML = block_image_height; 
    }
    if(keypressed=="38"){
         up()
    }
    if(keypressed=="40"){
        down()
    }
    if(keypressed=="37"){
        left()
    }
    if(keypressed=="39"){
        right()
    }
    function up()
     { if(player_y >=0) 
        { player_y = player_y - block_image_height;
        canvas.remove(player_object);
        playerobject();
         }
    }
    function down()
    { if(player_y<=400)
        { player_y= player_y + block_image_height;
        canvas.remove(player_object);
        playerobject();
        }

    }
    function left()
    { if(player_x>=0)
    { player_x= player_x - block_image_width;
        canvas.remove(player_object);
        playerobject();
    }

 }
    function right()
    { if(player_x<=800)
        { player_x= player_x + block_image_width;
            canvas.remove(player_object);
            playerobject();
        }
        
    }
    if(keyPressed == '85') 
    { new_image('unique.png'); 
    console.log("u"); }
    