import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <section className="flex pt-24 flex-col items-center justify-between h-screen bg-phone bg-cover bg-fixed">
      <div className="flex h-1/3 items-center">
        <h1 className="font-title text-6xl lg:text-7xl text-shadow-md text-neutral-600">
          More Soul Tattoo
        </h1>
      </div>
      <div className="flex h-1/3 items-center mb-12 justify-center">
        <img
          src="portfolio-images/homepage.jpeg"
          alt=""
          className="rounded-full h-full shadow-lg"
        />
      </div>
      <div className="flex flex-col w-3/4 h-1/3 items-center  pb-12 justify-center">
        <h2 className="font-title text-3xl lg:text-5xl text-shadow-md text-neutral-700">
          Nathan Garcia
        </h2>
        <p className="font-text text-lg text-shadow-md text-neutral-700">
          MoreSoulTattoo@gmail.com
        </p>
        <p className="font-text text-lg text-shadow-md text-neutral-700">
          646 E 9 Mile
        </p>
        <p className="font-text text-lg text-shadow-md text-neutral-700">
          Ferndale MI, 48220
        </p>
        <a
          href="https://www.instagram.com/moresoultattoo/"
          className="font-text text-2xl text-shadow-lg text-neutral-700 hover:text-neutral-500"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}
