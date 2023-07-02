// TYPES
import { IUser } from "@src/pages/Admin/Users/types";

import providerUsers from "@src/providers/Users/provider.users";
import { useQuery } from "react-query";

const useClient = () => {
  const { data } = useQuery<IUser[] | null>(["users"], () => {
    return providerUsers.handleGetAllUsers();
  });

  return {
    data,
  };
};

export default useClient;
