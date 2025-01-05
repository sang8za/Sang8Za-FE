import React from "react";

const Separator = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={`my-3 bg-gray-200 h-[1px] w-full ${className}`} />;
};

export { Separator };
