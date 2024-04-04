import cn from "classnames";
import { IButton } from "./props";

export default function Button({ className, children, ...rest }: IButton) {
  return (
    <button className={cn(className, "")} {...rest}>
      {children}
    </button>
  );
}
