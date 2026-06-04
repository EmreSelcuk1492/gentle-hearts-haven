import { ReactNode, MouseEvent } from "react";
import { dispatchBookingOpen, dispatchBookingPreload } from "@/lib/calendly";

type Props = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const BookButton = ({ children, className = "btn-primary", ariaLabel }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatchBookingOpen();
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      onMouseEnter={dispatchBookingPreload}
      onFocus={dispatchBookingPreload}
      aria-label={ariaLabel}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
};

export default BookButton;
