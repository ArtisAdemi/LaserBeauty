import React from "react";
// import professionalTeam from "../assets/professionalTeam.jpg";
// import hygienicPlace from "../assets/hygienicPlace.jpg";
// import naturalIngredient from "../assets/naturalIngredient.jpg";
// import painlessWaxing from "../assets/painlessWaxing.jpg";
import legs from "../assets/legs.jpg";

const WhyChooseUs: React.FC = () => {
    return (
        <div className="py-12 bg-[#FFF7EF] ">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-[#6a483c]">Why Choose Us</h2>
                <p className="text-lg text-gray-700 mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque.
                </p>
            </div>
            <div className="flex justify-center items-center space-x-4">
                <div className="flex flex-col items-center max-w-xs mb-8">
                    <img
                        src={legs}
                        alt="Professional Team"
                        className="w-48 h-48 object-cover rounded-tl-[50%] mb-4"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-[#6a483c]">
                            Professional Team
                        </h3>
                        <p className="text-gray-700 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center max-w-xs mb-8">
                    <div>

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
                        className="w-48 h-48 object-cover mb-4"
                    />
                </div>
                <div className="flex flex-col items-center max-w-xs mb-8">
                    <img
                        src={legs}
                        alt="Natural Ingredient"
                        className="w-48 h-48 object-cover rounded-full mb-4"
                    />
                    <div>

                        <h3 className="text-xl font-semibold text-[#6a483c]">
                            Natural Ingredient
                        </h3>
                        <p className="text-gray-700 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center max-w-xs mb-8">
                    <h3 className="text-xl font-semibold text-[#6a483c]">
                        Painless Waxing
                    </h3>
                    <p className="text-gray-700 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.
                    </p>
                    <img
                        src={legs}
                        alt="Painless Waxing"
                        className="w-48 h-48 object-cover rounded-br-[50%] mb-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;