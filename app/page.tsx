'use client'
import Link from "@/node_modules/next/link";
import { useRouter } from "@/node_modules/next/navigation";

export default function Home() {
   const router = useRouter()
  return (
    <>
      {/* <h1 className={"text-4xl"}>Hello Home Page</h1>
      <Link href={"/dashboard"}>dashboard</Link> */}
       <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    </>
  );
}
