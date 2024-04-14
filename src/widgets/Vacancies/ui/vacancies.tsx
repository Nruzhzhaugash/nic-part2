import Building from "@/shared/ui/icons/main/building";
import ShoppingBag from "@/shared/ui/icons/main/shopping-bag";
import Users from "@/shared/ui/icons/main/users";

export const Vacancies = () => {
  return (
    <div className="mb-10 mx-[-80px] flex items-center rounded-[20px] border-[1.5px] border-blue_rgb border-solid">
      <div className="py-8 pl-20 pr-[68px] border-r-2 border-primary">
        <div className="gap-5 flex items-center mb-2">
          <ShoppingBag />
          <h1 className="text-[56px] font-semibold text-primary">12.000+</h1>
        </div>
        <p className="text-center text-darkblue text-[19px]">Open Vacancies</p>
      </div>
      <div className="py-8 pl-20 pr-[68px] border-r-2 border-primary">
        <div className="gap-5 flex items-center mb-2">
          <Users />
          <h1 className="text-[56px] font-semibold text-primary">10.000+</h1>
        </div>
        <p className="text-center text-darkblue text-[19px]">Open Vacancies</p>
      </div>
      <div className="py-8 px-20">
        <div className="gap-5 flex items-center mb-2">
          <Building />
          <h1 className="text-[56px] font-semibold text-primary">8.000+</h1>
        </div>
        <p className="text-center text-darkblue text-[19px]">Open Vacancies</p>
      </div>
    </div>
  );
};
