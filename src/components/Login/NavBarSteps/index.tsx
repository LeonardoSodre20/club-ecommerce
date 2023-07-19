// STYLES
import * as S from "./styles";

const NavBarSteps = ({ nextStepsCount }: { nextStepsCount: number }) => {
  return (
    <S.ContainerNavBarSteps>
      <S.ContainerStep>
        <S.StepDescription borderColor={nextStepsCount === 0 ? "#4bb543" : ""}>
          Encaminhamento de E-mail
        </S.StepDescription>
      </S.ContainerStep>

      <S.ContainerStep>
        <S.StepDescription borderColor={nextStepsCount === 1 ? "#4bb543" : ""}>
          Encaminhamento de Token
        </S.StepDescription>
      </S.ContainerStep>

      <S.ContainerStep>
        <S.StepDescription borderColor={nextStepsCount === 2 ? "#4bb543" : ""}>
          Cadastro de Nova senha
        </S.StepDescription>
      </S.ContainerStep>
    </S.ContainerNavBarSteps>
  );
};

export default NavBarSteps;
