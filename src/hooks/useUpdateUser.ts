import axios from "axios";
import { useEffect, useState } from "react";
import { SelectedUser } from "../components/Table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const baseUrl =
  (import.meta.env.API_URL as string) || "http://localhost:8080";

export const useUpdateUser = (user: SelectedUser | null) => {
  const queryClient = useQueryClient();

  return useMutation(
    (user: SelectedUser) => axios.patch(`${baseUrl}/users/${user.id}`, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        toast.success("User updated successfully");
      },
    }
  );
};
