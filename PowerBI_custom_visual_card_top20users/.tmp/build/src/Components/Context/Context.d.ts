import { Dispatch, ReactNode, SetStateAction } from "react";
import { appState } from "../Types/Types";
export type contextType = {
    page: ReactNode;
    setPage: Dispatch<SetStateAction<ReactNode>>;
    state: appState;
};
export declare const Context: import("react").Context<contextType>;
