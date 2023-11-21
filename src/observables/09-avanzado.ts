import { Observer, from } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
}

// const source$ = from([1,2,3,4,5])
// const source$ = of([1, 2, 3, 4, 5])
// const source$ = from('Kevin')
// const source$ = from<Promise<Response>>(fetch('https://api.github.com/users/UN1T7D'))

// source$.subscribe(async (resp) => {    
//     const dataResp = await resp.json()
//     console.log(dataResp)
// })
// source$.subscribe(observer)


const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


const miIterable = miGenerador()

// for (const id of miIterable) {
//     console.log(id)
// }


from(miIterable).subscribe(observer)


