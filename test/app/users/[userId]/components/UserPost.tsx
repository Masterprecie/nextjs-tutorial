type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPost({ promise }: Props) {
  const post = await promise;
  const content = post.map((post) => (
    <article key={post.id}>
      <h1 className="text-xl font-medium">{post.title}</h1>
      <p>{post.body}</p>
      <br />
    </article>
  ));
  return content;
}
