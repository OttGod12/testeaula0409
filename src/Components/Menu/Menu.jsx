import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu(){


    const getEstilo = (props)=> {

        let estilo= "flex gap-3 text-slate-700 px-3 py-4   hover:text-slate-200 hover:bg-slate-700"

        let ativo = "border-r-4 border-solid border-slate-800"

        let final
        if (props.isActive){
            final=estilo + ativo
        } else {
            final = estilo
        }

        return final;
    };

    return(
        <div className= "bg-slate-300 w-60 h-screen">
            
            <header className="gap-1 flex justify-center items-center px-1 py-5 border-b-2 border-solid border-slate-200 ">
                <span className="font-bold">React Rotas</span>
                <IconRouteAltLeft/>
            </header>

            <nav className="flex flex-col"> 
               <NavLink to="home" className= {getEstilo}>
                    <IconHome/>
                Home
                </NavLink>

               <NavLink to="contato" className= {getEstilo}>
                <IconAddressBook/>
                Contato
                </NavLink>

               <NavLink to="sobre" className= {getEstilo}>
                <IconInfoCircle/>
                Sobre
                </NavLink>

            </nav>
                
            <footer className="absolute bottom-0 p-2 flex justify-center ">
                <span>Desenvolvimento Web 2</span>
            </footer>
        </div>
        
    )
}