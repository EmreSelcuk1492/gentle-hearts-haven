
import React from 'react';
import CalendlyBooking from './CalendlyBooking';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-center w-full">
          {/* Discovery Call Booking */}
          <div className="w-full">
            <CalendlyBooking 
              title="Free Discovery Call"
              description="Schedule a 30-minute consultation to discuss your healing journey"
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
