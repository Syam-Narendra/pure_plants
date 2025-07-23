import ContactCard from "~/components/Contact-Us";
import Footer from "~/components/Footer";
import { businessName } from "~/data/text.en";

export default function Index() {
  return (
    <div className=" bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{businessName}</h1>
          <p className="text-lg text-white">Get in touch with our team</p>
        </div>

        <ContactCard />
      </div>
      <Footer />
    </div>
  );
}
