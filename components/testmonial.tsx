import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Johanna",
    designation: "German, 26",
    testimonial:
      "As a Hanfu lover, I was thrilled when the guide took me to an exquisite Hanfu shop. The experience was authentic and unforgettable. Highly recommend their personalized service!",
  },
  {
    id: 2,
    name: "Gupta",
    designation: "Indian, 42",
    testimonial:
      "Our family had an amazing time! They brought us to the best crab restaurant in town, and food there was divine. Truly a delightful culinary experience!",
  },
  {
    id: 3,
    name: "William",
    designation: "American, 31",
    testimonial:
      "Just finished a fantastic 5-day solo trip. Each day was a unique adventure. From cultural tours to hidden gems, it was a memorable journey. Can't wait to book our next trip with them!",
      },
];

const Testimonial01 = () => (
  <div className="flex justify-center items-center py-12 px-6">
    <div>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 bg-accent rounded-xl p-6 break-inside-avoid"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial01;
