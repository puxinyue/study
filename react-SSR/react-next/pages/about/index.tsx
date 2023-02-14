import React, { memo } from "react";
import type { FC } from "react";
import Link from "next/link";
interface Iprops {}

const About: FC<Iprops> = () => {
  return (
    <div>
      <div>About</div>
      <Link href={"/"}>
        <button>home</button>
      </Link>
    </div>
  );
};

export default memo(About);
About.displayName = "About"; // 调试的时候使用 会提示那个页面报的错
