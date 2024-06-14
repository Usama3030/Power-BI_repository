import { useState } from "react";
import useApp from "./Hooks/useApp";
import { Context } from "./Context/Context";
import User1 from "./Views/UserCard";
import "../../style/style.css";
import { appRequired, appState } from "./Types/Types";

// const data = (state: appState) => {
//   const getState: appRequired[] = [];

//   if (state) {
//     const path = state[0].categorical.categories;
//     const path2 = state[0].categorical.values;
//     for (let i = 0; i < path[0].values.length; i++) {
//       const getValue = {};
//       for (let j = 0; j < path.length; j++) {
//         const name1: string = path[j].source.displayName ?? "";
//         const value1: string = path[j].values[i]
//           ? path[j].values[i].toString()
//           : "";
//         const name2: string = path2[j].source.displayName ?? "";
//         const value2: string = path2[j].values[i]
//           ? path2[j].values[i].toString()
//           : "";
//         getValue[name1] = value1;
//         getValue[name2] = value2;
//       }
//       getState.push(getValue);
//     }

//     // for (let i = 0; i < path2[0].values.length; i++) {
//     //   const getValue = {};
//     //   for (let j = 0; j < path2.length; j++) {}
//     //   getState.push(getValue);
//     // }
//   }

//   return getState;
// };
const defaultFieldMapping = {
  "Sum of Salary": "salary",
  Name: "name",
};

const data = (state: appState, userFieldMapping = {}) => {
  const getState = [];

  const fieldMapping = { ...defaultFieldMapping, ...userFieldMapping };

  if (state) {
    const path = state[0].categorical.categories;
    const path2 = state[0].categorical.values;

    for (let i = 0; i < path[0].values.length; i++) {
      const getValue = {};

      for (let j = 0; j < path.length; j++) {
        const name1 =
          fieldMapping[path[j].source.displayName] ??
          path[j].source.displayName;
        const value1 = path[j].values[i] ? path[j].values[i].toString() : "";
        getValue[name1] = value1;
      }

      for (let j = 0; j < path2.length; j++) {
        const name2 =
          fieldMapping[path2[j].source.displayName] ??
          path2[j].source.displayName;
        const value2 = path2[j].values[i]
          ? path2[j].values[i].toLocaleString()
          : "";
        getValue[name2] = value2;
      }

      getState.push(getValue);
    }
  }

  return getState;
};

const App = () => {
  console.log("App.tsx");
  const [page, setPage] = useState(<User1 />);
  const { state } = useApp();
  console.log("app state", state);
  const getState: appRequired[] = data(state);
  console.log(getState);

  if (!state) return null;

  return (
    <Context.Provider value={{ page, setPage, state, getState }}>
      <div className="app-container">{page}</div>
    </Context.Provider>
  );
};

export default App;
