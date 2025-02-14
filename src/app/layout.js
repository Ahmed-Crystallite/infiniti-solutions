import "./globals.css"
// Fonts
import { fontMono, fontSans } from "./fonts"
import { Footer, Header } from "@/components"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
