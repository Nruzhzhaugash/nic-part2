export interface ReviewsProps {
  name: string;
  prof: string;
  desc: string;
  city: string;
  work: string;
}

export const ReviewsCard = (props: ReviewsProps) => {
  const { name, prof, desc, city, work } = props;

  return (
    <div className="flex flex-col gap-4 w-[452px]">
      <div className="flex gap-[17px] items-center">
        <div className="rounded-[72px] w-[72px] h-[72px] border-[3px] border-primary border-solid"></div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-[24px] leading-[24px] text-primary font-medium">
            {name}
          </h1>
          <h3 className="text-darkblue leading-[24px] text-[14px]">{prof}</h3>
        </div>
      </div>
      <p className="leading-[24px] text-[14px] text-darkblue">{desc}</p>
      <div className="flex items-center gap-20">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-darkblue leading-[24px]">
            User from
          </span>
          <h2 className="font-medium leading-[24px] text-[20px] text-primary">
            {city}
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-darkblue leading-[24px]">
            Work at
          </span>
          <h2 className="font-medium leading-[24px] text-[20px] text-primary">
            {work}
          </h2>
        </div>
      </div>
    </div>
  );
};
