// src/components/Footer.js
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Button } from '../ui/button';

const Footer = () => {
    return (
        <footer className=" py-8 shadow-xl">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Job Portal</h2>
                    </div>
                    {/* Links */}
                    <div className="flex space-x-4">
                        <a href="/about" className="hover:text-gray-400">About Us</a>
                        <a href="/jobs" className="hover:text-gray-400">Jobs</a>
                        <a href="/contact" className="hover:text-gray-400">Contact Us</a>
                        <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                    </div>
                </div>
                {/* Social Icons */}
                <div className="flex justify-center mt-4 space-x-6">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-400" size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-gray-400" size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="hover:text-blue-400" size={24} />
                    </a>
                </div>
                {/* Newsletter */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
                    <div className="flex">
                        <input
                            type="email"
                            className="px-4 py-2 rounded-l-md text-black"
                            placeholder="Enter your email"
                        />
                        <Button className="bg-blue-500 text-white rounded-r-md px-4 py-2">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                © {new Date().getFullYear()} Job Portal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
