import React from "react";

const Screen = (props: any) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 800 800"
      xmlSpace="preserve"
    >
      <g>
        <radialGradient
          id="SVGID_1_"
          cx="378.6747"
          cy="1118.1367"
          r="90.9045"
          gradientTransform="matrix(4.0488 0 0 0.1079 -1133.1781 477.5957)"
          gradientUnits="userSpaceOnUse"
        >
          {/* ... (gradient stops) ... */}
        </radialGradient>
        <path
          style={{ fill: "url(#SVGID_1_)" }}
          d="M768,598.24c0,5.424-164.758,9.813-367.993,9.813C196.761,608.053,32,603.664,32,598.24
          c0-5.42,164.761-9.808,368.006-9.808C603.242,588.433,768,592.82,768,598.24z"
        />
        {/* <image
          x="149.829"
          y="230.345"
          href={props.img}
          height="324.756"
          width="512.923"
        /> */}
        <rect
          x="149.829"
          y="230.345"
          style={{ fill: "#FFFFFF" }}
          width="512.923"
          height="324.756"
        />
      </g>
    </svg>
  );
};

export default Screen;
