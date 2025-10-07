import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Service" },
  { to: "/", label: "Portfolio" },
  { to: "/services", label: "About" },
];

const Header = () => {
  const [isMobileMenu, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const getNavLinkClass = (isActive: boolean, isMobile: boolean) =>
    clsx(
      "flex items-center text-sm transition-colors",
      isActive ? "text-blue-600 font-medium" : "text-white hover:text-blue-900",
      isMobile && "py-2 rounded-md"
        );
    
    

  return <div>Header</div>;
};

export default Header;
