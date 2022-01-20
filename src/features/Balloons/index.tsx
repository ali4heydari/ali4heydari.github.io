import React, { useCallback, useEffect, useState } from "react";
import styles from "./Balloons.module.css";

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
  const [animationIterationCount, setAnimationIterationCount] =
    useState<number>(10);

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
      backgroundColor: `rgba(${red},${green},${blue},0.7)`,
      color: `rgba(${red},${green},${blue},0.7)`,
      boxShadow: `inset -7px -3px 10px rgba(${red - 10},${green - 10},${
        blue - 10
      },0.7)`,
      margin: `${marginTop}px 0 0 ${marginLeft}px`,
      animation: `float ${duration}s ease-in infinite`,
    };
  }, []);

  return visible ? (
    <div className={styles.balloonContainer}>
      {new Array(100).fill(null).map((it, index) => (
        <div key={index} style={getRandomStyles()} className={styles.balloon} />
      ))}
    </div>
  ) : null;
};

export default Balloons;
