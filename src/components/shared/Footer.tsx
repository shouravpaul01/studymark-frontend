import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

export function Footer() {
  const productLinks = [
    { id: 1, title: " Live Tutoring", href: "/" },
    { id: 2, title: " Smart Notes", href: "/" },
    { id: 3, title: "Study Wager", href: "/" },
    { id: 4, title: " Analytics", href: "/" },
  ];
  const socialMediaLinks = [
    { id: 1, icon: Twitter, href: "/" },
    { id: 2, icon: Facebook, href: "/" },
    { id: 3, icon: Linkedin, href: "/" },
    { id: 4, icon: Youtube, href: "/" },
  ];
  const companyLinks = [
    { id: 1, title: "About", href: "/" },
    { id: 2, title: "Terms", href: "/" },
    { id: 3, title: "Privacy", href: "/" },
  ];
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-[1430px] mx-auto px-5  py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-5">
            <Logo />
            <p className="max-w-md text-sm text-slate-300 leading-relaxed">
              Live Tutoring, Smart Notes, and Study Wagers—built to fire up your
              motivation with real stakes, real-time analytics, and beautifully
              simple tools.
            </p>
            {/* Social Media Icons */}
            <div className="mt-8 flex gap-4  ">
              {socialMediaLinks?.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition-colors hover:cursor-pointer hover:text-white "
                  aria-label={link.icon.toString()}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              {productLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              {companyLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-base text-slate-400">
            © {new Date().getFullYear()} StudyMark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}