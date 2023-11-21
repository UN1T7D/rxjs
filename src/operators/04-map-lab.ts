import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div')
texto.innerHTML = `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus voluptatum, nihil unde culpa quo, provident dignissimos totam commodi voluptates cum fugiat eos quasi esse pariatur assumenda doloremque illo est.
`;

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

// función para hacer el calculo

const calcularScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

//Streams


const scroll$ = fromEvent(document, 'scroll')
// scroll$.subscribe(console.log)
const progress$ = scroll$.pipe(
    // map(event => calcularScroll(event))
    map(calcularScroll),
    tap(console.log)
)

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})