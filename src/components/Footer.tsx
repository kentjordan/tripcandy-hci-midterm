import Image from "next/image";
import logo from "@/assets/nav_logo.png";
import payments from "@/assets/payments.png";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex flex-col bg-stone-950">
			<div className="justify-even flex flex-wrap items-center gap-24 p-8 sm:p-16">
				<div className="flex-1">
					<Image src={logo} alt=""></Image>
					<Image src={payments} alt="" className="my-8"></Image>
					<p className="text-stone-200">contact@tripcandy.io</p>
					<p className="my-2 text-stone-200">
						77 High St, #05-09 High Street Plaza, Singapore, 179433
					</p>
				</div>
				<div className="flex-1">
					<div className="flex flex-wrap justify-center gap-24 sm:flex-nowrap md:justify-end">
						<div className="flex flex-1 flex-col gap-4">
							<h1 className="mb-4 text-2xl font-bold">Products</h1>
							<Link
								href="https://www.tripcandy.io/buy-earn-candy"
								className="text-stone-200"
							>
								Buy & Earn CANDY
							</Link>
							<Link
								href="https://www.tripcandy.io/membership"
								className="text-stone-200"
							>
								Membership
							</Link>
							<Link
								href="https://www.tripcandy.io/apps"
								className="text-stone-200"
							>
								APPs
							</Link>
							<Link
								href="https://www.tripcandy.io/debit-card"
								className="text-stone-200"
							>
								Debit Card
							</Link>
							<Link
								href="https://www.tripcandy.io/tokenomics"
								className="text-stone-200"
							>
								CANDY Tokenomics
							</Link>
						</div>
						<div className="gaLink-2 flex flex-1 flex-col gap-4">
							<h1 className="mb-4 text-2xl font-bold">Company</h1>
							<Link
								href="https://www.tripcandy.io/about"
								className="text-stone-200"
							>
								About
							</Link>
							<Link
								href="https://www.tripcandy.io/blog/"
								className="text-stone-200"
							>
								Blog
							</Link>
							<Link
								href="https://www.tripcandy.io/invite"
								className="text-stone-200"
							>
								Invite
							</Link>
						</div>
						<div className="gaLink-2 flex flex-1 flex-col  gap-4">
							<h1 className="mb-4 text-2xl font-bold">Support</h1>
							<Link
								href="https://www.tripcandy.io/help-center"
								className="text-stone-200"
							>
								Help center
							</Link>
							<Link
								href="https://www.tripcandy.io/log-in"
								className="text-stone-200"
							>
								My Trip
							</Link>
							<Link
								href="https://www.tripcandy.io/terms-conditions"
								className="text-stone-200"
							>
								Terms & Conditions
							</Link>
							<Link
								href="https://www.tripcandy.io/privacy-policy"
								className="text-stone-200"
							>
								Privacy Policy
							</Link>
							<Link
								href="https://www.tripcandy.io/contact-us"
								className="text-stone-200"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center bg-black p-4 text-center">
				<p>© Copyright {new Date().getFullYear()}. TripCandy.</p>
			</div>
		</div>
	);
};

export default Footer;
