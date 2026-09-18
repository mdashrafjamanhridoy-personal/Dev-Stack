const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Brand */}
          <div className="text-center md:text-left lg:col-span-2">
            {/* Brand */}
            <a
              href="#"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-linear-to-br from-fuchsia-500 to-pink-500 text-[9px] font-bold text-white">
                DS
              </span>

              <span className="text-base font-bold text-[#182238]">
                Dev <span className="text-[#d91b73]">Stack</span>
              </span>
            </a>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-slate-500 sm:text-sm md:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center justify-center gap-5 text-xs font-medium text-slate-600 md:justify-start sm:text-sm">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#d91b73]"
              >
                GitHub
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="#"
                className="transition hover:text-[#d91b73]"
              >
                Twitter
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="#"
                className="transition hover:text-[#d91b73]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#182238]">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#182238]">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#182238]">
              Legal
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d91b73]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-7 border-t border-slate-200 sm:mt-10" />

        {/* Bottom */}
        <div className="flex items-center justify-between gap-4 pt-4 text-[10px] text-slate-400 sm:pt-5 sm:text-xs">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex shrink-0 gap-4 sm:gap-6">
            <a
              href="#"
              className="transition hover:text-[#d91b73]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#d91b73]"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;