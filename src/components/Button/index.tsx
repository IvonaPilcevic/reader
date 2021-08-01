import React from "react";
import Link from "next/link";

export const Button: React.FC<{
  href: string;
  text: string;
  variant: string;
}> = ({ href, text, variant }) => {
  return (
    <div className={variant}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
};
