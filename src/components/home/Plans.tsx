import { FaCheck } from "react-icons/fa6";
import Button from "../Button";
import arrowUp from "../../images/arrow-down.svg";
import arrowDown from "../../images/arrow-up.svg";
import dollar from "../../images/dollar.svg";
import spark from "../../images/spark.svg";
import trading from "../../images/trading.svg";
import userProfile from "../../images/user-profile.svg";
import { Link } from "react-router-dom";

export default function Plans() {
  return (
    <section className="bg-black4 px-3 py-24 text-white xl:px-0">
      <div className="text-center mb-20 lg:mb-44">
        <h2 className="text-4xl font-bold mb-3">
          Get started in a few minutes
        </h2>
        <p className="text-xl max-w-[500px] mx-auto">
           Cryptocrest Trade supports a variety of the most popular
          digital currencies.
        </p>
      </div>
      <div className="relative max-w-[1240px] mx-auto grid gap-y-20 mb-10 lg:gap-y-0 lg:grid-cols-3 lg:mb-32">
        <img
          src={arrowUp}
          alt="arrow up"
          className="hidden lg:block absolute left-[23%] -top-[40%] xl:-top-[23%]"
        />
        <div className="text-center">
          <div className="bg-[#ffd6e0] mb-3 mx-auto h-[120px] w-[120px] flex items-center justify-center rounded-[100%]">
            <img src={userProfile} alt="user " />
          </div>
          <h3 className="text-2xl font-medium">Sign Up</h3>
          <p className="text-lg w-[70%] mx-auto text-center">
            Create an account and verify your identity
          </p>
        </div>
        <div className="text-center">
          <div className="bg-[#c4f5fc] mb-3 mx-auto h-[120px] w-[120px] flex items-center justify-center rounded-[100%]">
            <img src={dollar} alt="user " />
          </div>
          <h3 className="text-2xl font-medium">Fund Your Account</h3>
          <p className="text-lg w-[70%] mx-auto text-center">
            Deposit funds into your account to begin trading
          </p>
        </div>
        <div className="text-center relative mt-14 lg:mt-0">
          <div className="relative bg-[#e8f369] mb-3 mx-auto h-[120px] w-[120px] flex items-center justify-center rounded-[100%]">
            <img src={trading} alt="user " />
            <img
              src={spark}
              alt="spark"
              className="absolute -right-[60%] -top-[60%]"
            />
          </div>
          <h3 className="text-2xl font-medium">Start Trading</h3>
          <p className="text-lg w-[70%] mx-auto text-center">
            Take a position in your choice of instrument
          </p>
          <img
            src={arrowDown}
            alt="arrow up"
            className="hidden lg:block absolute -bottom-[40%] -left-[25%]"
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-x-20 max-w-[1240px] mx-auto pt-32">
        <div className="bg-white py-14 px-10 text-black border border-t-4 mb-20 lg:mb-0">
          <h3 className="font-bold text-2xl mb-5">GO Plus+ Account</h3>
          <p className="text-xl mb-8">Leverage up to 500:1</p>
          <p className="text-xl mb-8">Spreads from 0.0 pips</p>
          <p className="text-xl mb-8">AU $3.00 Commission per side</p>
          <p className="text-xl font-medium mb-8">Available Base Currencies</p>
          <ul className="grid grid-cols-3 gap-5 mb-8">
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              AUD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              USD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              EUR
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              GBP
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              NZD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              CAD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              SGD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
                <FaCheck />
              </div>
              CHF
            </li>
          </ul>
          <Link to="/user/dashboard">
            <Button
              btnText="Start Earning"
              className="border border-primary text-lg py-4 rounded-md w-full"
            />
          </Link>
        </div>
        <div className="bg-primary py-14 px-10 text-white border border-t-4">
          <h3 className="font-bold text-2xl mb-5">Standard Account</h3>
          <p className="text-xl mb-8">Leverage up to 500:1</p>
          <p className="text-xl mb-8">Spreads from 1.0 pips</p>
          <p className="text-xl mb-8">AU $0.00 Commission per side</p>
          <p className="text-xl font-medium mb-8">Available Base Currencies</p>
          <ul className="grid grid-cols-3 gap-5 mb-8">
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              AUD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              USD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              EUR
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              GBP
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              NZD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              CAD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              SGD
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-2 p-1 bg-white text-primary rounded-[100%]">
                <FaCheck />
              </div>
              CHF
            </li>
          </ul>
          <Link to="/user/dashboard">
            <Button
              btnText="Start Earning"
              className="bg-white text-xl py-4 rounded-md w-full text-primary"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
