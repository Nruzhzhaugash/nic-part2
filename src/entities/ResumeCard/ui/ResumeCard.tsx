import Button from "@/shared/ui/Button/Button";
import ResumeUser from "@/shared/ui/icons/main/resumeUser";

interface ResumeProps {
  edu: string;
  prof: string;
  cost: string;
  exp: string;
}

export const ResumeCard = (props: ResumeProps) => {
  const { edu, prof, cost, exp } = props;

  return (
    <div className="px-5 pt-5 pb-3 rounded-[15px] border-[3px] border-solid border-primary">
      <div className="mb-4">
        <ResumeUser />
      </div>
      <h5 className="mb-6 text-blue_rgb text-[16px] font-medium">{edu}</h5>
      <h1 className="text-darkblue text-[24px] leading-[36px] mb-5">{prof}</h1>
      <h2 className="text-primary text-[20px] mb-4 font-medium">{cost}</h2>
      <h5 className="text-[16px] font-medium text-blue_rgb mb-[46px]">{exp}</h5>
      <div className="mx-[-8px]">
        <Button className="rounded-[15px] w-full py-[18px] px-6 text-center bg-primary text-white text-[16px] leading-[-0.1px] font-medium">
          More
        </Button>
      </div>
    </div>
  );
};
