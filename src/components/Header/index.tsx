import { useNavigate } from "react-router-dom";
import {
  ContainerHeader,
  ContainerLinksHeader,
  ContainerShop,
  CounterShop,
  IconCart,
  LinkItem,
  LogoDescription,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <LogoDescription>CLUB CLOTHING</LogoDescription>

      <ContainerLinksHeader>
        <LinkItem onClick={() => navigate("/")}>Explorar</LinkItem>
        <LinkItem onClick={() => navigate("/login")}>Login</LinkItem>
        <LinkItem onClick={() => navigate("/createAccount")}>
          Criar Conta
        </LinkItem>
        <ContainerShop>
          <IconCart />
          <CounterShop>0</CounterShop>
        </ContainerShop>
      </ContainerLinksHeader>
    </ContainerHeader>
  );
};

export default Header;
