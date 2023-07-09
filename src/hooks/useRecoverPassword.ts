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
      const response = await api.post("/auth/forgot", {
        email: email,
      });
      ToastMessage(response.data.message, "success");
      setPagesCount(pagesCount + 1);
      return response;
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

  const handleVerifyToken: SubmitHandler<IPropsReset> = async (data) => {
    const { token } = data;
    const email = getValues("email");

    try {
      const response = await api.post("/auth/token", {
        email,
        token,
      });
      ToastMessage(response.data.message, "success");
      setPagesCount(pagesCount + 1);
      return response;
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

  const handleSubmitPassword: SubmitHandler<IPropsReset> = async (data) => {
    const email = getValues("email");
    const { password } = data;

    try {
      const response = await api.post("/auth/reset", {
        email: email,
        password: password,
      });
      ToastMessage(response.data.message, "success");
      handleRedirectUserForLoginPage();
      return response.data;
    } catch (err: any) {
      return ToastMessage(err.response.data.message, "error");
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
