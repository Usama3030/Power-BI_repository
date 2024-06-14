import powerbi from "powerbi-visuals-api";
export type appState = powerbi.DataView[];

export type appRequired = {
  id?: string;
  Name?: string;
  url?: string;
  salary?: number;
};
