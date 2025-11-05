import Header from "./components/Header";
import Hero from "./components/Hero";


export default function App() {
  return (
    <>
      <img
        src="/gradient.png"
        alt="Gradient.img"
        className="absolute top-0 left-0 opacity-100 -z-10"
      />

      <Header/>
      <Hero/>
    </>
  );
}
