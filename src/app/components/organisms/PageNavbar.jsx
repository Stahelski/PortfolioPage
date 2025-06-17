import Link from "next/link";

export default function PageNavbar() {
  return (
    <>
      <div className="AboutNavbar mx-auto mt-6 mb-4 h-[7vh] md:h-[10vh] w-[95%] rounded-2xl flex flex-row justify-around items-center px-4">
        <Link
          href="/"
          className="cursor-pointer text-xl sm:text-4xl md:text-6xl"
        >
          FrontendForge
        </Link>
        <div className="flex gap-21">
          <Link
            href="/contactPage"
            className="cursor-pointer text-xl sm:text-3xl md:text-5xl"
          >
            Contact
          </Link>
          <Link
            href="/aboutPage"
            className="cursor-pointer text-xl sm:text-3xl md:text-5xl"
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
}

// <div className="2025 text-sm md:text-lg">© 2025</div>
// <div className="CAContainer gap-20 flex justify-around items-start sm:ml-80 text-sm md:text-lg">
