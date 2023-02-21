import {
  ContainerIconsAndLinks,
  ContainerSideBar,
  IconCloseSideBar,
  IconOpenSideBar,
  IconUsers,
} from "./styles";
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

      <ContainerIconsAndLinks>
        <IconUsers />
      </ContainerIconsAndLinks>
    </ContainerSideBar>
  );
};

export default SideBar;
