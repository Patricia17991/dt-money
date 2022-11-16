import { SerachFormContainer } from "./styles"
import {MagnifyingGlass} from "phosphor-react"
import { useForm } from "react-hook-form"

export function SearchForm() {
  const { register, handleSubmit} = useForm()

    return(
        <SerachFormContainer>
            <input 
             type="text" 
             placeholder="Busque por transações" 
             {...register('query')}
            />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SerachFormContainer>
    )
}
