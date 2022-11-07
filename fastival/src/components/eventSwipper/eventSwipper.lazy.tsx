import React, { lazy, Suspense } from "react";

const LazyEventSwipper = lazy(() => import("./EventSwipper"));

const EventSwipper = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyEventSwipper {...props} />
  </Suspense>
);

export default EventSwipper;
