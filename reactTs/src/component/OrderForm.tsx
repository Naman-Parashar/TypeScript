import React, { useState } from "react";

interface OrderFormProps {
  inputs(order: OrderType): void;
}

interface OrderType {
  name: string;
  cups: number;
}

function OrderForm({ inputs }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    inputs({name,cups})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Cahi Name</label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <label>Cups</label>
      <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value))
        }
      />

      <button type="submit">Place order</button>
    </form>
  );
}

export default OrderForm;
