import { useAuth } from "@src/hooks/useAuth";
import { Avatar, ContainerAccountInfo, Username } from "./styles";
import { useNavigate } from "react-router-dom";

const AccountButton = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  return (
    <ContainerAccountInfo>
      {!user?.avatar ? (
        <img src={`${user?.avatar}`} alt="avatar-do-usuário" />
      ) : (
        <Avatar>{user?.name.charAt(0)}</Avatar>
      )}
      <Username
        onClick={() => navigate("/Profile")}
      >{`${user?.name} ${user?.lastname}`}</Username>
    </ContainerAccountInfo>
  );
};

export default AccountButton;
