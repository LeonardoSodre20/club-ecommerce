import { ReactNode } from "react";
import { ModalComponent, ModalForegroundComponent } from "./styles";

const ModalBase = ({ children }: { children: ReactNode }) => {
  return (
    <ModalForegroundComponent>
      <ModalComponent>{children}</ModalComponent>
    </ModalForegroundComponent>
  );
};

export default ModalBase;
