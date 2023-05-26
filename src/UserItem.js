export default function UserItem({ id, name, date_of_birth, image_url }) {
  return (
    <div className="mt-5">
      <div className="flex gap-5">
        <div>
          <img
            className="rounded-full w-20 h-20 object-cover"
            src={image_url}
          />
        </div>
        <div className="flex gap-2 mt-2 flex-col">
          <h1>{name}</h1>
          <h1 className="text-gray-500">{date_of_birth}</h1>
        </div>
      </div>
    </div>
  );
}
