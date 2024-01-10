import './HeroSection.css';
import HeroImage from '../assets/herosection.png'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img
        src={HeroImage}
        alt="100 Thousand Songs, ad-free Over thousands podcast episodes"
      />
    </div>
  );
};

export default HeroSection;
