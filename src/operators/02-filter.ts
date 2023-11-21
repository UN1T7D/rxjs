import { from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";


// range(1,10).pipe(
//     filter(value => value % 2 === 1)
// ).subscribe(console.log)

// range(20,30).pipe(
//     filter((value, i)=> {
//         console.log('[index]: ', i)
//         return value % 2 === 1
//     })
// ).subscribe(console.log)

interface Personaje {
    tipo: string;
    nombre: string;
}
const personaje: Personaje[] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Heroe',
        nombre: 'Gatubela'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    },
    {
        tipo: 'Villano',
        nombre: 'El brujo barbudo'
    },
]

// from<Personaje[]>(personaje).pipe(
//     filter(value => value.tipo === 'Villano')
// ).subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document,  'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter'),
    
)
keyup$.subscribe(console.log)