import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: none${props => props.theme["gray-800"]};

  /*centralizando coisas na tela */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`
