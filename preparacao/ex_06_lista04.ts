class Triangulo {
    a :number ;
    b :number ;
    c : number ;
    constructor (a :number,b:number,c:number) {
        this.a=a;
        this.b=b;
        this.c=c;

    }
    ehTriangulo():boolean{
        return (this.a < this.b + this.c) &&
            (this.b < this.a + this.c) &&
            (this.c < this.a + this.b) ;
    
    }
    
    ehEquilatero():boolean{
        if (!this.ehTriangulo()){
            return false;
        }
        return this.a == this.b && this.c == this.a;
        
    }

    ehIsoceles():boolean{
        if (!this.ehTriangulo()){
            return false;
        }
        return (this.a == this.b) || (this.b == this.c) || (this.a == this.c);
    }
    
    ehEscaleno():boolean{
        if (!this.ehTriangulo()){
            return false;
        }
        return (this.a != this.b) && (this.b != this.c) && (this.a != this.c);


    }
}
let triangulo = new Triangulo(2,3,4);
console.log(triangulo.ehTriangulo(),triangulo.ehIsoceles(),triangulo.ehEquilatero(),triangulo.ehEscaleno());

