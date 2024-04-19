import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { motion } from "framer-motion";
export function ThreeDCardDemo() {
  let data = [
    {
      title: "Collaboration",
      description:
        "Here at Printspace, we’re all about collaboration and teamwork. We want you to work with others, and create your wildest dreams!",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creativity",
      description:
        "3D printing is all about creativity. We want to bring out the creativity in you, and help you create something beautiful!",
      image:
        "https://images.unsplash.com/photo-1563520239648-a24e51d4b570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Fun",
      description:
        "As you craft something extraordinary, we encourage you to relish every moment! Share laughter with friends in diverse settings!",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="overflow-x-hidden mb-5">
      <div className="flex 2xl:flex-row flex-col 2xl:justify-around mx-3 ">
        {data.map((item, index) => (
          <CardContainer className="inter-var">
            <motion.div
              className="text-center flex items-center justify-center"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                type: "spring",
              }}
            >
              <CardBody
                key={index}
                className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-2"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </motion.div>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
