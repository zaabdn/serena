import React from "react";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  variant?: "title" | "h1" | "h2" | "h3" | "desc" | "body";
  weight?: "regular" | "medium" | "semibold" | "bold";
  fontFamily?: "jakarta" | "poppins";
  className?: string;
}

const Text = ({
  children,
  color = "text-default",
  variant = "body",
  weight = "regular",
  fontFamily = "jakarta",
  className = "",
}: TextProps) => {
  const variants = {
    title: "text-5xl",
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    desc: "text-lg",
    body: "text-base",
  };

  const weights = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const fonts = {
    jakarta: "font-sans", // Use your Jakarta font class
    poppins: "font-mono", // Use your Poppins font class
  };

  const classes = `${variants[variant]} ${weights[weight]} ${fonts[fontFamily]} ${color} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Text;
