"use client";
import home_cover from "@/assets/home_cover.png";
import icon1 from "@/assets/1.png";
import icon2 from "@/assets/2.png";
import icon3 from "@/assets/3.png";
import icon4 from "@/assets/4.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import girl from "@/assets/girl.svg";
import singapore from "@/assets/singapore.png";
import malaysia from "@/assets/malaysia.png";
import indonesia from "@/assets/indonesia.png";
import philippines from "@/assets/philippines.png";

export default function Home() {
	return (
		<div className="flex flex-col">
			<div
				style={{
					backgroundImage: `url(${home_cover.src})`,
				}}
				className="relative flex h-screen flex-col items-center justify-center bg-cover bg-no-repeat text-white"
			>
				<Navbar />
				<h1 className="max-w-[24ch] text-center text-4xl font-bold">
					Travel and Book Hotels With Crypto and Get Crypto Rewards!
				</h1>
				<div className="mt-8 flex flex-wrap justify-center gap-3 px-1 sm:p-4">
					<input
						type="text"
						className="shrink flex-grow rounded-full bg-white/30 px-4 py-2 placeholder:text-stone-300"
						placeholder="Search Location..."
					/>
					<input
						type="date"
						className="shrink flex-grow rounded-full bg-white/30 px-6 py-2 text-stone-300 "
					/>
					<button
						onClick={() => alert("Page under development.")}
						className="shrink flex-grow  rounded-full bg-[#00305F]/70 px-4 py-2 font-bold text-white"
					>
						Proceed
					</button>
				</div>
			</div>
			{/* Candy Listing */}
			<div className="flex flex-wrap items-center justify-center border border-b-stone-300 bg-white p-4 text-black lg:justify-between">
				<h1 className="mx-8 text-xl font-bold">CANDY Listings </h1>
				<div className="my-4 flex flex-wrap items-center justify-center gap-4 md:justify-between lg:gap-8">
					<Image
						src={icon1.src}
						className="h-full"
						width={140}
						height={0}
						alt=""
					/>
					<Image
						src={icon2.src}
						className="h-full"
						width={140}
						height={0}
						alt=""
					/>
					<Image
						src={icon3.src}
						className="h-full"
						width={140}
						height={0}
						alt=""
					/>
					<Image
						src={icon4.src}
						className="h-full"
						width={140}
						height={0}
						alt=""
					/>
				</div>
			</div>
			{/* What is Tripcandy? */}
			<div className="relative flex h-screen items-center justify-center bg-white text-black">
				<h1 className="z-10 -mt-32 w-[29ch] px-4 text-center text-3xl font-bold md:text-5xl">
					Tripcandy is an Online Travel Agency that allows you to search and
					book your favourite hotels and flights all around the world.
				</h1>
				<Image className="absolute bottom-0 left-0 shrink" src={girl} alt="" />
			</div>
			<div className="flex min-h-screen flex-col items-center justify-center bg-black py-16 text-white">
				<h1 className="mb-12 text-center text-xl font-bold sm:text-4xl">
					Top Countries
				</h1>
				<div className="flex flex-wrap justify-center gap-8 p-2">
					<div className="relative   rounded-3xl">
						<div className="absolute z-10 flex h-full w-full items-end justify-center bg-gradient-to-t from-black">
							<span className="mb-8 text-4xl font-bold">Singapore</span>
						</div>
						<Image width={300} src={singapore} alt="" />
						asdf
					</div>
					<div className="relative   rounded-3xl">
						<div className="absolute z-10 flex h-full w-full items-end justify-center bg-gradient-to-t from-black">
							<span className="mb-8 text-4xl font-bold">Philippines</span>
						</div>
						<Image width={300} src={philippines} alt="" />
						asdf
					</div>
					<div className="relative   rounded-3xl">
						<div className="absolute z-10 flex h-full w-full items-end justify-center bg-gradient-to-t from-black">
							<span className="mb-8 text-4xl font-bold">Malaysia</span>
						</div>
						<Image width={300} src={malaysia} alt="" />
						asdf
					</div>
					<div className="relative   rounded-3xl">
						<div className="absolute z-10 flex h-full w-full items-end justify-center bg-gradient-to-t from-black">
							<span className="mb-8 text-4xl font-bold">Indonesia</span>
						</div>
						<Image width={300} src={indonesia} alt="" />
						asdf
					</div>
				</div>
			</div>
			<div className="flex min-h-screen flex-col bg-white">
				<div className="flex flex-1 flex-wrap border-b border-stone-200">
					<div className="flex flex-1 flex-col items-center justify-center border-r border-stone-200 px-0 sm:items-end sm:px-16">
						<h1 className="text-center text-2xl font-bold text-black sm:px-4 sm:text-end">
							Active Customer Support
						</h1>
						<p className="mt-4 min-w-[24ch] max-w-[32ch] px-4 text-center text-sm text-stone-500 sm:text-end">
							Need help with booking hotels, rewards or making payments? Do
							check out our quick FAQ page for answers or reach out to our
							support team here.
						</p>
					</div>
					<div className="flex flex-1 flex-col items-center justify-center border-l border-stone-200 px-0 sm:items-start sm:px-16">
						<h1 className="px-4 text-center text-2xl font-bold text-black sm:text-start">
							Members Best Price
						</h1>
						<p className="mt-4 min-w-[24ch] max-w-[32ch] px-4 text-center text-sm text-stone-500 sm:text-start">
							We are constantly working to get our members the best hotel
							prices. If you find a cheaper deal on another site after you have
							booked with us. We will refund you the difference. T&C apply.
						</p>
					</div>
				</div>
				<div className="flex flex-1 flex-wrap border-t border-stone-200">
					<div className="flex flex-1 flex-col items-center justify-center border-r border-stone-200 px-0 sm:items-end sm:px-16">
						<h1 className="px-4 text-center text-2xl font-bold text-black sm:text-end">
							Multi-Payment Options
						</h1>
						<p className="mt-4 min-w-[24ch] max-w-[32ch] px-4 text-center  text-sm text-stone-500 sm:text-end">
							We provide customers with multiple payment methods for their
							booking. From Cryptocurrencies , Credit cards, E-wallets and even
							bank transfers.
						</p>
					</div>
					<div className="flex flex-1 flex-col items-center justify-center border-l border-stone-200 px-0 sm:items-start sm:px-16">
						<h1 className="px-4 text-center text-2xl font-bold text-black sm:text-start">
							Candy Rewards
						</h1>
						<p className="mt-4 min-w-[24ch] max-w-[32ch] px-4 text-center  text-sm text-stone-500 sm:text-start">
							We give our loyal customers rewards easily and quickly with our
							unique and innovative programs. From Discount, Invitations,
							Staking and Cashback
						</p>
					</div>
				</div>
			</div>
			<div className="flex min-h-screen flex-col items-center justify-center border-t border-stone-300 bg-white p-2 text-black">
				<h1 className="text-center text-4xl font-bold">Join Our Newsletter</h1>
				<p className="mt-4 text-center text-stone-500">
					Sign up and we will send the best deals to you
				</p>
				<div className="mt-16 flex flex-wrap items-center justify-center gap-2">
					<input
						type="text"
						className="w-full grow rounded-full border px-3 py-2"
						placeholder="Email"
					/>
					<button
						onClick={() => alert("Email subscribed successfully!")}
						className="w-full grow rounded-full bg-[#00305F] px-4 py-2 text-white"
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
}
