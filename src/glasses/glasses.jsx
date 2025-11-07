import { useState } from "react";
import data from "./dataGlasses.json";

export default function Glasses() {
  const [Glasses, setGlasses] = useState(null);

  const handleSetGlasses = (item) => {
    setGlasses(item);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="absolute top-0 w-full text-center text-4xl md:text-6xl font-bold py-6 bg-gray-300 opacity-50 text-white">
        TRY GLASSES APP ONLINE
      </h1>

      {/* Hai hình người mẫu */}
      <div className="flex justify-around items-center w-full mt-24">
        {/* Người mẫu có kính */}
        <div className="relative">
          <img src="/model.jpg" alt="model" className="w-64 md:w-72 rounded-lg shadow-lg" />
          {Glasses && (
            <>
              <img
                src={Glasses.url}
                alt="glasses"
                className="absolute top-[85px] left-[72px] w-[140px] opacity-90"
              />
              <div className="absolute bottom-0 w-full bg-orange-200 bg-opacity-70 text-left p-2">
                <h3 className="font-bold text-orange-700">{Glasses.name}</h3>
                <p className="text-sm text-gray-700">Price: ${Glasses.price}</p>
                <p className="text-xs text-gray-600">{Glasses.desc}</p>
              </div>
            </>
          )}
        </div>

        {/* Người mẫu không kính */}
        <div>
          <img src="/model.jpg" alt="model" className="w-64 md:w-72 rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Danh sách kính */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 bg-white p-4 mt-8 rounded-lg shadow-md">
        {data.map((item) => (
          <div key={item.id} onClick={() => handleSetGlasses(item)} className="cursor-pointer hover:scale-110 transition-transform">
            <img src={item.url} alt={item.name} className="w-24 mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
