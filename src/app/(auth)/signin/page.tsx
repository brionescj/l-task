"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { signInAction } from "@/features/auth/actions/signin.action";
import {
  type SignIn,
  SignInSchema,
} from "@/features/auth/schemas/signin.schema";

export default function SignInPage() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SignIn) {
    const result = await signInAction(data);
    if (!result.success) {
      toast.error("Usuario y/o contraseña incorrecto.");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-[#f4f4f5] text-[28px] font-bold">
          Bienvenido de nuevo
        </h1>
        <p className="text-[#9a9aa3] text-[16px]">
          Ingresa tus datos para continuar con tus proyectos.
        </p>
      </div>
      <form
        className="space-y-4"
        id="form-signin"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-white text-[15px]"
                htmlFor="form-signin-email"
              >
                Correo electrónico
              </FieldLabel>
              <Input
                {...field}
                id="form-signin-email"
                aria-invalid={fieldState.invalid}
                placeholder="tu@correo.com"
                autoComplete="off"
                className="text-white h-13 border border-gray-700"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-white text-[15px]"
                htmlFor="form-signin-password"
              >
                Contraseña
              </FieldLabel>
              <InputGroup className="text-white h-13 border border-gray-700">
                <InputGroupInput
                  {...field}
                  id="form-signin-password"
                  aria-invalid={fieldState.invalid}
                  placeholder="contraseña"
                  autoComplete="off"
                  type="password"
                />
                <InputGroupAddon align="inline-end">
                  <Eye className="size-5" />
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          type="submit"
          form="form-signin"
          className="mt-4 bg-white text-black text-[16px] w-full font-semibold hover:bg-white h-15"
        >
          Iniciar Sesión
        </Button>
      </form>
    </>
  );
}
