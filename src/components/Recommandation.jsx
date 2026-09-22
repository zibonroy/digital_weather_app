import { DatabaseBackup } from "lucide-react";

export default function Recommandation({ recommandation }) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-gray-100 p-3 shadow-md sm:p-4">

      <div className="flex items-center gap-2">
        <DatabaseBackup
          size={22}
          className="shrink-0 text-green-600"
        />

        <h2 className="text-lg font-semibold text-green-700 sm:text-xl">
          Recommandations
        </h2>
      </div>

      <p className="break-words text-sm font-medium leading-6 text-gray-500 sm:text-base">
        {recommandation?.message}
      </p>

    </div>
  );
}