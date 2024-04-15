import {
  ReviewsCard,
  ReviewsProps,
} from "@/entities/ReviewsCard/ui/ReviewsCard";
import Flicking from "@egjs/react-flicking";
// import { useRef } from "react";
// import { Arrow } from "@egjs/flicking-plugins";

interface FlickProps {
  currentIndex: number | undefined;
  data: ReviewsProps[];
}

export const Reviews = ({ currentIndex, data }: FlickProps) => {
  // const flickingRef = useRef(null);

  // const plugins = [new Arrow()];

  return (
    <div className="mt-[60px]">
      <Flicking
        // ref={flickingRef}
        // plugins={plugins}
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
