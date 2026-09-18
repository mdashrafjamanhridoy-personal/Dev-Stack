import ContentImage from "../assets/Container.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div
        className="
          mx-auto flex max-w-7xl items-center
          px-5 py-12
          sm:px-8 sm:py-16
          lg:min-h-[420px] lg:px-10 lg:py-20
          flex-col lg:flex-row
          justify-between
          gap-10 lg:gap-16
        "
      >
        {/* Left Content */}
        <div className="w-full max-w-[620px] text-center lg:text-left">
          <h1
            className="
              text-3xl font-extrabold leading-tight tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-[48px]
            "
          >
            <span className="block text-[#101828]">
              Build Your Ideal
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-orange-500
                via-pink-500
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Development Stack
            </span>
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-[520px]
              text-sm leading-6 text-slate-500
              sm:text-[15px] sm:leading-7
              lg:mx-0
            "
          >
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7 flex flex-col items-center gap-3
              sm:flex-row sm:justify-center
              lg:justify-start
            "
          >
            <button
              className="
                w-full rounded-md
                bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
                px-5 py-2.5
                text-sm font-medium text-white
                transition duration-200
                hover:opacity-90
                sm:w-auto
              "
            >
              Explore Technologies
            </button>

            <button
              className="
                w-full rounded-md
                border border-slate-200
                bg-white
                px-6 py-2.5
                text-sm font-medium text-slate-600
                transition duration-200
                hover:bg-slate-50
                sm:w-auto
              "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            flex w-full
            justify-center
            lg:w-auto
            lg:shrink-0
          "
        >
          <img
            src={ContentImage}
            alt="Development Stack"
            className="
              w-[220px]
              sm:w-[260px]
              md:w-[290px]
              lg:w-[340px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;