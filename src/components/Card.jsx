export default function Card({ data }) {
  return (
    <div className="flex w-full min-w-0 flex-col items-start justify-start gap-1 rounded-lg bg-gray-300 p-3 shadow-2xl sm:p-4">
      
      <p className="truncate text-base font-semibold sm:text-lg">
        {data?.label}
      </p>

      <div className="flex min-w-0 items-center gap-1.5">
        {data?.icon}

        <p className="truncate text-base font-semibold text-gray-600 sm:text-lg">
          {data?.value}
        </p>
      </div>

    </div>
  );
}