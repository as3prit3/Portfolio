import { Mail, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full overflow-hidden rounded-t-[40px] bg-[#0E0E10]"
    >
	  <Container>
		<div className="mx-auto w-full max-w-360">
			{/* Contact */}
			<div className="flex flex-col items-center px-0 py-12 ">
				<div className="text-center">
					<h2
					id="contact-heading"
					className="
						font-display
						text-[clamp(38px,8vw,110px)]
						font-normal
						italic
						uppercase
						leading-none
						tracking-[-0.02em]
						text-white
					"
					>
					Get in touch
					</h2>

					<p
					className="
						mx-auto
						mt-4
						max-w-90
						text-[10px]
						leading-[1.4]
						text-[#A09FA3]
						sm:max-w-105
						sm:text-xs
					"
					>
					Have a question or want to work together? Drop me a message and
					I&apos;ll get back to you as soon as possible.
					</p>
				</div>

				{/* Form */}
				<ContactForm />
			</div>

			{/* Footer */}
			<footer>
				<div className="h-px w-full bg-linear-to-r from-white/8 via-white/25 to-white/8" />
				<div
					className="
					flex
					min-h-17
					flex-col
					items-center
					justify-between
					gap-4
					py-5
					sm:flex-row
					"
				>
					{/* Logo */}
					<a
					href="/"
					aria-label="Home"
					className="
						font-nav
						text-lg
						font-semibold
						tracking-tight
						text-white
					"
					>
					HH
					</a>

					{/* Copyright */}
					<p className="text-[10px] text-[#77777C] text-center">
					© 2026 Houssam HADHADI. Built with Next.js &amp; Tailwind CSS
					</p>

					{/* Social links */}
					<div className="flex items-center gap-2">
					<a
						href="https://www.linkedin.com/in/houssam-hadhadi/"
						aria-label="LinkedIn"
						className="
						flex
						size-8
						items-center
						justify-center
						rounded-full
						border
						border-white/10
						text-[#77777C]
						transition-colors
						hover:border-white/30
						hover:text-white
						"
					>
						<FaLinkedinIn size={14}/>
					</a>

					<a
						href="https://github.com/as3prit3"
						aria-label="GitHub"
						className="
						flex
						size-8
						items-center
						justify-center
						rounded-full
						border
						border-white/10
						text-[#77777C]
						transition-colors
						hover:border-white/30
						hover:text-white
						"
					>
						<FaGithub size={14}/>
					</a>

					<a
						href="mailto:houssamhadhadi@gmail.com"
						aria-label="Email"
						className="
						flex
						size-8
						items-center
						justify-center
						rounded-full
						border
						border-white/10
						text-[#77777C]
						transition-colors
						hover:border-white/30
						hover:text-white
						"
					>
						<Mail size={14} />
					</a>
					</div>
				</div>
			</footer>
		</div>
	  </Container>
    </section>
  );
}
