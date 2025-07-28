import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventsBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-8 bg-gradient-to-r from-healing-green/20 to-calming-blue/20 border-y border-healing-green/30">
      <div className="container mx-auto px-4">
        <div 
          onClick={() => navigate('/events')}
          className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-healing-green/20"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-healing-green/20 rounded-full">
              <Calendar className="w-6 h-6 text-healing-green" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Upcoming Events</h3>
              <p className="text-gray-600 text-sm">Join our healing workshops and community gatherings</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-healing-green group-hover:translate-x-1 transition-transform duration-300">
            <span className="font-medium">View Events</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;