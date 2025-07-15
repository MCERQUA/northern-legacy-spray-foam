"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Home, User, Briefcase, FileText, Phone } from "lucide-react";

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

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    }
  },
};

export function MetalMenuBar({ items = defaultNavItems, className }: MetalMenuBarProps) {
  const [isExpanded, setExpanded] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(items[0].name);
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent, itemName: string) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    } else {
      setActiveTab(itemName);
    }
  };

  const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

  return (
    <div className={cn("fixed top-6 left-1/2 -translate-x-1/2 z-50", className)}>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={(e) => handleNavClick(e, "")}
        className={cn(
          "relative flex items-center overflow-hidden rounded-full h-12 cursor-pointer",
          // Metal glass effect with Northern Legacy colors
          "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
          "backdrop-blur-xl border border-slate-700/50",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]",
          // Animated gradient overlay
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
          // Inner glow
          "after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-slate-700/20 after:to-transparent after:pointer-events-none",
          !isExpanded && "justify-center"
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
          className={cn(
            "flex items-center gap-1 sm:gap-2 px-4 relative z-10",
            !isExpanded && "pointer-events-none"
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <motion.a
                key={item.name}
                href={item.url}
                variants={itemVariants}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavClick(e, item.name);
                }}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-3 py-2 rounded-full transition-all duration-300",
                  "text-slate-300 hover:text-white",
                  "hover:bg-white/10 hover:backdrop-blur-sm",
                  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]",
                  isActive && "bg-white/15 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                )}
              >
                <span className="hidden md:inline relative z-10">{item.name}</span>
                <span className="md:hidden relative z-10">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                
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
        
        {/* Collapsed state icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-6 w-6 text-slate-300" />
          </motion.div>
        </div>

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