const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-fuchsia-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </span>

              <span className="text-base font-bold text-[#182238]">
                Dev <span className="text-[#d91b73]">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5 text-sm font-medium text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#d91b73]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-[#d91b73]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-[#d91b73]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#182238]">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#182238]">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#182238]">
              Legal
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d91b73]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-200" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
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