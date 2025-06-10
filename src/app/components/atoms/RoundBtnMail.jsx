import css from "../../globals.css";

export default function RoundBtnMail() {
  return (
    <div className="RoundBtnGradient z-[1]  flex justify-center items-center rounded-full w-[6.7dvh] h-[6.7dvh] relative group">
      <a
        href="/contactPage" /* Linken til nettsiden */
        // target="_blank" /* åpner linken på ny fane */
        rel="noopener noreferrer" /* er anbefalt for sikkerhet ved eksterne lenker.. noopener hindrer den åpne fanen i å få kontroll over window.opener, som ellers kan brukes til å manipulere eller omdirigere den opprinnelige siden.
                                     noreferrer fjerner referanse-headeren, så den eksterne siden ikke vet hvor trafikken kom fra (personvern). */
        className="RoundBtn flex justify-center items-center rounded-full w-[6dvh] h-[6dvh]"
      >
        <img
          src="/Mail.svg"
          className="RoundBtnImg w-[4dvh] h-auto"
          alt="Github"
        />
      </a>
    </div>
  );
}
