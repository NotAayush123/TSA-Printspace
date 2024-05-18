import styles from "./About.module.css";
import Reliability from "../assets/Reliability.png";
import Trust from "../assets/Trust.png";
import { IconArrowDown } from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3dCard";
import { motion } from "framer-motion";
const About = () => {
  let data = [
    {
      title: "Trust",
      description:
        "Trust is at the core of Printspace. We provide various makerspace opportunities, and your trust is our top priority. We never share your information, and our sole goal is to help people learn and have fun. Your trust fuels the positive change we aim to achieve.",
      image: Trust,
    },
    {
      title: "Reliability",
      description:
        "Reliability is key at Printspace. We're built on trust and dependability, offering consistent makerspace opportunities. You can rely on us to connect you with meaningful projects. Your trust drives our reliability and integrity.",
      image: Reliability,
    },
    {
      title: "No cost",
      description:
        "At Printspace, we're committed to making a difference without any cost to you. We believe in accessible altruism, providing free 3D orinting-related makerspaces that you can trust. Our mission is to ensure that helping people learn knows no financial boundaries.",
      image:
        "https://res.cloudinary.com/zenbusiness/q_auto/v1/shared-assets/icon/product/money-bag-256.svg",
    },
  ];
  const frameworksUsed = [
    {
      name: "Mantine",
      purpose: "Styling Purposes",
      link: "https://mantine.dev/",
    },
    {
      name: "Tailwind CSS",
      purpose: "Styling Purposes",
      link: "http://tailwindcss.com/",
    },
    {
      name: "BcryptJS",
      purpose: "Security Purposes",
      link: "https://www.npmjs.com/package/bcryptjs",
    },
    {
      name: "Tabler Icons for React",
      purpose: "Icons",
      link: "https://tabler.io/docs/icons/react",
    },
    {
      name: "Tiptap",
      purpose: "Text Editor",
      link: "https://tiptap.dev/",
    },
    {
      name: "clsx",
      purpose: "Styling Purposes",
      link: "https://www.npmjs.com/package/clsx",
    },
    {
      name: "Framer Motion",
      purpose: "Animations",
      link: "https://www.framer.com/",
    },
    {
      name: "Mini-svg-data-uri",
      purpose: "Convert SVGs",
      link: "https://www.npmjs.com/package/mini-svg-data-uri",
    },
    {
      name: "React",
      purpose: "Web Development Technology",
      link: "https://react.dev/",
    },
    {
      name: "React-router-dom",
      purpose: "Web Router",
      link: "https://reactrouter.com/en/main",
    },
    {
      name: "Simplex-noise",
      purpose: "Sound Pattern Creator",
      link: "https://www.npmjs.com/package/simplex-noise",
    },
    {
      name: "Tailwind-merge",
      purpose: "Merge Tailwind Classes",
      link: "https://www.npmjs.com/package/tailwind-merge",
    },
    {
      name: "Vite",
      purpose: "Creates Development Environment",
      link: "https://vitejs.dev/",
    },
    {
      name: "Day JS",
      purpose: "Date Formatting",
      link: "https://www.npmjs.com/package/dayjs",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className={styles.aboutContainer}>
      <div className="container mx-auto">
        <div className={styles.textContainer}>
          <h4 className={`${styles.info} mt-5`}>
            Helping thousands of people{" "}
            <span style={{ color: "#a78bfa" }}>learn</span>, and managing a
            makerspace can't be <span style={{ color: "#60a5fa" }}>easy</span>.
          </h4>
          <h3 className="text-slate-300 text-4xl my-5 ">So how do we do it?</h3>
          <a href="#aboutUs">
            <button className={styles.scrollButton}>
              <IconArrowDown className="text-white" size={50} />
            </button>
          </a>
        </div>
      </div>
      <div id="aboutUs" className={styles.aboutInfo}>
        <div className="container mx-auto ">
          <h1 className="whiteCentered text-4xl">Our Benefits</h1>
          <div className="flex 2xl:flex-row flex-col 2xl:justify-around mx-3 ">
            {data.map((item, index) => (
              <CardContainer>
                <motion.div
                  className="text-center flex items-center justify-center ring-2 rounded-xl ring-white"
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
                      className="text-xl font-bold text-white "
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="text-gray-300 text-sm mt-2 "
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
      </div>
      <div>
        <h1 className="text-4xl whiteCentered  my-8">Frameworks Used</h1>
        <motion.div
          className="flex items-center justify-center flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {frameworksUsed.map((framework, index) => (
            <motion.div
              key={index}
              className="mx-3 flex"
              variants={itemVariants}
            >
              <h3 className="text-slate-300 text-3xl font-semibold">
                {framework.name} - {framework.purpose}
              </h3>
              <button
                className="shimmerButton ml-5"
                onClick={() => {
                  window.location.href = framework.link;
                }}
              >
                View
              </button>
            </motion.div>
          ))}
        </motion.div>{" "}
      </div>
    </div>
  );
};

export default About;
