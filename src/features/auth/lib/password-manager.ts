import bcrypt from "bcryptjs";

export const passwordManager = {
  createHash: async (password: string) => {
    return await bcrypt.hash(password, 10);
  },
  comparePassword: async (password: string, passwordHashed: string) => {
    return await bcrypt.compare(password, passwordHashed);
  },
};
