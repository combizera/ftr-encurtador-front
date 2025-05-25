import { Link, DownloadSimple } from "phosphor-react";

export function LinksList() {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Meus links
        </h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100">
          <DownloadSimple size={16} />
          Baixar CSV
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-400 text-sm mt-6">
        <Link size={32} />
        <p className="mt-2 uppercase">
          Ainda não existem links cadastrados
        </p>
      </div>
    </div>
  );
}
