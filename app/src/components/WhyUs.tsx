import React from "react";
// import professionalTeam from "../assets/professionalTeam.jpg";
// import hygienicPlace from "../assets/hygienicPlace.jpg";
// import naturalIngredient from "../assets/naturalIngredient.jpg";
// import painlessWaxing from "../assets/painlessWaxing.jpg";
// import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import LaserHairRemoval from "../assets/LaserHairRemoval.jpg";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-12 bg-[#FFF7EF] ">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#6a483c]">Pse të na zgjidhni ne?</h2>
        <p className="text-lg text-gray-700 mt-2">Përkushtim maksimal dhe rezultate të garantuara. Na besoni për suksesin tuaj!</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center  items-center space-x-0 xl:space-x-32">
        <div className="flex flex-col xl:items-center mb-8 w-full">
          <img src={LaserHairRemoval} alt="Professional Team" className="w-full lg:w-48 h-ful lg:h-48 object-cover rounded-tl-[50%] mb-4 border-2 border-[#6a483c]" />
          <div className="flex flex-col items-center w-full lg:w-48 lg:h-48">
            <h3 className="text-xl font-semibold text-center text-[#6a483c]">Ekipi Profesional</h3>
            <p className="text-gray-700 text-center">Ekipi ynë përbëhet nga profesionistë të trajnuar në ofrimin e trajtimeve të sigurta dhe efektive me lazer.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-col xl:items-center mb-8 w-full">
          <div className="flex flex-col items-center lg:w-48 lg:h-48">
            <h3 className="text-xl text-center font-semibold text-[#6a483c]">Ambient Higjienik</h3>
            <p className="text-gray-700 text-center">Ne i japim përparësi pastërtisë dhe higjienës për të siguruar një ambient të sigurt dhe steril gjatë trajtimeve me lazer.</p>
          </div>
          <img src={image4} alt="Hygienic Place" className="w-full lg:w-48 h-full lg:h-48 object-cover mb-4 border-2 border-[#6a483c]" />
        </div>
        <div className="flex flex-col items-center mb-8">
          <img src={image5} alt="Natural Ingredient" className="w-full lg:w-48 h-full lg:h-48 object-cover mb-4 border-2 border-[#6a483c]" />
          <div className="flex flex-col items-center w-full lg:w-48 lg:h-48">
            <h3 className="text-xl text-center font-semibold text-[#6a483c]">Teknologji e Avancuar</h3>
            <p className="text-gray-700 text-center">Pajisjet tona me lazer të teknologjisë së lartë sigurojnë trajtime të sakta dhe efikase për të gjitha llojet e lëkurës.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-col items-center mb-8">
          <div className="flex flex-col items-center w-full lg:w-48 lg:h-48">
            <h3 className="text-xl font-semibold text-center text-[#6a483c]">Eksperiencë Pa Dhimbje</h3>
            <p className="text-gray-700 text-center">Trajtimet tona me lazer janë krijuar për të ofruar minimal dhimbje dhe rezultate maksimale.</p>
          </div>
          <img src={image6} alt="Painless Waxing" className="w-full lg:w-48 h-full lg:h-48 object-cover rounded-br-[50%] mb-4 border-2 border-[#6a483c]" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
