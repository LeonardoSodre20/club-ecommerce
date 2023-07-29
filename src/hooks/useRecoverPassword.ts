import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ToastMessage from "@src/components/Dashboard/ToastMessage";

// SERVICES
import { api } from "@src/services/api";

// SCHEMA
import schemaResetPassword from "@src/validations/ResetPasswordValidation";

// TYPES
import { IPropsReset } from "@src/pages/Login/ForgotPassword/types";

// SERVICE
import recoverService from "@src/services/RecoverPassword/recover.service";

const initialValues: IPropsReset = {
  email: "",
  token: "",
  password: "",
};

const useRecoverPassword = () => {
  const [pagesCount, setPagesCount] = useState<number>(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IPropsReset>({
    defaultValues: initialValues,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schemaResetPassword),
  });

  const handleRedirectUserForLoginPage = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handlePreviousStep = () => {
    setPagesCount((prev) => prev - 1);
  };

  const handleSubmitEmail: SubmitHandler<IPropsReset> = async (data) => {
    try {
      const { email } = data;

      const response = await recoverService.submitEmail(email);

      ToastMessage(response?.message, "success");
      setPagesCount(pagesCount + 1);
    } catch (err: any) {
      ToastMessage(err.response?.message, "error");
    }
  };

  const handleVerifyToken: SubmitHandler<IPropsReset> = async (data) => {
    const { token } = data;
    const email = getValues("email");

    try {
      const response = await recoverService.validateToken(email, token);

      ToastMessage(response.message, "success");
      setPagesCount(pagesCount + 1);
    } catch (err: any) {
      ToastMessage(err.response.message, "error");
    }
  };

  const handleSubmitPassword: SubmitHandler<IPropsReset> = async (data) => {
    const email = getValues("email");
    const { password } = data;

    try {
      const response = await recoverService.submitNewPassword(email, password);
      ToastMessage(response.message, "success");
      handleRedirectUserForLoginPage();
    } catch (err: any) {
      ToastMessage(err.response.message, "error");
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    isSubmitting,
    handlePreviousStep,
    pagesCount,
    handleSubmitEmail,
    handleVerifyToken,
    handleSubmitPassword,
  };
};

export default useRecoverPassword;
