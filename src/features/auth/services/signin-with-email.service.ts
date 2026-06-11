import type { User } from "@/generated/prisma";
import { AuthRepository } from "../repository/auth.repository";
import type { SignIn } from "../schemas/signin.schema";

export const signInWithEmailService = async (
  payload: SignIn,
): Promise<{ success: boolean; data: User | null }> => {
  const user = await AuthRepository.getUserByEmail(payload.email);

  if (!user) {
    return { success: false, data: null };
  }

  if (user.password !== payload.password) {
    return { success: false, data: null };
  }

  return { success: true, data: user };
};
