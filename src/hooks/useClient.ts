import usersService from "@src/services/Users/users.service";
import { useQuery } from "react-query";

const useClient = () => {
  const { data } = useQuery(["users"], () => {
    return usersService.handleGetAllUsers();
  });

  return {
    data,
  };
};

export default useClient;
