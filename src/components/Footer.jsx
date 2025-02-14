// Next
import Image from "next/image"

// Media
import Logo from "media/home/footer/logo.svg"
import BG from "media/home/background_noise.png"
import Icon1 from "media/home/footer/icons/facebook.svg"
import Icon2 from "media/home/footer/icons/twitter.svg"
import Icon3 from "media/home/footer/icons/instagram.svg"
import Icon4 from "media/home/footer/icons/linkedIn.svg"
import Icon5 from "media/home/footer/icons/call.svg"
import Icon6 from "media/home/footer/icons/mail.svg"
import Icon7 from "media/home/footer/icons/location.svg"
import Link from "next/link"
const Footer = () => {
  const footerNav = [
    {
      title: "Navigation",
      links: [
        { href: "#", text: "Service" },
        { href: "#", text: "Agency" },
        { href: "#", text: "Case Study" },
        { href: "#", text: "Resource" },
        { href: "#", text: "Contact" },
      ],
    },
    {
      title: "Licence",
      links: [
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Copyright" },
        { href: "#", text: "Email Address" },
      ],
    },
    {
      title: "Contact",
      links: [
        { icon: Icon5, href: "tel:000000000", text: "(000) 000-0000" },
        {
          icon: Icon6,
          href: "mailto:abcxyz@example.com",
          text: "abcxyz@example.com",
        },
        {
          icon: Icon7,
          href: "https://maps.google.com/",
          text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
        },
      ],
    },
  ]
  return (
    <section>
      <div className="relative z-10 lg:py-[100px] md:py-[80px] py-[50px]">
        <Image
          src={BG}
          alt="noise"
          className="absolute bg-[#FAFAFA] opacity-100 -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
            <div className="max-w-[550px]">
              <Link href="/" className="block mb-5">
                <Image src={Logo} alt="logo" />
              </Link>
              <p className="font-mono text-sm leading-normal text-secondary font-normal">
                We can manage your infrastructure affordably and seamlessly by
                applying our award-winning IT solutions. So you will get
                Customized IT Solutions.
              </p>
              <ul className="flex items-center gap-x-3 mt-5">
                {[
                  ["https://www.facebook.com/", Icon1],
                  ["https://x.com/", Icon2],
                  ["https://www.instagram.com/", Icon3],
                  ["https://linkedin.com/", Icon4],
                ].map(([link, img], i) => (
                  <li key={i}>
                    <Link
                      href={link}
                      target="_blank"
                      className="flex items-center justify-center w-[34px] h-[34px] bg-white rounded-[34px] transition-all ease-in-out duration-500 hover:scale-110"
                    >
                      <Image src={img} alt="smmIcon" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-10">
              {footerNav.map((nav, i) => (
                <div key={i}>
                  <h4 className="text-[#192031] font-mono text-[18px] leading-tight font-semibold mb-5">
                    {nav.title}
                  </h4>
                  <ul className="grid grid-cols-1 gap-y-4">
                    {nav.links.map((link, i) => (
                      <li key={i} className="flex gap-2 w-full">
                        {link.icon && (
                          <Image
                            src={link.icon}
                            alt="icon"
                            className="shrink-0 w-[24px] h-[24px]"
                          />
                        )}
                        <a
                          href={link.href}
                          className="block w-[100%] text-sm leading-tight font-mono font-normal text-[#9B9B9C] hover:underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
