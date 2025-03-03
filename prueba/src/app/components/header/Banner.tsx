import React from "react";

interface BannerProps {
  imageUrl: string;
  altText: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText }) => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={imageUrl} alt={altText} style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  );
};

export default Banner;