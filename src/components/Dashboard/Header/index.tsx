// STYLES
import {
  ContainerProfile,
  HeaderContent,
  ImageProfile,
  InputSearch,
  NameUser,
  TitleBySession,
} from "./styles";
import ModalNewProduct from "../ModalCreateProduct";

// TYPES
import { IPropsHeaderAdmin } from "./types";

import { useAuth } from "@src/hooks/useAuth";

const HeaderAdmin = ({ title, placeholder }: IPropsHeaderAdmin) => {
  const { user } = useAuth();

  return (
    <HeaderContent>
      <TitleBySession>{title}</TitleBySession>
      <InputSearch placeholder={placeholder} />
      <ModalNewProduct textButton="Novo Produto" />

      <ContainerProfile>
        <ImageProfile src={user?.avatar} alt="profile-picture" loading="lazy" />
        <NameUser>{`${user?.name} ${user?.lastname}`}</NameUser>
      </ContainerProfile>
    </HeaderContent>
  );
};

export default HeaderAdmin;
