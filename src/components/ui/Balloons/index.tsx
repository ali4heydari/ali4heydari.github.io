import * as Styled from "./styles";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  birthDate: Date;
  hideTimeOut?: number;
}

// style and some logic from: https://codepen.io/Jemimaabu/pen/vYEYdOy

const Balloons: React.FC<Props> = ({ birthDate, hideTimeOut = 5000 }) => {
  const currentDate = new Date();

  // is today is your birthday?
  const initialState =
    currentDate.getDate() === birthDate.getDate() &&
    currentDate.getMonth() === birthDate.getMonth();

  const [visible, setVisible] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, hideTimeOut);
  }, [hideTimeOut]);

  const random = useCallback((num: number) => {
    return Math.floor(Math.random() * num);
  }, []);

  const getRandomStyles = useCallback(() => {
    const red = random(255);
    const green = random(255);
    const blue = random(255);
    const marginTop = random(200);
    const marginLeft = random(50);
    const duration = random(5) + 5;
    return {
      red,
      green,
      blue,
      marginTop,
      marginLeft,
      duration,
    };
  }, []);

  return (
    <Styled.BalloonsContainer>
      {new Array(100).fill(null).map((it, index) => (
        <Styled.Balloon
          key={index}
          {...getRandomStyles()}
          animationIterationCount={visible ? 10 : 0}
        />
      ))}
    </Styled.BalloonsContainer>
  );
};

export default Balloons;
