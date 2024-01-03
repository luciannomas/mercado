import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href='https://npc.com.ar/'>
        <span className="">Npc</span>
        <span>| System</span>
        <span> © {new Date().getFullYear()}</span>
      </Link>
    </div>
  )
}

