import Link from "next/link";

const title = "Termux packages";
const description = "This repository was profiled from the current package metadata, source entrypoints, and environment files.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
