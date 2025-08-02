"use server";
import jwt from "jsonwebtoken";

export const decodeToken = async (token: string) => {
  const decoded = jwt.decode(token);
  return decoded;
};
