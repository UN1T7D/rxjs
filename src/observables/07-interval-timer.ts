import { Observer, timer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
}

const hoyEn5 = new Date()
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)


// const interval$ = interval(2000)
// const timer$ = timer(2000, 1000)
const timer$ = timer(hoyEn5)

console.log('Inicio')
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin')