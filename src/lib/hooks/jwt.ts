import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { getTokenCookie } from "../cookies/get-token-cookie";
import { decodeToken } from "../jwt";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../api/users";

export const useJwtDataQuery = (
  options?: Partial<UseQueryOptions<JwtPayload & User>>,
): UseQueryResult<(JwtPayload & User) | null> => {
  return useQuery({
    queryKey: ["jwt-data"],
    queryFn: async () => {
      const token = await getTokenCookie();
      const jwtData = await decodeToken(String(token));
      return jwtData as JwtPayload & User;
    },
    ...options,
  });
};
