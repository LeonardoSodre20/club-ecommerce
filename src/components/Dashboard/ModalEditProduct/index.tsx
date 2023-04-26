import { useState } from "react";

import ModalBase from "../ModalBase";

// STYLES
import { IconEdit } from "./styles";

const ModalEditProduct = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconEdit onClick={() => setOpen(!open)} />

      {open ? (
        <ModalBase isVisible={open}>
          <h1>hello World</h1>
        </ModalBase>
      ) : (
        false
      )}
    </>
  );
};

export default ModalEditProduct;
