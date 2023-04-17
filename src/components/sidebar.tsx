import Link from "next/link";
import { FC, useState } from "react";

import { IconMenu2 } from "@tabler/icons-react";
import { navigation, INote } from "../data/navigation";
import { motion } from "framer-motion";

import Logo from "./logo";

const variantsNavigationItem = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: -100,
  },
  loading: () => ({
    opacity: 0,
    x: -100,
  }),
};

const NavigationItem: FC<INote & { toggle: () => void }> = ({
  href,
  name,
  toggle,
}) => {
  return (
    <motion.li
      className="mt-2 font-bold uppercase"
      variants={variantsNavigationItem}
    >
      <Link onClick={() => toggle()} href={href}>
        {name}
      </Link>
    </motion.li>
  );
};

const variantsNavigation = {
  loading: () => ({
    // width: '100vw',
    transition: {
      delay: 0,
    },
  }),
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
    width: "100vw",
    transition: {
      delay: 0.2,
    },
  }),
  closed: () => ({
    width: "5rem",
    transition: {
      delay: 0.3,
    },
  }),
  open: () => ({
    width: "20rem",
  }),
};

export const Sidebar = ({ isRouterLoading }: { isRouterLoading: boolean }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <motion.aside
      initial={"closed"}
      animate={isRouterLoading ? "loading" : isOpen ? "open" : "closed"}
      variants={variants}
      className="fixed left-0 top-0 z-10 hidden h-screen items-center justify-end border-r border-r-black bg-[#ebeae9] transition-colors duration-300 dark:border-r-black sm:flex"
    >
      <div className="font-runs ml-4 mr-8 h-screen w-[11rem] py-8 text-4xl">
        <Navigation toggle={() => toggleOpen(false)} />
      </div>
      <div className="flex h-screen w-8 flex-col items-center justify-between px-10 py-8">
        <div className="flex flex-col items-center">
          <button className="" onClick={() => toggleOpen((isOpen) => !isOpen)}>
            <IconMenu2 size={30} stroke={1.2} />
          </button>
        </div>
        <div className="-rotate-90 whitespace-nowrap pt-1 font-hor text-2xl font-bold uppercase tracking-widest text-gray-800">
          NU Dance Club
        </div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </motion.aside>
  );
};
