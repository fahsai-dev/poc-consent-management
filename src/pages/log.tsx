import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
// import { Inter } from "next/font/google";
// import CookieTableScript from "@/components/CookieTableScript";
// const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const res = await fetch("http://localhost:8888/api/v1/cookies/demo/template");
  const res2 = await fetch(
    "http://localhost:8888/api/v1/cookies/web_poc_next_consent/template"
  );
  const cookieTableHTML = await res
    .text()
    .catch(() => "<p>Error loading cookie table.</p>");

  const cookieTableHTML2 = await res2
    .text()
    .catch(() => "<p>Error loading cookie table.</p>");

  return {
    props: {
      cookieTableHTML: cookieTableHTML,
      cookieTableHTML2: cookieTableHTML2,
    },
  };
};

type IServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Log = (data: IServerSideProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {/* <CookieTableScript /> */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pb-8">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Cookies table templates: Demo
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.cookieTableHTML }} />

      <div className="pt-6 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pb-8">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Cookies table templates: web_poc_next_consent
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.cookieTableHTML2 }} />
    </main>
  );
};

export default Log;
