export default function SectionSkeleton() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-soft">
      <div className="flex items-center gap-4">
        <div className="w-[72px] h-[72px] bg-gray-200 rounded-full animate-pulse" />
        <div className="space-y-2 w-40">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-4 border rounded-xl bg-gray-50 animate-pulse h-20"
          />
        ))}
      </div>
    </div>
  );
}
