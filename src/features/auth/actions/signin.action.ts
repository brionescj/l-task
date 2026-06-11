"use server";
import type { SignIn } from "../schemas/signin.schema";
import { signInWithEmailService } from "../services/signin-with-email.service";

export const signInAction = async (payload: SignIn) => {
  return await signInWithEmailService(payload);
};
