import { useState, SyntheticEvent } from 'react';
import { Resource } from 'rest-hooks';

type AbstractInstanceType<T> = T extends { prototype: infer U } ? U : never;

export default function useForm<T extends typeof Resource>(
  R: T,
  initialValues: Partial<AbstractInstanceType<T>>,
) {
  const [values, setValues] = useState(() => R.fromJS(initialValues));

  const handleChange = (name: string) => (event: SyntheticEvent) => {
    setValues(R.fromJS({ ...values, [name]: event.target.value }));
  };
  const handleSubmit = (onSubmit: (v: object) => any) => (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(values);
  };
  return [values, handleChange, handleSubmit];
}
