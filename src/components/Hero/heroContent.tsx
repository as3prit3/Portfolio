import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeroName } from "./heroName";
import { skills } from "@/lib/data/skills";
import { cn } from "@/lib/utils"
import Image from "next/image";
import ProfilePic from "@/../public/Profile.png"

export function HeroContent() {
	return (
		<Container className="mt-6">
			<Section>
				<HeroName />
				<div className="h-95 overflow-hidden mt-6 rounded-[16px]">
					<Image
						src={ProfilePic}
						alt="Picture of Houssam HADHADI"
						className="object-cover"
					/>
				</div>
				<div className="mt-6">
					<div className="mb-6 flex flex-col gap-4">
						<h1 className="font-sans font-semibold text-3xl">
							Software Engineer
						</h1>
						<p className="text-muted-foreground">
							I&apos;m a software engineer who builds clean, reliable web
							applications from front to back. Currently focused on
							React and Node, with an eye for code that&apos;s easy to read
							and maintain
						</p>
						<button className="bg-primary text-primary-foreground rounded-full py-2 px-6 self-start">
							Download CV
						</button>
					</div>

					<div className="flex flex-col gap-4">
						<h1 className={cn("uppercase font-sans font-semibold tracking-[0.03em]",
							"border-l-3 border-l-white pl-3")}>
							Tech Stack
						</h1>
						<ul className="flex flex-wrap gap-2">
							{skills.map((skill) => (
								<li key={skill}
									className={cn("font-mono text-xs text-secondary-foreground trackig-[0.03]",
									"bg-tech-card border-2 border-tech-card-border rounded-full",
									"px-3 py-1.5")}
								>
									{skill}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>
		</Container>
	)
}
