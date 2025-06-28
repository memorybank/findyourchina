import {
    FlameIcon,
    MessageCircle,
    ShieldUser,
  } from "lucide-react";
  import React from "react";
  
const background_prefix = "mb-3 h-10 w-10 flex items-center justify-center rounded-full "

  const features = [
    {
        icon: ShieldUser,
        title: "Trust and safety first",
        description:
          "We carefully select locals.",
        background: background_prefix + "bg-green-400",
    },
    {
        icon: MessageCircle,
        title: "1 Day Service",
        description:
          "Our locals are native English speakers and always available to answer your questions.",
        background: background_prefix + "bg-yellow-400",
    },
    {
      icon: FlameIcon,
      title: "Endless Discovery Awaits",
      description:
        "Any specific requests? We will make it happen.",
      background: background_prefix + "bg-red-400",
    },
  ];
  
  const Features01Page = () => {
    return (
      <div className="flex justify-center items-center py-12 px-6 pt-0">
          <div className="mt-10 sm:mt-16 grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col border rounded-xl py-6 px-5"
              >
                <div className={feature.background}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-semibold">{feature.title}</span>
                <p className="mt-1 text-foreground/80 text-[15px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default Features01Page;
  