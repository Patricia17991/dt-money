import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export function NewTransactionModal() {
    return(
        <Dialog.Portal>
            <Overlay/>
               <Content>
                      <Dialog.Title>Nova Transação</Dialog.Title>

                      <Dialog.Close>
                        <X/>
                      </Dialog.Close>

                      <form action="">
                        <input type="text" placeholder="Descrição" required/>
                        <input type="number" placeholder="Preço" required/>
                        <input type="text" placeholder="Categoria" required/>

                        <button type="submit">
                            Cadastrar
                        </button>
                      </form>
                      
               </Content>
        </Dialog.Portal>
    )
}
