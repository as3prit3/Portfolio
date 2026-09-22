import { Mail, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { Container } from "@/components/layout/container";

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
			<form className="mt-8 w-full max-w-140">
				<div>
				<label
					htmlFor="name"
					className="block text-xs font-medium text-white"
				>
					Full Name
				</label>

				<div className="relative mt-1.5">
					<input
					id="name"
					name="name"
					type="text"
					autoComplete="name"
					placeholder="Full Name"
					className="
						h-10
						w-full
						rounded-lg
						border
						border-white/10
						bg-[#18181A]
						px-4
						text-xs
						text-white
						outline-none
						placeholder:text-[#77777C]
						transition-colors
						focus:border-white/30
					"
					/>
				</div>
				</div>

				<div className="mt-4">
				<label
					htmlFor="email"
					className="block text-xs font-medium text-white"
				>
					Email
				</label>

				<input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					placeholder="Email"
					className="
					mt-1.5
					h-10
					w-full
					rounded-lg
					border
					border-white/10
					bg-[#18181A]
					px-4
					text-xs
					text-white
					outline-none
					placeholder:text-[#77777C]
					transition-colors
					focus:border-white/30
					"
				/>
				</div>

				<div className="mt-4">
				<label
					htmlFor="message"
					className="block text-xs font-medium text-white"
				>
					Message
				</label>

				<textarea
					id="message"
					name="message"
					rows={5}
					placeholder="Your message..."
					className="
					mt-1.5
					min-h-26
					w-full
					resize-none
					rounded-lg
					border
					border-white/10
					bg-[#18181A]
					px-4
					py-3
					text-xs
					leading-relaxed
					text-white
					outline-none
					placeholder:text-[#77777C]
					transition-colors
					focus:border-white/30
					"
				/>
				</div>

				<button
				type="submit"
				className="
					mt-2
					flex
					h-10
					w-full
					items-center
					justify-center
					gap-1.5
					rounded-lg
					border
					border-white
					bg-transparent
					text-[12px]
					font-medium
					text-white
					transition-colors
					hover:bg-white
					hover:text-black
					focus-visible:outline-2
					focus-visible:outline-offset-2
					focus-visible:outline-white
				"
				>
				<Send size={14} strokeWidth={1.5} />
				Send Message
				</button>
			</form>
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
						href="#"
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
