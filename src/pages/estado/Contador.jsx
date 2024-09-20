import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function Contador() {

    const [numero, setNumero]= useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }
      
      
    return (
        <Pagina titulo="Contador" subtitulo="Contar números">
        <div className="flex flex-col gap-4">
      
            <span className="text-2xl">{numero}</span>
      
            <button className="bg-purple-400 rounded-md p-2" onClick={incrementar}>Incrementar</button>
      
        </div>
        </Pagina>
            
    )
    }