import { motion } from 'framer-motion';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Camera className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold">Qissat Al Hawiya</span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Capturing the essence of your identity through the art of photography.
              Every moment tells a story, and we're here to make yours unforgettable.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@qissatalhawiya.sa</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span>Riyadh, Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Qissat Al Hawiya. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
