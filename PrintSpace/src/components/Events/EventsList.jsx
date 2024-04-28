import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "../Volunteering/Card";
import "@mantine/carousel/styles.css";

export function EventsList({ value, days }) {
  const initialDate = new Date();
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
      name: "3D Printing at Milford Library",
      image:
        "https://www.hometownlife.com/gcdn/presto/2020/02/27/POEN/b73ef74c-db90-41a4-ba73-d53081c0b4fb-MildfordPublicLibrary3.jpg",
      maxSpots: 7,
      address: "11 S E Front Street Milford, DE 19963",
      time: "3:00 p.m - 4:30 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come to the library and have fun with 3D printing! Let’s improve at CAD and 3D printing together!",
      contactPhone: "302 422-8996",
      contactEmail: "milford.library@lib.de.us",
      volunteers: [
        {
          name: "Ian Clark",
          profilePicture:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Emily Baker",
          profilePicture:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },

    {
      name: "3D Printing at Seaford Library",
      image:
        "https://bloximages.newyork1.vip.townnews.com/wrde.com/content/tncms/assets/v3/editorial/5/ae/5ae5dff8-c236-5c2c-9d2d-8a559e655fa8/60f0863092838.image.jpg?resize=1396%2C785",
      maxSpots: 6,

      address: "600 N Market St Ext Extended, Seaford, DE 19973",
      day: nextSundayFormatted,
      time: "5:30 p.m - 7:30 p.m",
      usersTask:
        "Come 3D print some cool creations with others, or by yourself!",
      contactPhone: "302 629-2524",

      contactEmail: "seafordlibrary@gmail.com",

      volunteers: [
        {
          name: "Vince Lee",

          profilePicture:
            "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          name: "Kent Cleveland",

          profilePicture:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },

    {
      name: "3D Printing at Lewes Library",
      image: "https://delawarescene.com/images/organizations/88.jpg",
      maxSpots: 7,
      address: "111 Adams Avenue Lewes, DE 19958",
      time: "3:00 p.m - 5:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come to Lewes library and have some fun experimenting with 3D printing and CAD with friends.",
      contactPhone: "302 645-2733",
      contactEmail: "lewesdelibrary@gmail.com",
      volunteers: [
        {
          name: "Felix Klein",
          profilePicture:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Emily Baker",
          profilePicture:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Kent Cleveland",

          profilePicture:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];
  let data2 = [
    {
      name: "3D Print at Appoquinimink Library",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NM3MgFgf1-lBfvfMe6FbPENez9Bu_Uf8AQ&usqp=CAU",
      maxSpots: 6,
      address: "204 E Main St, Middletown, DE 19709",
      day: nextFridayFormatted,
      time: "10:00 a.m - 4:00 p.m",
      usersTask:
        "Come 3D print at Appoquinimink Library! Space and equipment will be reserved for anyone who signs up.",
      contactPhone: "(302) 257-3030  ",
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
      image:
        "https://img.freepik.com/free-photo/technology-equipment-blue-laboratory-generated-by-ai_188544-19546.jpg",
      maxSpots: 5,
      address: "204 E West Street",
      time: "3:00 p.m - 5:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come 3D print with others, share techniques, and have fun! Make sure you have a ride back, and you can bring a snack if you want! Space and equipment is reserved for anyone who signs up.",
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
      name: "3D Printing at University of Delaware",

      image:
        "https://images.unsplash.com/photo-1642969164999-979483e21601?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D",
      maxSpots: 20,
      address: "210 South College Ave. Newark, DE 19716",
      time: "12:00 PM - 3:00 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "Come find similar-minded people, and 3D print with them! Space and equipment is available for anyone who signs up.",
      contactPhone: "(302) 831-2115",
      contactEmail: "oiss@udel.edu",
      volunteers: [
        {
          name: " Abby Rogers",
          profilePicture:
            "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },

        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Dan Smith",
          profilePicture:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
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
  ];
  let data3 = [
    {
      name: "3D Printing Space",
      image:
        "https://www.businessworldit.com/wp-content/uploads/2019/01/5-Cool-Do-It-Yourself-3D-Printing-Techniques.jpg",
      maxSpots: 7,
      address: "590 Avenue 1743, Newark, DE 19713",
      day: nextFridayFormatted,
      time: "1:00 PM - 5:00 PM",
      usersTask:
        "Discover the exciting world of 3D printing! Join us for an introductory session where we'll cover the basics of 3D printing technology, software, and design. We'll provide hands-on demonstrations and guide you through the process of creating your own 3D printed objects. No prior experience is needed, and we'll have volunteers on hand to assist you every step of the way. Space and equipment is reserved for anyone who signs up.",
      contactPhone: "302-554-8974",
      contactEmail: "3dprintingfun@gmail.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Dan Smith",
          profilePicture:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },

    {
      name: "3D Printing Workshop",
      image:
        "https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      maxSpots: 6,
      address: "590 Avenue 1743, Newark, DE 19713",
      day: nextSaturdayFormatted,
      time: "12:00 PM - 4:00 PM",
      usersTask:
        "Join us for a hands-on workshop where we'll explore the fundamentals of 3D printing technology, software, and design. We'll guide you through the process of creating your own 3D models and turning them into physical objects. No prior experience is needed, and our volunteers will be there to assist you every step of the way. Let's bring your ideas to life in 3D! Space and equipment will be reserved for anyone who signs up.",
      contactPhone: 302 - 778 - 4983,
      contactEmail: "3dprintingfun@gmail.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D",
        },

        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
      ],
    },
    {
      name: "3D Printing At Del Tech GeorgeTown",
      image:
        "https://ptcollege.edu/wp-content/uploads/2019/02/cad-editted-hero-image-PSD-v216.jpg",
      maxSpots: 9,
      address: "21179 College Drive, Georgetown, Delaware 19947",
      time: "5:00 p.m - 7:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come and do some 3D printing and CAD with others and have fun! Make sure you have a ride there and back, and you can bring a snack if you want as long as you eat it away from equipment. All we ask of you is to let your creativity thrive!",
      contactPhone: "302 798-2341",
      contactEmail: "georgetowncad@yahool.com",
      volunteers: [
        {
          name: "Felix Klein",
          profilePicture:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      name: "3D Printing and CAD at Selbyville Library",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Selbyville_Library.jpg",
      maxSpots: 6,
      address: "11 Main & McCabe Streets Selbyville, DE 19975",
      time: "1:00 p.m - 3:00 p.m",
      day: nextSundayFormatted,
      usersTask:
        "Come and have fun with others! Learn from each other and let your creativity loose! We hope to see you soon!",
      contactPhone: "302 436-8195",
      contactEmail: "selbyvillelibrary@yahoo.com",

      volunteers: [
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Kent Cleveland",

          profilePicture:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Felix Klein",
          profilePicture:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
