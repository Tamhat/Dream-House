import { useEffect } from "react";
import Aos from "aos";
import video from "../assets/Plot of Land for sale _ Hawkes Mill Lane, Coventry, Warks, CV5.mp4";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="section-padding min-h-[90vh] grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 mt-[10vh] py-10 md:py-0"
      id="hero"
    >
      {/* title description */}
      <div className="space-y-4" data-aos="fade-right">
        <h2 className="text-2xl md:text-4xl font-semibold hero-title text-center md:text-left">
        Plot of land for sale Coventry

        </h2>
        <p>
        {/* FINAL PLOT FOR SALE. UNIQUE LOCATION ON PRIVATE ROAD OVERLOOKING COUNTRYSIDE. DETAILED PLANNING CURRENTLY APPROVED FOR EXCLUSIVE 1850 SQ/FT DWELLING. THE SITE HAS ITS PERMITTED DEVELOPMENT IN TACT ALLOWING FOR INITIAL AUTOMATIC EXTENSION UP TO 2400 SQ/FT. ALL SERVICES ON SITE. */}
        Seize this rare opportunity to own a prime piece of land in Coventry's serene countryside. Located on Hawkes Mill Lane, this final plot offers a unique chance to build your dream home. With detailed planning already approved for an 1850 sq/ft luxury dwelling and potential to extend up to 2400 sq/ft, your vision for a perfect home can become a reality. Embrace the tranquility of rural living while enjoying the convenience of city proximity. Don't miss out on this exclusive offer!
        </p>
        <div>
          <h4 className="text-xl font-bold truncate">
          Hawkes Mill Lane, Coventry, Warks, CV5
          </h4>
          <div>
            <p className="text-white">Offers in Region of</p>
            <p className="font-bold text-lg">£295,000</p>
          </div>
        </div>

        <div>
          <Link
            className="md:px-5 px-4 bg-pink-700 text-white py-2 md:py-3 rounded font-bold"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* video */}
      <video
        // autoPlay
        loop
        controls
        // muted
        controlsList="nodownload"
        className="w-full aspect-video brightness-90 rounded"
        data-aos="fade-left"
      >
        <source type="video/mp4" src={video} />
      </video>
    </section>
  );
};

export default Hero;
