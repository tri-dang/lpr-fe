import React from "react";

const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = React.useState(lowQualitySrc);

  React.useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, { blur: src === lowQualitySrc }];
};

const Default = ({ image: { formats } }) => {
  const [src, { blur }] = useProgressiveImg(
    formats.thumbnail.url,
    formats.large.url
  );

  return (
    <img src={src} alt='' width="100%" style={{
      filter: blur
        ? "blur(20px)"
        : "none",
      transition:"none"
    }} />
  )
};

export default Default;
