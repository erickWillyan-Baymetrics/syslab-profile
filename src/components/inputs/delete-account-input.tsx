import IconTrash from "../../assets/images/icon-trash.svg";
export default function DeleteAccountInput() {
  return (
    <button
      type="button"
      className="flex items-center px-4 min-h-9 text-dangerPrimary border-2 border-dangerPrimary font-bold text-base rounded-xl"
    >
      <img src={IconTrash} alt="IconLogout" className="w-4 mr-1" /> Excluir
      conta
    </button>
  );
}
