import React from "react";
import egg from "../assets/egg.png";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards 1 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
          <p className="font-bold text-2xl pt-4 px-2">Sun's Out, BOGO's Out</p>
          <p className="font-semibold px-2">Trough 8/26</p>
          <button className="border-white bg-white text-black absolute bottom-4 mx-2">
            Order Now
          </button>
        </div>
        {/* Img */}
        <img src={egg} alt="" className="max-h-[160px] w-full object-cover" />
      </div>

      {/* Cards 2 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
          <p className="font-bold text-2xl pt-4 px-2">Ramen Cheesburger</p>
          <p className="font-semibold px-2">Added Daily</p>
          <button className="border-white bg-white text-black absolute bottom-4 mx-2">
            Order Now
          </button>
        </div>
        {/* Img */}
        <img src='https://cdn.midjourney.com/d1937852-fde1-405f-9316-6d8f9fe0e5b3/0_0.png' alt="" className="max-h-[160px] w-full object-cover" />
      </div>

      {/* Cards 3 */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
          <p className="font-bold text-2xl pt-4 px-2">Chicken Nuggets x20</p>
          <p className="font-semibold px-2">Tasty</p>
          <button className="border-white bg-white text-black absolute bottom-4 mx-2">
            Order Now
          </button>
        </div>
        {/* Img */}
        <img src='https://cdn.midjourney.com/0b5823a2-15f1-4bf4-985c-25ef1ccdc733/0_1.png' alt="" className="max-h-[160px] w-full object-cover" />
      </div>
    </div>
  );
};

export default HeadlineCards;
