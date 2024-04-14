import { ResumeCard } from "@/entities/ResumeCard";

const data = [
  {
    edu: "higher education",
    prof: "Warehouse manager",
    cost: "200 000 xyev",
    exp: "3 years of experience",
  },
  {
    edu: "higher education",
    prof: "Warehouse manager",
    cost: "200 000 xyev",
    exp: "3 years of experience",
  },
  {
    edu: "higher education",
    prof: "Warehouse manager",
    cost: "200 000 xyev",
    exp: "3 years of experience",
  },
  {
    edu: "higher education",
    prof: "Warehouse manager",
    cost: "200 000 xyev",
    exp: "3 years of experience",
  },
  {
    edu: "higher education",
    prof: "Warehouse manager",
    cost: "200 000 xyev",
    exp: "3 years of experience",
  },
  {
    edu: "higher education",
    prof: "Warehouse manager",
    cost: "200 000 xyev",
    exp: "3 years of experience",
  },
];

export const ResumeList = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((resume, index) => (
        <ResumeCard
          key={index}
          edu={resume.edu}
          prof={resume.prof}
          cost={resume.cost}
          exp={resume.exp}
        />
      ))}
    </div>
  );
};
