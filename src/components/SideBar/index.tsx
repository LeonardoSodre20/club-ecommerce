import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/auth";

import {
  ContainerIconsAndLinks,
  ContainerLinks,
  ContainerSideBackground,
  ContainerSideBar,
  IconCloseSideBar,
  IconLogout,
  IconOpenSideBar,
  IconProducts,
  IconUsers,
  LinksNav,
} from "./styles";

const SideBar = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();
  const [widthSideBar, setWidthSideBar] = useState<string>("70px");
  const [isVisible, setIsVisible] = useState<string>("visible");

  const changeWidthSideBar = () => {
    if (widthSideBar === "70px") {
      setWidthSideBar("250px");
      setIsVisible("visible");
    } else {
      setWidthSideBar("70px");
      setIsVisible("hidden");
    }
  };

  return (
    <>
      <ContainerSideBar>
        {widthSideBar.includes("70px") ? (
          <IconOpenSideBar onClick={() => changeWidthSideBar()} />
        ) : (
          <IconCloseSideBar onClick={() => changeWidthSideBar()} />
        )}

        <ContainerIconsAndLinks>
          <IconProducts onClick={() => navigate("/")} />
          <IconUsers onClick={() => navigate("/users")} />
          <IconLogout onClick={() => Logout()} />
        </ContainerIconsAndLinks>
      </ContainerSideBar>

      <ContainerSideBackground width={widthSideBar} display={isVisible}>
        <ContainerLinks>
          <LinksNav onClick={() => navigate("/")}>Produtos</LinksNav>
          <LinksNav onClick={() => navigate("/users")}>Usuários</LinksNav>
        </ContainerLinks>
      </ContainerSideBackground>
    </>
  );
};

export default SideBar;
