import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="bg-phone bg-cover min-h-screen overflow-y-hidden overflow-x-hidden flex flex-col w-full">
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-6xl font-title text-shadow-lg text-neutral-300">
          More Soul Tattoo
        </h1>
        <p className="font-text text-lg text-shadow-lg text-neutral-200">
          586.698.2257
        </p>
        <p className="font-text text-lg text-shadow-lg text-neutral-200">
          33476 Van Dyke Ave
        </p>
        <p className="font-text text-lg text-shadow-lg text-neutral-200">
          Sterling Heights, MI 48312
        </p>
        <a
          href="https://www.instagram.com/moresoultattoo/"
          className="font-text text-2xl text-shadow-lg text-neutral-200"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
