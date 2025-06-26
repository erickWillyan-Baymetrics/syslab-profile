export default function TextboxInput({
  name,
  register,
  required,
  type,
  readOnly,
}) {
  return (
    <input
      type={type}
      readOnly={readOnly}
      className={`max-xl:w-full 2xl:min-w-[280px] border-b-[3px] border-b-blueMedium text-grayDark font-medium outline-none p-3 ${
        readOnly && "text-grayMedium"
      }`}
      {...(register ? register(name, { required }) : {})}
    />
  );
}
