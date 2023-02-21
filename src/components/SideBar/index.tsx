import { ContainerSideBar, IconCloseSideBar, IconOpenSideBar } from "./styles";
import { useState } from "react";

const SideBar = () => {
  const [widthSideBar, setWidthSideBar] = useState<string>("70px");

  const changeWidthSideBar = () => {
    widthSideBar.includes("70px")
      ? setWidthSideBar("250px")
      : setWidthSideBar("70px");
  };

  return (
    <ContainerSideBar width={widthSideBar}>
      {widthSideBar.includes("70px") ? (
        <IconOpenSideBar onClick={() => changeWidthSideBar()} />
      ) : (
        <IconCloseSideBar onClick={() => changeWidthSideBar()} />
      )}
    </ContainerSideBar>
  );
};

export default SideBar;
