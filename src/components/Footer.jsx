import { FaWhatsapp, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918837728241?text=Hello%20Pulitzer%20Priest%20Photography!%0A%0AI%20am%20interested%20in%20booking%20a%20photography%20session.%0A%0AEvent%20Type%3A%0A-%20Graduation%0A-%20Wedding%0A-%20Portrait%0A-%20Event%20Coverage%0A-%20Brand%20Content%0A%0APreferred%20Date%3A%0A%0APlease%20share%20your%20packages%20and%20availability."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              className="transition hover:opacity-80"
            >
              <FaWhatsapp size={32} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/modhekaii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Instagram"
              className="transition hover:opacity-80"
            >
              <FaInstagram size={32} />
            </a>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} pulitzerpriest. All rights reserved.
          </div>
        </div>
      </footer>

    </>

  );

}