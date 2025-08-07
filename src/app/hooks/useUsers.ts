"use client";

import { fetchUsersById, ProfileResponse } from "@/lib/queries";
import { BaseResponse } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useUsers(id: string) {
  return useQuery<BaseResponse<ProfileResponse>, Error>({
    queryKey: ["users", id],
    queryFn: () => fetchUsersById(id),
    enabled: !!id,
    staleTime: 1000 * 60,
  });
}
