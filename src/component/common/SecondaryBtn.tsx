import { Button } from "@material-tailwind/react";

interface SecondaryBtnProps {
  text?: string;
  iconSrc?: string;
  className?: string;
  iconStyle?: string; // optional extra classes for the icon
  onClick?: () => void;
}

const SecondaryBtn = ({ text, iconSrc, onClick ,className ,iconStyle}: SecondaryBtnProps) => {
  return (
    <Button
    placeholder={''}

    onPointerEnterCapture={''}
    onPointerLeaveCapture={""}
      onClick={onClick}
      className={
        `flex items-center justify-center gap-2 rounded-xl bg-bgSecondary text-white text-sm  ${className}`
      }
      fullWidth
    >
      {iconSrc && (
        <img src={iconSrc} alt="icon" className={iconStyle} />
      )}
      {
        text && <span className="">{text}</span>
      }
      
    </Button>
  );
};

export default SecondaryBtn;
