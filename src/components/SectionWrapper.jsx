import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      }`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`
           ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn && <Button assetUrl={assets.expo} link="" />}
        </div>
        <div className={`${styles.flexCenter} p-8 sm:px-0 flex-1`}>
          <img
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.sectionImg
            }`}
            src={mockupImg}
            alt="mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
