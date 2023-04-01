import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const router = useRouter();
  const { data } = useSession();
  return (
    <div className="shadow-lg shadow-gray-400">
      <div className="flex place-content-end place-items-center gap-2 mt-3 mx-3">
        <img src={data?.user?.image as string} className={`${data === null ? "hidden" : "rounded-full"} w-10`} />
        <span className="text-gray-600">{data?.user?.name}</span>
        <button className="bg-indigo-600 text-white rounded-full p-2 shadow-md shadow-indigo-300" type="button" onClick={() => {
          if (data !== null) signOut();
          else signIn("google");
        }}>
          {data !== null ? "Sign out" : "Sign In"}
        </button>
      </div>

      <nav className="flex flex-col gap-5 place-items-center mb-10">
        <img className='max-w-xs' src="/vercel.svg" />
        <div className="flex gap-10 font-bold text-xl">
          <Link href='/'>
            <span className={router.pathname === '/' ? 'text-orange-600' : ''}>Home</span>
          </Link>
          <Link href="/about">
            <span className={router.pathname === "/about" ? 'text-orange-600' : ''}>About</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}