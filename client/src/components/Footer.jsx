import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 px-4 md:px-16 pt-10 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm md:text-base">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">About</h2>
          <p className="mb-4">
            Blog is your trusted source for thought-provoking insights and updates on technology, lifestyle, and more.
          </p>
          <p>
            Email:{" "}
            <Link to="mailto:info@blog.com" className="text-orange-400 hover:underline">
              info@blog.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link to="tel:+25194567890" className="text-orange-400 hover:underline">
              +251-9456-7890
            </Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-orange-400 transition">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Categories</h2>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-orange-400 transition">Technology</Link></li>
            <li><Link to="#" className="hover:text-orange-400 transition">Lifestyle</Link></li>
            <li><Link to="#" className="hover:text-orange-400 transition">News</Link></li>
            <li><Link to="#" className="hover:text-orange-400 transition">Weather</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Resources</h2>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-orange-400 transition">Help Center</Link></li>
            <li><Link to="#" className="hover:text-orange-400 transition">Documentation</Link></li>
            <li><Link to="#" className="hover:text-orange-400 transition">API Reference</Link></li>
            <li><Link to="#" className="hover:text-orange-400 transition">Community Forum</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Shiera_backend</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
