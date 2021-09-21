import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";
const HomePage = () => (
  <Layout pageTitle="Tutti Frutti Shop">
    <NavOne />
    <Banner />
    <Features />
  </Layout>
);

export default HomePage;
