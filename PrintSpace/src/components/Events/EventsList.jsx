import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "../Volunteering/Card";
import "@mantine/carousel/styles.css";

export function EventsList({ value, days }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const initialDate = new Date(user.date);
  function getNextDayFormatted(initialDate, dayOfWeek) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayOfWeek = initialDate.getDay();
    let difference = dayOfWeek - currentDayOfWeek;

    if (difference <= 0) {
      difference += 7;
    }

    const nextDate = new Date(
      initialDate.getTime() + difference * 24 * 60 * 60 * 1000
    );
    const formattedDate = `${daysOfWeek[dayOfWeek]}, ${nextDate.toLocaleString(
      "en-US",
      { month: "long", day: "numeric", year: "numeric" }
    )}`;
    return formattedDate;
  }

  const nextFridayFormatted = getNextDayFormatted(initialDate, 5);
  const nextSaturdayFormatted = getNextDayFormatted(initialDate, 6);
  const nextSundayFormatted = getNextDayFormatted(initialDate, 0);

  let data = [
    {
      name: "Robotics Workshop",
      category: "Robotics",
      image:
        "https://engineering.tamu.edu/news/2023/01/_news-images/ETID-news-Oakwood-student-robot-tablet-header-17DEC2022.jpg",
      maxSpots: 6,

      address: "3 barak street",
      day: nextFridayFormatted,
      time: "10:00 a.m - 4:00 p.m",
      usersTask: "Come work with robots, and make your own!",
      contactPhone: "302-122-1488",
      contactEmail: "tommtrobot@gmail.com",

      volunteers: [
        {
          name: " Manu Dell",

          profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          name: "Mike Mir",

          profilePicture: "https://randomuser.me/api/portraits/men/72.jpg",
        },
        {
          name: " Mike Bell",

          profilePicture: "https://randomuser.me/api/portraits/men/73.jpg",
        },
      ],
    },

    {
      name: "3D Printing at the Library",
      category: "3D Printing",
      image:
        "https://img.freepik.com/free-photo/technology-equipment-blue-laboratory-generated-by-ai_188544-19546.jpg",
      maxSpots: 5,
      address: "204 E West Street",
      time: "3:00 p.m - 5:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come 3D print with others, share techniques, and have fun! Make sure you have a ride back, and you can bring a snack if you want!",
      contactPhone: "302 378-5588",
      contactEmail: "bob.john@gmail.com",
      volunteers: [
        {
          name: " Abby Rogers",
          profilePicture:
            "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Mathew John",
          profilePicture:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    {
      name: "Intro to Data Science UD",
      category: "Data Science",
      image:
        "https://cdn.sanity.io/images/tlr8oxjg/production/319736499c3451e5bf944e8ea5843714df354e6a-1456x816.png?w=3840&q=80&fit=clip&auto=format",
      maxSpots: 12,
      address: "590 Avenue 1743, Newark, DE 19713",
      time: "1:00 PM - 5:00 PM",
      day: nextFridayFormatted,
      usersTask:
        "We will learn the basics of data analytics, data manipulation, and machine learning, all of which are basic data science topics! We also do fun activities to help you learn some of the topics discussed. We look forward to seeing you here!",
      contactPhone: "302-554-8974",
      contactEmail: "datasciencelearners@yahoo.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture: "",
        },
        {
          name: "Dan Smith",
          profilePicture: "",
        },
      ],
    },

    {
      name: "Intro to Game Development UD",
      category: "Game Development",
      image:
        "https://assets-global.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize.png",
      maxSpots: 8,
      address: "590 Avenue 1743, Newark, DE 19713",
      time: "12:00 PM - 4:00 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "We will have fun learning some of the basics of video game design and Unity. We will also have a contest at the end! We hope to see you soon!",
      contactPhone: "302-778-4983",
      contactEmail: "gamedevedu@gmail.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture: "",
        },
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
      ],
    },

    {
      name: "Algebraic Math at the Library",
      category: "Math",
      image:
        "https://www.datanami.com/wp-content/uploads/2015/12/shutterstock_algebra_Marina-Sun.jpg",
      maxSpots: 20,
      address: "204 E Main St, Middletown, DE 19709",
      time: "12:00 PM - 3:00 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "We will discuss and solve algebraic equations together! We will have some problems where teamwork is involved. We hope you see you there!",
      contactPhone: "302-378-5588",
      contactEmail: "demathlearner@gmail.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture: "",
        },
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Dan Smith",
          profilePicture: "",
        },
      ],
    },
    {
      name: "Environmental Science at the Laboratory",
      category: "Environmental Science",
      image:
        "https://t4.ftcdn.net/jpg/05/65/15/13/360_F_565151396_zPQbPwEMJ4L5sM5zcqLaj299jW3sNcrV.jpg",
      maxSpots: 6,
      address: "243 Walley Street",
      time: "4:00 p.m - 6:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come do environmental Science with others, share studies, and have fun! Make sure you have a ride back, and you can bring a snack if you want!",
      contactPhone: "302 446-4189",
      contactEmail: "cisco.kareem@gmail.com",
      volunteers: [
        {
          name: "Andrew Ford",
          profilePicture:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
        },
        {
          name: "Ashley Walls",
          profilePicture:
            "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: " Manu Dell",

          profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      ],
    },
    {
      name: "Experiment with renewable energy",
      category: "Renewable Energy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNlDTQcD3_qDpY2c9rbIZvElNgUeDAiB1gw&usqp=CAU",
      maxSpots: 5,
      address: "145 Bill Avenue",
      time: "2:00 p.m - 4:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come find renewable energy sources  with others, share results, and have fun! Make sure you have a ride back, and you can some food if you want!",
      contactPhone: "302 996-5467",
      contactEmail: "ryan.kai@gmail.com",
      volunteers: [
        {
          name: "Ashley Walls",
          profilePicture:
            "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Mckinley Christoper",
          profilePicture:
            "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Azra Ofori",
          profilePicture:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
  ];
  let data2 = [
    {
      name: "Engineering at UD",
      category: "Engineering",
      image: "https://wallpapercave.com/wp/wp8000417.jpg",
      maxSpots: 6,

      address: "144 Teriyaki avenue",
      day: nextSundayFormatted,
      time: "5:35 p.m - 7:31 p.m",
      usersTask: "Come engineer cool creations with others, or by yourself!",
      contactPhone: "302 652-1264",

      contactEmail: "billy.butch@gmail.com",

      volunteers: [
        {
          name: "Sandeep Kaur",
          profilePicture: "https://stocksnap.io/photo/business-man-JJUUYMLKOC",
        },

        {
          name: "Tom Russ",

          profilePicture:
            "https://www.shutterstock.com/image-photo/business-man-seated-on-chair-75683635?id=75683635&irclickid=W0yzpaQV9xyPRqzTCZUp1Qu0UkHwiVRduyUk2I0&irgwc=1&pl=426523-42119&utm_campaign=Elevated%20Logic%2C%20LLC&utm_content=42119&utm_medium=Affiliate&utm_source=426523&utm_term=STOCKSNAP_PHOTO_DETAIL-AUTHENTIC_API",
        },

        {
          name: "Andrew Ford",

          profilePicture:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
        },

        {
          name: " Manu Dell",

          profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      ],
    },

    {
      name: "Understanding Electrical Circuits",
      category: "Electrical Circuits",

      image:
        "https://t4.ftcdn.net/jpg/02/55/22/29/360_F_255222910_Bb4Wonj3oC7RBmSxcksyyFy1wF5CM0xN.jpg",
      maxSpots: 5,
      address: "14 Main Street",
      time: "3:00 p.m - 5:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come make cool electrical circuits with friends, and learn something new!",
      contactPhone: "302 378-2388",
      contactEmail: "Tom.russ@gmail.com",
      volunteers: [
        {
          name: " Tom Rogers",

          profilePicture:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJT|wcGVvcGx|fGVufDB8fDB8fHww",
        },
        {
          name: "Mathew Perry",

          profilePicture:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJT|wcGVvcGx|fGVufDB8fDB8fHww",
        },
        {
          name: "Tina Wells",
          profilePicture:
            "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h80H8cmFuZG9tJT|wcGVvGx|fGVufDB8fDB8fHww",
        },
      ],
    },
    {
      name: "Engineering Classes",
      category: "Engineering",
      image:
        "https://thegadgetflow.com/wp-content/uploads/2020/11/Geeek-Club-Cyberpunk-circuit-board-construction-sets-01-1-1200x675.jpg",
      maxSpots: 4,
      address: "121 bay Blvd",
      time: "2:00 p.m - 6:00 p.m",
      day: nextSundayFormatted,
      usersTask: "Come engineer whatever you want with other people!",
      contactPhone: "414 378-2388",
      contactEmail: "Timmy.Horrd@gmail.com",

      volunteers: [
        {
          name: " Micheal Rogers",

          profilePicture:
            "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHB|b3BsZXx|bnwwfHwwfHx8MA%3D%3D",

          name: "Jennet Perry",

          profilePicture:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBIb3BsZXx|bnwwfHwwfH×8MA%3D%3D",
        },

        {
          name: "Tom Wells",

          profilePicture:
            "https://images.unsplash.com/photo-1485206412256-701ccc5b93a?w=900&auto=format&fit=crop&q=60&¡xlib=rb-4.0.3&xid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBIb3BsZXx|bnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    {
      name: "Coding with AI Networks",
      category: "AI Networks",

      image:
        "https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blt2867744602af6cc6/65252eb79adb9a57ea83c9c4/generative-AI-1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale",

      maxSpots: 4,

      address: "10 14th Street",

      time: "9:00 a.m - 3:00 p.m",
      day: nextFridayFormatted,
      usersTask: "Code smart AI networks with different regressions!",
      contactPhone: "110 178-1388",
      contactEmail: "Colin.Khan@gmail.com",

      volunteers: [
        {
          name: " Bruce Rogers",

          profilePicture:
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJhbmRvbSUyMHBIb3BsZXxlbnwwfHwwfH×8MA%3D%3D",
        },
        {
          name: "Jennie Perry",

          profilePicture:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MB8fHJhbmRvbSUyMHBIb3BsZXx|bnwwfHwwfH×8MA%3D%3D",
        },
      ],
    },
    {
      name: "Aerospace-related activites",
      category: "Aerospace",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07BvWEL8vJChLmOA6SMpJFvi6qYhZF1BQSQ&usqp=CAU",
      maxSpots: 5,
      address: "679 Xavier Road",
      time: "1:00 p.m - 3:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come research designs with others, try out new models,and have a good time! Make sure you have a ride back, and you can bring some drinks if you want!",
      contactPhone: "302 461-9861",
      contactEmail: "charlie.patel@gmail.com",
      volunteers: [
        {
          name: "Andrew Ford",
          profilePicture:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
        },
        {
          name: "Azra Ofori",
          profilePicture:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    {
      name: "Environment-related activities",
      category: "Environmental Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDj-2wqQOM71WKgMIjpvmTmUZjIda5JWSZQ&usqp=CAU",
      maxSpots: 5,
      address: "817 Bobby Avenue",
      time: "12:00 p.m - 2:00 p.m",
      day: nextSaturdayFormatted,
      usersTask:
        "Come research different environments, and do other environment-related , and make sure to have a good time! Make sure you have a ride back, and you can bring some food if you think you will be hungry!",
      contactPhone: "302 164-6891",
      contactEmail: "Taylor.harmon@gmail.com",
      volunteers: [
        {
          name: " Bruce Rogers",

          profilePicture:
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJhbmRvbSUyMHBIb3BsZXxlbnwwfHwwfH×8MA%3D%3D",
        },
        {
          name: "Jennie Perry",
          profilePicture:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MB8fHJhbmRvbSUyMHBIb3BsZXx|bnwwfHwwfH×8MA%3D%3D",
        },
      ],
    },
  ];
  let data3 = [
    {
      name: "Website Development at the Library",
      category: "Website Development",

      image:
        "https://blog.hubspot.com/hs-fs/hubfs/web-development.webp?width=1190&height=800&name=web-development.webp",
      maxSpots: 7,

      address: "1 Orange 14th Street",
      time: "9:00 a.m - 3:00 p.m",
      day: nextSundayFormatted,
      usersTask:
        "Make a website with friends, and customize it any way you want!",
      contactPhone: "302-178-1388",
      contactEmail: " Amir.Khan@gmail.com",
      volunteers: [
        {
          name: " Amitab Bachan",

          profilePicture:
            "https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/7/Desk/2020_7$largeimg_2124224073.jpeg",
        },
        {
          name: "Irene Hanks",

          profilePicture: "https://randomuser.me/api/portraits/women/94.jpg",
        },
        {
          name: "Kris Torress",
          profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
        },
      ],
    },
    {
      name: "Video Game Development",
      category: "Game Development",

      image:
        "https://www.schoolofit.co.za/wp-content/uploads/2020/05/unity-engine-for-game-development-806x393.webp",
      maxSpots: 6,
      address: "22 orange Street",
      time: "9:00 a.m - 4:00 p.m",
      day: nextSaturdayFormatted,
      usersTask:
        "Come make a game with friends, discuss mechanics, and so much more!",
      contactPhone: "302-222-1388",
      contactEmail: "Rob.Khan@gmail.com",
      volunteers: [
        {
          name: " Bob Dell",

          profilePicture:
            "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Tommy Mir",

          profilePicture:
            "https://images.unsplash.com/photo-1621352152645-61f4835b081b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Mark Bell",

          profilePicture:
            "https://images.unsplash.com/photo-1621353269062-6aa0165576f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHJhbmRvbSUyMHBIb3BsZXx/bnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    {
      name: "Tool Workshop",
      category: "Tool Workshop",

      image:
        "https://images.finewoodworking.com/app/uploads/2018/10/24143804/011272036-main.jpg",

      maxSpots: 6,

      address: "33 mark ave",

      time: "9:00 a.m - 4:00 p.m",
      day: nextFridayFormatted,
      usersTask: "Work with tools, and build something amazing!",
      contactPhone: "302-022-1388",
      contactEmail: "Rad.Khan@gmail.com",
      volunteers: [
        {
          name: " Pap Dell",

          profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        {
          name: "Mike Mir",

          profilePicture: "https://randomuser.me/api/portraits/men/72.jpg",
        },
        {
          name: "Chris Bell",
          profilePicture: "https://randomuser.me/api/portraits/men/70.jpg11",
        },
      ],
    },
    {
      name: "Learn about AR and VR and Experience them",
      category: "Virtual Reality (VR) and Augmented Reality (AR)",
      image:
        "https://t4.ftcdn.net/jpg/03/21/87/17/360_F_321871791_I6DdiEL6qXp5iOxCaDHhuMcAS7oT2vHB.jpg",
      maxSpots: 5,
      address: "613 Obama Avenue",
      time: "7:00 p.m - 9:00 p.m",
      day: nextSundayFormatted,
      usersTask:
        "Experience different realities, discuss them with others , and have a good time! Make sure you have a ride back, and you can bring some food if necessary!",
      contactPhone: "302 128-9476",
      contactEmail: "oslma.hewes@gmail.com",
      volunteers: [
        {
          name: " Ted Khan",
          profilePicture:
            "front-view-man-working-as-real-estate-agent_23-2151064809.jpg",
        },
        {
          name: "Morgan Yadala",
          profilePicture:
            "mixed-raceyoung-beautiful-business-woman-portrait-ai-generated-image_268835-6443.jpg",
        },
        {
          name: "Rishabh Patel ",
          profilePicture:
            "240_F_636932621_N3R7MLb3thO8HwaS5TLh7dzCRkXufPqC.jpg",
        },
      ],
    },
    {
      name: "Learn how to keep your information safe",
      category: "Cybersecurity",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYLP8t5DCpmU9Xutgn89S3ZSmsPIbdEZ-6Q&usqp=CAU",
      maxSpots: 5,
      address: "921 Miller Road",
      time: "2:00 p.m - 4:00 p.m",
      day: nextSaturdayFormatted,
      usersTask:
        "Learn different ways to keep your private information safe, discuss them with others , and have a good time! Make sure you have a ride back, and you can bring some food if needed!",
      contactPhone: "302 668-7392",
      contactEmail: " Jade.Cabbatigan@gmail.com",
      volunteers: [
        {
          name: "John  Cain",
          profilePicture:
            "entrepreneur-portrait-ai-generated-image_268835-5685.jpg",
        },
        {
          name: "Jordan Cotton ",
          profilePicture: "medium-shot-woman-posing-outdoors_23-2150725947.jpg",
        },
        {
          name: "Angela Adams",
          profilePicture:
            "medium-shot-woman-working-as-lawyer_23-2151202448.jpg",
        },
      ],
    },
  ];
  let show = true;
  let show2 = true;
  let show3 = true;
  if (value) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (data.length === 0) {
      show = false;
    }
    data2 = data2.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (data2.length === 0) {
      show2 = false;
    }
    data3 = data3.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (data3.length === 0) {
      show3 = false;
    }
  }

  if (days) {
    let fri = days.friday;
    let sat = days.saturday;
    let sun = days.sunday;

    if (fri === true) {
      fri = nextFridayFormatted;
    }
    if (sat === true) {
      sat = nextSaturdayFormatted;
    }
    if (sun === true) {
      sun = nextSundayFormatted;
    }
    data = data.filter((item) => {
      return item.day === fri || item.day === sat || item.day === sun;
    });

    if (data.length === 0) {
      show = false;
    }
    data2 = data2.filter((item) => {
      return item.day === fri || item.day === sat || item.day === sun;
    });
    if (data2.length === 0) {
      show2 = false;
    }
    data3 = data3.filter((item) => {
      return item.day === fri || item.day === sat || item.day === sun;
    });
    if (data3.length === 0) {
      show3 = false;
    }
  }
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));
  const slides2 = data2.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));
  const slides3 = data3.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));
  const error = !show && !show2 && !show3;
  return (
    <>
      {show && (
        <Carousel
          slideSize={{ sm: "25%" }}
          slideGap={{ base: rem(2), sm: "sm" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          className="mt-5"
        >
          {slides}
        </Carousel>
      )}
      {show2 && (
        <Carousel
          slideSize={{ sm: "25%" }}
          slideGap={{ base: rem(2), sm: "sm" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          className="mt-5"
        >
          {slides2}
        </Carousel>
      )}
      {show3 && (
        <Carousel
          slideSize={{ sm: "25%" }}
          slideGap={{ base: rem(2), sm: "sm" }}
          align="start"
          slidesToScroll={mobile ? 1 : 3}
          className="mt-5"
        >
          {slides3}
        </Carousel>
      )}
      {error && (
        <p
          className="text-center text-white text-lg"
          style={{ fontSize: "1rem" }}
        >
          No events found.
        </p>
      )}
    </>
  );
}
