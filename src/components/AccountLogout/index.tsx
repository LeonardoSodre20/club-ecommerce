import { useAuth } from "../../contexts/auth/auth";
import { Avatar, ContainerAccountInfo, Username } from "./styles";

const AccountButton = () => {
  const { user } = useAuth();
  return (
    <ContainerAccountInfo>
      <Avatar>{user?.name.charAt(0)}</Avatar>
      <Username>{user?.name}</Username>
    </ContainerAccountInfo>
  );
};

export default AccountButton;
