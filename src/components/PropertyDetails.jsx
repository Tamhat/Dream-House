import { useEffect, useState } from "react";
import clsx from "clsx";
import Aos from "aos";
import Accordion from "./Accordion";
import "aos/dist/aos.css";

const PropertyDetails = () => {
  const [isOpenText, setIsOpenText] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="section-padding grid grid-cols-1 md:grid-cols-5 gap-10"
      id="about"
    >
      {/* property description */}
      <div className="md:col-span-3" data-aos="fade-up">
        <div className="space-y-5">
          <h3 className="text-3xl font-bold">Property Description</h3>
          <div
            className={clsx(
              "text-justify space-y-2",
              isOpenText ? null : "line-clamp-[18]"
            )}
          >
            <p className="font-bold text-lg"></p>
            <p>
              FINAL PLOT FOR SALE. UNIQUE LOCATION ON
              PRIVATE ROAD OVERLOOKING COUNTRYSIDE. DETAILED PLANNING CURRENTLY
              APPROVED FOR EXCLUSIVE 1850 SQ/FT DWELLING. THE SITE HAS ITS
              PERMITTED DEVELOPMENT IN TACT ALLOWING FOR INITIAL AUTOMATIC
              EXTENSION UP TO 2400 SQ/FT. ALL SERVICES ON SITE. APPLICATION CAN
              BE VIEWED ON COVENTRY COUNCIL PLANNING PORTAL REF: RM/2021/3791
              <br /> <br /> OFFERS BASED ON £295,000............
              <br />
              <br /> For viewing arrangement, please get in touch with us.
              <br />
              <br />
              <span className="font-bold text-lg">
        
              </span>

              <br />
              <br /> <span className="font-bold text-lg">GDPR:</span> Applying
              for the above property means you are giving us permission to pass
              your details to the vendor or landlord for further communication
              related to viewing arrangement or more property-related
              information. *Virtual viewings: Some or all information pertaining
              to this property may have been provided solely by the
              vendor/landlord, and although we always make every effort to
              verify the information provided to us, we strongly advise you to
              make further enquiries before continuing. If you choose to make an
              offer based solely on a virtual viewing, then 99Home Ltd does not
              accept any liability for errors in the information provided,
              including but not limited to, measurements, photography and video
              content. <br />
              <br /> AML: To comply with government Money Laundering Regulations
              2019, we are required to confirm the identity of all prospective
              buyers. We use the services of a third party, AMLTeam.co.uk , who
              will contact you directly at an agreed time to do this. They will
              need the full name, date of birth and current address of all
              buyers. There is a nominal charge of £20 per buyer, payable direct
              to AMLTeam . Please note, we are unable to issue a memorandum of
              sale until the checks are complete. REFERRAL FEES We may suggest
              reputable providers of supplementary services, such as
              Conveyancing, Financial Services, Insurance, and Surveying. If you
              choose to utilize their services based on our recommendation, we
              may receive a commission payment or another form of benefit,
              referred to as a referral fee. It's important to note that you are
              not obligated to engage with the services of the recommended
              provider.
              <br />
              <br /> *Measurements: These approximate room sizes are only
              intended as general guidance. You must verify the dimensions
              carefully before ordering any household goods, carpets or any
              built-in furniture. *General: While we endeavor to make our sales
              particulars fair, accurate and reliable, they are only a general
              guide to the property and, accordingly, if there is any point
              which is of particular importance to you, please contact 99home
              and we will be pleased to check the detailing for you, especially
              if you are contemplating traveling some distance to view the
              property.
              <br /> *99home is the seller's agent for this property. Your
              conveyancer is legally responsible for ensuring any purchase
              agreement fully protects your position. We make detailed enquiries
              of the seller to ensure the information provided is as accurate as
              possible. Please inform us if you become aware of any information
              being inaccurate.
            </p>
            {/* <p className="font-bold text-lg">Specification</p>
            <p>
              <span className="font-bold">General - -Oak porch</span>
              <br />
              -Oak veneer doors with polished chrome <br /> -Zoned heating to
              upper floors <br /> -Fibre broadband to premises for home working{" "}
              <br /> -CAT 5 cabling for secure networks to lounge and bedrooms{" "}
              <br /> -10 year warranty <br /> -Large storage area in loft space
            </p>
            <p>
              <span className="font-bold">
                Kitchen - -Designer magnet kitchens
              </span>{" "}
              <br />
              -Quartz worktops and under mounted sink <br /> -Integrated
              appliances <br /> -Wine rack <br /> -Hansgrohe tap <br /> -Under
              unit and LED lighting
            </p>
            <p>
              <span className="font-bold">Bathrooms - -Porcelain tiling</span>{" "}
              <br />
              -LED feature lighting <br /> -Hansgrohe tops <br /> -Wall hung
              sanitary wear
            </p>

            <p>
              <span className="font-bold">Externals - -Outside tap</span> <br />
              -Security alarm system <br /> -3kw charging point with provisions
              for 7kw <br /> -Rear outside lights <br /> -Porch lantern <br />{" "}
              -Dusk to dawn lantern
            </p> */}
          </div>

          <button
            onClick={() => setIsOpenText(!isOpenText)}
            className="text-yellow-400 font-bold ital"
          >
            {isOpenText ? "Read Less..." : "Read More..."}
          </button>
        </div>
      </div>

      {/* contact info */}
      <div className="md:col-span-2" data-aos="fade-down">
        <div className="boxShadow rounded-xl brightness-100 bg-gray property-contact border-slate-50 my-border" >
          <img
            src="https://i.ibb.co/xjsPLfG/hero-img.jpg"
            alt="Property Image"
            className="h-[200px] lg:h-[250px] w-full object-cover object-center rounded-t-xl"
          />

          <div className="text-purple-700 py-2 px-5 space-y-2 bg-purple-100 ">
            <p className="font-bold text-lg">£295,000</p>
            <p>Offers in Region of</p>
          </div>

          <div className="p-5">
            <div className="space-y-2">
              <p className="font-bold text-lg">5 bedroom | 4 Bathroom</p>
              <p>Hawkes Mill Lane, Coventry, Warks, CV5</p>
            </div>

            <hr className="w-[50%] mx-auto border-[1px] border-gray-500 my-5" />

            <div className="space-y-2">
              <h4 className="text-xl font-bold truncate">
              Lee Clarke, Estate Agent, Coventry
              </h4>
              {/* <p className="truncate">
                111 New Union Street, Coventry, CV5 7DS
              </p> */}
            </div>

            <div className="bg-purple-100 px-5 py-3 rounded-2xl my-4 space-y-2">
              <p className="text-lg font-bold text-black">
                <span className="text-purple-700">Call:</span> 07940794030
              </p>
            </div>

            {/* <Dropdown /> */}
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
