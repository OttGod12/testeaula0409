import {useState} from "react"
import {FilhoIndireta} from "./FilhoIndireta"

export function PaiIndireta() {
  return (
    <div
  className={`
        w-full flex flex-col items-center p-7 rounded-md
        bg-blue-500 text-white gap-4
    `}
>
    <span className="text-4xl p-5"></span>

  <div className="flex gap-3">
    <button 
        className="botao"
        onClick={() => setNome("João")}
    >
        João
    </button>
    <button 
        className="botao" 
        onClick={() => setNome("Maria")}
    >
        Maria
    </button>
    
    <button 
        className="botao" 
        onClick={() => setNome("José")}
    >
        José
    </button>
    
  </div>
  {/* <span className="text-4xl p-5">{nome}</span> */}
  
  {/* Comunicação direta com o filho */}
  

    

</div>
)
}