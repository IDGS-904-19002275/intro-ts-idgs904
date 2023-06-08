interface Alumnoz{
    _matricula:number;
    _nombre: string;
    _edad: number;
    _correo: string;
    _grupo:Grupo;
}


interface Grupo{
    _grupo:string;
    _anio:number;
    
}

const alumno:Alumnoz={
    _matricula: 19002275,
    _nombre: "El jualoncho",
    _edad: 28,
    _correo: "jualonchogmail.com",
    _grupo:{
        _grupo:'IDSG-904',
        _anio:2023
        }
}

const{_matricula,_grupo:xx} = alumno
const {_grupo} = xx

console.log(`La matricula es ${matricula}`);
console.log(`El nombre es  ${alumno._nombre}`);
console.log(`El grupo es ${_grupo}`);
console.log(`El anio es ${alumno._grupo._anio}`);


const gps:string[] = ['IDSG-904', 'IDGS-901', 'IDGS-901']
console.log(`Grupo 1: ${gps[0]}`);
console.log(`Grupo 1: ${gps[1]}`);


const [a,b] = gps
console.log(`Grupo 1: ${a}`);


