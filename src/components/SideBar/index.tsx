import { useNavigate } from "react-router-dom";
import { useAuth } from "@src/hooks/useAuth";

// STYLES
import {
  ContainerIconsAndLinks,
  ContainerSideBar,
  IconLogout,
  IconProducts,
  IconUsers,
  IconGraphic,
  IconCategories,
  ContainerByLink,
  DescriptionLink,
  ContainerLogout,
} from "./styles";

const SideBar = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <ContainerSideBar>
        <ContainerIconsAndLinks>
          <ContainerByLink onClick={() => navigate("/dashboard")}>
            <IconProducts />
            <DescriptionLink>Produtos</DescriptionLink>
          </ContainerByLink>

          <ContainerByLink onClick={() => navigate("/users")}>
            <IconUsers />
            <DescriptionLink>Usuários</DescriptionLink>
          </ContainerByLink>

          <ContainerByLink onClick={() => navigate("/graphics")}>
            <IconGraphic />
            <DescriptionLink>Estatísticas</DescriptionLink>
          </ContainerByLink>

          <ContainerByLink onClick={() => navigate("/categories")}>
            <IconCategories />
            <DescriptionLink>Categorias</DescriptionLink>
          </ContainerByLink>

          <ContainerLogout onClick={() => Logout()}>
            <IconLogout />
            <DescriptionLink>Sair</DescriptionLink>
          </ContainerLogout>
        </ContainerIconsAndLinks>
      </ContainerSideBar>
    </>
  );
};

export default SideBar;
