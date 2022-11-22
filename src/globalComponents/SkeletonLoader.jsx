import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function SkeletonLoader(props) {
  return (
    <SkeletonTheme baseColor="#F7D08A" highlightColor="#FAFAFA">
      <p>
        <Skeleton count={props.count}/>
      </p>
    </SkeletonTheme>
  );
}
