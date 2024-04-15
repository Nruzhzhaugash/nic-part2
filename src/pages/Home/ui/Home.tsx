import { useState } from "react";
import { ForPeople } from "@/features/forPeople";
import Button from "@/shared/ui/Button/Button";
import ArrowLeft from "@/shared/ui/icons/main/ArrowLeft";
import CarouselLeft from "@/shared/ui/icons/main/carousel/arrowLeft";
import CarouselRight from "@/shared/ui/icons/main/carousel/arrowRight";
import Speaker from "@/shared/ui/icons/main/speaker";
import { Opportunity } from "@/widgets/Opportunity/ui/opportunity";
import { ResumeList } from "@/widgets/ResumeList";
import { Reviews } from "@/widgets/Reviews/ui/Reviews";
import { Vacancies } from "@/widgets/Vacancies/ui/vacancies";
import { VacanciesList } from "@/widgets/VacanciesList/ui/VacanciesList";
import { data } from "@/shared/libs/data";
import { ViewportSlot } from "@egjs/react-flicking";
import { JobAlerts } from "@/widgets/JobAlerts/ui/JobAlerts";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <main className="container">
      <div className="flex justify-end">
        <div className="bg-primary rounded-full p-3">
          <Speaker />
        </div>
      </div>
      <Opportunity />
      <h3 className="text-center underline text-darkblue text-[24px] font-custom mb-10">
        Advanced search
      </h3>
      <Vacancies />
      <section className="pt-20 pb-[120px]">
        <h1 className="mb-6 text-center text-[40px] font-semibold leading-[50px] text-primary">
          We Empower Job Seekers Like You To Streamline And Supercharge Your Job
          Search.
        </h1>
        <p className="mb-10 text-darkblue text-center text-[16px] font-medium">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interes. and aspirations
        </p>
        <ForPeople />
        <VacanciesList />
        <div className="flex items-center justify-between">
          <h3 className="text-darkblue text-[16px]">
            Showing 6 jobs of 10 totals
          </h3>
          <div className="cursor-pointer gap-1 flex items-center">
            <span className="text-[24px] text-primary hover:underline">
              More
            </span>
            <ArrowLeft />
          </div>
        </div>
      </section>
      <section className="mb-[120px]">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-[40px] font-semibold">Resume</h1>
          <Button className="uppercase py-2.5 px-5 text-white bg-primary text-[20px] font-semibold rounded-[10px]">
            all Resume
          </Button>
        </div>
        <ResumeList />
      </section>
      <section className="mb-[120px]">
        <div className="flex items-center justify-between">
          <h1 className="text-primary font-semibold text-[40px] leading-[50px]">
            Check Out User Reviews About Our Platform!
          </h1>
          <ViewportSlot>
            <Button
              onClick={() => handlePrevSlide()}
              className="p-2 border-[2px] border-solid border-primary rounded-full "
            >
              <CarouselLeft />
            </Button>
            <Button
              onClick={() => handleNextSlide()}
              className="p-2 border-[2px] border-solid border-primary rounded-full "
            >
              <CarouselRight />
            </Button>
          </ViewportSlot>
        </div>
        <Reviews currentIndex={currentIndex} data={data} />
      </section>
      <section className="mb-[90px]">
        <div className="flex items-center gap-[120px]">
          <div className="left">
            <h1 className="text-primary text-5xl font-semibold mb-5">Sign up for job alerts</h1>
            <h2 className="text-darkblue underline text-[28px] mb-11">Get job alerts straight to your inbox.</h2>
            <p className="text-xl text-darkblue">Enter your email to get started. You will be able to unsubscribe at any time.</p>
          </div>
          <JobAlerts />
        </div>
      </section>
    </main>
  );
}
