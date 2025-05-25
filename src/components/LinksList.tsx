export function LinksList() {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Meus links</h2>
        <button className="text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100">
          📥 Baixar CSV
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-400 text-sm mt-6">
        <span className="text-2xl">🔗</span>
        <p className="mt-2">AINDA NÃO EXISTEM LINKS CADASTRADOS</p>
      </div>
    </div>
  );
}
