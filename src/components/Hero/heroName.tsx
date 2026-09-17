import { cn } from "@/lib/utils"

export function HeroName() {
	return (
		<>
			<h1
				className={cn(
				"font-sans font-bold ",
				"flex flex-col sm:text-center sm:flex-row sm:justify-center",
				"gap-[clamp(0.25rem,2vw,4rem)]",
				"tracking-[clamp(0.05em,0.6vw,0.5em)]",
				)}
			>
				<span
				className={cn(
					"text-transparent",
					"[-webkit-text-stroke:clamp(1px,0.15vw,2px)_white]",
					"text-[clamp(3rem,6vw,130px)]",
				)}
				>
				HOUSSAM
				</span>
				<span className="text-[clamp(3rem,6vw,130px)]">
				HADHADI
				</span>
			</h1>
		</>
	)
}
