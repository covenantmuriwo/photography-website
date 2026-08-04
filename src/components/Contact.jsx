import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
export default function Contact({
    handleSubmit,
    isSubmitting,
    isSubmitted,


}){
  const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8837728241",
  },
  {
    icon: Mail,
    title: "Email",
    value: "cod3nxmepriest.com@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Chandigarh",
  },
];
    return (
    <>
<section id="contact" className="py-16 px-6 scroll-mt-4 md:scroll-mt-0">

  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-16">
                {/* LEFT */}
      <div className="flex-1">
        <p className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] mb-4">
          LET'S WORK TOGETHER
        </p>
        <h2 className="text-5xl md:text-6xl font-light font-serif-heading text-gray-900 leading-tight mb-6">
          Ready to Capture <br />
          Your Story?
        </h2>
        {/* Heading */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-6">
             Whether you're celebrating a milestone or creating something special, I'd love to hear your story and help bring your vision to life.
        </p>

            {contactInfo.map((contact) => {

            const Icon = contact.icon

            return(

            <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#8B5E3C]" />
                  </div>
                  <div className="flex flex-col">
                      <p className="text-gray-900 font-semibold">{contact.title}</p>
                      <p className="text-gray-600">{contact.value}</p>
                  </div>
            </div>

            );

            })}

          </div>
          {/* RIGHT */}
        <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">

            <h3 className="text-2xl font-serif-heading text-gray-900 mb-2">
              Send a Message
            </h3>

            <p className="text-gray-600 mb-8">
              I'd love to hear about your vision. Fill out the form below and I'll get back to you as soon as possible.
            </p>
                      {isSubmitted ? (
            <div className="bg-green-50 text-green-800 py-4 px-6 rounded-lg">
              Thank you! Your message has been sent. I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2 text-left">
              <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium transition ${
                    isSubmitting
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-gray-900 text-white hover:bg-black"
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            )}
          </div>

        </div>
        
    </div>
    
  </div>
              <p
              style={{ fontFamily: "Allura, cursive" }}
              className="text-3xl py-6 text-[#8B5E3C]"
            >
              Let's create something beautiful together.
            </p>
</section>
    </>
    );
}