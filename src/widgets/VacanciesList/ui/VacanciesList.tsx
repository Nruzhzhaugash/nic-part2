import VacanciesCard from "@/entities/VacanciesCard/ui/VacansiesCard";

const data = [
  {
    prof: "UI/UX Designer",
    text: "Pinterest",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tortor et amet diam nunc nam. Ac arcu ridiculus mauris sed mat...",
    image: "../../../../public/Pinterest.png",
    location: "London, UK",
    time: "Full time",
  },
  {
    prof: "UI/UX Designer",
    text: "Pinterest",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tortor et amet diam nunc nam. Ac arcu ridiculus mauris sed mat...",
    image: "../../../../public/Pinterest.png",
    location: "London, UK",
    time: "Full time",
  },
  {
    prof: "UI/UX Designer",
    text: "Pinterest",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tortor et amet diam nunc nam. Ac arcu ridiculus mauris sed mat...",
    image: "../../../../public/Pinterest.png",
    location: "London, UK",
    time: "Full time",
  },
  {
    prof: "UI/UX Designer",
    text: "Pinterest",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tortor et amet diam nunc nam. Ac arcu ridiculus mauris sed mat...",
    image: "../../../../public/Pinterest.png",
    location: "London, UK",
    time: "Full time",
  },
  {
    prof: "UI/UX Designer",
    text: "Pinterest",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tortor et amet diam nunc nam. Ac arcu ridiculus mauris sed mat...",
    image: "../../../../public/Pinterest.png",
    location: "London, UK",
    time: "Full time",
  },
  {
    prof: "UI/UX Designer",
    text: "Pinterest",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tortor et amet diam nunc nam. Ac arcu ridiculus mauris sed mat...",
    image: "/Pinterest.png",
    location: "London, UK",
    time: "Full time",
  },
];

export const VacanciesList = () => {
  return (
    <div className="grid grid-cols-3 gap-7 mb-11">
      {data.map((vacancies, index) => (
        <VacanciesCard
          key={index}
          prof={vacancies.prof}
          text={vacancies.text}
          desc={vacancies.desc}
          image={vacancies.image}
          location={vacancies.location}
          time={vacancies.time}
        />
      ))}
    </div>
  );
};
