import z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(3, "El nombre debe contener al menos 3 carácteres"),
  email: z.email("Ingrese un email válido."),
  password: z
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres."),
});

export type SignUp = z.infer<typeof SignUpSchema>;
