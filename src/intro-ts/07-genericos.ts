class PilaEnteros{
    private vec:number[]=[]
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
}


class PilaString{
    private vec:string[] = []
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
} 

let pila1 = new PilaEnteros();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());


//Cadenas
let pila2 = new PilaString();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());

class PilaGenerica<T>{
    private vec:T[] = []
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
} 

let pila3 = new PilaGenerica<number>();

let pila4 = new PilaGenerica();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());


//Cadenas
let pila5 = new PilaGenerica();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());