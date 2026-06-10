import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 h-15 border border-gray-700">
      <Link className="font-bold text-xl text-white" href="/">
        L-Task
      </Link>
      <Link className="font-bold text-xl text-white" href="/signin">
        Iniciar sesión
      </Link>
    </div>
  );
};
