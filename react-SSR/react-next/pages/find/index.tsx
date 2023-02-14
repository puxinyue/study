import React, { memo } from "react";
import type { FC } from "react";
interface Iprops {}

const Find: FC<Iprops> = () => {
  return (
    <div>
      <div>Find</div>
    </div>
  );
};

export default memo(Find);
