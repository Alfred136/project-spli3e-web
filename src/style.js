const styles = {
  boxWidth: "xxl:max-w-[1440px] w-full",

  heading: "font-bold text-black xs:text-[48px] text-[40px] xs:leading-[54px] leading-[48px]",
  subHeading: "font-semibold text-redGray xs:text-[13px] text-[10px] uppercase",
  paragraph: "font-normal text-redGray text-[18px] leading-[20px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col justify-between items-center lg:px-8 xl:px-16 mt-[90px]`,

  sectionInfo: `flex flex-col md:items-start items-center`,
  sectionInfoText: `md:text-start text-center mb-12`
};

export default styles;