import { useState } from "react";

// COMPONENTS
import ModalBase from "../ModalBase";
import FormControlGeneric from "../ModalBase/FormControl";
import { TitleDescriptionModal } from "../ModalCreateProduct/styles";

// STYLES
import { BtnCloseModal, IconEdit } from "./styles";

const ModalEditProduct = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <IconEdit onClick={() => setOpen(!open)} />

      {open ? (
        <ModalBase isVisible={open}>
          <BtnCloseModal onClick={() => setOpen(false)} />

          <FormControlGeneric onSubmit={handleSubmit}>
            <TitleDescriptionModal>Edição de Produtos</TitleDescriptionModal>
          </FormControlGeneric>
        </ModalBase>
      ) : (
        false
      )}
    </>
  );
};

export default ModalEditProduct;
