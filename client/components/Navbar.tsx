import { Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="bg-secondary py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Navigation Menu */}
        <nav className="flex items-center gap-8">
          <a 
            href="/" 
            className="text-accent font-work-sans font-semibold text-lg"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="text-white font-work-sans text-lg hover:text-accent transition-colors"
          >
            About us
          </a>
          <a 
            href="/services" 
            className="text-white font-work-sans text-lg hover:text-accent transition-colors"
          >
            Services
          </a>
          <a 
            href="/doctors" 
            className="text-white font-work-sans text-lg hover:text-accent transition-colors"
          >
            Doctors
          </a>
          <a 
            href="/news" 
            className="text-white font-work-sans text-lg hover:text-accent transition-colors"
          >
            News
          </a>
          <a 
            href="/contact" 
            className="text-white font-work-sans text-lg hover:text-accent transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Search and Appointment */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Appointment Button */}
          <Button 
            className="bg-accent text-primary font-work-sans font-medium px-8 py-3 rounded-full hover:bg-accent/90 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
