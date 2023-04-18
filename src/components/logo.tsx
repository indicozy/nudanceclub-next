import Image from "next/image";

const Logo = () => {
  return (
    <div className="font-runs grid h-16 w-16 place-items-center text-xl leading-none">
      <Image
        src={"/logo.png"}
        width={400}
        height={400}
        alt="Nu dance club logo"
      />
    </div>
  );
};
export default Logo;
