import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="main">
      <Link href="/birds">
        <a>Birds Example</a>
      </Link>
      <Link href="/boxes">
        <a>Boxes Example</a>
      </Link>
      <Link href="/piece">
        <a>Mechanical 3D Model Example</a>
      </Link>
    </div>
  );
};

export default Index;
