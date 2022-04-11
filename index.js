// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
  let distanceInBlock;
    if (pickUpLocation > 42) {
 distanceInBlock = pickUpLocation - 42;
   } else {
     distanceInBlock = 42 - pickUpLocation;
   }
    return distanceInBlock;    
}
function distanceFromHqInFeet(pickUpLocation) {
    let distanceInBlock = distanceFromHqInBlocks(pickUpLocation)
     let distanceInFeet;   
     distanceInFeet = (distanceInBlock * 264); 
    return distanceInFeet;
    }
    function distanceTravelledInFeet(start, distenation) {
        let travelInBlock;
        let travelInFeet;
        if ( distenation > start ) {
          travelInBlock = distenation - start
        } else { travelInBlock = start - distenation
        }
        travelInFeet = travelInBlock * 264;
         return travelInFeet;
        }
        function calculatesFarePrice(start, distenation){
            let travelInFeet = distanceTravelledInFeet(start, distenation)
            let farePrice;
            if (travelInFeet < 400) {
                farePrice = 0;
            }
            return farePrice;
           }
           function calculatesFarePrice(start, distenation){
            let travelInFeet = distanceTravelledInFeet(start, distenation)
            let farePrice;
            if (travelInFeet < 400) {
                farePrice = 0;
            } else if (travelInFeet >= 400 && travelInFeet <= 2000) {
            let totalFeet = travelInFeet - 400;
            farePrice = totalFeet * 0.02;    
            } else if (travelInFeet > 2000 && travelInFeet < 2500) {
                farePrice = 25;
            } else if (travelInFeet > 2500) {
                farePrice = "cannot travel that far";
            }
            
            return farePrice;
           }