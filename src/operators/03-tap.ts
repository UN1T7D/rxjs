import { Observer, map, range, tap } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[erro]: ', error),
    complete: () => console.info('[complete]')
}

const numero$ = range(1, 5)

numero$.pipe(

    tap(x => console.log('antes', x)),
    map(val => val * 10),
    tap({
        next: value => console.log('después', value),
        complete: () => console.log('Se termino todo')
    })

).subscribe(observer)