"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangulo {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ehTriangulo() {
        return (this.a < this.b + this.c) &&
            (this.b < this.a + this.c) &&
            (this.c < this.a + this.b);
    }
    ehEquilatero() {
        if (!this.ehTriangulo()) {
            return false;
        }
        return this.a == this.b && this.c == this.a;
    }
    ehIsoceles() {
        if (!this.ehTriangulo()) {
            return false;
        }
        return (this.a == this.b) || (this.b == this.c) || (this.a == this.c);
    }
    ehEscaleno() {
        if (!this.ehTriangulo()) {
            return false;
        }
        return (this.a != this.b) && (this.b != this.c) && (this.a != this.c);
    }
}
let triangulo = new Triangulo(2, 3, 4);
console.log(triangulo.ehTriangulo(), triangulo.ehIsoceles(), triangulo.ehEquilatero(), triangulo.ehEscaleno());
//# sourceMappingURL=ex_06_lista04.js.map