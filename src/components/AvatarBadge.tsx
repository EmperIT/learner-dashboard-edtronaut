import Image from "next/image";

type Props = {
  name: string;
  src?: string;
};

export default function AvatarBadge({ name, src }: Props) {
  const fallback = name.charAt(0).toUpperCase();

  return (
    <div className="relative" aria-label="Learner avatar">
      {src ? (
        <Image
          src={src}
          alt="Learner avatar"
          width={72}
          height={72}
          className="rounded-full border-2 border-primaryLight shadow-sm object-cover bg-gray-100"
        />
      ) : (
        <div className="w-[72px] h-[72px] rounded-full border-2 border-primaryLight shadow-sm bg-gray-200 flex items-center justify-center text-xl font-semibold text-textPrimary">
          {fallback}
        </div>
      )}

      <span className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-0.5 rounded-full shadow">
        Learner
      </span>
    </div>
  );
}
