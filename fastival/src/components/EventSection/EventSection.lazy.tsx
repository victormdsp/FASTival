import React, { lazy, Suspense } from "react";

const LazyEventSection = lazy(() => import("./EventSection"));

const EventSection = (
  props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
    name: string;
    img1: string;
    img2: string;
    img3: string;
    date1: string;
    date2: string;
    date3: string;
    show1: string;
    show2: string;
    show3: string;
    place1: string;
    place2: string;
    place3: string;
  }
) => (
  <Suspense fallback={null}>
    <LazyEventSection {...props} />
  </Suspense>
);

export default EventSection;
