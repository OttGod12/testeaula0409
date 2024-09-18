export function pagina(props){

    return(
        <div classname= "w-full h-full bg-slate-200">
            <header classname="bg-zinc">
                <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            </header>
            <main>
                {props.children}

            </main>
        </div>


    )
}