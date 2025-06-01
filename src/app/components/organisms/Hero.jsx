import HeroBG from "../atoms/HeroBG";
import RoundBtnArtstadion from "../atoms/RoundBtnArtstation";
import RoundBtnGithub from "../atoms/RoundBtnGithub";
import RoundBtnMail from "../atoms/RoundBtnMail";

export default function Hero() {
  return (
    <>
      <RoundBtnMail />
      <RoundBtnArtstadion />
      <RoundBtnGithub />
      <HeroBG />
    </>
  );
}
