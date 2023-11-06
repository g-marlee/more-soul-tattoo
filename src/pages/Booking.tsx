import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Booking() {
  const [reference, setReference] = useState(null);

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
    <section className="flex pt-24 flex-col items-center bg-phone bg-cover bg-fixed py-8">
      <div>
        <h1 className="font-title text-6xl lg:text-7xl text-shadow-md text-neutral-600">
          Booking
        </h1>
      </div>
      <div className="w-fit h-fit mt-3 rounded-md bg-gradient-to-b from-neutral-300 to-neutral-200 p-6 shadow-lg shadow-neutral-500 my-3">
        <form
          action=""
          id="bookingForm"
          className="flex flex-col space-y-2 font-text text-neutral-700"
          onSubmit={sendEmail}
        >
          <div className="flex space-x-2">
            <input
              type="text"
              className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
              placeholder="First Name"
              name="firstname"
              required
            />
            <input
              type="text"
              className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
              placeholder="Last Name"
              name="lastname"
              required
            />
          </div>

          <input
            type="email"
            className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="tel"
            className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
            name="phone"
            placeholder="666-420-6969"
          />
          <div>
            <input
              type="checkbox"
              className="accent-neutral-600 mx-2"
              id="existingClient"
              name="existingClient"
              value="Existing Client"
            />
            <label htmlFor="existingClient">I am a returning client</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="accent-neutral-600 mx-2"
              id="firstTattoo"
              name="firstTattoo"
              value="First Tattoo"
            />
            <label htmlFor="firstTattoo">This is my first tattoo</label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="text-sm">
              TATTOO LOCATION
            </label>
            <input
              type="text"
              className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
              placeholder="Ex: Left arm, right leg, etc."
              name="location"
              id="location"
              required
            />
          </div>
          <div>
            <input
              type="radio"
              className="accent-neutral-600 mx-2"
              id="color"
              name="colorOrBlackwork"
              value="Color"
            />
            <label htmlFor="color">Color</label>
          </div>
          <div>
            <input
              type="radio"
              defaultChecked
              className="accent-neutral-600 mx-2"
              id="black"
              name="colorOrBlackwork"
              value="Black & Gray"
            />
            <label htmlFor="black">Black & Gray</label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="size" className="text-sm">
              APPROXIMATE SIZE
            </label>
            <input
              type="text"
              className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
              placeholder="Ex: Full sleeve, half sleeve, etc."
              name="size"
              id="size"
              required
            />
          </div>

          <textarea
            name="message"
            className="p-1 border rounded border-solid border-neutral-500 shadow-md focus:outline-neutral-700"
            placeholder="Please enter as many details about your tattoo idea as you would like. If you don't know how to describe something, a reference image is always helpful"
            id="message"
            cols={30}
            rows={10}
            form="bookingForm"
          ></textarea>
          <div>
            <label htmlFor="reference" className="text-sm">
              REFERENCE IMAGES
            </label>
            <br />
            <input
              type="file"
              id="reference"
              name="reference"
              multiple={true}
            />
          </div>
          <input
            type="submit"
            className="py-1 px-3 w-fit self-center bg-neutral-100 border cursor-pointer rounded border-solid border-neutral-500 shadow-md hover:border-neutral-700 hover:bg-neutral-400 hover:shadow-inner"
            value="SEND"
          />
        </form>
      </div>
    </section>
  );
}
