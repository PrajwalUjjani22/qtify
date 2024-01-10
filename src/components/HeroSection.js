import './HeroSection.css';
import HeroImage from '../assets/vibrating-headphone 1.png'

const HeroSection = () => {
  return (
    <div className="hero-section">

      <div>
        <div>
          100 Thousand Songs, ad-free
        </div>

        <div>
          Over thousands podcast episodes
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="headphones"
          width={212}
          height={212}
        />
      </div>
    </div>
  );
};

export default HeroSection;
