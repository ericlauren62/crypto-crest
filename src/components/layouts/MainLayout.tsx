import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import WithdrawalAlert from "../sharedUi/WithdrawalAlert";

interface MainLayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

export default function MainLayout({ children }: MainLayoutProps) {


  useEffect(() => {
    // Create a script element
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    (function() {
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6661e1639a809f19fb3a395f/1hvn5gt11';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode?.insertBefore(s1, s0);
    })();

    
  }, []);

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
