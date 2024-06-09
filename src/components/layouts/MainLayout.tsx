import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import WithdrawalAlert from "../sharedUi/WithdrawalAlert";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <React.Fragment>
      <WithdrawalAlert>
        <Navbar />
        <main className="my-16">{children}</main>
        <Footer />
      </WithdrawalAlert>
    </React.Fragment>
  );
}
