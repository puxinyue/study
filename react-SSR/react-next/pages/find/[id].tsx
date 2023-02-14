import React, { memo } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
interface Iprops {}

const Detail: FC<Iprops> = () => {
  const router = useRouter();
  const { id, dd } = router.query;
  return (
    <div>
      <div>
        find Detail{id}
        {dd}
      </div>
    </div>
  );
};

export default memo(Detail);
