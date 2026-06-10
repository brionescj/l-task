"use server";
import type { SignIn } from "../schemas/signin.schema";

export const signInAction = async (payload: SignIn) => {
  console.log(payload);
};
