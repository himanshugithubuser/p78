var family = [
    "My father",
    "My mother",
    "My sister",
    "Myself"
  ];
  var image =[
     "father.jpg",
     "mother.jpg",
     "sister.jpg", 
     "boy.jpg"
  ];
  var i = 0;
   function nextslide(){document.getElementById("reason_1").innerHTML=family[i];document.getElementById("img_one").src=image[i];
   i++;document.getElementById("audio").play();}
    
    