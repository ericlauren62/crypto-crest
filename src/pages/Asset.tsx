import React from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { CardDataStats } from "../components/dashboards/CardDataStats";
import { SingleTicker } from "react-ts-tradingview-widgets";
import AssetsTable from "../components/Tables/AssetsTable";
import { useUserContext } from "../context/UserContext";

type Props = {};

const Asset = (props: Props) => {

  const {account, bitcoin} = useUserContext().state

  return (
    <AdminLayout>
      <div className="grid xl:grid-cols-3 gap-y-8 xl:gap-y-0 xl:gap-x-10 mb-16">
        <CardDataStats title="Total Balance in Dollars" totalUsd={account.balance} />
        <CardDataStats
          title="Total Balance in Bitcoin"
          totalBtc={(Number(account.balance) / bitcoin).toFixed(8)}
        />
      </div>
      <div className="mb-20 grid xl:grid-cols-4 gap-y-5 gap-x-3">
        <SingleTicker
          symbol="BTCUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="ETHBTC"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="ETHUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="BTCUSDT"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="USDJPY"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="USDCAD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="EURUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="GBPUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
      </div>
      <AssetsTable />
    </AdminLayout>
  );
};

export default Asset;
