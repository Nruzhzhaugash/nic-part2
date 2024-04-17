import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/input";
import Arrow from "@/shared/ui/icons/main/arrow";

export const JobAlerts = () => {
  return (
    <form className="w-[69%] items-center flex flex-col gap-10 border-[2px] border-solid border-primary rounded-[10px] py-10 px-8">
      <Input
        classField="border-[1px] border-solid border-primary rounded-[5px] py-4 px-[18px]"
        className="text-lg w-full font-normal text-blue_rgb font-custom"
        placeholder="Your email"
      />
      <Input
        classField="border-[1px] border-solid border-primary rounded-[5px] py-4 px-[18px]"
        className="text-lg w-full font-normal text-blue_rgb font-custom"
        placeholder="Keywords"
      />
      <div className="w-full flex justify-between py-4 px-[18px] items-center border-[1px] border-solid border-primary rounded-[5px] ">
        <span className="text-darkblue text-lg font-custom">Daily</span>
        <Arrow />
      </div>
      <Button className="w-[37%] flex justify-center items-center text-center py-2.5 px-5 bg-primary text-white rounded-[5px] text-[20px] font-semibold uppercase">
        Create Alert
      </Button>
    </form>
  );
};
