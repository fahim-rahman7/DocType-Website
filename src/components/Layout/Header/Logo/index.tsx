import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      {/* Light mode logo */}
      <Image
        src="/images/logo/Logo-white.png"
        alt="logo"
        width={160}
        height={20}
        className="dark:hidden"
        priority
      />

      {/* Dark mode logo */}
      <Image
        src="/images/logo/Logo-Dark.png"
        alt="logo white"
        width={160}
        height={20}
        className="hidden dark:block"
        priority
      />
    </Link>
  );
};

export default Logo;