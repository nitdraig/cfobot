import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen">
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="max-w-[280px] mx-auto">
          <div className="flex flex-col items-center mt-[10vh]">
            <h2 className="mb-5 text-gray-900  font-bold text-xl">
              Iniciar Sesión
            </h2>

            <form>
              <input
                type="text"
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                placeholder="Email"
                value=""
              />
              <input
                type="password"
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                placeholder="Password"
                value=""
              />
              <button className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
                Iniciar Sesión
              </button>
            </form>
            <p className="text-center mt-3 text-[14px]">
              ¿No tienes cuenta? <br />
              <Link href="/register" className="text-gray-600">
                Crea una
              </Link>
            </p>
            <p className="text-center mt-3 text-[14px]">
              Al continuar confirmas que aceptas los términos y las politicas de
              privacidad
              <br />
              <Link href="/" className="text-gray-600">
                Termis of Service
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-gray-600">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
