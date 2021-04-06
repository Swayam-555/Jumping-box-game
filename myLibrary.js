function isTouching(object1,object2,object3,object4,object5,object6,object7,object8){ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) 
  { 
    return true; 
  }
   else {
      return false;
     } 
    }

    if (object3.x - object4.x < object4.width/2 + object3.width/2 && object4.x - object3.x < object4.width/2 + object3.width/2 && object3.y - object4.y < object4.height/2 + object3.height/2 && object4.y - object3.y < object4.height/2 + object3.height/2) 
  { 
    return true; 
  }
   else {
      return false;
     } 
    
     if (object5.x - object6.x < object6.width/2 + object5.width/2 && object6.x - object5.x < object6.width/2 + object5.width/2 && object5.y - object6.y < object6.height/2 + object5.height/2 && object6.y - object5.y < object6.height/2 + object5.height/2) 
  { 
    return true; 
  }
   else {
      return false;
     } 
    
     if (object7.x - object8.x < object8.width/2 + object7.width/2 && object8.x - object7.x < object8.width/2 + object7.width/2 && object7.y - object8.y < object8.height/2 + object7.height/2 && object8.y - object7.y < object8.height/2 + object7.height/2) 
  { 
    return true; 
  }
   else {
      return false;
     } 
    