import React from "react";
import { useData } from "../Context/DataContext";
import { GraficoVendas } from "../Components/GraficoVendas";

export const Resumo = () => {
  const { data } = useData();

  if (data === null) return <></>;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2> Vendas </h2>
          <span>
            {data
              .filter((item) => item.status != "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2> Recebido </h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2> Processando </h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};
