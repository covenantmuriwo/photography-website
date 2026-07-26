import {
  GraduationCap,
  PartyPopper,
  Heart,
  User,
  Video,
  Camera,
} from "lucide-react";
export default function Services(){
    const services = [
      {
        title: "Graduations",
        description: "Celebrate your biggest achievement.",
        icon: GraduationCap,
      },
      {
        title: "Birthdays & Celebrations",
        description: "Capture every unforgettable moment.",
        icon: PartyPopper,
      },
      {
        title: "Couples",
        description: "Natural moments that tell your story.",
        icon: Heart,
      },
      {
        title: "Portraits",
        description: "Timeless portraits with a personal touch.",
        icon: User,
      },
      {
        title: "Content Creation",
        description: "Professional visuals for creators and brands.",
        icon: Video,
      },
      {
        title: "Weddings",
        description: "Beautiful storytelling for your special day.",
        icon: Camera,
      },
    ];
return(
    <section id="services" className="py-16 px-6">
    <p className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] mb-3 text-center">
  WHAT I OFFER
    </p>
<div className="max-w-7xl mx-auto">

<h2 className="text-3xl md:text-4xl font-light font-serif-heading text-center text-gray-800 mb-4">Photography & Videography Services</h2>
<p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
  From graduation milestones and birthday celebrations to creative content,
  portraits, weddings, and unforgettable events—we're here to tell your story.
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{services.map((service) => {
  const Icon = service.icon;
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition hover:-translate-y-2 hover:shadow-2xl group">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-10 h-10 text-gray-800" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
        
    </div>
  );
})}
</div>
</div>
    </section>
)
}
