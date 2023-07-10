import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <section className="flex pt-24 flex-col items-center justify-between h-screen bg-phone bg-cover">
      <div>
        <h1 className="font-title text-4xl lg:text-6xl text-shadow-md text-neutral-600">
          MORE SOUL TATTOO
        </h1>
      </div>
      <div className="flex flex-col w-full items-center pb-12">
        <h2 className="font-text text-3xl lg:text-5xl text-shadow-md text-neutral-700">
          NATHAN GARCIA
        </h2>
        <p className="font-text text-lg text-shadow-md text-neutral-700">
          586.698.2257
        </p>
        <p className="font-text text-lg text-shadow-md text-neutral-700">
          33476 Van Dyke Ave
        </p>
        <p className="font-text text-lg text-shadow-md text-neutral-700">
          Sterling Heights, MI 48312
        </p>
        <a
          href="https://www.instagram.com/moresoultattoo/"
          className="font-text text-2xl text-shadow-lg text-neutral-700 hover:text-neutral-500"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="flex-stretch"></div>
    </section>
  );
}
