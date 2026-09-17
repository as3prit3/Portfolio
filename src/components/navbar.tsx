// "use client"

// import { useState } from "react"
// import { cn } from "@/lib/utils"

// const links = [
//   { label: "Projects", href: "#projects" },
//   { label: "Experience", href: "#experience" },
//   { label: "Contact", href: "#contact" },
// ]

// export function NavBar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="font-nav relative flex items-center justify-between px-6 py-5 sm:px-24 lg:px-30 lg:py-8">
//       <h1 className="text-2xl font-bold tracking-wide lg:text-4xl">HH</h1>

//       {/* Desktop links */}
//       <ul className="hidden items-center gap-10 text-sm tracking-wide md:flex lg:gap-15">
//         {links.map((link) => (
//           <li key={link.label}>
//             <a href={link.href} className="transition-opacity hover:opacity-70 text-lg lg:text-xl">
//               {link.label}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Hamburger button (mobile only) */}
//       <button
//         type="button"
//         onClick={() => setIsOpen((prev) => !prev)}
//         aria-label={isOpen ? "Close menu" : "Open menu"}
//         aria-expanded={isOpen}
//         className="z-10 flex h-6 w-7 flex-col justify-between md:hidden"
//       >
//         <span
//           className={cn(
//             "h-[1.5px] w-full origin-center bg-white transition-transform duration-300",
//             isOpen && "translate-y-[10.5px] rotate-45",
//           )}
//         />
//         <span
//           className={cn(
//             "h-[1.5px] w-full bg-white transition-opacity duration-300",
//             isOpen && "opacity-0",
//           )}
//         />
//         <span
//           className={cn(
//             "h-[1.5px] w-full origin-center bg-white transition-transform duration-300",
//             isOpen && "translate-y-[-10.5px] -rotate-45",
//           )}
//         />
//       </button>

//       {/* Mobile menu */}
//       <ul
//         className={cn(
//           "absolute left-0 top-full flex w-full flex-col items-center gap-6 bg-background py-8 text-sm tracking-wide transition-all duration-300 md:hidden",
//           isOpen
//             ? "visible translate-y-0 opacity-100"
//             : "invisible -translate-y-2 opacity-0",
//         )}
//       >
//         {links.map((link) => (
//           <li key={link.label}>
// 			<a
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="transition-opacity hover:opacity-70"
//             >
//               {link.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }


import Link from "next/link";

import { Container } from "@/components/layout/container";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header>
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between py-4 lg:py-6"
        >
          <Link
            href="/"
            aria-label="Houssam Hadhadi home"
            className="font-nav text-[22px] font-semibold leading-none transition-opacity hover:opacity-70 lg:text-2xl"
          >
            HH
          </Link>

          <ul className="flex items-center gap-4 lg:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-nav text-[13px] font-semibold leading-none transition-opacity hover:opacity-70 lg:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
