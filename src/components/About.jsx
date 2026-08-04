
 import photographer from "../assets/about/photographer.jpeg";
 import {
  GraduationCap,
  PartyPopper,
  Video,
} from "lucide-react";
 export default function About(){
  const highlights = [
  {
    icon: GraduationCap,
    title: "Graduation Photography",
  },
  {
    icon: PartyPopper,
    title: "Events & Celebrations",
  },
  {
    icon: Video,
    title: "Creative Content & Portraits",
  },
];

    return (
 <section id="about" className="py-16 px-6 scroll-mt-4 md:scroll-mt-0">
   <p className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] mb-3 text-center">
 Behind the Lens
    </p>
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-light font-serif-heading text-center text-gray-800 mb-4">About</h2>
  <div className="flex flex-col lg:flex-row items-start gap-12">
     <div className="w-full max-w-sm">
      <div className="w-full max-w-sm">
          <img
            src={photographer}
            alt="Portrait of photographer Arthur M Dota"
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
      </div>
        
        {/* Image */}
      </div>

      <div className="flex-1">
        <p  className="text-gray-600 leading-relaxed">Hi, I'm Arthur M Dota, a photographer based in Mohali, dedicated to capturing life's most meaningful moments. Whether you're celebrating your graduation, a birthday, a wedding, creating content, or simply preserving a special chapter in your life, my goal is to create authentic images you'll be proud to look back on for years to come.</p>
        {/* Text */}
      <div className="space-y-4 my-8">
      {highlights.map((highlight) => {
        const Icon = highlight.icon;
        return(
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-gray-800" />
            <p className="text-gray-600">{highlight.title}</p>
          </div>
        );
      
      })}
      </div>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
  <a
    href="#contact"
    className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-white bg-gray-900 hover:bg-black transition-all duration-300 hover:scale-[1.02]"
  >
    Book a Session
  </a>
</div>
      </div>
  </div>
</div>
  </section>
    );
 }