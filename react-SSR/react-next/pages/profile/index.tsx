import React, { memo } from "react";
import type { FC } from "react";
interface Iprops {}

const Profile: FC<Iprops> = () => {
  return (
    <div>
      <div>Profile</div>
    </div>
  );
};

export default memo(Profile);
