import axios from "axios";
import { useEffect, useState } from "react";
import { RootObject, User } from "../types/user";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "./useUpdateUser";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<RootObject>();
  const { data, isLoading, error, refetch } = useQuery(["users"], () =>
    axios.get<RootObject>(`${baseUrl}/users`).then((res) => res.data)
  );

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return { users, isLoading, error, refetch };
};
