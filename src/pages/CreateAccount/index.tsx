import { useState } from "react";
import Header from "../../components/Header";
import InputBase from "../../components/InputBase";
import { ContainerMainAccount, FormControl, TitleFormMain } from "./styles";

const CreateAccount = () => {
  return (
    <>
      <Header />
      <ContainerMainAccount>
        <FormControl>
          <TitleFormMain>Crie sua conta</TitleFormMain>

          <InputBase
            label="Nome"
            width="500px"
            placeholder="Digite seu nome..."
          />

          <InputBase
            label="Sobrenome"
            width="500px"
            placeholder="Digite seu sobrenome..."
          />

          <InputBase
            label="E-mail"
            width="500px"
            placeholder="Digite seu e-mail..."
          />

          <InputBase
            type="password"
            label="Senha"
            width="500px"
            placeholder="Digite sua senha..."
          />

          <InputBase
            type="password"
            label="Confirmação de senha"
            width="500px"
            placeholder="Confirme sua senha..."
          />
        </FormControl>
      </ContainerMainAccount>
    </>
  );
};

export default CreateAccount;
