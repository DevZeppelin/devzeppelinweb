import PhoneCard from "../components/tourist/PhoneCard";
import { useState } from "react";
import helper from "../components/tourist/helper";
import Footer from "../components/Footer";
import Image from "next/image";

const Tourist = () => {
  const [openEmergency, setOpenEmergency] = useState(false);
  const [openHospitals, setOpenHospitals] = useState(false);
  const [openOfficial, setOpenOfficial] = useState(false);

  const [language, setLanguage] = useState(helper.eng);

  const classNameFlag =
    "m-3 border-4 rounded-full cursor-pointer textDark";
  const classNameButton =
    "text-2xl cursor-pointer border-2 rounded-lg hover:bg-lightGray p-6 mx-4 md:mx-24";

  return (
    <div className="tourist-body">
      <div className="flex gap-2 md:gap-4 justify-center p-2">
        <Image
          alt="flag image png"
          width="45"
          height="45"
          src="/tourist/eng.png"
          className={classNameFlag}
          onClick={() => setLanguage(helper.eng)}
        />
        <Image
          alt="flag image png"
          width="45"
          height="45"
          src="/tourist/fra.png"
          className={classNameFlag}
          onClick={() => setLanguage(helper.fra)}
        />
        <Image
          alt="flag image png"
          width="45"
          height="45"
          src="/tourist/ale.png"
          className={classNameFlag}
          onClick={() => setLanguage(helper.ale)}
        />
        <Image
          alt="flag image png"
          width="45"
          height="45"
          src="/tourist/jap.png"
          className={classNameFlag}
          onClick={() => setLanguage(helper.jap)}
        />
        <Image
          alt="flag image png"
          width="45"
          height="45"
          src="/tourist/por.png"
          className={classNameFlag}
          onClick={() => setLanguage(helper.por)}
        />
      </div>
      <section id="welcome" className="text-center p-4 pt-16 md:p-16">
        <h1 className="text-4xl animate-bounce">{language.welcomeTitle}</h1>
        <img
          
          alt="wine mendoza"
          src="/tourist/logo.png"
          className="w-full h-full md:w-1/3 md:h-1/3 mx-auto"
        />
        <p className="p-6 px-2 md:px-24 text-xl">
          {language.welcomeDescription}
        </p>
      </section>
      <div>
        <div className="mt-12">
          <img
          
            alt="icon lib phone numbers"
            src="/tourist/phone-book.png"
            className="w-24 h-24 mx-auto"
          />
          <h1 className="text-3xl text-center">{language.numbersTitle}</h1>
        </div>

        <section
          id="emergency-numbers"
          className="text-center mx-2 md:mx-16 my-4 mt-12"
        >
          <h2
            onClick={() => setOpenEmergency(!openEmergency)}
            className={classNameButton}
          >
            {language.numbers[0].title}
          </h2>

          {openEmergency ? (
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">
              {language.numbers[0].data.map((item) => (
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

        <section
          id="hospital-numbers"
          className="text-center mx-2 md:mx-16 my-4"
        >
          <h2
            onClick={() => setOpenHospitals(!openHospitals)}
            className={classNameButton}
          >
            {language.numbers[1].title}
          </h2>
          {openHospitals ? (
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">
              {language.numbers[1].data.map((item) => (
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

        <section
          id="oficial-numbers"
          className="text-center mx-2 md:mx-16 my-4"
        >
          <h2
            onClick={() => setOpenOfficial(!openOfficial)}
            className={classNameButton}
          >
            {language.numbers[2].title}
          </h2>

          {openOfficial ? (
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12">
              {language.numbers[2].data.map((item) => (
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
      <p className="mt-16 text-center md:text-left font-bold mx-auto p-2">
        Info powered by:{" "}
      </p>
      <Footer />
    </div>
  );
};

export default Tourist;
