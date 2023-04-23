import { useAuth } from "@src/hooks/useAuth";
import { Avatar, ContainerAccountInfo, Username } from "./styles";

const AccountButton = () => {
  const { user } = useAuth();
  return (
    <ContainerAccountInfo>
      {!user?.avatar ? (
        <img src={`${user?.avatar}`} alt="avatar-do-usuário" />
      ) : (
        <Avatar>{user?.name.charAt(0)}</Avatar>
      )}
      <Username>{`${user?.name} ${user?.lastname}`}</Username>
    </ContainerAccountInfo>
  );
};

export default AccountButton;
