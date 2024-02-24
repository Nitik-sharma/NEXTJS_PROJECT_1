"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const MusicSchool = [
  {
    title: "Harmony Conservatory",
    description:
      "Harmony Conservatory is dedicated to fostering musical excellence through a comprehensive curriculum that emphasizes both classical and contemporary music education.",
  },
  {
    title: "Melody Heights School of Music",
    description:
      "Melody Heights School of Music offers a vibrant learning environment where students can explore their musical potential under the guidance of experienced instructors.",
  },
  {
    title: "Rhythmic Arts Academy",
    description:
      "At Rhythmic Arts Academy, we believe in the power of rhythm to connect people. Our school focuses on percussion and rhythmic studies, creating well-rounded musicians.",
  },
  {
    title: "Sonic Skills Institute",
    description:
      "Sonic Skills Institute is committed to honing the technical and creative abilities of aspiring musicians. Our innovative approach combines technology and traditional training.",
  },
  {
    title: "Keynote Music Academy",
    description:
      "Keynote Music Academy specializes in keyboard instruments, providing a comprehensive education that covers piano, organ, and electronic keyboards for students of all ages.",
  },
];

function WhyCouseUs() {
  return (
    <div>
      <StickyScroll content={MusicSchool} />
    </div>
  );
}

export default WhyCouseUs;
