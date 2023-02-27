import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ContainerIconsAndLinks,
  ContainerSideBar,
  IconCloseSideBar,
  IconOpenSideBar,
  IconProducts,
  IconUsers,
} from "./styles";

const SideBar = () => {
  const navigate = useNavigate();
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
        <IconProducts onClick={() => navigate("/")} />
        <IconUsers onClick={() => navigate("/users")} />
      </ContainerIconsAndLinks>
    </ContainerSideBar>
  );
};

export default SideBar;
