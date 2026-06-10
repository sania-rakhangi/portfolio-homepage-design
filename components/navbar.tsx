"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function MonogramLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:scale-110"
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
      />
      <path
        d="M12 28V12H16L20 20L24 12H28V28H24V18L20 26L16 18V28H12Z"
        fill="currentColor"
        className="text-primary"
      />
      <rect
        x="6"
        y="6"
        width="4"
        height="4"
        fill="currentColor"
        className="text-primary"
      />
      <rect
        x="30"
        y="30"
        width="4"
        height="4"
        fill="currentColor"
        className="text-primary"
      />
    </svg>
  );
}

export function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 hover:scale-110"
            />
            <span className="font-mono text-sm sm:text-base tracking-wide">
              <span className="text-primary">sania</span>
              <span className="text-muted-foreground">.</span>
              <span className="text-foreground">rakhangi</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  activeLink === link.name
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform duration-300 origin-left",
                    activeLink === link.name ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border",
          isMobileMenuOpen ? "max-h-96" : "max-h-0 border-b-0",
        )}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "block px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200",
                activeLink === link.name
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-card",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
