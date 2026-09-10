const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Build Your Perfect
            <span className="brand-gradient-text">
              {" "}Developer Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
            Explore modern development technologies and create the perfect
            stack for your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="brand-gradient-bg text-white px-6 py-3 rounded-full font-semibold">
              Explore Technologies
            </button>

            <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/banner.png"
            alt="Developer Stack"
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero