import React, { useState } from "react";
import "./product.scss";

import "keen-slider/keen-slider.min.css";
import { Iron } from "../../components/Products/Iron";
import { LegMassager } from "../../components/Products/LegMassager";
import { BackMassager } from "../../components/Products/BackMassager";

export const Product = () => {
  const url = window.location.pathname;
  const id = url.slice(-1);
  console.log("id", id);

  return +id === 1 ? <Iron /> : +id === 2 ? <LegMassager /> : <BackMassager />;
};
