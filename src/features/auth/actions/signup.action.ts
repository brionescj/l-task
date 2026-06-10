"use server";
import type { SignUp } from "../schemas/signup.schema";

export const signUpAction = async (payload: SignUp) => {
  console.log(payload);
};
