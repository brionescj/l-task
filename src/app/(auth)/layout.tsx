import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Card className="h-auto w-full max-w-125 py-7.5 px-7 bg-[#121217] z-1 opacity-80 rounded-[22px] overflow-visible shadow-[10px] shadow-white border border-gray-700">
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
                  asChild
                >
                  <Link href={"/signin"}>Iniciar Sesión</Link>
                </TabsTrigger>
                <TabsTrigger
                  className="h-12 w-50 data-[state=active]:text-white data-[state=inactive]:text-gray-400 data-[state=active]:font-semibold data-[state=active]:bg-[#2F363A]/95"
                  value="signup"
                  asChild
                >
                  <Link href={"/signup"}>Registrarse</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
