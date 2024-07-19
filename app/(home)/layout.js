import { appDetails, seoDetails } from "@/constants/home_pages";
import React from "react";

export const metadata = {
  title: appDetails.title,
  description: appDetails.description,
  keywords: "",
  metadataBase: seoDetails.metadataBase,
  alternates: {
    canonical: "/",
  },
  author: {
    name: seoDetails.author,
  },
  publisher: seoDetails.publisher,
};

const Layout = ({ children }) => {
  return { children };
};

export default Layout;
