"use client"


import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, MORE_SERVICES_LINKS, FULL_NAV_ITEMS, LIMITED_NAV_ITEMS } from "@/lib/constants";
import Logo from "../homepage/Logo";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
  };

  const getInitials = () => {
    if (!user) return "U";
    return `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase() || "U";
  };

  // Detect scroll and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold -> Hide
        setIsVisible(false);
      } else {
        // Scrolling up -> Show
        setIsVisible(true);
      }

      // Determine background style
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Choose menu based on page
  // For mobile, we can still use FULL_NAV_ITEMS or a custom list
  const mobileNavItems = pathname === "/" ? FULL_NAV_ITEMS : LIMITED_NAV_ITEMS;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"}`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 md:px-8">

          {/* BRAND */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 p-1">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
              >
                More Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200">
                  {MORE_SERVICES_LINKS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${pathname === "/contact"
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">

            {isAuthenticated ? (
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {getInitials()}
                  </div>
                  <div className="text-left hidden xl:block">
                    <p className="text-sm font-medium text-gray-900 leading-none">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Customer</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isUserDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-4 py-2 border-b border-gray-100 mb-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setIsUserDropdownOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Login Dropdown */}
                <div className="relative group">
                  <button className="text-gray-900 font-medium hover:text-blue-600 text-sm transition-colors flex items-center gap-1">
                    Login <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      As Customer
                    </Link>
                    <Link href="/supplier/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      As Supplier
                    </Link>
                    <Link href="/admin/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      As Admin
                    </Link>
                  </div>
                </div>

                {/* Signup Dropdown */}
                <div className="relative group">
                  <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-sm flex items-center gap-1">
                    Signup <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      As Customer
                    </Link>
                    <Link href="/supplier/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                      As Supplier
                    </Link>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* SIDEBAR (Mobile) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sliding Panel */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Logo />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-4 space-y-1">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${pathname === item.href
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6 px-8 pt-6 border-t border-gray-100 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Login</p>
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2 text-gray-900 font-medium hover:text-blue-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    As Customer
                  </Link>
                  <Link
                    href="/supplier/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2 text-gray-900 font-medium hover:text-blue-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    As Supplier
                  </Link>
                  <Link
                    href="/admin/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2 text-gray-900 font-medium hover:text-blue-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    As Admin
                  </Link>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Signup</p>
                  <Link
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-sm text-sm"
                  >
                    As Customer
                  </Link>
                  <Link
                    href="/supplier/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-sm text-sm"
                  >
                    As Supplier
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
