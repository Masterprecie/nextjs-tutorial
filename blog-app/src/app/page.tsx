import Posts from "./components/Posts";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="my-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋
        <span>
          I&apos;m <span className="font-bold">Presh</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
