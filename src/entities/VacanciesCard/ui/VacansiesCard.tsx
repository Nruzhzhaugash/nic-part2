import Button from "@/shared/ui/Button/Button";
import Location from "@/shared/ui/icons/header/location";
import Clock from "@/shared/ui/icons/main/clock";

interface VacanciesProps {
  prof: string;
  text: string;
  desc: string;
  image: string;
  location: string;
  time: string;
}

export default function VacanciesCard(props: VacanciesProps) {
  const { prof, text, desc, image, location, time } = props;

  return (
    <div className="pt-4 px-5 pb-2">
      <div className="flex items-center justify-between mb-7">
        <div className="flex flex-col gap-1">
          <h1 className="text-[24px] font-medium text-primary">{prof}</h1>
          <h5 className="text-[14px] text-darkblue">{text}</h5>
        </div>
        <div className="" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <p className="text-darkblue text-[14px] mb-[33px]">{desc}</p>
      <div className="mb-5 flex items-center gap-11">
        <div className="flex items-center gap-[5px]">
          <Location />
          <span className="text-[14px] text-primary">{location}</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <Clock />
          <span className="text-[14px] text-primary">{time}</span>
        </div>
      </div>
      <Button className="w-full text-center text-white bg-primary py-[18px] px-6 rounded-[15px]">
        Apply now
      </Button>
    </div>
  );
}
