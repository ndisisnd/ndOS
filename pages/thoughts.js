import NestedNav from "../components/NestedNav";
import Head from "next/head";

export default function Thoughts(params) {
  return (
    <div>
      <Head>
        <title>Thoughts & Writing</title>
      </Head>
      <NestedNav />
    </div>
  );
}
