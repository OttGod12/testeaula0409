import { useState } from "react"
import { FilhoDireta } from "./direta/FilhoDireta"


export function PaiDireta(){

    const [nome, setNome] = useState("")

    return(
        <div className = {` w-full flex flex-col items-center p-7 rounded-md bg-blue-500 text-white `}>

        <div className= "flex gap-3">
            <button className="bg-purple-500 px-4 py-2 text-white hover: bg-purple-600 rounded-md">João</button>
            <button className="bg-purple-500 px-4 py-2 text-white hover: bg-purple-600 rounded-md">José</button>
            <button className="bg-purple-500 px-4 py-2 text-white hover: bg-purple-600 rounded-md">Maria</button>
        </div>
            


            <div>
                <span className="text-4xl p-5">{nome}</span>
            </div>


            <FilhoDireta></FilhoDireta>

        
        
        </div>
    )
}