import tradingPhone from "../../images/trading-mobile.png";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

export default function FairPricing() {
  return (
    <section className="bg-black4 text-white1 py-24 px-4 xl:px-0">
      <div className="relative max-w-[1240px] mx-auto grid lg:grid-cols-2 lg:gap-20 items-center">
        <div className="bg-pattern2 bg-cover bg-center">
          <img
            src={tradingPhone}
            alt="Laptop diagram"
            width={300}
            className="object-cover object-center mx-auto"
          />
        </div>

        <div className="absolute top-32 left-20 text-4xl text-primary">
          <FaBitcoin />
        </div>
        <div className="absolute top-20 left-[500px] text-5xl text-primary">
          <FaEthereum />
        </div>

        <div className="absolute -bottom-16 left-80 text-4xl text-primary">
          <FaBitcoin />
        </div>

        <div className="text-lg">
          <h2 className="text-3xl lg:text-4xl font-bold mb-7">
            Better and fairer pricing and execution
          </h2>
          <p>
            Cryptoscrest Trade aims to be the number retail Crypto Company in
            the world for pricing and execution across all forex and metals.
            This is to say that your trades, executed with Cryptoscrest Trade,
            will be as good or better than any other retail Crypto Company in
            the world.
          </p>
          <br />
          <p>
            Cryptoscrest Trade uses ‘non-bank market makers’ and other Crypto
            Companys to price and execute Index and Commodity CFD trades.
            Cryptoscrest Trade earns a percentage of the spread after hedging
            costs from these trading counterparties. These counterparties do not
            run a B-book for Cryptoscrest Trade.
          </p>
          <br />
          <p>
            Make investments using popular digital currencies with Cryptoscrest
            Trade!, With Cryptoscrest Trade you can make investments using
            popular digital currencies like Bitcoin, Ethereum and Tether (USDT)
            amongst others.
          </p>
        </div>
      </div>
    </section>
  );
}
