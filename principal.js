/** Se tienen los siguientes datos de un estudiante:
 * cedula, nota1, nota 2, nota 3. Se desea conocer la nota final del estudiante
 * que es la suma de las notas. El programa debe mostrar un reporte con la
 * cedula, las notas y la nota final
 */
import Cl_Iestudiante from "./Cl_Iestudiante.js";
import Cl_estudiante from "./Cl_estudiante.js";

let iestu = new Cl_Iestudiante(),
c= iestu.leerCedula(),
n1= iestu.leerNota1 (),
n2= iestu.leerNota2(),
n3= iestu.leerNota3(),

estu=new Cl_estudiante(c,n1,n2,n3,),

salida=document.getElementById("Salida")
salida.innerHTML= iestu.reporteEstudiante(estu.cedula,estu.nota1,estu.nota2,estu.nota3,estu.calcularNotafinal())
