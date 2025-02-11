import { ArrowRight } from "lucide-react"
export default function CTA({
  link = "javascript:;",
  css = "",
  text = "Get started",
  variant = "default",
}) {
  const variantClasses = {
    default:
      "bg-transparent border-black text-black hover:bg-black hover:text-white",
    link: "border-none bg-transparent text-black underline",
    secondary:
      "bg-black border-black text-white hover:bg-transparent hover:text-black",
    withIcon:
      "bg-black border-black text-white hover:bg-transparent hover:text-black gap-x-5",
  }

  const buttonClasses = variantClasses[variant] || variantClasses.default

  const iconHTML =
    variant === "withIcon"
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`
      : ""

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a
                  href="${link}"
                  class="border transition-all ease-in-out duration-300 font-mono font-bold text-base leading-tight w-max h-[48px] rounded-[50px] px-8 gap-4 inline-flex items-center justify-center ${buttonClasses} ${css}"
                >
                ${text}
                ${iconHTML}
                </a>`,
      }}
    />
  )
}
