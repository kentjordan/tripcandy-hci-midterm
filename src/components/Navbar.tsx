import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/nav_logo.png";

const Navbar = () => {
	return (
		<div className="absolute top-0 hidden bg-transparent p-8 md:flex">
			<div className="flex items-center justify-center gap-16">
				<Link
					className="rounded-full px-6 pb-2 font-bold uppercase"
					href="https://www.tripcandy.io/buy-earn-candy"
				>
					Products
				</Link>
				<Link
					className="rounded-full px-6 pb-2 font-bold uppercase"
					href="https://www.tripcandy.io/about"
				>
					About
				</Link>
				<Image src={logo} alt=""></Image>
				<Link
					className="rounded-full border-b border-b-[#00305F] px-6 pb-2 font-bold uppercase"
					href="https://www.tripcandy.io/log-in"
				>
					Login
				</Link>
				<Link
					className="rounded-full px-6 pb-2 font-bold uppercase"
					href="https://www.tripcandy.io/sign-up"
				>
					Signup
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
