import Link from "next/link";
import { FC } from "react";

const ArrowDown: FC = () => {
  return (
    <Link href={"/#about"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="butt"
        className="h-32 w-32 rounded-full border-4 border-gray-500 text-gray-500 hover:border-black hover:text-black sm:h-auto sm:w-auto sm:border-8"
      >
        <line x1="12" x2="12" y1="5" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </Link>
  );
};

export default ArrowDown;
