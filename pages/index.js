import Head from "next/head";
import Link from "next/link";
import Image from "../components/Image/Image";
import { getAllPosts } from "../lib/posts";
import styles from "../styles/Home.module.css";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Blog</title>
      </Head>
      <div>
        <h1>Food Blog </h1>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
      <Image src={data.coverImage} alt={data.title} layout="fill" />
      <h2>
        <Link href={`/blog/${data.slug}`}>
          {data.title}
        </Link>
      </h2>
      <div>{data.publishDate}</div>
      <p>{data.excerpt}</p>
      <div style={{ fontWeight: "bold" }}>{data.author}</div>
    </div>
  );
};