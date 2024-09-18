export function pagina(props){

    return(
        <div>
            <header>
                <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            </header>
            <main>
                {props.children}

            </main>
        </div>


    )
}