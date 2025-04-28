import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vadakala Kalyani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;