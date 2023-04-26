import { ReactNode } from "react";
import { FormControl } from "./styles";

const FormControlGeneric = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: () => Promise<void>;
}) => {
  return <FormControl onSubmit={onSubmit}>{children}</FormControl>;
};

export default FormControlGeneric;
