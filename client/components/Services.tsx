import { Heart, Stethoscope, TestTube, Droplets } from "lucide-react";

export default function Services() {
  return (
    <div className="py-16 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-secondary font-work-sans font-bold text-lg uppercase tracking-[2.88px] mb-4">
            Care you can believe in
          </div>
          <h2 className="font-yeseva text-3xl text-primary">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-work-sans font-medium text-black mb-8">
              A passion for putting patients first.
            </h3>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="font-work-sans text-black">
                  A Passion for Healing
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="font-work-sans text-black">5-Star Care</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="font-work-sans text-black">All our best</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="font-work-sans text-black">Believe in Us</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="font-work-sans text-black">
                  A Legacy of Excellence
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-secondary"></div>
                <span className="font-work-sans text-black">Always Caring</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-black font-work-sans leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
              <p className="text-black font-work-sans leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque. Convallis felis vitae tortor augue. Velit
                nascetur proin massa in.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-6">
            {/* Free Checkup Card */}
            <div className="bg-white border border-primary/20 rounded-lg p-6 relative">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-3">
                  <Stethoscope className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-work-sans text-black">Free Checkup</h4>
              </div>
            </div>

            {/* Cardiogram Card - Featured */}
            <div className="bg-secondary rounded-lg p-6 text-center relative">
              <div className="w-8 h-8 mx-auto mb-3">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-work-sans text-accent">Cardiogram</h4>
              <div className="absolute bottom-0 left-0 right-0 bg-secondary rounded-b-lg p-3">
                <span className="text-accent font-work-sans text-sm">
                  View All
                </span>
              </div>
            </div>

            {/* DNA Testing Card */}
            <div className="bg-white border border-primary/20 rounded-lg p-6 relative">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-3">
                  <TestTube className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-work-sans text-black">DNA Testing</h4>
              </div>
            </div>

            {/* Blood Bank Card */}
            <div className="bg-white border border-primary/20 rounded-lg p-6 relative">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-3">
                  <Droplets className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-work-sans text-black">Blood Bank</h4>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="hidden lg:block space-y-6">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8f8a2c0d437f246aeb67c5fdb04eed0a1cc1c146?width=648"
                alt="Medical Professional"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 rounded-b-lg overflow-hidden">
                <div className="h-full flex">
                  <div className="bg-accent flex-1"></div>
                  <div className="bg-primary flex-[2.7]"></div>
                  <div className="bg-secondary flex-[0.7]"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ff9bf4ef8f0d6a313853340e1db5b61a75278ddf?width=648"
                alt="Medical Team"
                className="w-full h-48 object-cover rounded-lg"
              />
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
      </div>
    </div>
  );
}
