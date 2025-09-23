'use client';

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// ✅ Mobile dock (absolute inside parent)
const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("absolute bottom-4 right-4 z-50 block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8faee0] dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8faee0] dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

// ✅ Desktop dock (absolute inside parent)
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseY = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "absolute right-4 top-36 z-40 hidden flex-col items-center gap-4 rounded-2xl py-4 md:flex dark:bg-neutral-900 shadow-lg",
        className
      )}
      style={{ transform: "translateY(-50%)" }} // center vertically
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseY={mouseY} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - (bounds.y + bounds.height / 2);
  });

  const sizeTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const iconSizeTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(iconSizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(iconSizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height, maxWidth: 80, maxHeight: 80 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-white/20 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -2 }}
              className="absolute right-full mr-2 w-fit rounded-md bg-white/40 px-3 py-1 text-xs whitespace-pre text-neutral-200 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
