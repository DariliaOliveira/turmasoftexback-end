estadocivil = "solteiro";
msgestadocivil = "";

switch(estadocivil) {
    case "solteiro":
        msgestadocivil = "Seu estado civil é SOLTEIRO";
        break;
    case "casado":
        msgestadocivil = "Seu estado civil é CASADO";
        break;
    case "divorciado":
        msgestadocivil = "Seu estado civil é DIVORCIADO";
        break;
    case "outro":
        msgestadocivil = "Estado civil: OUTRO";
        break;
    default:
        msgestadocivil = "Estado civil: OUTRO";
}
console.log(msgestadocivil);




