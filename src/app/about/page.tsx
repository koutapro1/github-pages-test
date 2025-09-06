import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>About Page</h1>
      <p>これはAboutページです。SSGで静的に生成されます。</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        ホームに戻る
      </Link>
    </div>
  );
}
