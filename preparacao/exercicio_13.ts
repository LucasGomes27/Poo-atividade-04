class Numero{
    a:number = 5;

    ehPar():boolean{
        return this.a % 2 == 0;
            
    }
    ehImpar():boolean{
        return !this.ehPar();
            
    }
}
let numero =new Numero();
console.log(numero.ehPar(),numero.ehImpar());