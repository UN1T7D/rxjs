import { interval, reduce, take, tap } from "rxjs"


// Reduce JS
const numbers = [1, 2, 3, 4, 5]
const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual
const total = numbers.reduce(totalReducer, 0)
console.log(`total arr:`, total)


// Reduce RxJS
interval(1000).pipe(
    take(6),
    tap(console.log),
    // reduce(totalReducer, 5)
    reduce(totalReducer)
).subscribe({
    next: val => console.log('[next]: ', val),
    complete: () => console.log('[complete]')
})
