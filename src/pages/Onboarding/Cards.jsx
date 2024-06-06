import React from "react";
import Card1 from "../../components/macros/card1";
import { MARKETPLACE_ADTS } from "../../utils/mock";

const OnBoardingCard = () => {
  return (
    <div className="marginBody">
      <Card1 data={MARKETPLACE_ADTS} />
    </div>
  );
};

export default OnBoardingCard;
