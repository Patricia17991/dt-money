import { SerachFormContainer } from "./styles"
import {MagnifyingGlass} from "phosphor-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers"


const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>


export function SearchForm() {
  const { 
     register, 
     handleSubmit,
     formState: {
        isSubmitting,
     }
    } = useForm<SearchFormInputs>({
     resolver: zodResolver(searchFormSchema),
  })

async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise(resolver => setTimeout(resolve, 2000))
    
    console.log(data)
  }//functions disparadas por users, começam com 'handle'

    return(
        <SerachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
             type="text" 
             placeholder="Busque por transações" 
             {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SerachFormContainer>
    )
}
