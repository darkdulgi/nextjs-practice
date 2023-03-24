import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex flex-col gap-5 place-items-center shadow-lg mt-5 shadow-gray-400 mb-10">
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
  );
}