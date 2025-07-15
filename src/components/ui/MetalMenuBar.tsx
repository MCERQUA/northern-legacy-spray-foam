"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Phone } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

interface MetalMenuBarProps {
  items?: NavItem[];
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'About', url: '#about', icon: User },
  { name: 'Contact', url: '#contact-form', icon: Phone }
];

export function MetalMenuBar({ items = defaultNavItems, className }: MetalMenuBarProps) {
  const [activeTab, setActiveTab] = React.useState(items[0].name);

  const handleNavClick = (itemName: string) => {
    setActiveTab(itemName);
  };

  const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

  return (
    <div className={cn("fixed top-6 left-1/2 -translate-x-1/2 z-50", className)}>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 250,
          staggerChildren: 0.07,
          delayChildren: 0.2,
        }}
        className={cn(
          "relative flex items-center overflow-hidden rounded-full h-12",
          // Metal glass effect with Northern Legacy colors
          "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
          "backdrop-blur-xl border border-slate-700/50",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]",
          // Animated gradient overlay
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
          // Inner glow
          "after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-slate-700/20 after:to-transparent after:pointer-events-none"
        )}
        style={{
          background: `linear-gradient(135deg, 
            rgba(71, 85, 105, 0.15) 0%, 
            rgba(51, 65, 85, 0.25) 25%, 
            rgba(30, 41, 59, 0.35) 50%, 
            rgba(51, 65, 85, 0.25) 75%, 
            rgba(71, 85, 105, 0.15) 100%)`,
        }}
      >
        {/* Navigation Items */}
        <motion.div
          className="flex items-center gap-1 sm:gap-2 px-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {items.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <motion.a
                key={item.name}
                href={item.url}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                onClick={(e) => {
                  handleNavClick(item.name);
                }}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-3 py-2 rounded-full transition-all duration-300",
                  "text-slate-300 hover:text-white",
                  "hover:bg-white/10 hover:backdrop-blur-sm",
                  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]",
                  isActive && "bg-white/15 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                )}
              >
                {/* Always show text */}
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator with forest green/steel blue theme */}
                {isActive && (
                  <motion.div
                    layoutId="metalIndicator"
                    className="absolute inset-0 w-full rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(34, 197, 94, 0.3) 0%, 
                        rgba(59, 130, 246, 0.2) 50%, 
                        rgba(34, 197, 94, 0.3) 100%)`,
                      boxShadow: `
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                        0 0 20px rgba(34, 197, 94, 0.3)
                      `
                    }}
                  >
                    {/* Top highlight */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full opacity-60">
                      <div className="absolute w-12 h-6 bg-green-400/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-green-400/30 rounded-full blur-sm -top-1" />
                      <div className="absolute w-4 h-4 bg-green-400/40 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-full border border-slate-600/30 pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0)",
              "0 0 0 2px rgba(34, 197, 94, 0.1)",
              "0 0 0 0 rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.nav>
    </div>
  );
}

export default MetalMenuBar;
