import { api } from "../api";

export default {
  async submitEmail(email: string) {
    try {
      const response = await api.post("/auth/forgot", {
        email,
      });
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  },
  async validateToken(email: string, token: string) {
    try {
      const response = await api.post("/auth/token", {
        email,
        token,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async submitNewPassword(email: string, password: string) {
    try {
      const response = await api.post("/auth/reset", {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
