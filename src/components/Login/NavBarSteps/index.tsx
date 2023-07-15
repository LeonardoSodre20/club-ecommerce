// STYLES
import { ContainerNavBarSteps, ContainerStep, StepDescription } from "./styles";

const NavBarSteps = ({ nextStepsCount }: { nextStepsCount: number }) => {
  return (
    <ContainerNavBarSteps>
      <ContainerStep>
        <StepDescription borderColor={nextStepsCount === 0 ? "#4bb543" : ""}>
          Encaminhamento de E-mail
        </StepDescription>
      </ContainerStep>

      <ContainerStep>
        <StepDescription borderColor={nextStepsCount === 1 ? "#4bb543" : ""}>
          Encaminhamento de Token
        </StepDescription>
      </ContainerStep>

      <ContainerStep>
        <StepDescription borderColor={nextStepsCount === 2 ? "#4bb543" : ""}>
          Cadastro de Nova senha
        </StepDescription>
      </ContainerStep>
    </ContainerNavBarSteps>
  );
};

export default NavBarSteps;
