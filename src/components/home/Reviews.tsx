import user from "../../images/user-profile.svg";

export default function Reviews() {
  return (
    <div className="py-16 px-3 xl:px-0 bg-white1">
      <h2 className="font-bold text-center text-3xl mb-10 lg:text-4xl">
        Hear what people are saying about us
      </h2>
      <div className="grid px-4 xl:px-0 lg:grid-cols-3 gap-8 max-w-desktop mx-auto">
        <ReviewCard
          name="Roberto"
          review=" Cryptoscrest Trade has had the best traders and accounts managers we have ever
				came across as trading veterans, this is the goto platform."
        />
        <ReviewCard
          name="Tyler"
          review="I've always loved to invest but with a verified trading system. This platform gave me an opportunity to invest with less stress."
        />
        <ReviewCard
          name="Martha"
          review=" Cryptoscrest Trade has developed a personal plan for me that allows me to take much greater control of my financial affairs, and plan for the future"
        />
      </div>
    </div>
  );
}

interface ReviewCardProps {
  name: string;
  review: string;
}

const ReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <div className="shadow-custom px-8 py-8 rounded-md mb-8 max-w-[400px] mx-auto lg:mb-0">
      <p className="mb-10 h-24">{review}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="block font-bold text-lg">{name} ******</span>
          <span className="text-primary text-lg font-semibold">Investor</span>
          <div>
            <span className="text-primary text-xl">&#9733;</span>
            <span className="text-primary text-xl">&#9733;</span>
            <span className="text-primary text-xl">&#9733;</span>
            <span className="text-primary text-xl">&#9733;</span>
            <span className="text-primary text-xl">&#9733;</span>
          </div>
        </div>
        <div className="border-4 p-3 border-primary rounded-[100%]">
          <img src={user} alt="user" height={35} width={35} />
        </div>
      </div>
    </div>
  );
};
