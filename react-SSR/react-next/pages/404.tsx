import React, { memo } from "react";
import type { FC } from "react";
interface Iprops {}

const NotFund: FC<Iprops> = () => {
  return (
    <div>
      <div>NotFund 404</div>
    </div>
  );
};

export default memo(NotFund);
NotFund.displayName = "NotFund"; // 调试的时候使用 会提示那个页面报的错
