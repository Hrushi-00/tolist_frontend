import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'; 
import logo from '../Image/logo.png'; 
const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 sm:px-10 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
        
        <div className="space-y-4">
          <div className="text-xl font-bold text-black">
            <img className='h-32  w-24 overflow-hidden' src={logo} alt="" />
          </div>
          <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
          <form className="flex gap-4 items-center">
            <input
              type="email"
              placeholder="Your email here"
              className="border border-gray-300 px-3 py-2 w-full"
            />
            <button className="bg-red-500  text-white px-8 py-2 rounded-lg hover:bg-red-600">
              Join
            </button>
          </form>
          <p className="text-xs text-black">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

       
        <div>
          <h4 className="font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-1">
            <li>Home Page</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>User Guide</li>
            <li>Community Forum</li>
            <li>Feedback</li>
            <li>Support</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold  mb-2">Connect With Us</h4>
          <ul className="space-y-1">
            <a href='https://www.facebook.com/' className="flex items-center gap-2"><Facebook size={16} color="#FF3E54"/> Facebook</a>
            <a href='https://www.instagram.com/' className="flex items-center gap-2"><Instagram size={16} color="#FF3E54"/> Instagram</a>
            <a href='https://twitter.com/' className="flex items-center gap-2"><Twitter size={16} color="#FF3E54"/> X</a>
            <a href='https://www.linkedin.com/' className="flex items-center gap-2"><Linkedin size={16} color="#FF3E54"/> LinkedIn</a>
            <a href='https://www.youtube.com/' className="flex items-center gap-2"><Youtube size={16} color="#FF3E54"/> YouTube</a>
          </ul>
        </div>
      </div>

      
      <div className="border-t mt-10 pt-6 text-xs text-center text-gray-500">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <ul>
            <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Settings</a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
