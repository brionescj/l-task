import { prisma } from "@/features/core/db/db";
import type { SignUp } from "../schemas/signup.schema";

export const AuthRepository = {
  registerUser: async (payload: SignUp) => {
    return await prisma.user.create({
      data: payload,
    });
  },
};
