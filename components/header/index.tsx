
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

interface NavItem {
  name: string;
  icon?: React.ReactNode;
  href: string;
  subItems?: NavItem[];
}

export default function NavigationBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const toggleDesktopDropdown = (menu: string) => {
    setDesktopDropdown(desktopDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  // Check if a nav item is active
  const isActive = (href: string) => {
    return pathname === href ||
      (href !== "/" && pathname.startsWith(href));
  };

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    {
      name: "Projects", href: "#",
      subItems:
        [{ name: "Clinics", href: "/projects/clinics" },
        { name: "Hospitals", href: "/projects/hospitals" },
        { name: "Chambers", href: "/projects/chambers" },
        { name: "Home Interiors", href: "/projects/home-interiors" },
        ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [FaInstagram, FaFacebook, FaTwitter, FaPinterest];

  const isHomePage = pathname === "/";

  return (
    <header>
      <div
        className={`absolute top-0 left-0 right-0 z-30 ${isHomePage ? "bg-primary-floral text-black" : "bg-transparent text-white"
          }`}
      >
        <header className="container py-5 mx-auto grid lg:grid-cols-6 grid-cols-2 gap-5 justify-evenly items-center lg:px-12 px-4">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/dbldpiazm/image/upload/v1758358663/image_v3wwpn.png"
                alt="logo"
                width={1000}
                height={1000}
                className="md:w-24 w-12"
              />
            </Link>
          </div>

          <div className="lg:col-span-4">
            <nav className="md:transform">
              {/* Desktop Navigation */}
              <div className="uppercase text-sm hidden lg:flex items-center justify-center space-x-3">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.subItems ? (
                      <div
                        onMouseEnter={() => toggleDesktopDropdown(item.name)}
                        onMouseLeave={() => toggleDesktopDropdown(item.name)}
                      >
                        <button
                          className={`border-b-2 px-3 flex items-center justify-center uppercase ${item.subItems.some((sub) => isActive(sub.href)) ||
                            isActive(item.href)
                            ? "border-primary-givry text-primary-givry py-2 font-medium"
                            : "border-transparent hover:border-primary-accent hover:text-primary-accent"
                            }`}
                        >
                          {item.name} &nbsp;
                          {desktopDropdown === item.name ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </button>

                        {desktopDropdown === item.name && (
                          <div className="absolute left-0 p-2 w-48 bg-white shadow-lg py-1 z-50">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`block px-4 py-4 text-sm ${isActive(sub.href)
                                  ? "text-primary-accent bg-gray-50 font-medium"
                                  : "text-gray-700 hover:bg-primary-accent hover:text-white"
                                  }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`border-b-2 px-3 pb-2 ${isActive(item.href)
                          ? "border-primary-givry text-primary-givry font-medium"
                          : "border-transparent hover:border-primary-accent hover:text-primary-accent"
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button (unchanged) */}
              <div className="flex justify-end text-end w-full lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  className="relative w-10 h-10 flex items-center justify-center"
                >
                  <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className="relative w-6 h-5"
                  >
                    <motion.span
                      className={`absolute block w-full h-0.5 rounded-full ${isHomePage ? "bg-black" : "bg-white"
                        }`}
                      variants={{
                        closed: { top: "0%", rotate: 0 },
                        open: { top: "50%", rotate: 45 },
                      }}
                    />
                    <motion.span
                      className={`absolute block w-full h-0.5 rounded-full ${isHomePage ? "bg-black" : "bg-white"
                        }`}
                      variants={{
                        closed: { top: "50%", opacity: 1 },
                        open: { top: "50%", opacity: 0 },
                      }}
                    />
                    <motion.span
                      className={`absolute block w-full h-0.5 rounded-full ${isHomePage ? "bg-black" : "bg-white"
                        }`}
                      variants={{
                        closed: { top: "100%", rotate: 0 },
                        open: { top: "50%", rotate: -45 },
                      }}
                    />
                  </motion.div>
                </button>
              </div>
            </nav>
          </div>

          {/* CTA Buttons (unchanged) */}
          <div className="lg:block hidden">
            <div className="group relative w-auto text-end flex justify-end">
              <Link
                href="/contact"
                className={`uppercase text-sm tracking-wide relative hover:bg-black text-white w-48 text-nowrap py-4  overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center ${isHomePage
                  ? "bg-black text-white hover:bg-primary-accent"
                  : "bg-primary-accent text-white"
                  }`}
              >
                Contact us &nbsp; <MdArrowOutward size={20} />
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu (unchanged) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/40 backdrop-blur-sm"
              onClick={closeMenu}
            />
            {/* background color */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="relative h-full w-4/5 max-w-xs bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-5">
                {/* Header with logo and close button */}
                <div className="flex justify-between items-center pb-4 border-b-2 border-primary-accent">
                  <div className="flex items-center space-x-2">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="font-serif text-lg font-medium text-black"
                    >
                      <Image
                        src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745218924/l_e1wqw3.png"
                        alt="d"
                        width={1000}
                        height={1000}
                        className="w-12"
                      />
                    </motion.span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-primary-accent transition-colors"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <FaTimes className="text-white" />
                  </motion.button>
                </div>

                {/* Navigation links with staggered animation */}
                <motion.div
                  className="flex-1 overflow-y-auto py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <nav className="space-y-2">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        {item.subItems ? (
                          <div className="flex flex-col">
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className={`flex items-center justify-between px-3 py-3 rounded-lg transition-colors group w-full ${isActive(item.href) ||
                                item.subItems.some(sub => isActive(sub.href))
                                ? "text-primary-accent border-primary-accent font-medium hover:text-primary-accent"
                                : "text-gray-700 "
                                }`}
                            >
                              <div className="flex items-center">
                                <span className={`mr-3 text-lg ${isActive(item.href) ||
                                  item.subItems.some(sub => isActive(sub.href))
                                  ? "text-primary-accent"
                                  : "text-black group-hover:text-red-500"
                                  }`}>
                                  {item.icon}
                                </span>
                                <span>{item.name}</span>
                              </div>
                              {mobileDropdown === item.name ? (
                                <MdKeyboardArrowUp />
                              ) : (
                                <MdKeyboardArrowDown />
                              )}
                            </button>
                            {mobileDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="bg-gray-100"
                              >
                                {item.subItems.map((subItem, j) => (
                                  <Link
                                    key={j}
                                    href={subItem.href}
                                    className={`block pl-6 py-2 mt-2 transition-colors  ${isActive(subItem.href)
                                      ? "text-primary-accent bg-primary-givry border-b-3 border-primary-accent  font-medium"
                                      : "text-primary-brown hover:text-primary-umber"
                                      }`}
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`flex items-center px-3 py-3 transition-colors group ${isActive(item.href)
                              ? "text-primary-accent font-medium"
                              : "text-gray-700 hover:text-primary-umber"
                              }`}
                            onClick={closeMenu}
                          >
                            <span className={`mr-3 text-lg ${isActive(item.href)
                              ? "text-primary-accent"
                              : "text-primary-gunmetal group-hover:text-primary-umber"
                              }`}>
                              {item.icon}
                            </span>
                            <span>{item.name}</span>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>

                {/* Footer with CTA button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-4 border-t border-gray-100"
                >
                  {/* <Link
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#22333b] to-[#5d4f3f] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link> */}

                  {/* Social links */}
                  <div className="flex justify-center space-x-4 mt-4">
                    {socialIcons.map((Icon, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ y: -2 }}
                        href="#"
                        className="text-primary-umber hover:text-primary-accent transition-colors"
                        aria-label={`Social media link ${i}`}
                      >
                        <Icon />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
