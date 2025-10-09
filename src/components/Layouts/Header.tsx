import { useState } from "react";
import { Menu, X, Home, Briefcase, Grid, Info } from "lucide-react";
import type { ComponentType } from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Button } from "../Button";

type NavItem = {
  to: string;
  label: string;
  Icon: ComponentType<any>;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Briefcase },
  { to: "/portfolio", label: "Portfolio", Icon: Grid },
  { to: "/about", label: "About", Icon: Info },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const getNavLinkClass = (isActive: boolean, isMobile: boolean) =>
    clsx(
      "flex items-center text-sm transition-colors",
      isActive ? "text-blue-600 font-medium" : "text-white hover:text-blue-900",
      isMobile && "py-2 rounded-md"
    );

  const NavigationLinks = ({ isMobile = false }) => (
    <>
      {navItems.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={isMobile ? closeMobileMenu : undefined}
          className={({ isActive }) => getNavLinkClass(isActive, isMobile)}
        >
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="relative bg-[#030303] shadow-sm broder">
      <div className="container mx-auto px-4 ">
        <div className="flex h-16 items-center justify-between border border-blue-500 rounded-lg">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 md:w-[148px] md:h-[64px] object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            <NavigationLinks />
          </nav>

          {/* Contact Us Button */}
          <Link to="/contact" className="hidden md:inline-block">
            <Button size="default">Contact Us</Button>
          </Link>
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="secondary"
              icon={
                isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )
              }
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
