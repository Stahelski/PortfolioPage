import Link from "next/link";

export default function PricingNavbar() {
  return (
    <>
      <div className="AboutNavbar z-[5] h-[7.8dvh] w-full flex justify-around items-center md:px-38">
        <Link
          href="/"
          className="cursor-pointer text-md sm:text-3xl md:text-4xl xl:text-5xl"
        >
          FrontendForge
        </Link>

     

        <Link
          href="/contactPage"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          Contact
        </Link>
        <Link
          href="/aboutPage"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          About
        </Link>

        <a
          href="https://github.com/Stahelski"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          Github
        </a>
      </div>
    </>
  );
}
