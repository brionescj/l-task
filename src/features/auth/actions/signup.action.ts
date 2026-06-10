"use server";
import type { SignUp } from "../schemas/signup.schema";
import { registerUserService } from "../services/register-user.service";

export const signUpAction = async (payload: SignUp) => {
  return await registerUserService(payload);
};
