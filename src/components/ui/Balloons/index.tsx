import * as Styled from "./styles";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  birthDate: Date;
  hideBaloonTimeOut?: number;
}

// style and some logic from: https://codepen.io/Jemimaabu/pen/vYEYdOy

const Balloons: React.FC<Props> = ({ birthDate, hideBaloonTimeOut = 5000 }) => {
  const currentDate = new Date();
  const hideBalloonContainerTimeoutOffset = 1500;

  // is today is your birthday?
  const isBirthDay =
    currentDate.getDate() === birthDate.getDate() &&
    currentDate.getMonth() === birthDate.getMonth();

  const [visible, setVisible] = useState(isBirthDay);
  const [
    animationIterationCount,
    setAnimationIterationCount,
  ] = useState<number>(10);

  useEffect(() => {
    setTimeout(() => {
      setAnimationIterationCount(0);
    }, hideBaloonTimeOut);
  }, [hideBaloonTimeOut]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, hideBaloonTimeOut + hideBalloonContainerTimeoutOffset);
  }, []);

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

  return visible ? (
    <Styled.BalloonsContainer>
      {new Array(100).fill(null).map((it, index) => (
        <Styled.Balloon
          key={index}
          {...getRandomStyles()}
          animationIterationCount={animationIterationCount}
        />
      ))}
    </Styled.BalloonsContainer>
  ) : null;
};

export default Balloons;
