import getUserPost from "@/lib/getUserPost";
import getUser from "@/lib/getUser";
import { Suspense } from "react";
import UserPost from "./components/UserPost";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = await getUser(userId);
  const user: User = await userData;

  if (!user) {
    return {
      title: "User not found",
    };
  }
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  //   const [user, userPost] = await Promise.all([userData, userPostData]);
  const user = await userData;

  if (!user) {
    return notFound();
  }

  return (
    <>
      <h2 className="font-bold text-2xl">{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = await getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
