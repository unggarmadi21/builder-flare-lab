import { ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-secondary font-work-sans font-bold text-lg uppercase tracking-[2.88px] mb-4">
            Welcome to Meddical
          </div>
          <h2 className="font-yeseva text-3xl text-primary mb-6">
            A Great Place to Receive Care
          </h2>
          <p className="text-black font-work-sans max-w-2xl mx-auto leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat 
            scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit 
            nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <button className="flex items-center gap-2 mx-auto text-primary font-work-sans hover:gap-3 transition-all">
            Learn More
            <ArrowRight className="w-4 h-4 text-secondary" />
          </button>
        </div>

        {/* Team Image */}
        <div className="relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f80e38bd10f05ae75aacb000c378b42c9edcacd4?width=1984"
            alt="Medical Team"
            className="w-full h-64 object-cover rounded-lg"
          />
          
          {/* Decorative Circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/50"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-secondary/30"></div>
          
          {/* Progress Bars */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 rounded-b-lg overflow-hidden">
            <div className="h-full flex">
              <div className="bg-accent flex-1"></div>
              <div className="bg-primary flex-[2.7]"></div>
              <div className="bg-secondary flex-[0.7]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
