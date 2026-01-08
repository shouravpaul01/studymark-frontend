"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function NavLink({ href, children, icon }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-300 ease-linear text-[16px] font-normal leading-[24px] "
 ${
   pathname === href
     ? "text-primary "
     : "text-[#18191B] hover:text-primary"
 }`}
    >
      {" "}
      {icon}
      {children}
    </Link>
  );
}

export default NavLink;