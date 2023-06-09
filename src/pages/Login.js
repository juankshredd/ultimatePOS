import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Login() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className="font-mono font-bold">Ingreso a Ultimate POS</h1>
        <br></br>
        <div className="">
          <label className="font-mono font-bold">Usuario</label>
          <div className="">
            <input placeholder="Su usuario" className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/20"></input>
          </div>
        </div>
        <br></br>
        <div className="">
          <label className="font-mono font-bold">Contraseña</label>
          <div className="">
            <input placeholder="Su contraseña" className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/20"></input>
          </div>
        </div>
      </div>
    </main>
  );
}
