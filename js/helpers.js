let getRandomNumber = size => {
    return Math.floor(Math.random() * size);

}

let getDistance = (e, target) => {
        //Diferencia de las longitudes del eje X y el eje Y
        let diffX = e.offsetX - target.x;
        let diffY = e.offsetY - target.y;

        //Teorema de pitagoras
        return Math.sqrt((diffX * diffX) + (diffY * diffY))
    }
    //Pista al usuario
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Boling Hot!!";
    } else if (distance < 40) {
        return "Really Hot";
    } else if (distance < 60) {
        return "Hot";
    } else if (distance < 100) {
        return "Warm";
    } else if (distance < 200) {
        return "Cold";
    } else if (distance < 400) {
        return "really cold";
    } else {
        return "Freezing";
    }
}