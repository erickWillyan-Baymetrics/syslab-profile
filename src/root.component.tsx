import { useForm } from "react-hook-form";
import LabelForm from "./components/labels/label-form";
import TextboxInput from "./components/inputs/textbox-input";

export default function Root(props) {
  const { register } = useForm({
    defaultValues: {
      registery: 1574896587,
      name: "Erick Willyan dos Santos Cruz",
      email: "erick.cruz@baymetrics.com.br",
      password: "123@123",
      type: "Aluno",
      entry_time: "15:00",
      departure_time: "21:00",
    },
  });

  return (
    <>
      <form className="m-auto mt-10 w-10/12 max-w-[1280px] min-[290px]: h-9/12 max-h-[900px] rounded-xl shadow-lg shadow-[#00000040] py-6">
        <div className="flex justify-center w-full pb-6">
          <h1 className="text-grayDark font-bold text-2xl">Meus Dados</h1>
        </div>
        <div className="flex flex-col w-10/12 m-auto mb-4 gap-4">
          <div>
            <LabelForm title="Nome Completo:" />
            <TextboxInput
              name="name"
              required={true}
              readOnly={true}
              type="text"
              register={register}
            />
          </div>
          <div>
            <LabelForm title="Matrícula:" />
            <TextboxInput
              name="registery"
              required={true}
              type="text"
              readOnly={false}
              register={register}
            />
          </div>
          <div>
            <LabelForm title="E-mail:" />
            <TextboxInput
              name="email"
              required={true}
              readOnly={true}
              type="text"
              register={register}
            />
          </div>
          <div>
            <LabelForm title="Senha:" />
            <TextboxInput
              name="password"
              readOnly={false}
              required={true}
              type="password"
              register={register}
            />
          </div>

          <div>
            <LabelForm title="Ocupação:" />
            <TextboxInput
              name="type"
              required={true}
              readOnly={true}
              type="text"
              register={register}
            />
          </div>
          <div>
            <LabelForm title="Horário de Entrada:" />
            <TextboxInput
              name="entry_time"
              required={true}
              type="text"
              readOnly={false}
              register={register}
            />
          </div>
          <div>
            <LabelForm title="Horário de Saida:" />
            <TextboxInput
              name="departure_time"
              required={true}
              readOnly={false}
              type="text"
              register={register}
            />
          </div>
        </div>
      </form>
    </>
  );
}
