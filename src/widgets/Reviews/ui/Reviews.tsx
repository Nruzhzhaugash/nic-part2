import { ReviewsCard, ReviewsProps } from "@/entities/ReviewsCard/ui/ReviewsCard";
import Flicking from "@egjs/react-flicking";

interface FlickProps {
  currentIndex: number | undefined;
  data: ReviewsProps[];
}

export const Reviews = ({ currentIndex, data }: FlickProps) => {

  return (
    <div className="mt-[60px]">
      <Flicking
        cameraClass="flex gap-20 items-center"
        moveType="freeScroll"
        bound={true}
        defaultIndex={currentIndex}
      >
        {data.map((review, currentIndex) => (
          <div key={currentIndex}>
            <ReviewsCard
              name={review.name}
              prof={review.prof}
              desc={review.desc}
              city={review.city}
              work={review.work}
            />
          </div>
        ))}
      </Flicking>
    </div>
  );
};
