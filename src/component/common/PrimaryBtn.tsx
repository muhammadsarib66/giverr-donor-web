import { Button } from "@material-tailwind/react";

interface PrimaryBtnProps {
  label: string;
  onClick: () => void;
  icon?: string; // optional icon image URL
  className?: string; // optional extra classes
  iconStyle?: string; // optional extra classes for the icon
}

const PrimaryBtn = ({ label, onClick, icon, className ,iconStyle }: PrimaryBtnProps) => {
  return (
    <Button
    placeholder={''}
    onPointerEnterCapture={''}
    onPointerLeaveCapture={""}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl bg-superPrimary text-white text-sm py-3 px-6 ${className}`}
      fullWidth
    >
      {icon && <img src={icon} alt="icon" className={`  ${iconStyle}`} />}
      {label}
    </Button>
  );
};

export default PrimaryBtn;
