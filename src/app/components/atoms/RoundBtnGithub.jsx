import css from "../../globals.css";

export default function RoundBtnGithub() {
  return (
    <div className="RoundBtnGradient z-[1]  flex justify-center items-center rounded-full w-[6.7dvh] h-[6.7dvh] relative group">
      <button className="RoundBtn flex justify-center items-center rounded-full w-[6dvh] h-[6dvh]">
        <img src="/Github.svg" className="RoundBtnImg w-[4dvh] h-auto" />
      </button>
      {/* <div className="RoundBtnHiddenLink absolute top-15 left-27 mb-2 w-25 text-sm p-2">
        <a href="https://gymgrosisten.no" className="underline">
          My Epost
        </a>
      </div> */}
    </div>
  );
}
