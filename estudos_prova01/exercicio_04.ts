function exibir(...itens:string[]):void{
    itens.forEach((item) => {
        console.log(item);
    });
}
exibir("a","b");
exibir("a", "b", "c", "d");
exibir("a", "b", "c", "d","a", "b", "c", "d");