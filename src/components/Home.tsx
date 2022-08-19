import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to={"produto/notebook"}>Notebook</Link>
      <Link to={"produto/smartphone"}>Smartphone</Link>
    </div>
  );
};
