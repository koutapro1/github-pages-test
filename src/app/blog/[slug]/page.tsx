import Link from "next/link";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>ブログ投稿: {slug}</h1>
      <p>これは「{slug}」のブログ投稿ページです。</p>
      <p>SSGで静的に生成されています。</p>
      <div style={{ marginTop: "2rem" }}>
        <Link
          href="/blog"
          style={{
            color: "blue",
            textDecoration: "underline",
            marginRight: "1rem",
          }}
        >
          ブログ一覧に戻る
        </Link>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}

// SSGで事前に生成するパスを指定
export async function generateStaticParams() {
  return [{ slug: "first-post" }, { slug: "second-post" }];
}
