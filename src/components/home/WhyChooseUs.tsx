import { FaUserShield, FaBuilding, FaHeadset, FaUser } from "react-icons/fa";

export default function WhyChooseUs() {
	return (
		<section className=" px-3 xl:px-0 py-28 bg-black text-white1">
			<div className="max-w-[1240px] mx-auto">
				<div className="text-center">
					<h2 className="text-3xl font-semibold lg:text-5xl lg:font-extrabold mb-10">
						Why Cryptocrest Trade?
					</h2>
					<p className="lg:max-w-[70%] mx-auto leading-7 mb-24 text-xl">
						At Cryptocrest Trade, we seamlessly blend the expertise of seasoned human discretionary
						traders with strategic hedge execution decisions influenced by client trading behavior
						and account performance. With over 600 products in our portfolio, we offer narrow
						spreads, transparent pricing, and robust platforms. Backed by outstanding customer
						service, our commitment is to deliver an unparalleled trading journey for our clients.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-8">
					<WCUCard
						img={<FaUserShield />}
						text="Secure and Stable"
						description="We offer a trusted and intuitive platform where users of all experience levels can trade according to their preferences."
					/>
					<WCUCard
						img={<FaBuilding />}
						text="Regulated Broker"
						description="Cryptocrest Trade operates in full compliance with SEC and CFTC, ensuring a secure environment for your investments"
					/>
					<WCUCard
						img={<FaHeadset />}
						text="24/7 Support"
						description="Cryptocrest Trade abides by all regulations set forth by the SEC and CFTC, guaranteeing a secure environment for your investments."
					/>
					<WCUCard
						img={<FaUser />}
						text="Expertise and Experience:"
						description="Our team comprises seasoned professionals well-versed in cryptocurrency, blockchain technology, and traditional finance."
					/>
				</div>
			</div>
		</section>
	);
}

interface WCUCardProps {
	img: React.ReactNode;
	text: string;
	description?: string;
}

const WCUCard = ({ img, text, description }: WCUCardProps) => {
	return (
		<div className="flex flex-col justify-center w-full bg-black4 py-12 px-6 rounded-md">
			<div className="text-4xl text-primary flex items-center">{img}</div>
			<span className="text-lg mt-5 mb-3 font-bold">{text}</span>
			<p className="h-20">{description}</p>
		</div>
	);
};
