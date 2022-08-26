import { css } from "@emotion/react";
import { ComponentProps, forwardRef, HTMLProps, ReactNode } from "react";

const style = css`
  border: none;
  width: fit-content;
  margin: 0 auto;
  border-radius: 5px;
  color: rgb(108 178 255);
  background-color: #fff;
  font-size: 40px;
  cursor: pointer;
`;

type Props = {
  children?: ReactNode;
  type: "submit" | "button";
} & HTMLProps<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ type, children, ...props }, ref) => {
    return (
      <button ref={ref} type={type} css={style} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
