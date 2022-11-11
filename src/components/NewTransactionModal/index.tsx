import * as Dialog from "@radix-ui/react-dialog";

export function NewTransactionModal() {
    return(
        <Dialog.Portal>
            <Dialog.Overlay/>
               <Dialog.Content>
                      <Dialog.Title>
                        Nova Transação
                      </Dialog.Title>
                      <Dialog.Close/>
               </Dialog.Content>
        </Dialog.Portal>
    )
}
