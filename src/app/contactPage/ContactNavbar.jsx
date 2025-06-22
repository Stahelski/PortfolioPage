import Link from "next/link";

export default function ContactNavbar() {
  return (
    <>
      <div className="Navbar z-[5] h-[7.8dvh] w-full flex justify-around items-center rounded-[27px_27px_0_0] md:px-38">
        <a
          className="text-md sm:text-2xl md:text-3xl xl:text-4xl text-amber-50"
        >
          Send me an Email
        </a>
      </div>
    </>
  );
}
