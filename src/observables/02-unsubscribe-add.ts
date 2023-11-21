import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]: ', error),
    complete: () => console.info('[complete]')
}

const intervalo$ = new Observable<number>(subscriber => {

    // Crear contador
    let count: number = 1
    const interval = setInterval(() => {
        subscriber.next(count)
        count++
        count > 10 && subscriber.complete()
        console.log(count)
    }, 1000)

    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(interval)
        console.log('Interval destruido')
    }
})

const subs1 = intervalo$.subscribe(observer/* num => console.log('Numero1: ', num) */)
const subs2 = intervalo$.subscribe(observer/* num => console.log('Numero2: ', num) */)
const subs3 = intervalo$.subscribe(observer/* num => console.log('Numero3: ', num) */)


subs1.add(subs2.add(subs3))

setTimeout(() => {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout')
}, 6000);