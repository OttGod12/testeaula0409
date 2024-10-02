import { Pagina } from "../../components/Pagina";
import { PaiIndireta } from "../../components/comunicacao/direta/PaiDireta"
import { FilhoIndireta } from "../../components/comunicacao/direta/PaiDireta"

export function ComunicacaoIndireta(){

    return(
        <Pagina titulo="Comunicação Indireta" subtitulo="Conceito comunicação indireta">

        <PaiIndireta></PaiIndireta>
        <FilhoIndireta></FilhoIndireta>

        </Pagina>
    )
}