import type { User } from "@/generated/prisma";
import { sessionManager } from "../lib/session-manager";
import { AuthRepository } from "../repository/auth.repository";
import type { SignUp } from "../schemas/signup.schema";

export const registerUserService = async (
  payload: SignUp,
): Promise<{ success: boolean; data: User | null }> => {
  const existUser = await AuthRepository.getUserByEmail(payload.email);

  if (existUser) {
    return { success: false, data: null };
  }
  const user = await AuthRepository.registerUser(payload);
  if (user) {
    await sessionManager.createSession({
      email: user.email,
      name: user.name,
      userId: user.id,
    });
    return { success: true, data: user };
  } else {
    return { success: false, data: null };
  }
};
