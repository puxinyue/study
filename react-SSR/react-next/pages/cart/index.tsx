import React, { memo } from "react";
import type { FC } from "react";
import Link from "next/link";
interface Iprops {}

const Cart: FC<Iprops> = () => {
  return (
    <div>
      <div>Cart</div>
      <Link href={"/"}>
        <button>home</button>
      </Link>
    </div>
  );
};

export default memo(Cart);
Cart.displayName = "Cart"; // 调试的时候使用 会提示那个页面报的错
