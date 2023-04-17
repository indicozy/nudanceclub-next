import Link from "next/link";
import { FC, useState } from "react";

import { IconMenu2 } from "@tabler/icons-react";
import { INote, navigation } from "~/data/navigation";
import { motion } from "framer-motion";

import Logo from "./logo";

const variantsNavigationItem = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
  loading: {
    opacity: 0,
    x: 100,
  },
};

const NavigationItem: FC<INote & { toggle: () => void }> = ({
  href,
  name,
  toggle,
}) => {
  return (
    <motion.li
      className="mt-2 text-right font-bold uppercase"
      variants={variantsNavigationItem}
    >
      <Link onClick={() => toggle()} href={href}>
        {name}
      </Link>
    </motion.li>
  );
};

const variantsNavigation = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  loading: {},
};
const Navigation: FC<{ toggle: () => void }> = ({ toggle }) => {
  return (
    <motion.ul variants={variantsNavigation}>
      {navigation.map((note, i) => (
        <NavigationItem key={i} {...note} toggle={() => toggle()} />
      ))}
    </motion.ul>
  );
};

const variants = {
  loading: () => ({
    height: "100vh",
    transition: {
      delay: 0.3,
    },
  }),
  closed: () => ({
    height: "3.5rem",
    transition: {
      delay: 0.4,
    },
  }),
  open: () => ({
    height: "16rem",
  }),
};

export const Header = ({ isRouterLoading }: { isRouterLoading: boolean }) => {
  const [isOpen, toggleOpen] = useState<boolean>(false);
  return (
    <motion.header
      initial={"closed"}
      animate={isRouterLoading ? "loading" : isOpen ? "open" : "closed"}
      variants={variants}
      className="dark:bg-back_dark container fixed left-0 top-0 z-10 flex h-full w-screen flex-col items-center justify-end border-b border-b-black bg-[#ebeae9] transition-colors duration-300 sm:hidden sm:px-0"
    >
      <div className="mr-8 w-screen text-2xl">
        <Navigation toggle={() => toggleOpen(false)} />
      </div>
      <div className="mb-1 flex h-14 w-screen items-center justify-between px-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center">
          <button className="" onClick={() => toggleOpen((isOpen) => !isOpen)}>
            <IconMenu2 size={30} stroke={1.2} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
