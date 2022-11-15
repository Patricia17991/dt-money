import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {

  //carregamento de lista através de api
  useEffect(() => {
    fetch('http://localhost:3333/transactions').then(response => {
     response.text().then(data => {
      console.log(data)
     })
    })
  },[])
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>

            <SearchForm/>
            <TransactionsTable>
              <tbody>
                <tr>
                  <td width="50%">Desenvolvimento de site</td>
                <td>
                 <PriceHighlight variant="income">
                  R$ 12.000,00
                 </PriceHighlight>
               </td>
               <td>Venda</td>
               <td>13/04/2022</td>
               </tr>
                <tr>
               <td width="50%">Hambúrguer</td>
               <td>
                <PriceHighlight variant="outcome">
                  -R$ 59,00
                 </PriceHighlight>
               </td>
               <td>Alimentação</td>
               <td>10/04/2022</td>
             </tr>
           </tbody>
         </TransactionsTable>
      </TransactionsContainer>
        </div>
    )
}
