import { Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Card className="h-165 w-full max-w-125 py-7.5 px-7 bg-[#121217] z-1 opacity-80 rounded-[22px] overflow-visible shadow-[10px] shadow-white border border-gray-700">
        <CardHeader className="flex flex-col w-full justify-center items-center">
          <Image
            src="/logo-ltek-clear.png"
            alt=""
            aria-hidden="true"
            width={500}
            height={500}
            className="h-30 w-auto "
          />
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="flex items-center justify-center bg-zinc-800 h-14 rounded-[10px] border border-gray-700">
            <Tabs defaultValue="signin">
              <TabsList className="w-full rounded-[12px] bg-transparent">
                <TabsTrigger
                  className="h-12 w-50 data-[state=active]:text-white data-[state=inactive]:text-gray-400  data-[state=active]:font-semibold data-[state=active]:bg-[#2F363A]/95"
                  value="signin"
                >
                  <span>Iniciar Sesión</span>
                </TabsTrigger>
                <TabsTrigger
                  className="h-12 w-50 data-[state=active]:text-white data-[state=inactive]:text-gray-400 data-[state=active]:font-semibold data-[state=active]:bg-[#2F363A]/95"
                  value="signup"
                >
                  <span>Registrarse</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#f4f4f5] text-[28px] font-bold">
              Bienvenido de nuevo
            </h1>
            <p className="text-[#9a9aa3] text-[16px]">
              Ingresa tus datos para continuar con tus proyectos.
            </p>
          </div>
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
              <p className="text-[#2bc7e0] text-[14px]">
                ¿Olvidaste tu contraseña?
              </p>
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
        </CardContent>
      </Card>
    </div>
  );
}
