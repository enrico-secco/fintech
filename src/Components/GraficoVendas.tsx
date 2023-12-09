import React from "react";
import { IVenda } from "../Context/DataContext";

function transformData(data: IVenda[]): VendaDia[] {
  return [];
}

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

export const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return <div>GraficoVendas</div>;
};
