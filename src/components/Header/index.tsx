import { useState } from "react";
import { useNavigate } from "react-router-dom";

// STYLES
import * as S from "./styles";

// HOOKS
import useNotification from "@src/hooks/useNotification";

const Header = () => {
  const { handleEnableNotification } = useNotification();
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [openMenuMobile, setOpenMobile] = useState<boolean>(false);

  const handleOpenMenuMobile = () => {
    setOpenMobile(!openMenuMobile);
  };

  return (
    <>
      <S.ContainerHeader>
        <S.LogoDescription>CLUB CLOTHING</S.LogoDescription>
        <S.ContainerLinksHeader>
          <S.LinkItem onClick={() => navigate("/")}>Explorar</S.LinkItem>
          <S.LinkItem onClick={() => navigate("/login")}>Login</S.LinkItem>
          <S.LinkItem onClick={() => navigate("/createAccount")}>
            Criar Conta
          </S.LinkItem>
          <S.ContainerShop onClick={() => navigate("/checkout")}>
            <S.IconCart />
            <S.CounterShop>0</S.CounterShop>
          </S.ContainerShop>
          <S.IconNotification onClick={() => handleEnableNotification()} />
        </S.ContainerLinksHeader>

        <S.ButtonOpenMenuMobile onClick={() => handleOpenMenuMobile()} />

        {openMenuMobile && (
          <S.ContainerLinksResponsive>
            <S.SubContainerLinksResponsive>
              <S.LinkItem onClick={() => navigate("/")}>Explorar</S.LinkItem>
              <S.LinkItem onClick={() => navigate("/login")}>Login</S.LinkItem>
              <S.LinkItem onClick={() => navigate("/createAccount")}>
                Criar Conta
              </S.LinkItem>
              <S.ContainerShop onClick={() => setShowSideBar(!showSideBar)}>
                <S.IconCart />
                <S.CounterShop>0</S.CounterShop>
              </S.ContainerShop>
            </S.SubContainerLinksResponsive>
          </S.ContainerLinksResponsive>
        )}
      </S.ContainerHeader>
    </>
  );
};

export default Header;
