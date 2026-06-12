import type { User } from "@/generated/prisma";
import { passwordManager } from "../lib/password-manager";
import { sessionManager } from "../lib/session-manager";
import { AuthRepository } from "../repository/auth.repository";
import type { SignIn } from "../schemas/signin.schema";

export const signInWithEmailService = async (
  payload: SignIn,
): Promise<{ success: boolean; data: User | null }> => {
  const user = await AuthRepository.getUserByEmail(payload.email);

  if (!user) {
    return { success: false, data: null };
  }

  const validPassword = await passwordManager.comparePassword(
    payload.password,
    user.password,
  );

  if (!validPassword) {
    return { success: false, data: null };
  }

  await sessionManager.createSession({
    email: user.email,
    name: user.name,
    userId: user.id,
  });

  return { success: true, data: user };
};
