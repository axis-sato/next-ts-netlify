import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Layout from "../components/Layout";

const AboutPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const query = router.query;
    console.log(query);
    if (query.foo) {
      router.push("/");
    }
  }, [router]);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <Image src="/images/nextjs.png" width="633" height="516" />
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
