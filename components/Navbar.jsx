import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 p-3 md:p-9">
      <Image
        src="/images/nav-logo.svg"
        alt="Logo"
        width={100}
        height={50}
        className="w-20 md:w-24"
      />
    </nav>
  );
};
export default Navbar;
