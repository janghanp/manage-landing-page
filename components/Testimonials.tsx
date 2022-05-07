import EmblaCarousel from "./EmblaCarousel";

import avatar1 from "../public/assets/avatar-ali.png";
import avatar2 from "../public/assets/avatar-anisha.png";
import avatar3 from "../public/assets/avatar-richard.png";
import avatar4 from "../public/assets/avatar-shanai.png";

const slides = [
  {
    image: avatar1,
    name: "Ali Bravo",
    body: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: avatar2,
    name: "Anisha Li",
    body: "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: avatar3,
    name: "Richard Watts",
    body: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    image: avatar4,
    name: "Shanai Park",
    body: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="font-bold text-4xl text-darkBlue mb-24">
        What they've said
      </h1>
      <EmblaCarousel
        options={{
          loop: true,
          startIndex: 1,
          draggable: true,
        }}
        slides={slides}
      />
      <button className="rounded-3xl w-[130.9px] mt-10 bg-brightRed text-white py-3 px-7 shadow-md shadow-brightRedLight text-[13px] hover:cursor-pointer hover:bg-brightRedLight transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Testimonials;
