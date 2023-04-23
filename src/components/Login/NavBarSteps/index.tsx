// STYLES
import { ContainerNavBarSteps, ContainerStep, StepDescription } from "./styles";

const NavBarSteps = ({ nextStepsCount }: { nextStepsCount: number }) => {
  return (
    <ContainerNavBarSteps>
      <>
        {nextStepsCount === 0 ? (
          <>
            <ContainerStep>
              <StepDescription borderColor="#4bb543">
                Encaminhamento de E-mail
              </StepDescription>
            </ContainerStep>
          </>
        ) : (
          <>
            <ContainerStep>
              <StepDescription>Encaminhamento de E-mail</StepDescription>
            </ContainerStep>
          </>
        )}
      </>

      <>
        {nextStepsCount === 1 ? (
          <>
            <ContainerStep>
              <StepDescription borderColor="#4bb543">
                Encaminhamento de Token
              </StepDescription>
            </ContainerStep>
          </>
        ) : (
          <>
            <ContainerStep>
              <StepDescription>Encaminhamento de Token</StepDescription>
            </ContainerStep>
          </>
        )}
      </>

      <>
        {nextStepsCount === 2 ? (
          <>
            <ContainerStep>
              <StepDescription borderColor="#4bb543">
                Cadastro de Nova senha
              </StepDescription>
            </ContainerStep>
          </>
        ) : (
          <>
            <ContainerStep>
              <StepDescription>Cadastro de Nova senha</StepDescription>
            </ContainerStep>
          </>
        )}
      </>
    </ContainerNavBarSteps>
  );
};

export default NavBarSteps;
