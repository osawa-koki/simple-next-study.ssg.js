import Link from "next/link";
import pages from "../pages";

export default function Home() {
  return (
    <>
      <div id='Index'>
        <h1>Hello Next.js 💓💓💓</h1>
        <img id='Logo' src="tako.png" alt="Logo" />
        <div id="Links">
          {
            pages.map((page, index) => {
              return (
                <Link key={index} href={page.path}>
                  {page.name}
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  );
};
