import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

// import { Inter } from "next/font/google";
// import CookieTableScript from "@/components/CookieTableScript";
// const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

type IServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home = (data: IServerSideProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Home Page</h1>

      <a
        href="#cookie-settings"
        id="open-cookie-settings"
        data-cc="c-settings"
        aria-haspopup="dialog"
      >
        <span>🍪</span>
      </a>
    </main>
  );
};

export default Home;
