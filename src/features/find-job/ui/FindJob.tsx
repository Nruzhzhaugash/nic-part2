import Input from "@/shared/ui/Input/input"
import Arrow from "@/shared/ui/icons/main/arrow"
import Search from "@/shared/ui/icons/main/search"

export const FindJob = () => {
  return (
    <div className="mb-5 p-2 flex gap-2 items-center rounded-[40px] bg-blue_rgb">
      <div className="py-3 pl-9 pr-6 flex items-center rounded-[40px] gap-12 bg-white">
        <span className="text-[20px] whitespace-nowrap font-semibold text-primary font-custom">Find job</span>
        <Arrow />
      </div>
      <div className="w-[80%] bg-white rounded-[40px] py-[11px] px-10">
        <Input 
          placeholder="Profession, company"
          className="w-full text-[20px] text-blue_rgb font-custom font-normal"
        />
      </div>
      <div className="bg-white rounded-[40px] py-2.5 px-[25px]">
        <Search />
      </div>
    </div>
  )
}