import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/deaf40ae-814f-4085-9daf-98cb34bc50b3-1e.png',
  'https://utfs.io/f/caff6436-ddd8-4b41-b283-fa9e895a2aff-1g.png',
  'https://utfs.io/f/0c7c089c-58cc-4388-8131-0c43bec0c868-1d.png',
  'https://utfs.io/f/44977e14-0cbc-4973-be8f-78d843a50139-1f.png',
];

const mockImages = mockUrls.map((url, index) => ({
  id : index + 1, url
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts)
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt=""/>
          </div>
          ))
        }
      </div>
    </main>
  );
}
