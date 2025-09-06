import Link from "next/link";

export default function Blog() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Blog</h1>
      <p>ブログ一覧ページです。</p>
      <ul>
        <li>
          <Link
            href="/blog/first-post"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            最初の投稿
          </Link>
        </li>
        <li>
          <Link
            href="/blog/second-post"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            2番目の投稿
          </Link>
        </li>
      </ul>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        ホームに戻る
      </Link>
    </div>
  );
}
