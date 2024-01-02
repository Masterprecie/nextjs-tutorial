import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;
  console.log("Hello");
  const content = (
    <section className="pl-3">
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <h1 className="font-bold underline pb-3">Users</h1>
      <ul className="space-y-3 ">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
  return content;
}
