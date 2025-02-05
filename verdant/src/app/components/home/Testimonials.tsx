"use client";

import { cn } from "@/app/_lib/utils";
import { IconQuoteFilled } from "@tabler/icons-react";
import Image from "next/image";

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="py-20">
      <h1 className="text-8xl text-center font-semibold">
        Our{" "}
        <span className="text-9xl font-bold  text-primary font-lead tracking-tighter">
          Reviews.
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto items-start px-4 md:px-8 mt-10">
        {grid.map((testimonialsCol, index) => (
          <div
            key={`testimonials-col-${index}`}
            className="grid gap-4 items-start"
          >
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="flex gap-2 items-center mt-8">
                  <Image
                    src={testimonial.src}
                    alt="Manu Arora"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription className="font-bold">
                      {testimonial.name}
                    </QuoteDescription>
                    <QuoteDescription className="text-[10px] text-accent font-semibold">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-transparent relative bg-white dark:bg-[rgba(40,40,40,0.30)] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group transition-all duration-300 hover:shadow-inner hover:shadow-[#22c55e40]",
        className
      )}
    >
      <IconQuoteFilled className="absolute top-2 left-2 text-primary" />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-base font-normal dark:text-white text-black py-2 relative",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal  text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Patel",
    quote:
      "The best plant-based Indian food I've ever had! The flavors are authentic, and you can taste the freshness in every bite.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Food Blogger",
  },
  {
    name: "Raj Mehta",
    quote:
      "Amazing experience! The spices were just right, and the atmosphere was warm and inviting.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Local Guide",
  },
  {
    name: "Sophia Rodriguez",
    quote:
      "I never knew plant-based food could be this flavorful! Everything was beautifully presented and delicious.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Health Enthusiast",
  },
  {
    name: "James Thompson",
    quote: "A must-visit spot for anyone looking for fresh, wholesome meals!",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Frequent Diner",
  },
  {
    name: "Meera Shah",
    quote:
      "Their thali is my absolute favorite! Fresh, authentic, and packed with flavor.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Restaurant Critic",
  },
  {
    name: "Daniel Lee",
    quote:
      "A perfect balance of tradition and modern flavors. The best Indian restaurant in town, hands down!",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Tech Professional",
  },
  {
    name: "Priya Verma",
    quote:
      "So happy to have found a place that serves delicious, plant-based Indian food. Their spices and flavors are just incredible!",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Vegan Advocate",
  },
  {
    name: "Chris Evans",
    quote:
      "Every dish here feels like a work of art! You can tell they put a lot of love and care into the food.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Food Photographer",
  },
  {
    name: "Neha Kapoor",
    quote:
      "Great food, great people, great vibes! I keep coming back because they never disappoint.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Regular Customer",
  },
  {
    name: "Ryan Carter",
    quote:
      "From the first bite, I knew this place was special. Authentic Indian flavors with a plant-based twist!",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Traveler & Foodie",
  },
  {
    name: "Ayesha Malik",
    quote:
      "Incredible attention to detail! Every dish bursts with flavors that take me back to my childhood.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Homestyle Food Lover",
  },
  {
    name: "Dev Sharma",
    quote:
      "I can’t get enough of their dal and roti! A truly refreshing take on classic Indian comfort food.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Fitness Coach",
  },
  {
    name: "Emily Wright",
    quote:
      "The service, the food, the ambiance—everything about this place is perfection. Highly recommended!",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Lifestyle Blogger",
  },
  {
    name: "Arjun Das",
    quote:
      "A gem in the city! Their commitment to fresh ingredients really shines through in every dish.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Food Connoisseur",
  },
];
