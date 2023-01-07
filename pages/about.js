import Image from "next/image";
import Head from "next/head";
import { Marker, StaticGoogleMap } from "react-static-google-map";
import profilePic from "../public/assets/profile-pic.png";
import StaticMap from "../components/about/StaticMap";
import SectionWork from "../components/about/SectionWork";
import { arrayWork } from "../utils/arrayWork";
import ContentFrame from "../components/ContentFrame";
import SectionIntro from "../components/about/SectionIntro";

export default function About() {
  return (
    <>
      <Head>
        <title>About Andy</title>
      </Head>
      <ContentFrame>
        <aside>
          <Image
            src={profilePic}
            alt="Profile picture of Andy"
            priority={true}
            height={360}
            className="sticky top-24"
          />
        </aside>
        <article className="flex flex-col gap-24">
          <SectionIntro />
          <StaticMap />
          <SectionWork array={arrayWork} />
        </article>
      </ContentFrame>
    </>
  );
}
