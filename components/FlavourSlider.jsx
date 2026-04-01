import { flavorlists } from "@/app/constants";

const FlavourSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor, index) => (
          <div
            key={index}
            className="relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[90vw] lg:h-[70vh] lg:w-[50vw]"
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={flavor.name}
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp `}
              alt={flavor.name}
              className="absolute bottom-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlavourSlider;
