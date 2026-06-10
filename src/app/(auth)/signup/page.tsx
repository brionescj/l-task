import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-[#f4f4f5] text-[28px] font-bold">Crea tu cuenta</h1>
        <p className="text-[#9a9aa3] text-[16px]">
          Empieza a organizar tus proyectos y tareas.
        </p>
      </div>
      <Field>
        <FieldLabel
          htmlFor="input-field-username"
          className="text-white text-[15px]"
        >
          Nombre completo
        </FieldLabel>
        <Input
          id="input-field-username"
          type="text"
          placeholder="Camilo Briones"
          className="text-white h-13 border border-gray-700"
        />
      </Field>

      <Field>
        <FieldLabel
          htmlFor="input-field-username"
          className="text-white text-[15px]"
        >
          Correo electrónico
        </FieldLabel>
        <Input
          id="input-field-username"
          type="text"
          placeholder="tu@correo.com"
          className="text-white h-13 border border-gray-700"
        />
      </Field>

      <Field>
        <div className="flex justify-between items-center">
          <FieldLabel
            htmlFor="input-field-password"
            className="text-white text-[15px]"
          >
            Contraseña
          </FieldLabel>
        </div>
        <InputGroup className="text-white h-13 border border-gray-700">
          <InputGroupInput id="input-group-url" placeholder="contraseña" />
          <InputGroupAddon align="inline-end">
            <Eye className="size-5" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Button className="mt-4 bg-white text-black text-[16px] w-full font-semibold hover:bg-white h-15">
        Iniciar Sesión
      </Button>
    </>
  );
}
