export default class estudiante{
    constructor(cedula, nota1, nota2, nota3){
        this.cedula= cedula;
        this.nota1= nota1;
        this.nota2= nota2;
        this.nota3=nota3;
    }
    set cedula(c)
    {
        this._cedula= c;
    }
    get cedula(){
        return this._cedula;
    }
    set nota1(n1){
    this._nota1= +n1;
    }
    get nota1(){
        return this._nota1;}
    set nota2(n2){
        this._nota2=+n2;}
    get nota2(){
        return this._nota2;
    }
    set nota3(n3){
this._nota3= +n3;
    }
get nota3(){
    return this._nota3;
}
calcularNotafinal(){
    return(this._nota1+this._nota2+this._nota3);
}

}