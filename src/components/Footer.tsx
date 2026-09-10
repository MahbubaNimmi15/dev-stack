const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg brand-gradient-bg flex items-center justify-center font-bold">
                DS
              </div>

              <div className="text-xl font-bold">
                <span>Dev</span>
                <span className="brand-gradient-text">
                  {" "}Stack
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4 max-w-sm leading-6">
              Explore modern development technologies and build
              the perfect stack for your next project.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5 text-sm">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#technologies" className="hover:text-white">
                Technologies
              </a>

              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#about" className="hover:text-white">
                About
              </a>

              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Privacy
              </a>

              <a href="#" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer