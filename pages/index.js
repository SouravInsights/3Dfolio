import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="main">
      <Link href="/piece">
        <a>Mechanical 3D Model Demo</a>
      </Link>
    </div>
  );
};

export default Index;
