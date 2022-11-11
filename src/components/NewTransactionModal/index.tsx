import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "@radix-ui/react-dialog";

export function NewTransactionModal() {
    return(
        <Dialog.Portal>
            <Overlay/>
               <Content>
                      <Dialog.Title>Nova Transação</Dialog.Title>

                      <form action="">
                        <input type="text" placeholder="Descrição" required/>
                        <input type="number" placeholder="Preço" required/>
                        <input type="text" placeholder="Categoria" required/>

                        <button type="submit">
                            Cadastrar
                        </button>
                      </form>
                      <Dialog.Close/>
               </Content>
        </Dialog.Portal>
    )
}
