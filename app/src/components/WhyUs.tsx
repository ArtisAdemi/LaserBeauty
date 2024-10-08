import React from "react";
// import professionalTeam from "../assets/professionalTeam.jpg";
// import hygienicPlace from "../assets/hygienicPlace.jpg";
// import naturalIngredient from "../assets/naturalIngredient.jpg";
// import painlessWaxing from "../assets/painlessWaxing.jpg";
import legs from "../assets/legs.jpg";

const WhyChooseUs: React.FC = () => {
    return (
        <div className="py-12 bg-[#FFF7EF] ">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#6a483c]">Why Choose Us</h2>
                <p className="text-lg text-gray-700 mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center  items-center space-x-0 xl:space-x-32">
                <div className="flex flex-col items-center mb-8 w-full">
                    <img
                        src={legs}
                        alt="Professional Team"
                        className="w-full lg:w-48 h-ful lg:h-48 object-cover rounded-tl-[50%] mb-4 border-2 border-[#6a483c]"
                    />
                    <div className="flex flex-col items-center w-full lg:w-48 lg:h-48">
                        <h3 className="text-xl font-semibold text-[#6a483c]">
                            Professional Team
                        </h3>
                        <p className="text-gray-700 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-col items-center mb-8 w-full">
                    <div className="flex flex-col items-center lg:w-48 lg:h-48">
                        <h3 className="text-xl font-semibold text-[#6a483c]">
                            Hygienic Place
                        </h3>
                        <p className="text-gray-700 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.
                        </p>
                    </div>
                    <img
                        src={legs}
                        alt="Hygienic Place"
                        className="w-full lg:w-48 h-full lg:h-48 object-cover mb-4 border-2 border-[#6a483c]"
                    />
                </div>
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={legs}
                        alt="Natural Ingredient"
                        className="w-full lg:w-48 h-full lg:h-48 object-cover mb-4 border-2 border-[#6a483c]"
                    />
                    <div className="flex flex-col items-center w-full lg:w-48 lg:h-48">
                        <h3 className="text-xl font-semibold text-[#6a483c]">
                            Natural Ingredient
                        </h3>
                        <p className="text-gray-700 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-col items-center mb-8">
                    <div className="flex flex-col items-center w-full lg:w-48 lg:h-48">
                        <h3 className="text-xl font-semibold text-[#6a483c]">
                            Painless Waxing
                        </h3>
                        <p className="text-gray-700 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.
                        </p>
                    </div>
                    <img
                        src={legs}
                        alt="Painless Waxing"
                        className="w-full lg:w-48 h-full lg:h-48 object-cover rounded-br-[50%] mb-4 border-2 border-[#6a483c]"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;