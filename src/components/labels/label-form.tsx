export default function LabelForm({ title }) {
  return (
    <label className="text-grayDark text-sm font-black max-sm320:text-[12px] select-none">
      {title}
    </label>
  );
}
