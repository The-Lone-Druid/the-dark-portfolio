import React from "react";

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return (
    <div className="flex flex-row items-center">
      <h4 className="text-[28px] font-extrabold min-w-fit mr-8">
        {props.title}
      </h4>
      <div className="rounded-full h-[4px] w-full mt-[2px] bg-gradient-to-r from-blue-700 to-red-700"></div>
    </div>
  );
};

export default Title;
