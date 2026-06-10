"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { signUpAction } from "@/features/auth/actions/signup.action";
import {
  type SignUp,
  SignUpSchema,
} from "@/features/auth/schemas/signup.schema";

export default function SignUpPage() {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SignUp) {
    await signUpAction(data);
  }

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-[#f4f4f5] text-[28px] font-bold">Crea tu cuenta</h1>
        <p className="text-[#9a9aa3] text-[16px]">
          Empieza a organizar tus proyectos y tareas.
        </p>
      </div>
      <form
        className="space-y-4"
        id="form-signup"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-white text-[15px]"
                htmlFor="form-signup-name"
              >
                Nombre Completo
              </FieldLabel>
              <Input
                {...field}
                id="form-signup-name"
                aria-invalid={fieldState.invalid}
                placeholder="Escribe tu nombre"
                autoComplete="off"
                className="text-white h-13 border border-gray-700"
                type="text"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-white text-[15px]"
                htmlFor="form-signup-email"
              >
                Nombre Completo
              </FieldLabel>
              <Input
                {...field}
                id="form-signup-email"
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
                htmlFor="form-signup-password"
              >
                Contraseña
              </FieldLabel>
              <InputGroup className="text-white h-13 border border-gray-700">
                <InputGroupInput
                  {...field}
                  id="form-signup-password"
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
          form="form-signup"
          className="mt-4 bg-white text-black text-[16px] w-full font-semibold hover:bg-white h-15"
        >
          Iniciar Sesión
        </Button>
      </form>
    </>
  );
}
