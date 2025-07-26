import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type userAvaterMeta = {
  date: string;
};

const users = [
  {
    name: "John",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lisa",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ken",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Drew",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Extra",
    image: "",
  },
];

export default function UserAvatarGroup({ date }: userAvaterMeta) {
  return (
    <div className="flex flex-col relative -top-[10px]">
      <section>
        <div className="px-1 py-3 text-sm text-muted-foreground">
          <p>
            Writing style updated from{" "}
            <span className="font-semibold text-black">Campaign name</span> via{" "}
            <span className="font-semibold text-black">Prospect name</span> • {date}
          </p>
        </div>
      </section>

      <div className="flex -space-x-4 px-4 pb-2">
        {users.map((user, idx) => (
          <Avatar
            key={idx}
            className="w-10 h-10 shadow-md rounded-full overflow-hidden cursor-pointer"
          >
            {user.image ? (
              <AvatarImage
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <AvatarFallback className="bg-[#E5E7EB] text-gray-500 w-full h-full rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.866 0-7 2.239-7 5v1a1 1 0 001 1h12a1 1 0 001-1v-1c0-2.761-3.134-5-7-5z"
                    clipRule="evenodd"
                  />
                </svg>
              </AvatarFallback>
            )}
          </Avatar>
        ))}
      </div>
    </div>
  );
}
