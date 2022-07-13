import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { GhostText } from "../GhostText/GhostText";
import { HiddenText } from "../HiddenText/HiddenText";
import { BalanceChecker } from "../BalanceChecker/BalanceChecker";

export const Root = () => {
  return (
    <>
      <Header />
      <main className="container inner">
        <section className="box bg">
          <GhostText>Tezos Balance Checker</GhostText>
          <BalanceChecker />
          <HiddenText>Check the balance of your wallets</HiddenText>
        </section>
      </main>
      <Footer />
      <div className="mainBackground"></div>
    </>
  );
};
