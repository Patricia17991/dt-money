import { SerachFormContainer } from "./styles"
import {MagnifyingGlass} from "phosphor-react"

export function SearchForm() {
    return(
        <SerachFormContainer>
            <input type="text" placeholder="Busque por transações" />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SerachFormContainer>
    )
}
