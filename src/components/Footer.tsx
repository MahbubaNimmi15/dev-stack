const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>

              <div className="text-xl font-bold">
                <span className="text-white">Dev</span>
                <span className="brand-gradient-text">
                  {" "}Stack
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4 max-w-md">
              Build your perfect developer stack with modern
              technologies and tools.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              Home
            </a>

            <a
              href="#technologies"
              className="hover:text-white"
            >
              Technologies
            </a>

            <a href="#projects" className="hover:text-white">
              Projects
            </a>

            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 Dev Stack. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer