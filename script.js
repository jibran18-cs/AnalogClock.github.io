setInterval(timeGet, 1000);
const hourHand= document.querySelector('[data-hour-hand]')
const minuteHand= document.querySelector('[data-minute-hand]')
const secondHand= document.querySelector('[data-second-hand]')
// console.log(hourHand)

function timeGet(){
    const currentDate= new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio+ currentDate.getMinutes())/60;
    const hoursRatio = (minuteRatio+currentDate.getHours())/12;
    rotateHands(secondHand, secondRatio)
    rotateHands(minuteHand, minuteRatio)
    rotateHands(hourHand, hoursRatio)
   
}
 function rotateHands(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360 )
 }
//  rotateHands()
timeGet()
