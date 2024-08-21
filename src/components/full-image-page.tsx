import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id)

  return (
    <div className="flex w-full h-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="w=96 object-contain flex-shrink" alt=""/>
      </div>

      <div className="w-48 flex flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold ">{image.name}</div>
      </div>
    </div>
  )
}
