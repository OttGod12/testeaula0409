import { Pagina } from "../../components/Pagina";
import { PaiDireta } from "../../components/comunicacao/direta/PaiDireta"
import { FilhoDireta } from "../../components/comunicacao/direta/FilhoDireta"

export function ComunicacaoDireta(){

    return(
        <Pagina titulo="Comunicação Direta" subtitulo="Conceito comunicação Direta">

            <PaiDireta></PaiDireta>
            <FilhoDireta></FilhoDireta>



        </Pagina>
    )
}