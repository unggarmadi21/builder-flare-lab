import { Phone, Clock, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Emergency Contact */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-secondary font-work-sans font-medium text-sm uppercase tracking-wider">
                Emergency
              </div>
              <div className="text-primary font-work-sans font-medium">
                (237) 681-812-255
              </div>
            </div>
          </div>

          {/* Work Hours */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-secondary font-work-sans font-medium text-sm uppercase tracking-wider">
                Work Hour
              </div>
              <div className="text-primary font-work-sans font-medium">
                09:00 - 20:00 Everyday
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-secondary font-work-sans font-medium text-sm uppercase tracking-wider">
                Location
              </div>
              <div className="text-primary font-work-sans font-medium">
                0123 Some Place
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="font-yeseva text-3xl">
          <span className="text-secondary">Healt</span>
          <span className="text-primary">ty</span>
        </div>
      </div>
    </div>
  );
}
