function isTouching(objectrect,objectdosrect){
    if (objectrect.x - objectdosrect.x < objectrect.width/2 + objectdosrect.width/2
      && objectdosrect.x - objectrect.x < objectdosrect.width/2 + objectrect.width/2
      &&objectrect.y - objectdosrect.y < objectrect.height/2 + objectdosrect.height/2
        && objectdosrect.y - objectrect.y < objectdosrect.height/2 + objectrect.height/2)
        {
          return true;
        }
   else {
     return false;
   }
  }
    
  function bounceOff(movingRect,fixedRect){
   if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-4);
    fixedRect.velocityY = fixedRect.velocityY * (-4);
    }
  }