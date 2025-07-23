import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { businessName } from "~/data/text.en";

export default function ContactCard() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col-reverse md:flex-row">
      {/* Image Section (Bottom on mobile, right on desktop) */}
      <div className="w-full md:w-1/2">
        <img
          src="/leaves.jpg"
          alt="leaves"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Info Section (Top on mobile, left on desktop) */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        {/* Logo & Business Name */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <svg
              width="48"
              height="32"
              viewBox="0 0 48 32"
              className="text-green-500"
            >
              <path
                d="M8 24L16 8L24 24H8Z"
                fill="currentColor"
                className="opacity-80"
              />
              <path d="M20 24L28 8L36 24H20Z" fill="currentColor" />
              <circle cx="12" cy="20" r="1" fill="white" />
              <circle cx="16" cy="20" r="1" fill="white" />
              <circle cx="24" cy="20" r="1" fill="white" />
              <circle cx="28" cy="20" r="1" fill="white" />
            </svg>
          </div>
          <h1 className="text-2xl font-light text-green-700 tracking-wide">
            {businessName}
          </h1>
        </div>

        {/* Contact Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-light text-gray-700 mb-2">
            Contact <em className="font-serif">Us</em>
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded" />
        </div>

        {/* Contact Items */}
        <div className="space-y-5 text-sm text-gray-700">
          {[
            { icon: <Phone className="w-4 h-4 text-white" />, label: "123-456-7890" },
            {
              icon: <Mail className="w-4 h-4 text-white" />,
              label: "hello@reallygreatsite.com",
            },
            {
              icon: <MapPin className="w-4 h-4 text-white" />,
              label: "123 Anywhere St., Any City",
            },
            {
              icon: <Globe className="w-4 h-4 text-white" />,
              label: "www.reallygreatsite.com",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
