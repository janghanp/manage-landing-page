import Image, { StaticImageData } from "next/image";

type PropType = {
  avatar: StaticImageData;
  name: string;
  body: string;
};

const CrouselItem = (props: PropType) => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] w-[340px] lg:w-[540px] h-[250px] lg:h-[220px] px-10 py-10">
      <div className="absolute -top-9 rounded-full overflow-hidden object-cover">
        <Image src={props.avatar} alt={props.name} width={72} height={72} />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold mb-5">{props.name}</span>
        <p className="text-gray-400 text-center">{props.body}</p>
      </div>
    </div>
  );
};

export default CrouselItem;
