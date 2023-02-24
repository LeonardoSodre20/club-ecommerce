import { Avatar, ContainerAccountInfo, Username } from "./styles";

const AccountButton = () => {
  const name = "Leonardo Vieira Sodré";
  return (
    <ContainerAccountInfo>
      <Avatar>{name.charAt(0)}</Avatar>
      <Username>{name}</Username>
    </ContainerAccountInfo>
  );
};

export default AccountButton;
