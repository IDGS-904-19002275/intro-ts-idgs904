interface Alumno {
    matricula?: number, //El ? sirve para que el dato sea opcional
    nombre: string,
    email: string,
    edad: number
}

const alumnos={
    matricula:19002275,
    nombre : "Jose",
    edad : 27,
    email: "unmail@gmail.com"
}

let OtroVector:Array<number>=[2,3,5,5]
OtroVector.push(21)
for(let v of OtroVector)
    console.log(v)

