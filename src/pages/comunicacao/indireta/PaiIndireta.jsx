import { FilhoIndireta } from "./FilhoIndireto"
import { useState } from "react"

export function PaiDireta(){

    const [nome, setNome] = useState("")

    return(
        <div className = {` w-full flex flex-col items-center p-7 rounded-md bg-blue-500 text-white `}>

        <div className= "flex gap-3">
            <button className="bg-purple-500 px-4 py-2 text-white hover: bg-purple-600 rounded-md" onClick={() => setNome("João")}>João</button>

            <button className="bg-purple-500 px-4 py-2 text-white hover: bg-purple-600 rounded-md" onClick={() => setNome("José")}>José</button>
            <button className="bg-purple-500 px-4 py-2 text-white hover: bg-purple-600 rounded-md" onClick={() => setNome("Maria")}>Maria</button>
        </div>
            


            <div>
                <span className="text-4xl p-5">{nome}</span>
            </div>


            <FilhoIndireta></FilhoIndireta>
        
        
        </div>
    )
}