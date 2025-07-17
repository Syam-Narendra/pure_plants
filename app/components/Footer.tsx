import {
  businessIntro,
  businessName,
  copyRightText,
  FooterLinks,
  iconsinFooter,
} from "~/data/text.en";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
                {businessName}
              </h2>
            </div>

            <div className="flex space-x-4">
              {iconsinFooter.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={icon.ariaLabel}
                >
                  {icon.iconComponent}
                </a>
              ))}
            </div>
            <div className="max-w-md">
              <p className="text-gray-300 leading-relaxed">{businessIntro}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FooterLinks.map((mainLink, index) => (
              <div key={index}>
                <h3 key={index} className="text-white font-semibold mb-4">
                  {mainLink.heading}
                </h3>

                <ul className="space-y-3">
                  {mainLink.subLinks.map((subLink, index) => (
                    <li key={index}>
                      <a
                        href={subLink.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {subLink.linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500 text-sm">
            <p>{copyRightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
