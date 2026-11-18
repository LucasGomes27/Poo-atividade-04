class Autenticacao{
    usuario : string;
    senha: number;

    constructor(){
        this.usuario = ""
        this.senha = 0
    }
    verificarSenha():boolean{
        if (this.usuario == "admin" && this.senha == 1234)
            return true
        else 
            return false

    }

}

let autenticaciones = new Autenticacao();
autenticaciones.usuario = "admin"
autenticaciones.senha = 1234

console.log(autenticaciones.verificarSenha());