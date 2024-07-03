export default class Cl_Iestudiante{
    leerCedula(){
        return prompt( "Ingrese su cedula");
    }
    leerNota1 (){
        return prompt("Ingrese la primer nota");
    }
    leerNota2 (){
        return prompt("Ingrese la segunda nota");
    }
    leerNota3(){
        return prompt("Ingrese la tercer nota");
    }
    reporteEstudiante (c,n1,n2,n3,nf){
        return `
        <br> Cedula: ${c} 
        <br> Nota1: ${n1} 
        <br> Nota2: ${n2} 
        <br> Nota3: ${n3} 
        <br> Nota final ${nf}
        `
    }
} 