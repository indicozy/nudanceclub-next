import Link from "next/link";
import { FC } from "react";

const ArrowDown: FC = () => {
  return (
    <Link href={"/#about"}>
      <div className="grid h-60 w-60 place-items-center rounded-full border border-[#4e555b] text-[#4e555b] hover:border-black hover:text-black">
        <span>EXPLORE</span>
      </div>
    </Link>
  );
};

export default ArrowDown;
