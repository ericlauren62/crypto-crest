import { AdminLayout } from "../components/layouts/AdminLayout";
import { FaCheckCircle } from "react-icons/fa";
import { SubscriptionCard } from "../components/dashboards/SuscriptionCard";
import { useUserContext } from "../context/UserContext";
import { SubscriptionState } from "../types/types";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Subscription = (props: Props) => {
  const { updateSubscription, state } = useUserContext();
  const [subscription, setSubscription] = useState<SubscriptionState | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const subscribe = (plan: string, planAmount: string) => {
    if (planAmount > state.account.balance) {
      toast.error("Insufficient Balance, Deposit and Try Again");
    }

    const payload: SubscriptionState = {
      plan,
      amount: planAmount,
      duration: "7",
      date: new Date().toDateString(),
    };

    console.log(state);

    try {
      updateSubscription(payload);
      setSubscription(payload);
      setShowConfirmation(true);

      setTimeout(() => {
        setShowConfirmation(false); // Hide confirmation modal after 5 seconds
      }, 5000);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("added");
    }
  };

  return (
    <AdminLayout>
      {!showConfirmation && (
        <>
          <div className="mb-10 rounded-md border  text-white py-4 px-7 shadow-default border-strokedark bg-boxdark">
            <div className="my-1 flex items-end justify-between">
              <div>
                <h4 className="text-sm font-bold text-white dark:text-white mb-1">GET SUBSCRIPTION</h4>
                <div>
                  <span className="text-sm font-medium block">Tap on any of the Plans below to purchase a plan.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <SubscriptionCard plan="STANDARD" roi="10%" planAmount={"500"} handleClick={subscribe} />
            <SubscriptionCard plan="SILVER" roi="25%" planAmount={"5000"} handleClick={subscribe} />
            <SubscriptionCard plan="GOLD" roi="35%" planAmount={"15000"} handleClick={subscribe} />
            <SubscriptionCard plan="VIP" roi="55%" planAmount={"30000"} handleClick={subscribe} />
          </div>
        </>
      )}
      {showConfirmation && (
        <div className=" min-h-[80vh]  bg-boxdark flex flex-col items-center justify-center text-center h-full py-20">
          <div className="text-6xl text-primary mb-3">
            <FaCheckCircle />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-white dark:text-white">Subscription Confirmed!</h2>
          <p className="max-w-150 mb-5 text-white dark:text-white">
            Your Subscription to <span className="text-primary">{subscription?.plan}</span> plan was successful and
            actively running, <br />
            Returns attached to the plan will start reflecting on your Portfolio Balance shortly.
          </p>
          <h3 className="font-bold mb-3 text-white dark:text-white">
            Plan Name: <span className="text-primary">{subscription?.plan}</span>
          </h3>
          <p className="font-bold text-white dark:text-white">
            Subscribed Amount: <span className="text-primary">{subscription?.amount}</span>
          </p>
        </div>
      )}
    </AdminLayout>
  );
};

export default Subscription;
