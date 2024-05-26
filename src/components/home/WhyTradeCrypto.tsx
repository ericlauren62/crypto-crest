import chart from "../../images/chart.png";

export default function WhyTradeCrypto() {
  return (
    <section className="grid px-4 xl:px-0 lg:grid-cols-2 gap-20 items-center text-lg max-w-[1240px] mx-auto py-24">
      <div>
        <h2 className="text-3xl text-center lg:text-left lg:text-4xl font-bold mb-8">
          Why Trade Cryptocurrency?
        </h2>
        <p className="mb-10 text-center lg:text-left">
          The cryptocurrency market operates around the clock, seven days a
          week, thanks to its decentralized nature. Cryptocurrency transactions
          occur directly between individuals on exchanges across the globe.
        </p>
        <div>
          <div>
            <span className="mr-2">&#10004;</span> Fast payments without/less
            fees
          </div>
          <div>
            <span className="mr-2">&#10004;</span> Blockchain high-tech security
          </div>
          <div>
            <span className="mr-2">&#10004; </span>Free Access and quick
            registration
          </div>
          <div>
            <span className="mr-2">&#10004; </span>Trusted & Regulated Broker{" "}
          </div>
        </div>
      </div>
      <div>
        <img src={chart} alt="trading signal" />
      </div>
    </section>
  );
}
