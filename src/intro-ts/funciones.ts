//any es cualquier tipo de dato
function sumar(a,b):void{
    console.log(a+b)
}

const res = sumar(5,5)


//Aqui se presenta como se define el tipo de dato
function suma2(n1:number, n2:number){
    return n1+n2
}

console.log(suma2(4,6))

function multiplicar(n3:number, n4:number, n5:number = 5):number{
    let tem = n3*n5
    return tem
}

console.log(multiplicar(2,3,5));


interface Mascotas {
    nombre: string,
    edad: number,
    mostrarEdad:()=>void
}

function datosMascota(Mascota:Mascotas, x:number):void{
    Mascota.edad = x,
    console.log(Mascota);
    
}

const nuevaMascota:Mascotas={
    nombre:'Pelon',
    edad: 6,
    mostrarEdad():void {
        console.log('La edad es '+this.edad)
    },
}

console.log(datosMascota(nuevaMascota,21));

let funcSuma = function (n1:number, n2:number):number{
    return n1+n2
}
console.log(funcSuma(4,3))



function funcSuma3(...valores:number[]):number{
    let suma = 0
    for(let x = 0; x<valores.length; x++){
        suma += valores[x]
    }    
    return suma
}
console.log(funcSuma3(28,23,25))




