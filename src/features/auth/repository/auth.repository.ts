import { prisma } from "@/features/core/db/db";
import { passwordManager } from "../lib/password-manager";
import type { SignUp } from "../schemas/signup.schema";

export const AuthRepository = {
  registerUser: async (payload: SignUp) => {
    return await prisma.user.create({
      data: {
        ...payload,
        password: await passwordManager.createHash(payload.password),
      },
    });
  },

  getUserByEmail: async (email: string) => {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  },
};
