import PhoneCard from "../components/tourist/PhoneCard";
import { useState } from "react";
import helper from "../components/tourist/helper";
import Footer from "../components/Footer";

const tourist = () => {
  const [openEmergency, setOpenEmergency] = useState(false);
  const [openHospitals, setOpenHospitals] = useState(false);
  const [openOfficial, setOpenOfficial] = useState(false);

  const classNameButton =
    "text-2xl cursor-pointer border-2 rounded-lg hover:bg-lightGray p-6 mx-4 md:mx-24";

  return (
    <div className="tourist-body">
      <section id="welcome" className="text-center p-4 pt-16 md:p-16">
        <h1 className="text-4xl animate-bounce">{helper.eng.welcomeTitle}</h1>
        <img src="/tourist/logo.png" className="w-full h-full  md:w-1/3 md:h-1/3 mx-auto" />
        <p className="p-6 text-xl">{helper.eng.welcomeDescription}</p>
      </section>
      <div>
        <h1 className="text-3xl text-center">Useful numberS!</h1>

        <section id="emergency-numbers" className="text-center mx-2 md:mx-16 my-4 mt-12">
          <h2
            onClick={() => setOpenEmergency(!openEmergency)}
            className={classNameButton}
          >
            {helper.eng.numbers[0].title}
          </h2>

          {openEmergency ? (
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">
              {helper.eng.numbers[0].data.map((item) => (
                <PhoneCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  number={item.number}
                  number2={item.number2}
                />
              ))}
            </div>
          ) : null}
        </section>

        <section id="hospital-numbers" className="text-center mx-2 md:mx-16 my-4">
          <h2
            onClick={() => setOpenHospitals(!openHospitals)}
            className={classNameButton}
          >
            {helper.eng.numbers[1].title}
          </h2>
          {openHospitals ? (
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">
              {helper.eng.numbers[1].data.map((item) => (
                <PhoneCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  number={item.number}
                  number2={item.number2}
                />
              ))}
            </div>
          ) : null}
        </section>

        <section id="oficial-numbers" className="text-center mx-2 md:mx-16 my-4">
          <h2
            onClick={() => setOpenOfficial(!openOfficial)}
            className={classNameButton}
          >
            {helper.eng.numbers[2].title}
          </h2>

          {openOfficial ? (
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">
              {helper.eng.numbers[2].data.map((item) => (
                <PhoneCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  number={item.number}
                  number2={item.number2}
                />
              ))}
            </div>
          ) : null}
        </section>
      </div>
      <p className="mt-16 text-center md:text-left font-bold mx-auto p-2">Info powered by: </p>
      <Footer />
    </div>
  );
};

export default tourist;
