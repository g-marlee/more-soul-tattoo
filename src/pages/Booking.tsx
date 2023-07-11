import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Booking() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bdkjqbk",
        "template_pzdbzm3",
        e.currentTarget,
        "-rV69wm0qc92J0Y_6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className="flex pt-24 flex-col items-center bg-phone bg-cover bg-fixed h-screen">
      <div>
        <h1 className="font-title text-4xl lg:text-6xl text-shadow-md text-neutral-600">
          BOOKING
        </h1>
      </div>
      <form
        action=""
        id="bookingForm"
        className="flex flex-col"
        onSubmit={sendEmail}
      >
        <input type="text" placeholder="First Name" name="firstname" required />
        <input type="text" placeholder="Last Name" name="lastname" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="tel" name="phone" placeholder="666-420-6969" />
        <input
          type="checkbox"
          id="existingClient"
          name="existingClient"
          value="Existing Client"
        />
        <label htmlFor="existingClient">I am a returning client</label>
        <input
          type="checkbox"
          id="firstTattoo"
          name="firstTattoo"
          value="First Tattoo"
        />
        <label htmlFor="firstTattoo">This is my first tattoo</label>
        <input type="text" name="location" id="location" required />
        <label htmlFor="location">Tattoo Location</label>
        <input type="radio" id="color" name="colorOrBlackwork" value="Color" />
        <label htmlFor="color">Color</label>
        <input
          type="radio"
          id="black"
          name="colorOrBlackwork"
          value="Black & Gray"
        />
        <label htmlFor="black">Black & Gray</label>
        <label htmlFor="size">
          Approximate size (eg: sleeve, half sleeve, etc)
        </label>
        <input type="text" name="size" id="size" required />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          form="bookingForm"
        ></textarea>
        <label htmlFor="reference">Reference images</label>
        <input type="file" id="reference" name="reference" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
