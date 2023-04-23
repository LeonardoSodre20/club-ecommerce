import { useState } from "react";
import { useNavigate } from "react-router-dom";

// STYLES
import {
  ButtonOpenMenuMobile,
  ContainerHeader,
  ContainerLinksHeader,
  ContainerLinksResponsive,
  ContainerShop,
  CounterShop,
  IconCart,
  LinkItem,
  LogoDescription,
  SubContainerLinksResponsive,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [openMenuMobile, setOpenMobile] = useState<boolean>(false);

  const handleOpenMenuMobile = () => {
    setOpenMobile(!openMenuMobile);
  };

  return (
    <>
      <ContainerHeader>
        <LogoDescription>CLUB CLOTHING</LogoDescription>
        <ContainerLinksHeader>
          <LinkItem onClick={() => navigate("/")}>Explorar</LinkItem>
          <LinkItem onClick={() => navigate("/login")}>Login</LinkItem>
          <LinkItem onClick={() => navigate("/createAccount")}>
            Criar Conta
          </LinkItem>
          <ContainerShop onClick={() => setShowSideBar(!showSideBar)}>
            <IconCart />
            <CounterShop>0</CounterShop>
          </ContainerShop>
        </ContainerLinksHeader>

        <ButtonOpenMenuMobile onClick={() => handleOpenMenuMobile()} />

        {openMenuMobile && (
          <ContainerLinksResponsive>
            <SubContainerLinksResponsive>
              <LinkItem onClick={() => navigate("/")}>Explorar</LinkItem>
              <LinkItem onClick={() => navigate("/login")}>Login</LinkItem>
              <LinkItem onClick={() => navigate("/createAccount")}>
                Criar Conta
              </LinkItem>
              <ContainerShop onClick={() => setShowSideBar(!showSideBar)}>
                <IconCart />
                <CounterShop>0</CounterShop>
              </ContainerShop>
            </SubContainerLinksResponsive>
          </ContainerLinksResponsive>
        )}
      </ContainerHeader>
    </>
  );
};

export default Header;
