import React from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <AppContent></AppContent>
      <Footer />
    </>
  );
};

export default Home;
