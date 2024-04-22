import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

export function Testimonials() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-slate-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      id="reviews"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        pauseOnHover
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This community has always been welcoming. When I first started learning about 3D print and 3D modeling, everything felt so difficult. I would constantly mess up and I even thought about picking a new hobby. Before I quit, I decided to see if I could do anything to improve my skills and feel encouraged to continue, and that’s when I found out about PrintSpace. After coming once, I found many people who are passionate about 3D printing just like me! Some of them were even people who have been 3D printing and modeling for five years. Now it’s been two years and I love PrintSpace.",
    name: "Bob John",
    stars: 5,
  },
  {
    quote:
      "I’ve been involved with PrintSpace for many years now. PrintSpace has always given that feeling of accomplishment and the members there are super supportive and accepting. No matter how bad or good you are at 3D modeling and printing, there will always be people there to give you advice and help you. Thanks to PrintSpace, I’ve found a hobby I very much enjoy and never forget.",
    name: "Janet James",
    stars: 5,
  },
  {
    quote:
      "I’ve been a CAD technician for about a decade and I very much enjoy my experience with PrintSpace. PrintSpace is a great place to let my creativity loose and make whatever I want. I’m also able to meet many people looking to learn 3D modeling and printing, and help them. It always makes my day helping beginners with CAD, something that I’ve put my heart and soul into perfecting.",
    name: "Kent Cleveland",
    stars: 3.9,
  },
  {
    quote:
      "I love PrintSpace and the people there. Despite being a high school student, everyone treats me like the other adults. I’ve also been able to meet many awesome people and make many friends.",
    name: "Arjun Kumar",
    stars: 4.1,
  },
  {
    quote:
      "I’m an immigrant coming from Germany and I was previously a CAD technician in Germany. My family and I decided to move closer to the rest of our family, so we moved to the United States. At PrintSpace, I was able to meet many people and make many new friends that I’ll never forget. Despite my accent, everyone still accepts me which makes me happy. I recommend joining PrintSpace to anyone interested in CAD. ",
    name: "Felix Klien",
    stars: 5,
  },
  {
    quote:
      "I recommend anyone interested in 3D modeling to try PrintSpace. I love the community there and everyone is super supportive. I just started learning CAD and PrintSpace has helped me improve my skills while making friends.",
    name: "Bill Miller",
    stars: 4.2,
  },
];
