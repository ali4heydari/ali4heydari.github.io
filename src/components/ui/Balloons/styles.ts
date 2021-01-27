import styled, { keyframes } from "styled-components";

export const floatAnimation = keyframes`
  from {
    transform: translateY(100vh);
    opacity: 1;
  }
  to {
    transform: translateY(-300vh);
    opacity: 0;
  }
`;

export const BalloonsContainer = styled.div`
  position: fixed;
  z-index: 50;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

interface BalloonProps {
  red: number;
  green: number;
  blue: number;
  marginTop: number;
  marginLeft: number;
  duration: number;
  animationIterationCount?: number | "infinite" | "initial" | "inherit";
}

export const Balloon = styled.div<BalloonProps>`
  background-color: rgba(
    ${({ red }) => red},
    ${({ green }) => green},
    ${({ blue }) => blue},
    0.7
  );
  color: rgba(
    ${({ red }) => red},
    ${({ green }) => green},
    ${({ blue }) => blue},
    0.7
  );
  box-shadow: inset -7px -3px 10px
    rgba(
      ${({ red }) => red - 10},
      ${({ green }) => green - 10},
      ${({ blue }) => blue - 10},
      0.7
    );
  margin: ${({ marginTop }) => marginTop}px 0 0
    ${({ marginLeft }) => marginLeft}px;
  animation: ${floatAnimation} ${({ duration }) => duration}s ease-in
    ${({ animationIterationCount = "infinite" }) => animationIterationCount};
  animation-fill-mode: forwards;

  height: 125px;
  width: 105px;
  border-radius: 75% 75% 70% 70%;
  position: relative;
  &:before {
    content: "";
    height: 75px;
    width: 1px;
    padding: 1px;
    background-color: #fdfd96;
    display: block;
    position: absolute;
    top: 125px;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:after {
    content: "▲";
    text-align: center;
    display: block;
    position: absolute;
    color: inherit;
    top: 120px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
