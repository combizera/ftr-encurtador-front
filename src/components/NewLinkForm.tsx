import { ButtonPrimary } from './ButtonPrimary';

export function NewLinkForm() {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">
        Novo link
      </h2>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">
          Link Original
        </label>
        <input
          type="text"
          placeholder="www.exemplo.com.br"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">
          Link Encurtado
        </label>
        <input
          type="text"
          placeholder="brev.ly/"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      <ButtonPrimary href="#">
        Salvar link
      </ButtonPrimary>
    </div>
  );
}
