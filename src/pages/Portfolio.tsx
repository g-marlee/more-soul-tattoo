export default function Portfolio() {
  return (
    <section className="flex pt-24 flex-col items-center bg-phone bg-cover bg-fixed">
      <div>
        <h1 className="font-title text-4xl lg:text-6xl text-shadow-md text-neutral-600">
          PORTFOLIO
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-1 gap-4 ml-4 mr-2 w-1/2">
          <img src="/portfolio-images/IMG_0109.png" className="w-full" />
          <img src="/portfolio-images/IMG_0212.png" />
          <img src="/portfolio-images/IMG_0606.png" />
          <img src="/portfolio-images/IMG_4692.png" />
          <img src="/portfolio-images/IMG_7668.png" />
          <img src="/portfolio-images/IMG_7680.png" />
          <img src="/portfolio-images/IMG_7817.png" />
          <img src="/portfolio-images/IMG_7827.png" />
          <img src="/portfolio-images/IMG_7995.png" />
        </div>
        <div className="grid grid-cols-1 gap-4 mr-4 w-1/2 h-max">
          <img src="/portfolio-images/IMG_8060.png" />
          <img src="/portfolio-images/IMG_8182.png" />
          <img src="/portfolio-images/IMG_8194.png" />
          <img src="/portfolio-images/IMG_9131.png" />
          <img src="/portfolio-images/IMG_9237.png" />
          <img src="/portfolio-images/IMG_9252.png" />
          <img src="/portfolio-images/IMG_9305.png" />
          <img src="/portfolio-images/IMG_9312.png" />
        </div>
      </div>
    </section>
  );
}
