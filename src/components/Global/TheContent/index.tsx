import { ReactNode } from "react";
import { MainContainer } from "./styles";

const TheContentMain = ({ children }: { children: ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default TheContentMain;
