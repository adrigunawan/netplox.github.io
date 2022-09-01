import * as React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import Popular from "../component/Page/Popular";
import Footer from "../component/Page/Footer";
import HeroSection from "../component/Page/HeroSection";
import Header from "../component/Page/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Netplox - Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="icon" href="/netplox.jpg" />
      </Head>
      <Header />
      <Box>
        <HeroSection />
        <Popular />
      </Box>
      <Footer />
    </>
  );
}
