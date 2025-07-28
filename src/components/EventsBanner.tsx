import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventsBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 bg-gradient-to-br from-healing-green via-calming-blue to-healing-green/60 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-1/4 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-24 h-24 bg-healing-green/40 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>
      
      {/* Translucent background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white/5 font-bold text-8xl md:text-9xl transform -rotate-12 select-none">
          HEALING
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white/3 font-bold text-6xl md:text-7xl transform rotate-12 translate-x-32 translate-y-16 select-none">
          WELLNESS
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          onClick={() => navigate('/events')}
          className="flex items-center justify-between p-8 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-healing-green/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer group border border-white/30"
        >
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-gradient-to-br from-healing-green to-calming-blue rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-2xl mb-1">Upcoming Events</h3>
              <p className="text-gray-600 text-base">Join our healing workshops and community gatherings</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-healing-green group-hover:translate-x-2 transition-all duration-300">
            <span className="font-semibold text-lg">View Events</span>
            <div className="p-2 bg-healing-green/10 rounded-full group-hover:bg-healing-green/20 transition-colors duration-300">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;