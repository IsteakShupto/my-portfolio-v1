import IntroCard from "./IntroCard";
import IntroDesc from "./IntroDesc";

export default function Hero() {
  return (
    <>
      <div className="w-[400px] md:w-[800px] xl:w-[1100px] mx-auto px-5 py-10">
        <div className="xl:flex xl:gap-3">
          <IntroCard />
          <IntroDesc />
        </div>
      </div>
    </>
  );
}
