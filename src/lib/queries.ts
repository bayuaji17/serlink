import { BaseResponse, Users } from "./types";

export interface ProfileResponse {
  users: Users;
}

export async function fetchUsersById(
  id: string
): Promise<BaseResponse<ProfileResponse>> {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
