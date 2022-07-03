import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Intro from "./Intro";

const StyledHeader = styled.header`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1980' height='1080' preserveAspectRatio='none' viewBox='0 0 1980 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2788%26quot%3b)' fill='none'%3e%3crect width='1980' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient2789)'%3e%3c/rect%3e%3cpath d='M310.15 361.01L415.8 422.01L415.8 544.01L310.15 605.01L204.49 544.01L204.49 422.01zM415.8 544.01L521.46 605.01L521.46 727.01L415.8 788.01L310.15 727.01L310.15 605.01zM521.46 361.01L627.12 422.01L627.12 544.01L521.46 605.01L415.8 544.01L415.8 422.01zM732.78 727.01L838.44 788.01L838.44 910.01L732.78 971.01L627.12 910.01L627.12 788.01zM732.78 1093.01L838.44 1154.01L838.44 1276.01L732.78 1337.01L627.12 1276.01L627.12 1154.01zM1049.75 544.01L1155.41 605.01L1155.41 727.01L1049.75 788.01L944.09 727.01L944.09 605.01zM1683.7 544.01L1789.36 605.01L1789.36 727.01L1683.7 788.01L1578.04 727.01L1578.04 605.01zM1683.7 910.01L1789.36 971.01L1789.36 1093.01L1683.7 1154.01L1578.04 1093.01L1578.04 971.01zM1789.36 361.01L1895.02 422.01L1895.02 544.01L1789.36 605.01L1683.7 544.01L1683.7 422.01z' stroke='url(%23SvgjsLinearGradient2790)' stroke-width='2'%3e%3c/path%3e%3cpath d='M297.95 361.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM403.6 422.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM403.6 544.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM297.95 605.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM192.29 544.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM192.29 422.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM509.26 605.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM509.26 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM403.6 788.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM297.95 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM509.26 361.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM614.92 422.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM614.92 544.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM720.58 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM826.24 788.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM826.24 910.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM720.58 971.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM614.92 910.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM614.92 788.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM720.58 1093.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM826.24 1154.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM826.24 1276.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM720.58 1337.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM614.92 1276.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM614.92 1154.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1037.55 544.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1143.21 605.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1143.21 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1037.55 788.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM931.89 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM931.89 605.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1671.5 544.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1777.16 605.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1777.16 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1671.5 788.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1565.84 727.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1565.84 605.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1671.5 910.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1777.16 971.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1777.16 1093.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1671.5 1154.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1565.84 1093.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1565.84 971.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1777.16 361.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1882.82 422.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1882.82 544.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0zM1671.5 422.01 a12.2 12.2 0 1 0 24.4 0 a12.2 12.2 0 1 0 -24.4 0z' fill='url(%23SvgjsLinearGradient2790)'%3e%3c/path%3e%3cpath d='M12.14 -76.68L79.69 -37.68L79.69 40.32L12.14 79.32L-55.41 40.32L-55.41 -37.68zM79.69 40.32L147.24 79.32L147.24 157.32L79.69 196.32L12.14 157.32L12.14 79.32zM12.14 391.32L79.69 430.32L79.69 508.32L12.14 547.32L-55.41 508.32L-55.41 430.32zM12.14 625.32L79.69 664.32L79.69 742.32L12.14 781.32L-55.41 742.32L-55.41 664.32zM79.69 742.32L147.24 781.32L147.24 859.32L79.69 898.32L12.14 859.32L12.14 781.32zM12.14 859.32L79.69 898.32L79.69 976.32L12.14 1015.32L-55.41 976.32L-55.41 898.32zM79.69 976.32L147.24 1015.32L147.24 1093.32L79.69 1132.32L12.14 1093.32L12.14 1015.32zM147.24 -76.68L214.8 -37.68L214.8 40.32L147.24 79.32L79.69 40.32L79.69 -37.68zM147.24 391.32L214.8 430.32L214.8 508.32L147.24 547.32L79.69 508.32L79.69 430.32zM214.8 976.32L282.35 1015.32L282.35 1093.32L214.8 1132.32L147.24 1093.32L147.24 1015.32zM349.9 40.32L417.45 79.32L417.45 157.32L349.9 196.32L282.35 157.32L282.35 79.32zM349.9 274.32L417.45 313.32L417.45 391.32L349.9 430.32L282.35 391.32L282.35 313.32zM349.9 508.32L417.45 547.32L417.45 625.32L349.9 664.32L282.35 625.32L282.35 547.32zM282.35 625.32L349.9 664.32L349.9 742.32L282.35 781.32L214.8 742.32L214.8 664.32zM349.9 742.32L417.45 781.32L417.45 859.32L349.9 898.32L282.35 859.32L282.35 781.32zM282.35 859.32L349.9 898.32L349.9 976.32L282.35 1015.32L214.8 976.32L214.8 898.32zM349.9 976.32L417.45 1015.32L417.45 1093.32L349.9 1132.32L282.35 1093.32L282.35 1015.32zM485 40.32L552.56 79.32L552.56 157.32L485 196.32L417.45 157.32L417.45 79.32zM485 742.32L552.56 781.32L552.56 859.32L485 898.32L417.45 859.32L417.45 781.32zM485 976.32L552.56 1015.32L552.56 1093.32L485 1132.32L417.45 1093.32L417.45 1015.32zM552.56 157.32L620.11 196.32L620.11 274.32L552.56 313.32L485 274.32L485 196.32zM552.56 391.32L620.11 430.32L620.11 508.32L552.56 547.32L485 508.32L485 430.32zM620.11 508.32L687.66 547.32L687.66 625.32L620.11 664.32L552.56 625.32L552.56 547.32zM552.56 625.32L620.11 664.32L620.11 742.32L552.56 781.32L485 742.32L485 664.32zM687.66 -76.68L755.21 -37.68L755.21 40.32L687.66 79.32L620.11 40.32L620.11 -37.68zM755.21 274.32L822.76 313.32L822.76 391.32L755.21 430.32L687.66 391.32L687.66 313.32zM687.66 391.32L755.21 430.32L755.21 508.32L687.66 547.32L620.11 508.32L620.11 430.32zM755.21 508.32L822.76 547.32L822.76 625.32L755.21 664.32L687.66 625.32L687.66 547.32zM687.66 625.32L755.21 664.32L755.21 742.32L687.66 781.32L620.11 742.32L620.11 664.32zM755.21 742.32L822.76 781.32L822.76 859.32L755.21 898.32L687.66 859.32L687.66 781.32zM822.76 157.32L890.31 196.32L890.31 274.32L822.76 313.32L755.21 274.32L755.21 196.32zM890.31 274.32L957.87 313.32L957.87 391.32L890.31 430.32L822.76 391.32L822.76 313.32zM822.76 391.32L890.31 430.32L890.31 508.32L822.76 547.32L755.21 508.32L755.21 430.32zM957.87 391.32L1025.42 430.32L1025.42 508.32L957.87 547.32L890.31 508.32L890.31 430.32zM1025.42 508.32L1092.97 547.32L1092.97 625.32L1025.42 664.32L957.87 625.32L957.87 547.32zM957.87 859.32L1025.42 898.32L1025.42 976.32L957.87 1015.32L890.31 976.32L890.31 898.32zM1160.52 40.32L1228.07 79.32L1228.07 157.32L1160.52 196.32L1092.97 157.32L1092.97 79.32zM1160.52 274.32L1228.07 313.32L1228.07 391.32L1160.52 430.32L1092.97 391.32L1092.97 313.32zM1092.97 391.32L1160.52 430.32L1160.52 508.32L1092.97 547.32L1025.42 508.32L1025.42 430.32zM1092.97 625.32L1160.52 664.32L1160.52 742.32L1092.97 781.32L1025.42 742.32L1025.42 664.32zM1160.52 742.32L1228.07 781.32L1228.07 859.32L1160.52 898.32L1092.97 859.32L1092.97 781.32zM1160.52 976.32L1228.07 1015.32L1228.07 1093.32L1160.52 1132.32L1092.97 1093.32L1092.97 1015.32zM1228.07 -76.68L1295.63 -37.68L1295.63 40.32L1228.07 79.32L1160.52 40.32L1160.52 -37.68zM1295.63 40.32L1363.18 79.32L1363.18 157.32L1295.63 196.32L1228.07 157.32L1228.07 79.32zM1295.63 508.32L1363.18 547.32L1363.18 625.32L1295.63 664.32L1228.07 625.32L1228.07 547.32zM1228.07 625.32L1295.63 664.32L1295.63 742.32L1228.07 781.32L1160.52 742.32L1160.52 664.32zM1295.63 976.32L1363.18 1015.32L1363.18 1093.32L1295.63 1132.32L1228.07 1093.32L1228.07 1015.32zM1363.18 157.32L1430.73 196.32L1430.73 274.32L1363.18 313.32L1295.63 274.32L1295.63 196.32zM1430.73 508.32L1498.28 547.32L1498.28 625.32L1430.73 664.32L1363.18 625.32L1363.18 547.32zM1430.73 742.32L1498.28 781.32L1498.28 859.32L1430.73 898.32L1363.18 859.32L1363.18 781.32zM1498.28 157.32L1565.83 196.32L1565.83 274.32L1498.28 313.32L1430.73 274.32L1430.73 196.32zM1565.83 274.32L1633.39 313.32L1633.39 391.32L1565.83 430.32L1498.28 391.32L1498.28 313.32zM1498.28 391.32L1565.83 430.32L1565.83 508.32L1498.28 547.32L1430.73 508.32L1430.73 430.32zM1498.28 625.32L1565.83 664.32L1565.83 742.32L1498.28 781.32L1430.73 742.32L1430.73 664.32zM1633.39 -76.68L1700.94 -37.68L1700.94 40.32L1633.39 79.32L1565.83 40.32L1565.83 -37.68zM1700.94 274.32L1768.49 313.32L1768.49 391.32L1700.94 430.32L1633.39 391.32L1633.39 313.32zM1633.39 391.32L1700.94 430.32L1700.94 508.32L1633.39 547.32L1565.83 508.32L1565.83 430.32zM1700.94 976.32L1768.49 1015.32L1768.49 1093.32L1700.94 1132.32L1633.39 1093.32L1633.39 1015.32zM1768.49 -76.68L1836.04 -37.68L1836.04 40.32L1768.49 79.32L1700.94 40.32L1700.94 -37.68zM1836.04 40.32L1903.59 79.32L1903.59 157.32L1836.04 196.32L1768.49 157.32L1768.49 79.32zM1768.49 157.32L1836.04 196.32L1836.04 274.32L1768.49 313.32L1700.94 274.32L1700.94 196.32zM1836.04 274.32L1903.59 313.32L1903.59 391.32L1836.04 430.32L1768.49 391.32L1768.49 313.32zM1768.49 391.32L1836.04 430.32L1836.04 508.32L1768.49 547.32L1700.94 508.32L1700.94 430.32zM1836.04 742.32L1903.59 781.32L1903.59 859.32L1836.04 898.32L1768.49 859.32L1768.49 781.32zM1836.04 976.32L1903.59 1015.32L1903.59 1093.32L1836.04 1132.32L1768.49 1093.32L1768.49 1015.32zM1903.59 -76.68L1971.15 -37.68L1971.15 40.32L1903.59 79.32L1836.04 40.32L1836.04 -37.68zM1971.15 40.32L2038.7 79.32L2038.7 157.32L1971.15 196.32L1903.59 157.32L1903.59 79.32zM1971.15 274.32L2038.7 313.32L2038.7 391.32L1971.15 430.32L1903.59 391.32L1903.59 313.32zM1903.59 391.32L1971.15 430.32L1971.15 508.32L1903.59 547.32L1836.04 508.32L1836.04 430.32zM1971.15 742.32L2038.7 781.32L2038.7 859.32L1971.15 898.32L1903.59 859.32L1903.59 781.32z' stroke='url(%23SvgjsLinearGradient2791)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2788'%3e%3crect width='1980' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2789'%3e%3cstop stop-color='rgba(23%2c 37%2c 142%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.58'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='224.928' y1='-224.96399999999997' x2='1755.072' y2='1304.964' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2790'%3e%3cstop stop-color='rgba(15%2c 32%2c 105%2c 1)' offset='0.55'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 58%2c 140%2c 1)' offset='0.77'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='990' y1='1080' x2='990' y2='0' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2791'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 100%2c 201%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 72%2c 201%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Header = React.forwardRef((props, ref) => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef();

  useEffect(() => {
    setHeight(heightRef.current.clientHeight);
    console.log(height);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      height,
    };
  });
  return (
    <StyledHeader id="home" ref={heightRef}>
      {props.children}
    </StyledHeader>
  );
});

export default Header;
