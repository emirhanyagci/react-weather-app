import HeroText from "../components/HeroText";
import Logo from "../components/Logo";
import Search from "../components/Search/Search";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center  ">
      <div>
        <Logo />
      </div>
      <div className="mt-[70%] space-y-5">
        <HeroText />
        <Search />
      </div>
    </section>
  );
}
