animal = "cachorro";
msganimal = "";

switch(animal) {
    case "cachorro":
        msganimal = "Esse animal late.";
        break;
    case "gato":
        msganimal = "Esse animal mia.";
        break;
    case "pássaro":
        msganimal = "Esse animal voa.";
        break;
    case "outro":
        msganimal = "Esse animal não é nem cachorro, nem gato, nem pássaro.";
        break;
    default:
        msganimal = "Esse animal não é nem cachorro, nem gato, nem pássaro.";
}
console.log(msganimal);




