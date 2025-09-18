import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-[550px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://api.builder.io/api/v1/image/assets/TEMP/51daed43868b281ed04bbac30f90811aceaa1821?width=2732")`
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/80 via-gray-200/40 to-transparent"></div>
        
        {/* Decorative Circles */}
        <div className="absolute -right-24 -top-32 w-96 h-96 rounded-full bg-accent/50"></div>
        <div className="absolute -left-24 -bottom-32 w-96 h-96 rounded-full bg-secondary/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-lg">
          <div className="text-secondary font-work-sans font-bold text-lg uppercase tracking-[2.88px] mb-7">
            Caring for Life
          </div>
          
          <h1 className="font-yeseva text-5xl text-primary leading-tight mb-8">
            Leading the Way
            <br />
            in Medical Excellence
          </h1>
          
          <Button className="bg-accent text-primary font-work-sans font-medium px-9 py-4 rounded-full hover:bg-accent/90 text-base">
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}
