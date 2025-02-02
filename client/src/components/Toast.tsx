import React, { FC, useEffect } from "react";
import { BsFillPatchCheckFill, BsPatchExclamationFill } from "react-icons/bs";
import { GoXCircleFill } from "react-icons/go";

interface IToastProps {
  message: string;
  type: "success" | "error" | "warning";
  onClose: () => void;
}

const Toast: FC<IToastProps> = ({
  message,
  type,
  onClose,
}): React.JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="flex justify-center items-center">
      <span
        className={`absolute z-50 backdrop:blur-lg top-5 w-[25rem] h-[3rem] flex items-center justify-center gap-2 rounded-full shadow-xl ${
          type === "success"
            ? "bg-green-400/60"
            : type === "error"
            ? "bg-red-400/60"
            : "bg-yellow-400/60"
        }`}
      >
        {type === "success" ? (
          <BsFillPatchCheckFill size={26} className="text-white" />
        ) : type === "error" ? (
          <GoXCircleFill size={26} className="text-white" />
        ) : (
          <BsPatchExclamationFill size={26} className="text-white" />
        )}
        <span className="font-semibold text-xl text-white">{message}</span>
      </span>
    </div>
  );
};

export default Toast;
