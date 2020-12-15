import React from "react";
import Link from "next/link";

export default function Home() {
  return (<div>
      <Link href="/post/">
          <a>这是个页面</a>
      </Link>
  </div>)
}
