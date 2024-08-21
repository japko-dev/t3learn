import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col w-48">
          <Image
            src={image.url}
            alt={image.name}
            width="192"
            height="192"
            style={{objectFit:"contain"}}/>
          <div>{image.name}</div>
        </div>
      ))
      }
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>

      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
