import { fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//     .pipe(
//         map<number, number>(value => value * 10)
//     )
//     .subscribe(console.log)



const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
// keyup$.pipe(
//     map(event => event.code)
// ).subscribe(code => console.log('[map]: ', code))


// const keyupPluck$ = keyup$.pipe(
//     pluck('key')
// );
// const keyupPluck$ = keyup$.pipe(
//     pluck('target', 'baseURI')
// );
const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);
// keyupPluck$.subscribe( code => console.log('[pluck]: ', code))
keyupMapTo$.subscribe( value => console.log('[mapTo]: ', value))