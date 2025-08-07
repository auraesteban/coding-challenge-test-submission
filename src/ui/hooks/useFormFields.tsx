import { useState } from "react";

type Fields = Record<string, string>;

export default function useFormFields<T extends Fields>(fields: T) {
  const [formFields, setFormFields] = useState<T>(fields);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return {
    formFields,
    onChange: handleChange,
  };
}
