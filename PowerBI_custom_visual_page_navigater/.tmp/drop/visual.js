var practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var _Hooks_useApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(506);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(560);
/* harmony import */ var _Views_Finance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(370);
/* harmony import */ var _Views_Compliance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(107);
/* harmony import */ var _Views_Management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(835);

// import { useState } from "react";
// import useApp from "./Hooks/useApp";
// import { Context } from "./Context/Context";
// import Layout from "./Layout/Layout";
// import Page1 from "./Views/Page1";
// import "../../style/style.css";
// const App = () => {
//   console.log("App.tsx");
// const [page, setPage] = useState(<Page1 />);
//   const { state } = useApp();
//   console.log(state);
//   return (
//     <Context.Provider value={{ page, setPage, state }}>
//       <div className="app-container">
//         <Layout />
//         <div className="page-content">{page}</div>
//       </div>
//     </Context.Provider>
//   );
// };
// export default App;








const App = () => {
    console.log("App.tsx");
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Page1");
    const { state } = (0,_Hooks_useApp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
    console.log("app state", state);
    if (!state)
        return null;
    const renderPage = () => {
        switch (page) {
            case "Finance":
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Views_Finance__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {});
            case "Compliance":
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Views_Compliance__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {});
            case "Management":
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Views_Management__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {});
            default:
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Views_Finance__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {});
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Context_Context__WEBPACK_IMPORTED_MODULE_3__/* .Context */ .o.Provider, { value: { page, setPage, state }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "app-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "page-content", children: [" ", renderPage()] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
// import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
// import { appState } from "../Types/Types";
// export type contextType = {
//   page: ReactNode; //for routing
//   setPage: Dispatch<SetStateAction<ReactNode>>; //for routing
//   state: appState;
// };
// export const Context = createContext<contextType | null>(null);

const Context = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);

let updateCallback = null;
const update = (newState) => {
    if (typeof updateCallback === "function") {
        updateCallback(newState);
    }
};
const useApp = () => {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    updateCallback = (newState) => {
        setState(newState);
    };
    return { state };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApp);


/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);

// import { useContext } from "react";
// import { Context } from "../Context/Context";
// import "./style.css";
// import Page1 from "../Views/Page1";
// import Page2 from "../Views/Page2";
// import Page3 from "../Views/Page3";
// const Layout = () => {
//   const getData = useContext(Context);
//   const { page, setPage } = getData;
//   console.log("page", page);
//   const buttonsData = [
//     {
//       id: 1,
//       title: "Page 1",
//       component: <Page1 />,
//     },
//     {
//       id: 2,
//       title: "Page 2",
//       component: <Page2 />,
//     },
//     {
//       id: 3,
//       title: "Page 3",
//       component: <Page3 />,
//     },
//   ];
//   return (
//     <div className="layout-container">
//       <div className="button-container">
//         {buttonsData.map((btn) => (
//           <button
//             key={btn.id}
//             className={`nav-button ${page === btn.component ? "active" : ""}`}
//             onClick={() => setPage(btn.component)}
//           >
//             {btn.title}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Layout;



const Layout = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_2__/* .Context */ .o);
    if (!context) {
        return null;
    }
    const { page, setPage } = context;
    console.log("page", page);
    const buttonsData = [
        { id: 1, title: "Finance" },
        { id: 2, title: "Compliance" },
        { id: 3, title: "Management" },
    ];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "layout-container", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "button-container", children: buttonsData.map((btn) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: `nav-button ${page === btn.title ? "active" : ""}`, onClick: () => setPage(btn.title), children: btn.title }, btn.id))) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);


const Pagination = ({ currentPage, totalPages, paginate, }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "pagination", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "pagination-button", onClick: () => paginate(currentPage - 1), disabled: currentPage === 1, children: "Previous" }), [...Array(totalPages).keys()].map((number) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => paginate(number + 1), className: `pagination-number ${currentPage === number + 1 ? "active" : ""}`, children: number + 1 }, number + 1))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => paginate(currentPage + 1), disabled: currentPage === totalPages, children: "Next" })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(408);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);






const cardData = [
    {
        id: 1,
        title: "Compliance Cornerstones",
        summary: "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 2,
        title: "Regulatory Excellence",
        summary: "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 3,
        title: "Ethical Standards in Action",
        summary: "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 4,
        title: "Compliance Overview",
        summary: "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 5,
        title: "Risk Management",
        summary: "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 6,
        title: "Ethical Conduct",
        summary: "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 7,
        title: "Regulatory Compliance",
        summary: "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 8,
        title: "Audit Readiness",
        summary: "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 9,
        title: "Training & Awareness",
        summary: "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 10,
        title: "Policy Enforcement",
        summary: "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 11,
        title: "Supplier Compliance",
        summary: "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
    {
        id: 12,
        title: "Anti-Corruption Measures",
        summary: "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
    },
];
const Page2 = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_3__/* .Context */ .o);
    // if (!context || !context.state) return null;
    const { state: { host }, } = context;
    const [expandedCard, setExpandedCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filteredCards = cardData.filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
    const toggleExpansion = (id) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        }
        else {
            setExpandedCard(id);
        }
    };
    const closeFullScreen = () => {
        setExpandedCard(null);
    };
    const navigateToUrl = (url) => {
        if (host && host.launchUrl) {
            host.launchUrl(url);
        }
        else {
            console.error("Host or launchUrl method is not available");
        }
    };
    const navigateToModalUrl = (url) => {
        if (host && host.launchUrl) {
            host?.launchUrl(url);
        }
        else {
            console.error("Host or launchUrl method is not available");
        }
    };
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "search-bar", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: searchQuery, onChange: handleSearch, placeholder: "Search by title..." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "search-button", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__/* .CiSearch */ .Xj1, {}) })] }), filteredCards.length === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "no-record", children: "No Record Found" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "cards-grid", children: currentCards.map((card) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `card-wrapper ${expandedCard === card.id ? "expanded" : ""}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "card", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title", children: card.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary", children: [expandedCard === card.id
                                            ? card.summary
                                            : `${card.summary.substring(0, 200)}...`, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "toggle-button", onClick: () => toggleExpansion(card.id), children: expandedCard === card.id ? "Read Less" : "Read More" })] })] }, card.id), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "button-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "access-button", onClick: () => openModal(card.getAccess), children: "Get Access" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "go-to-button", onClick: () => navigateToUrl(card.url), children: "View Report" })] })] }, card.id))) })), expandedCard && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "overlay", onClick: closeFullScreen })), filteredCards.length > cardsPerPage && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { currentPage: currentPage, totalPages: Math.ceil(cardData.length / cardsPerPage), paginate: paginate })), isModalOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `modal2 ${isModalOpen ? "show" : ""}`, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "modal-content2", onClick: (e) => e.stopPropagation(), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "modal-header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "close", onClick: closeModal, children: "\u00D7" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: modalContent.title })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-body", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: modalContent.content }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-footer", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-footer-link", onClick: () => navigateToModalUrl(modalContent.url), children: "More Info" }) })] }) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page2);


/***/ }),

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(408);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);






const cardData = [
    {
        id: 1,
        title: "Annual Financial Review",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 2,
        title: "Fiscal Year in Review",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 3,
        title: "Financial Highlights",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 4,
        title: "Annual",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 5,
        title: "Fiscal Year",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 6,
        title: "Financial",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 7,
        title: "card 7",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 8,
        title: "card 8",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 9,
        title: "card 9",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 10,
        title: "card 10",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 11,
        title: "card 11",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 12,
        title: "card 12",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 13,
        title: "Annual Financial Review",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 14,
        title: "Fiscal Year in Review",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 15,
        title: "Financial Highlights",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 16,
        title: "Annual",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 17,
        title: "Fiscal Year",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 18,
        title: "Financial",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 19,
        title: "card 19",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 20,
        title: "card 20",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 21,
        title: "card 21",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 24,
        title: "card 24",
        summary: "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 22,
        title: "card 22",
        summary: "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
    {
        id: 23,
        title: "card 23",
        summary: "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://www.google.com/",
    },
];
const Page1 = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_3__/* .Context */ .o);
    // if (!context || !context.state) {
    //   return null;
    // }
    console.log("state finance", context);
    const { state: { host }, } = context; //nested destructuring
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filteredCards = cardData.filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
    const [expandedCard, setExpandedCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const toggleExpansion = (id) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        }
        else {
            setExpandedCard(id);
        }
    };
    const closeFullScreen = () => {
        setExpandedCard(null);
    };
    const navigateToUrl = (url) => {
        if (host && host.launchUrl) {
            host?.launchUrl(url);
        }
        else {
            console.error("Host or launchUrl method is not available");
        }
    };
    const navigateToModalUrl = (url) => {
        if (host && host.launchUrl) {
            host?.launchUrl(url);
        }
        else {
            console.error("Host or launchUrl method is not available");
        }
    };
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "search-bar", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: searchQuery, onChange: handleSearch, placeholder: "Search by title..." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "search-button", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__/* .CiSearch */ .Xj1, {}) })] }), filteredCards.length === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "no-record", children: "No Record Found" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "cards-grid", children: currentCards.map((card) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `card-wrapper ${expandedCard === card.id ? "expanded" : ""}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "card", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title", children: card.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary", children: [expandedCard === card.id
                                            ? card.summary
                                            : `${card.summary.substring(0, 200)}...`, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "toggle-button", onClick: () => toggleExpansion(card.id), children: expandedCard === card.id ? "Read Less" : "Read More" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "button-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "access-button", onClick: () => openModal(card.getAccess), children: "Get Access" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "go-to-button", onClick: () => navigateToUrl(card.url), children: "View Report" })] })] }, card.id))) })), expandedCard && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "overlay", onClick: closeFullScreen })), filteredCards.length > cardsPerPage && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { currentPage: currentPage, totalPages: Math.ceil(cardData.length / cardsPerPage), paginate: paginate })), isModalOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `modal2 ${isModalOpen ? "show" : ""}`, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "modal-content2", onClick: (e) => e.stopPropagation(), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "modal-header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "close", onClick: closeModal, children: "\u00D7" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: modalContent.title })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-body", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: modalContent.content }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-footer", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-footer-link", onClick: () => navigateToModalUrl(modalContent.url), children: "More Info" }) })] }) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page1);


/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(408);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);






const cardData = [
    {
        id: 1,
        title: "Strategic Leadership Insights",
        summary: "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 2,
        title: "Innovative Management",
        summary: "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 3,
        title: " Effective Leadership",
        summary: "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 4,
        title: "Change Management",
        summary: "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 5,
        title: "Performance Metrics",
        summary: "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 6,
        title: "Resource Allocation",
        summary: "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 7,
        title: "Corporate Governance",
        summary: "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 8,
        title: "Stakeholder Engagement",
        summary: "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 9,
        title: "Sustainability Initiatives",
        summary: "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 10,
        title: "Crisis Management",
        summary: "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 11,
        title: "Innovative Management",
        summary: "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
    {
        id: 12,
        title: " Sustainability Initiatives",
        summary: "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
        getAccess: {
            url: "https://github.com/Usama3030",
            title: "Conditions",
            content: "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
        },
        url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
    },
];
const Page3 = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_3__/* .Context */ .o);
    // if (!context || !context.state) return null;
    const { state: { host }, } = context;
    const [expandedCard, setExpandedCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filteredCards = cardData.filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
    const toggleExpansion = (id) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        }
        else {
            setExpandedCard(id);
        }
    };
    const closeFullScreen = () => {
        setExpandedCard(null);
    };
    const navigateToUrl = (url) => {
        if (host && host.launchUrl) {
            host.launchUrl(url);
        }
        else {
            console.error("Host or launchUrl method is not available");
        }
    };
    const navigateToModalUrl = (url) => {
        if (host && host.launchUrl) {
            host?.launchUrl(url);
        }
        else {
            console.error("Host or launchUrl method is not available");
        }
    };
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "search-bar", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: searchQuery, onChange: handleSearch, placeholder: "Search by title..." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "search-button", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__/* .CiSearch */ .Xj1, {}) })] }), filteredCards.length === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "no-record", children: "No Record Found" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "cards-grid", children: currentCards.map((card) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `card-wrapper ${expandedCard === card.id ? "expanded" : ""}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "card", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title", children: card.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary", children: [expandedCard === card.id
                                            ? card.summary
                                            : `${card.summary.substring(0, 200)}...`, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "toggle-button", onClick: () => toggleExpansion(card.id), children: expandedCard === card.id ? "Read Less" : "Read More" })] })] }, card.id), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "button-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "access-button", onClick: () => openModal(card.getAccess), children: "Get Access" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "go-to-button", onClick: () => navigateToUrl(card.url), children: "View Report" })] })] }, card.id))) })), expandedCard && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "overlay", onClick: closeFullScreen })), filteredCards.length > cardsPerPage && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { currentPage: currentPage, totalPages: Math.ceil(cardData.length / cardsPerPage), paginate: paginate })), isModalOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `modal2 ${isModalOpen ? "show" : ""}`, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "modal-content2", onClick: (e) => e.stopPropagation(), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "modal-header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "close", onClick: closeModal, children: "\u00D7" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: modalContent.title })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-body", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: modalContent.content }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-footer", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "modal-footer-link", onClick: () => navigateToModalUrl(modalContent.url), children: "More Info" }) })] }) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page3);


/***/ }),

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(961);
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(540);
/* harmony import */ var _Components_Hooks_useApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(506);
/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */






class Visual {
    target;
    updateCount;
    textNode;
    host;
    formattingSettings;
    formattingSettingsService;
    constructor(options) {
        this.host = options.host;
        react_dom__WEBPACK_IMPORTED_MODULE_0__.render((0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_Components_App__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A), options.element);
        console.log("Constructor calls!");
    }
    update(options) {
        // this.formattingSettings =
        //   this.formattingSettingsService.populateFormattingSettingsModel(
        //     VisualFormattingSettingsModel,
        //     options.dataViews[0]
        //   );
        console.log("options", options);
        console.log("host", this.host);
        // update([]);
        (0,_Components_Hooks_useApp__WEBPACK_IMPORTED_MODULE_3__/* .update */ .y)({ data: options.dataViews, host: this.host });
        // console.log("Visual update", options);
        // if (this.textNode) {
        //   this.textNode.textContent = (this.updateCount++).toString();
        // }
    }
    //for fetching more data then 30000
    // public update(options: VisualUpdateOptions) {
    //   // Check if there's more data to fetch
    //   if (options.dataViews && options.dataViews[0].metadata.segment) {
    //     this.fetchMoreData();
    //   }
    //   // Call your render visual method with the available data
    //   this.renderVisual(options.dataViews[0]);
    // }
    // private fetchMoreData() {
    //   // Logic to request more data from Power BI
    //   this.host.fetchMoreData();
    // }
    // private renderVisual(dataView: DataView) {
    //   // Efficient rendering logic for large datasets
    //   // ...
    // }
    /**
     * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
     * This method is called once every time we open properties pane or when the user edit any format property.
     */
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(540),ca=__webpack_require__(982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}__webpack_unused_export__=sl;
__webpack_unused_export__=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};__webpack_unused_export__=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
__webpack_unused_export__=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};__webpack_unused_export__=function(a){return Rk(a)};__webpack_unused_export__=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
__webpack_unused_export__=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};__webpack_unused_export__=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};__webpack_unused_export__=Qk;
__webpack_unused_export__=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};__webpack_unused_export__="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(551);
} else {}


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(287);
} else {}


/***/ }),

/***/ 848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(20);
} else {}


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(463);
} else {}


/***/ }),

/***/ 408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xj1: () => (/* binding */ CiSearch)
/* harmony export */ });
/* unused harmony exports CiAirportSign1, CiAlarmOff, CiAlarmOn, CiAlignBottom, CiAlignCenterH, CiAlignCenterV, CiAlignLeft, CiAlignRight, CiAlignTop, CiApple, CiAt, CiAvocado, CiBacon, CiBadgeDollar, CiBag1, CiBandage, CiBank, CiBarcode, CiBaseball, CiBasketball, CiBatteryCharging, CiBatteryEmpty, CiBatteryFull, CiBeaker1, CiBeerMugFull, CiBellOff, CiBellOn, CiBezier, CiBitcoin, CiBluetooth, CiBookmarkCheck, CiBookmarkMinus, CiBookmarkPlus, CiBookmarkRemove, CiBookmark, CiBowlNoodles, CiBoxList, CiBoxes, CiBrightnessDown, CiBrightnessUp, CiBullhorn, CiBurger, CiCalculator1, CiCalculator2, CiCalendarDate, CiCalendar, CiCamera, CiChat1, CiChat2, CiCircleAlert, CiCircleCheck, CiCircleChevDown, CiCircleChevLeft, CiCircleChevRight, CiCircleChevUp, CiCircleInfo, CiCircleList, CiCircleMinus, CiCircleMore, CiCirclePlus, CiCircleQuestion, CiCircleRemove, CiClock1, CiClock2, CiCloudDrizzle, CiCloudMoon, CiCloudOff, CiCloudOn, CiCloudRainbow, CiCloudSun, CiCloud, CiCoffeeBean, CiCoffeeCup, CiCoinInsert, CiCoins1, CiCompass1, CiCreditCard1, CiCreditCard2, CiCreditCardOff, CiCrop, CiDark, CiDatabase, CiDeliveryTruck, CiDesktopMouse1, CiDesktopMouse2, CiDesktop, CiDiscount1, CiDollar, CiDroplet, CiDumbbell, CiEdit, CiEraser, CiExport, CiFaceFrown, CiFaceMeh, CiFaceSmile, CiFacebook, CiFileOff, CiFileOn, CiFilter, CiFlag1, CiFloppyDisk, CiFolderOff, CiFolderOn, CiFootball, CiForkAndKnife, CiFries, CiGift, CiGlass, CiGlobe, CiGps, CiGrid2H, CiGrid2V, CiGrid31, CiGrid32, CiGrid41, CiGrid42, CiHardDrive, CiHashtag, CiHeadphones, CiHeart, CiHome, CiHospital1, CiHotdog, CiIceCream, CiImageOff, CiImageOn, CiImport, CiInboxIn, CiInboxOut, CiIndent, CiInstagram, CiKeyboard, CiLaptop, CiLemon, CiLight, CiLineHeight, CiLink, CiLinkedin, CiLocationArrow1, CiLocationOff, CiLocationOn, CiLock, CiLogin, CiLogout, CiLollipop, CiMail, CiMapPin, CiMap, CiMaximize1, CiMaximize2, CiMedal, CiMedicalCase, CiMedicalClipboard, CiMedicalCross, CiMedicalMask, CiMemoPad, CiMenuBurger, CiMenuFries, CiMenuKebab, CiMicrochip, CiMicrophoneOff, CiMicrophoneOn, CiMinimize1, CiMinimize2, CiMobile1, CiMobile2, CiMobile3, CiMobile4, CiMoneyBill, CiMoneyCheck1, CiMonitor, CiMountain1, CiMug1, CiMusicNote1, CiNoWaitingSign, CiPalette, CiPaperplane, CiParking1, CiPassport1, CiPause1, CiPen, CiPenpot, CiPercent, CiPhone, CiPickerEmpty, CiPickerHalf, CiPill, CiPillsBottle1, CiPizza, CiPlane, CiPlay1, CiPlug1, CiPower, CiRainbow, CiRead, CiReceipt, CiRedo, CiRepeat, CiRollingSuitcase, CiRoute, CiRouter, CiRuler, CiSatellite1, CiSaveDown1, CiSaveDown2, CiSaveUp1, CiSaveUp2, CiServer, CiSettings, CiShare1, CiShare2, CiShirt, CiShop, CiShoppingBasket, CiShoppingCart, CiShoppingTag, CiShuffle, CiSignpostDuo1, CiSignpostL1, CiSignpostR1, CiSliderHorizontal, CiSliderVertical, CiSpeaker, CiSquareAlert, CiSquareCheck, CiSquareChevDown, CiSquareChevLeft, CiSquareChevRight, CiSquareChevUp, CiSquareInfo, CiSquareMinus, CiSquareMore, CiSquarePlus, CiSquareQuestion, CiSquareRemove, CiStar, CiStethoscope, CiStickyNote, CiStop1, CiStopSign1, CiStopwatch, CiStreamOff, CiStreamOn, CiSun, CiTablets1, CiTempHigh, CiTextAlignCenter, CiTextAlignJustify, CiTextAlignLeft, CiTextAlignRight, CiText, CiTimer, CiTrash, CiTrophy, CiTurnL1, CiTurnR1, CiTwitter, CiUmbrella, CiUndo, CiUnlock, CiUnread, CiUsb, CiUser, CiVault, CiVial, CiVideoOff, CiVideoOn, CiViewBoard, CiViewColumn, CiViewList, CiViewTable, CiViewTimeline, CiVirus, CiVoicemail, CiVolumeHigh, CiVolumeMute, CiVolume, CiWallet, CiWarning, CiWavePulse1, CiWheat, CiWifiOff, CiWifiOn, CiYoutube, CiZoomIn, CiZoomOut */
/* harmony import */ var _lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
// THIS FILE IS AUTO GENERATED

function CiAirportSign1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Airport_Sign_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13.105,12.609v2.279a.119.119,0,0,0,.061.105l.622.355a.49.49,0,0,1,.242.365l.049.413a.243.243,0,0,1-.307.263l-1.641-.459a.486.486,0,0,0-.262,0l-1.641.459a.244.244,0,0,1-.308-.263l.05-.413a.487.487,0,0,1,.242-.365l.621-.355a.12.12,0,0,0,.062-.105V12.609a.122.122,0,0,0-.137-.121l-3.485.435A.242.242,0,0,1,7,12.682v-.624a.486.486,0,0,1,.316-.455l3.5-1.313a.122.122,0,0,0,.079-.114V9.435a4.756,4.756,0,0,1,.1-.981h0a1.015,1.015,0,0,1,1.2-.833,1.063,1.063,0,0,1,.819.9l.015.094a6.3,6.3,0,0,1,.077.976v.587a.121.121,0,0,0,.079.114l3.5,1.313a.486.486,0,0,1,.316.455v.624a.243.243,0,0,1-.274.241l-3.484-.435A.121.121,0,0,0,13.105,12.609Z"},"child":[]},{"tag":"path","attr":{"d":"M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"},"child":[]}]}]}]})(props);
};
function CiAlarmOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Alarm_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M4.564,3.856a.5.5,0,0,0-.7.71l.29.29-.5.5a2.019,2.019,0,0,0-.01,2.85l.65.67a8.273,8.273,0,0,0-.71,3.39A8.427,8.427,0,0,0,12,20.686a8.275,8.275,0,0,0,5.72-2.26c.57.57,1.14,1.15,1.71,1.71a.5.5,0,0,0,.71-.7Zm-.21,2.21.51-.5c.32.33.65.65.98.98a6.38,6.38,0,0,0-1.06,1.4l-.43-.44A1.032,1.032,0,0,1,4.354,6.066ZM12,19.686a7.43,7.43,0,0,1-7.42-7.42,7.312,7.312,0,0,1,1.96-5.02l2.59,2.59q3.945,3.945,7.88,7.88A7.27,7.27,0,0,1,12,19.686Z"},"child":[]},{"tag":"path","attr":{"d":"M20.354,8.216a2.04,2.04,0,0,0,0-2.86l-1.46-1.45a2.01,2.01,0,0,0-2.85,0l-.68.67a8.528,8.528,0,0,0-6.38-.17c-.6.23-.34,1.19.27.97a7.419,7.419,0,0,1,9.64,9.64c-.22.6.74.86.97.26a8.506,8.506,0,0,0-.17-6.39Zm-2.4-1.9a8.068,8.068,0,0,0-1.65-1.27l.44-.43a1.026,1.026,0,0,1,1.45,0l1.45,1.45a1.014,1.014,0,0,1,0,1.44l-.43.44A8.262,8.262,0,0,0,17.954,6.316Z"},"child":[]}]}]}]})(props);
};
function CiAlarmOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Alarm_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.352,8.213a2.017,2.017,0,0,0,0-2.851L18.9,3.9a2.038,2.038,0,0,0-2.86,0l-.67.659A8.238,8.238,0,0,0,12,3.852a8.332,8.332,0,0,0-3.39.71L7.962,3.9a2.038,2.038,0,0,0-2.86,0L3.652,5.362a2.02,2.02,0,0,0-.01,2.851l.65.67a8.419,8.419,0,1,0,16.13,3.39,8.4,8.4,0,0,0-.72-3.411ZM4.362,6.062l1.45-1.45a1.016,1.016,0,0,1,1.44,0l.44.43a8.427,8.427,0,0,0-2.91,2.9l-.42-.43A1.027,1.027,0,0,1,4.362,6.062ZM12,19.682a7.415,7.415,0,1,1,7.42-7.409A7.421,7.421,0,0,1,12,19.682Zm7.22-11.75a8.578,8.578,0,0,0-2.91-2.89l.44-.43a1.016,1.016,0,0,1,1.44,0l1.45,1.45a1.027,1.027,0,0,1,0,1.451Z"},"child":[]},{"tag":"path","attr":{"d":"M17.042,12.763H12a.455.455,0,0,1-.27-.081c-.03-.02-.05-.039-.07-.049a.442.442,0,0,1-.16-.36V7.232a.5.5,0,0,1,1,0v4.531h4.54A.5.5,0,0,1,17.042,12.763Z"},"child":[]}]}]}]})(props);
};
function CiAlignBottom (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Align_Bottom"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.548,20.922h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M9,18.919H6.565a2.5,2.5,0,0,1-2.5-2.5V5.578a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5V16.419A2.5,2.5,0,0,1,9,18.919ZM6.565,4.078a1.5,1.5,0,0,0-1.5,1.5V16.419a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V5.578A1.5,1.5,0,0,0,9,4.078Z"},"child":[]},{"tag":"path","attr":{"d":"M17.437,18.919H15a2.5,2.5,0,0,1-2.5-2.5V10.55A2.5,2.5,0,0,1,15,8.05h2.434a2.5,2.5,0,0,1,2.5,2.5v5.869A2.5,2.5,0,0,1,17.437,18.919ZM15,9.05a1.5,1.5,0,0,0-1.5,1.5v5.869a1.5,1.5,0,0,0,1.5,1.5h2.434a1.5,1.5,0,0,0,1.5-1.5V10.55a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiAlignCenterH (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Align_Center-H"},"child":[{"tag":"path","attr":{"d":"M17.42,4.062H12.5v-.51a.5.5,0,0,0-1,0v.51H6.58a2.507,2.507,0,0,0-2.5,2.5V9a2.5,2.5,0,0,0,2.5,2.5H11.5v1H9.06A2.507,2.507,0,0,0,6.56,15v2.44a2.507,2.507,0,0,0,2.5,2.5H11.5v.51a.5.5,0,0,0,1,0v-.51h2.43a2.5,2.5,0,0,0,2.5-2.5V15a2.5,2.5,0,0,0-2.5-2.5H12.5v-1h4.92A2.5,2.5,0,0,0,19.92,9V6.562A2.507,2.507,0,0,0,17.42,4.062ZM11.5,18.942H9.06a1.511,1.511,0,0,1-1.5-1.5V15a1.5,1.5,0,0,1,1.5-1.5H11.5Zm0-8.44H6.58A1.5,1.5,0,0,1,5.08,9V6.562a1.5,1.5,0,0,1,1.5-1.5H11.5Zm3.43,3a1.5,1.5,0,0,1,1.5,1.5v2.44a1.5,1.5,0,0,1-1.5,1.5H12.5V13.5ZM18.92,9a1.5,1.5,0,0,1-1.5,1.5H12.5V5.062h4.92a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiAlignCenterV (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Align_Center-V"},"child":[{"tag":"path","attr":{"d":"M20.446,11.5h-.51V9.07a2.5,2.5,0,0,0-2.5-2.5h-2.43a2.5,2.5,0,0,0-2.5,2.5V11.5H11.5V6.58A2.5,2.5,0,0,0,9,4.08H6.566a2.5,2.5,0,0,0-2.5,2.5V11.5h-.52a.5.5,0,0,0,0,1h.52v4.92a2.5,2.5,0,0,0,2.5,2.5H9a2.5,2.5,0,0,0,2.5-2.5V12.5h1.01v2.43a2.5,2.5,0,0,0,2.5,2.5h2.43a2.5,2.5,0,0,0,2.5-2.5V12.5h.51A.5.5,0,0,0,20.446,11.5ZM10.5,17.42A1.5,1.5,0,0,1,9,18.92H6.566a1.5,1.5,0,0,1-1.5-1.5V12.5H10.5Zm0-5.92H5.066V6.58a1.5,1.5,0,0,1,1.5-1.5H9a1.5,1.5,0,0,1,1.5,1.5Zm8.44,3.43a1.5,1.5,0,0,1-1.5,1.5h-2.43a1.5,1.5,0,0,1-1.5-1.5V12.5h5.43Zm0-3.43h-5.43V9.07a1.5,1.5,0,0,1,1.5-1.5h2.43a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiAlignLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Align_Left"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.078,3.548v16.9a.5.5,0,0,0,1,0V3.548a.5.5,0,0,0-1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M18.422,11.5H7.582A2.5,2.5,0,0,1,5.082,9V6.565a2.5,2.5,0,0,1,2.5-2.5h10.84a2.5,2.5,0,0,1,2.5,2.5V9A2.5,2.5,0,0,1,18.422,11.5ZM7.582,5.065a1.5,1.5,0,0,0-1.5,1.5V9a1.5,1.5,0,0,0,1.5,1.5h10.84a1.5,1.5,0,0,0,1.5-1.5V6.565a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M13.451,19.938H7.582a2.5,2.5,0,0,1-2.5-2.5V15a2.5,2.5,0,0,1,2.5-2.5h5.869a2.5,2.5,0,0,1,2.5,2.5v2.436A2.5,2.5,0,0,1,13.451,19.938ZM7.582,13.5a1.5,1.5,0,0,0-1.5,1.5v2.436a1.5,1.5,0,0,0,1.5,1.5h5.869a1.5,1.5,0,0,0,1.5-1.5V15a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiAlignRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Align_Right"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.922,3.548v16.9a.5.5,0,0,0,1,0V3.548a.5.5,0,0,0-1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M16.419,11.5H5.578A2.5,2.5,0,0,1,3.078,9V6.565a2.5,2.5,0,0,1,2.5-2.5H16.419a2.5,2.5,0,0,1,2.5,2.5V9A2.5,2.5,0,0,1,16.419,11.5ZM5.578,5.065a1.5,1.5,0,0,0-1.5,1.5V9a1.5,1.5,0,0,0,1.5,1.5H16.419a1.5,1.5,0,0,0,1.5-1.5V6.565a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M16.419,19.938H10.55a2.5,2.5,0,0,1-2.5-2.5V15a2.5,2.5,0,0,1,2.5-2.5h5.869a2.5,2.5,0,0,1,2.5,2.5v2.436A2.5,2.5,0,0,1,16.419,19.938ZM10.55,13.5A1.5,1.5,0,0,0,9.05,15v2.436a1.5,1.5,0,0,0,1.5,1.5h5.869a1.5,1.5,0,0,0,1.5-1.5V15a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiAlignTop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Align_Top"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.548,4.078h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M9,20.922H6.565a2.5,2.5,0,0,1-2.5-2.5V7.582a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5v10.84A2.5,2.5,0,0,1,9,20.922ZM6.565,6.082a1.5,1.5,0,0,0-1.5,1.5v10.84a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V7.582A1.5,1.5,0,0,0,9,6.082Z"},"child":[]},{"tag":"path","attr":{"d":"M17.438,15.951H15a2.5,2.5,0,0,1-2.5-2.5V7.582a2.5,2.5,0,0,1,2.5-2.5h2.435a2.5,2.5,0,0,1,2.5,2.5v5.869A2.5,2.5,0,0,1,17.438,15.951ZM15,6.082a1.5,1.5,0,0,0-1.5,1.5v5.869a1.5,1.5,0,0,0,1.5,1.5h2.435a1.5,1.5,0,0,0,1.5-1.5V7.582a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiApple (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Apple"},"child":[{"tag":"path","attr":{"d":"M14.875,6.612l.05-.05a3.229,3.229,0,0,0,.95-2.58.976.976,0,0,0-.9-.9,3.229,3.229,0,0,0-2.58.95,3.279,3.279,0,0,0-.85,1.46,4.661,4.661,0,0,0-2.69-1.75.5.5,0,1,0-.22.98,3.664,3.664,0,0,1,2.59,2.2,5.577,5.577,0,0,0-1.9-.32,5.847,5.847,0,0,0-5.84,5.84c0,2.98,2.41,8.49,5.84,8.49a5.821,5.821,0,0,0,2.4-.52.683.683,0,0,1,.56,0,5.73,5.73,0,0,0,2.38.52c3.44,0,5.85-5.51,5.85-8.49A5.838,5.838,0,0,0,14.875,6.612Zm-1.77-1.87a2.3,2.3,0,0,1,1.78-.68c0,.06.01.12.01.17a2.326,2.326,0,0,1-.67,1.63,2.359,2.359,0,0,1-1.79.66A2.247,2.247,0,0,1,13.105,4.742Zm1.56,15.19a4.787,4.787,0,0,1-1.97-.43,1.718,1.718,0,0,0-.69-.15,1.649,1.649,0,0,0-.69.15,4.879,4.879,0,0,1-1.99.43c-2.58,0-4.84-4.67-4.84-7.49a4.855,4.855,0,0,1,6.83-4.42,1.56,1.56,0,0,0,.67.15h.02a1.683,1.683,0,0,0,.69-.15,4.777,4.777,0,0,1,1.97-.42,4.852,4.852,0,0,1,4.85,4.84C19.515,15.262,17.245,19.932,14.665,19.932Z"},"child":[]}]}]})(props);
};
function CiAt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"At"},"child":[{"tag":"path","attr":{"d":"M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0,1,2-3.169A9.269,9.269,0,0,1,8.1,2.862a10.605,10.605,0,0,1,4.175-.787,10.516,10.516,0,0,1,4.334.827A8.437,8.437,0,0,1,19.64,5.119a8.622,8.622,0,0,1,1.707,3.1,9.263,9.263,0,0,1,.377,3.487,5.809,5.809,0,0,1-1.3,3.6A3.6,3.6,0,0,1,17.7,16.473a3.628,3.628,0,0,1-2.162-.609,2.82,2.82,0,0,1-1.119-1.694l.5.106a2.582,2.582,0,0,1-1.3,1.3A4.37,4.37,0,0,1,11.746,16,3.681,3.681,0,0,1,9.88,15.54a3.2,3.2,0,0,1-1.237-1.271A3.843,3.843,0,0,1,8.2,12.4a3.88,3.88,0,0,1,.456-1.926A3.191,3.191,0,0,1,9.919,9.214a3.792,3.792,0,0,1,1.853-.443,4.716,4.716,0,0,1,1.767.364,2.622,2.622,0,0,1,1.383,1.3l-.5.5V9.461a.4.4,0,0,1,.4-.4h.232a.4.4,0,0,1,.4.4v3.518a2.723,2.723,0,0,0,.529,1.674,2.173,2.173,0,0,0,1.853.708,2.281,2.281,0,0,0,1.323-.41,2.938,2.938,0,0,0,.967-1.178,4.947,4.947,0,0,0,.437-1.852,9.439,9.439,0,0,0-.417-3.574A7.285,7.285,0,0,0,18.5,5.588a7.424,7.424,0,0,0-2.679-1.78,9.605,9.605,0,0,0-3.547-.622,9.041,9.041,0,0,0-3.758.741,8.252,8.252,0,0,0-2.773,2,8.8,8.8,0,0,0-1.72,2.838,9.27,9.27,0,0,0-.589,3.262,8.568,8.568,0,0,0,.682,3.408A8.951,8.951,0,0,0,6,18.24a8.707,8.707,0,0,0,2.785,1.892,8.515,8.515,0,0,0,3.389.682,9.851,9.851,0,0,0,2.679-.378,8.451,8.451,0,0,0,2-.831.4.4,0,0,1,.553.158l.1.192a.4.4,0,0,1-.141.526,9.832,9.832,0,0,1-2.391,1.04A10.5,10.5,0,0,1,12.09,21.925ZM11.8,14.859a2.469,2.469,0,0,0,1.786-.649,2.427,2.427,0,0,0,.675-1.839,2.414,2.414,0,0,0-.7-1.886A2.532,2.532,0,0,0,11.8,9.856a2.482,2.482,0,0,0-1.839.649,2.523,2.523,0,0,0-.65,1.866,2.4,2.4,0,0,0,.682,1.865A2.574,2.574,0,0,0,11.8,14.859Z"},"child":[]}]}]})(props);
};
function CiAvocado (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Avocado"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.982,21.939a7.759,7.759,0,0,1-.818-.044A7.58,7.58,0,0,1,6.1,9.6a3.578,3.578,0,0,0,.684-2.271,5.128,5.128,0,0,1,3.8-5.085,5.266,5.266,0,0,1,4.6.892,5.185,5.185,0,0,1,2.039,4.14A3.6,3.6,0,0,0,17.9,9.61a7.574,7.574,0,0,1-5.918,12.329Zm.009-18.877a4.538,4.538,0,0,0-1.158.152,4.126,4.126,0,0,0-3.055,4.07,4.532,4.532,0,0,1-.9,2.947,6.555,6.555,0,0,0-1.366,5.231A6.643,6.643,0,0,0,11.271,20.9a6.575,6.575,0,0,0,5.851-10.662,4.453,4.453,0,0,1-.9-2.9,4.214,4.214,0,0,0-4.228-4.273Z"},"child":[]},{"tag":"ellipse","attr":{"cx":"11.999","cy":"14.856","rx":"2.5","ry":"3"},"child":[]}]}]}]})(props);
};
function CiBacon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bacon"},"child":[{"tag":"path","attr":{"d":"M20.605,7.455l-3.49-3.49a.8.8,0,0,0-1.08-.04,1.833,1.833,0,0,1-.93.37,3.787,3.787,0,0,0-2.21,1.12,3.918,3.918,0,0,0-1.13,2.22,1.681,1.681,0,0,1-.53,1.1,1.753,1.753,0,0,1-1.1.53,4.026,4.026,0,0,0-3.35,3.35,1.677,1.677,0,0,1-.53,1.1,1.721,1.721,0,0,1-1.11.53,4.041,4.041,0,0,0-1.62.63,1.1,1.1,0,0,0-.14,1.66l3.5,3.5a.781.781,0,0,0,.55.23.822.822,0,0,0,.53-.19,1.759,1.759,0,0,1,.93-.38,3.8,3.8,0,0,0,2.21-1.12,3.948,3.948,0,0,0,1.14-2.22,1.71,1.71,0,0,1,.52-1.1,1.776,1.776,0,0,1,1.11-.53,4.03,4.03,0,0,0,3.34-3.35,1.66,1.66,0,0,1,.53-1.1,1.721,1.721,0,0,1,1.11-.53,4.018,4.018,0,0,0,1.61-.62,1.091,1.091,0,0,0,.14-1.67ZM4.1,15.7a3.15,3.15,0,0,1,1.24-.47,2.635,2.635,0,0,0,1.63-.81,2.587,2.587,0,0,0,.8-1.61,2.852,2.852,0,0,1,.86-1.7,2.9,2.9,0,0,1,1.7-.86,2.745,2.745,0,0,0,1.62-.8,2.687,2.687,0,0,0,.8-1.62,2.9,2.9,0,0,1,.86-1.7,2.814,2.814,0,0,1,1.69-.85,2.819,2.819,0,0,0,1.24-.48l1.3,1.3a2.362,2.362,0,0,1-.98.35,3.515,3.515,0,0,0-2.95,2.95,2.136,2.136,0,0,1-.67,1.36,2.159,2.159,0,0,1-1.36.67,3.44,3.44,0,0,0-1.96.99,3.351,3.351,0,0,0-.98,1.96,2.355,2.355,0,0,1-2.03,2.03,3.242,3.242,0,0,0-1.58.66L4.1,15.835ZM19.9,8.3a3.059,3.059,0,0,1-1.23.47,2.659,2.659,0,0,0-1.63.81,2.587,2.587,0,0,0-.8,1.61,2.852,2.852,0,0,1-.86,1.7,2.883,2.883,0,0,1-1.69.86,2.812,2.812,0,0,0-2.43,2.42,2.878,2.878,0,0,1-.86,1.7,2.8,2.8,0,0,1-1.68.85,2.808,2.808,0,0,0-1.25.48l-1.3-1.29a2.423,2.423,0,0,1,.97-.35,3.377,3.377,0,0,0,1.96-.99,3.44,3.44,0,0,0,.99-1.96,2.217,2.217,0,0,1,.66-1.36,2.292,2.292,0,0,1,1.36-.67,3.317,3.317,0,0,0,1.96-.99,3.351,3.351,0,0,0,.99-1.96,2.355,2.355,0,0,1,2.03-2.03,3.479,3.479,0,0,0,1.59-.66l1.23,1.23Z"},"child":[]}]}]})(props);
};
function CiBadgeDollar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Badge_Dollar"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.953c-.895,0-1.545-.743-2.118-1.4a3.671,3.671,0,0,0-1.033-.946,3.8,3.8,0,0,0-1.466-.077,3.012,3.012,0,0,1-2.421-.494,3.014,3.014,0,0,1-.494-2.421,3.82,3.82,0,0,0-.077-1.466,3.671,3.671,0,0,0-.946-1.033c-.655-.573-1.4-1.222-1.4-2.118s.743-1.545,1.4-2.118a3.66,3.66,0,0,0,.946-1.034,3.815,3.815,0,0,0,.077-1.465,3.012,3.012,0,0,1,.494-2.421,3.015,3.015,0,0,1,2.422-.5A3.794,3.794,0,0,0,8.849,4.39a3.666,3.666,0,0,0,1.033-.945c.573-.655,1.223-1.4,2.118-1.4s1.545.742,2.118,1.4a3.66,3.66,0,0,0,1.034.946,3.807,3.807,0,0,0,1.464.077,3.018,3.018,0,0,1,2.422.5,3.012,3.012,0,0,1,.5,2.422,3.81,3.81,0,0,0,.077,1.464,3.66,3.66,0,0,0,.946,1.034c.655.573,1.4,1.223,1.4,2.118s-.743,1.545-1.4,2.118a3.666,3.666,0,0,0-.945,1.033,3.815,3.815,0,0,0-.077,1.465,3.012,3.012,0,0,1-.5,2.422,3.018,3.018,0,0,1-2.421.494,3.818,3.818,0,0,0-1.465.077,3.673,3.673,0,0,0-1.034.946C13.545,21.21,12.9,21.953,12,21.953ZM8.093,18.5a2.952,2.952,0,0,1,1.138.183,4.233,4.233,0,0,1,1.4,1.21c.454.52.924,1.057,1.365,1.057s.911-.537,1.366-1.057a4.225,4.225,0,0,1,1.4-1.21,4.365,4.365,0,0,1,1.908-.152c.672.041,1.366.085,1.653-.2s.245-.982.2-1.653a4.387,4.387,0,0,1,.152-1.909,4.241,4.241,0,0,1,1.209-1.4c.52-.454,1.057-.924,1.057-1.365s-.537-.911-1.057-1.365a4.234,4.234,0,0,1-1.209-1.4,4.381,4.381,0,0,1-.152-1.908c.041-.671.084-1.365-.2-1.653s-.982-.246-1.653-.2a4.384,4.384,0,0,1-1.908-.152,4.234,4.234,0,0,1-1.4-1.209c-.454-.52-.924-1.057-1.365-1.057s-.911.537-1.365,1.057a4.241,4.241,0,0,1-1.4,1.209,4.417,4.417,0,0,1-1.909.152c-.67-.041-1.364-.084-1.653.2s-.244.981-.2,1.652A4.37,4.37,0,0,1,5.314,9.23a4.226,4.226,0,0,1-1.21,1.4c-.52.454-1.057.925-1.057,1.365s.537.911,1.057,1.366a4.238,4.238,0,0,1,1.21,1.4,4.378,4.378,0,0,1,.152,1.91c-.041.672-.084,1.366.2,1.653s.98.245,1.653.2C7.578,18.519,7.838,18.5,8.093,18.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01A.5.5,0,0,1,12,17a.492.492,0,0,1-.5-.49V15.5h-1.25a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H12.5a1,1,0,1,0,0-2h-1a2,2,0,0,1,0-4V7.453A.473.473,0,0,1,12,7a.48.48,0,0,1,.5.45V8.5h1.25a.5.5,0,0,1,.5.5.508.508,0,0,1-.5.5H11.5a1,1,0,0,0,0,2h1A2,2,0,0,1,14.5,13.5Z"},"child":[]}]}]}]})(props);
};
function CiBag1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bag_1"},"child":[{"tag":"path","attr":{"d":"M20.37,17.65a16.777,16.777,0,0,0-2.01-5.54,17.037,17.037,0,0,0-3.74-4.55l-.1-.08a.121.121,0,0,1-.02-.15l1.49-2.59a1.12,1.12,0,0,0,0-1.12,1.092,1.092,0,0,0-.97-.55H8.98a1.1,1.1,0,0,0-.97.55,1.12,1.12,0,0,0,0,1.12l1.5,2.59a.124.124,0,0,1-.03.15l-.09.08A17.327,17.327,0,0,0,3.63,17.65a4.051,4.051,0,0,0-.04.48,2.8,2.8,0,0,0,2.8,2.8H17.62a2.782,2.782,0,0,0,2.13-.99A2.834,2.834,0,0,0,20.37,17.65ZM8.88,4.24a.1.1,0,0,1,0-.12.106.106,0,0,1,.1-.05h6.04a.143.143,0,0,1,.11.05.163.163,0,0,1,0,.12l-1.59,2.8H10.46Zm5.09,4.08a16.436,16.436,0,0,1,5.42,9.5,1.817,1.817,0,0,1-.4,1.47,1.786,1.786,0,0,1-1.37.64H6.39a1.805,1.805,0,0,1-1.8-1.8,1.628,1.628,0,0,1,.03-.31,16.286,16.286,0,0,1,5.42-9.5l.32-.28h3.28Z"},"child":[]}]}]})(props);
};
function CiBandage (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bandage"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.435,7.5H6.565a4.5,4.5,0,0,0,0,9h10.87a4.5,4.5,0,0,0,0-9Zm-9.93,8h-.94a3.5,3.5,0,0,1,0-7h.94Zm8,0h-7v-7h7Zm1.93,0h-.93v-7h.93a3.5,3.5,0,0,1,0,7Z"},"child":[]},{"tag":"circle","attr":{"cx":"10.252","cy":"10.501","r":"0.625"},"child":[]},{"tag":"circle","attr":{"cx":"10.252","cy":"13.501","r":"0.625"},"child":[]},{"tag":"circle","attr":{"cx":"13.752","cy":"10.5","r":"0.625"},"child":[]},{"tag":"circle","attr":{"cx":"13.752","cy":"13.5","r":"0.625"},"child":[]}]}]}]})(props);
};
function CiBank (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bank"},"child":[{"tag":"path","attr":{"d":"M19.505,17.943V10.362a1.491,1.491,0,0,0,1.39-1.12,1.468,1.468,0,0,0-.7-1.68l-7.45-4.3a1.521,1.521,0,0,0-1.49,0l-7.45,4.3a1.468,1.468,0,0,0-.7,1.68,1.487,1.487,0,0,0,1.45,1.12h.13v7.57h-.12a1.5,1.5,0,0,0,0,3h14.87a1.5,1.5,0,0,0,.07-2.989ZM4.555,9.362a.505.505,0,0,1-.25-.94l7.45-4.289a.474.474,0,0,1,.49,0L19.7,8.422a.5.5,0,0,1-.25.94Zm13.95,1v7.57H14.9v-7.57Zm-4.61,0v7.57h-3.61v-7.57Zm-4.61,0v7.57h-3.6v-7.57Zm10.15,9.57H4.565a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h14.87a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.435,19.932Z"},"child":[]}]}]})(props);
};
function CiBarcode (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Barcode"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8.066,4.065H3.648a1.732,1.732,0,0,0-.963.189A1.368,1.368,0,0,0,2.066,5.48v4.585a.5.5,0,0,0,1,0V5.785a1.794,1.794,0,0,1,.014-.518c.077-.236.319-.2.514-.2H8.066a.5.5,0,0,0,0-1Z"},"child":[]},{"tag":"path","attr":{"d":"M2.063,13.937v4.418a1.733,1.733,0,0,0,.189.963,1.369,1.369,0,0,0,1.227.619H8.063a.5.5,0,0,0,0-1H3.783a1.831,1.831,0,0,1-.518-.014c-.236-.077-.2-.319-.2-.514V13.937a.5.5,0,0,0-1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M15.934,19.935h4.418a1.732,1.732,0,0,0,.963-.189,1.368,1.368,0,0,0,.619-1.226V13.935a.5.5,0,0,0-1,0v4.28a1.794,1.794,0,0,1-.014.518c-.077.236-.319.2-.514.2H15.934a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M21.937,10.063V5.645a1.733,1.733,0,0,0-.189-.963,1.369,1.369,0,0,0-1.227-.619H15.937a.5.5,0,0,0,0,1h4.28a1.831,1.831,0,0,1,.518.014c.236.077.2.319.2.514v4.472a.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"rect","attr":{"x":"10.999","y":"7.643","width":"1","height":"8.709","rx":"0.5"},"child":[]},{"tag":"rect","attr":{"x":"14.249","y":"7.643","width":"1","height":"8.709","rx":"0.5"},"child":[]},{"tag":"rect","attr":{"x":"16.499","y":"7.643","width":"1","height":"8.709","rx":"0.5"},"child":[]},{"tag":"rect","attr":{"x":"6.499","y":"7.643","width":"1","height":"8.709","rx":"0.5"},"child":[]},{"tag":"rect","attr":{"x":"8.499","y":"7.643","width":"1.5","height":"8.709","rx":"0.75"},"child":[]}]}]}]}]})(props);
};
function CiBaseball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Baseball_Ball"},"child":[{"tag":"path","attr":{"d":"M19.02,4.976A9.927,9.927,0,1,0,15.74,21.2,9.908,9.908,0,0,0,21.93,12,9.856,9.856,0,0,0,19.02,4.976Zm-13.34.71a8.9,8.9,0,0,1,6.04-2.61,8.461,8.461,0,0,1-.34,2.26l-.34-.19a.5.5,0,0,0-.5.86l.5.29a9.227,9.227,0,0,1-1.57,2.47l-.35-.35a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.34.34a8.875,8.875,0,0,1-2.47,1.58L6,10.536a.5.5,0,0,0-.68-.19.505.505,0,0,0-.18.69l.2.34a8.2,8.2,0,0,1-2.26.35A8.827,8.827,0,0,1,5.68,5.686ZM11.74,17a.5.5,0,1,0-.5.87l.49.29a10.008,10.008,0,0,0-.45,2.74,8.9,8.9,0,0,1-8.18-8.17,9.378,9.378,0,0,0,2.75-.46l.29.5a.5.5,0,0,0,.43.25.475.475,0,0,0,.25-.07.493.493,0,0,0,.18-.68l-.21-.36a9.461,9.461,0,0,0,2.68-1.73l.36.36a.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15.513.513,0,0,0,0-.71l-.36-.36A9.665,9.665,0,0,0,11.9,6.8l.37.21a.475.475,0,0,0,.25.07.511.511,0,0,0,.44-.25.494.494,0,0,0-.19-.68l-.51-.29a9.789,9.789,0,0,0,.46-2.76,8.924,8.924,0,0,1,8.18,8.18,10.08,10.08,0,0,0-2.74.46l-.28-.49a.505.505,0,0,0-.69-.18.491.491,0,0,0-.18.68l.2.35a9.684,9.684,0,0,0-2.68,1.73l-.35-.35a.5.5,0,0,0-.71,0,.5.5,0,0,0,0,.7l.36.36a9.2,9.2,0,0,0-1.73,2.67Zm6.58,1.32a8.851,8.851,0,0,1-6.04,2.6,8.388,8.388,0,0,1,.34-2.25l.35.2a.451.451,0,0,0,.25.07.5.5,0,0,0,.43-.25.505.505,0,0,0-.18-.69l-.51-.29a8.7,8.7,0,0,1,1.57-2.47l.36.36a.5.5,0,0,0,.7-.71l-.36-.36a9.124,9.124,0,0,1,2.48-1.57l.3.52a.5.5,0,0,0,.43.25.451.451,0,0,0,.25-.07.505.505,0,0,0,.19-.68l-.21-.36a8.449,8.449,0,0,1,2.25-.34,8.992,8.992,0,0,1-.66,3.14A9.172,9.172,0,0,1,18.32,18.316Z"},"child":[]}]}]})(props);
};
function CiBasketball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Basketball"},"child":[{"tag":"path","attr":{"d":"M19.02,4.971a9.941,9.941,0,1,0,0,14.05A9.941,9.941,0,0,0,19.02,4.971Zm-13.34.71a8.894,8.894,0,0,1,6.05-2.6,8.812,8.812,0,0,1-2.61,6.04,8.75,8.75,0,0,1-6.04,2.61A8.875,8.875,0,0,1,5.68,5.681ZM3.1,12.731a9.772,9.772,0,0,0,6.73-2.9,9.8,9.8,0,0,0,2.9-6.73,8.908,8.908,0,0,1,5.23,2.24L5.34,17.951A8.881,8.881,0,0,1,3.1,12.731Zm8.18,8.17a8.872,8.872,0,0,1-5.23-2.24L18.66,6.041a8.91,8.91,0,0,1,2.24,5.24,9.86,9.86,0,0,0-9.62,9.62Zm7.04-2.59a8.856,8.856,0,0,1-6.04,2.61,8.851,8.851,0,0,1,8.64-8.64A8.847,8.847,0,0,1,18.32,18.311Z"},"child":[]}]}]})(props);
};
function CiBatteryCharging (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Battery_Charging"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.752.752,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.752.752,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z"},"child":[]},{"tag":"path","attr":{"d":"M13.174,11.191H11.891a.11.11,0,0,1-.1-.15l.655-1.669a.251.251,0,0,0-.233-.342H9.274a.248.248,0,0,0-.231.157L8.292,11.04a.11.11,0,0,0,.1.151H9.829a.11.11,0,0,1,.1.144l-.776,3.53a.085.085,0,0,0,.139.081l3.947-3.561A.109.109,0,0,0,13.174,11.191Z"},"child":[]}]}]}]})(props);
};
function CiBatteryEmpty (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Battery_Empty"},"child":[{"tag":"path","attr":{"d":"M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.752.752,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.752.752,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z"},"child":[]}]}]})(props);
};
function CiBatteryFull (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Battery_Full"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.751.751,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.751.751,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z"},"child":[]},{"tag":"rect","attr":{"x":"4.063","y":"7.499","width":"13.437","height":"8.998","rx":"1"},"child":[]}]}]}]})(props);
};
function CiBeaker1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Beaker_1"},"child":[{"tag":"path","attr":{"d":"M19.447,18.645l-.51-1.52a17.9,17.9,0,0,0-4.02-6.66,1.493,1.493,0,0,1-.42-1.04V3.065H15a.5.5,0,0,0,0-1H9a.5.5,0,0,0,0,1h.5v6.36a1.484,1.484,0,0,1-.41,1.04,17.9,17.9,0,0,0-4.02,6.66l-.52,1.52a2.5,2.5,0,0,0,2.37,3.29h10.16a2.5,2.5,0,0,0,2.37-3.29Zm-9.64-7.49a2.477,2.477,0,0,0,.69-1.73V3.065h3v6.36a2.486,2.486,0,0,0,.7,1.73,16.907,16.907,0,0,1,3.01,4.38H6.787A16.943,16.943,0,0,1,9.807,11.155Zm8.49,9.16a1.507,1.507,0,0,1-1.22.62H6.917a1.5,1.5,0,0,1-1.42-1.98l.51-1.52q.15-.45.33-.9h11.32q.18.45.33.9l.51,1.52A1.5,1.5,0,0,1,18.3,20.315Z"},"child":[]}]}]})(props);
};
function CiBeerMugFull (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Beer_Mug_Full"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.356,9.63h-.97V7.99a2.938,2.938,0,0,0,.5-1.65,1.77,1.77,0,0,0-.01-.23,2.905,2.905,0,0,0-1.64-2.38,2.956,2.956,0,0,0-2.4-.07,3.278,3.278,0,0,0-5.62,0,2.9,2.9,0,0,0-1.68-.17,2.866,2.866,0,0,0-2.16,1.75,2.948,2.948,0,0,0,.3,2.77V19.43a2.5,2.5,0,0,0,2.5,2.5h7.71a2.5,2.5,0,0,0,2.5-2.5v-.99l.91-.36a2.433,2.433,0,0,0,1.54-2.27V11.1A1.481,1.481,0,0,0,18.356,9.63Zm-1.97,9.8a1.5,1.5,0,0,1-1.5,1.5H7.176a1.5,1.5,0,0,1-1.5-1.5V11.34a2.858,2.858,0,0,0,1.93.74c.13,0,.25-.01.37-.02V18.4a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.82a.17.17,0,0,0-.01-.07,2.939,2.939,0,0,0,1.57-2.46h4.42a2.86,2.86,0,0,0,1.43-.38Zm-.01-11.77a1.949,1.949,0,0,1-1.42.63h-4.61a.8.8,0,0,0-.79.61,1.231,1.231,0,0,0-.02.2,1.975,1.975,0,0,1-1.05,1.78,1.934,1.934,0,0,1-2.8-1.72,1.808,1.808,0,0,1,.17-.77.6.6,0,0,0-.13-.68,1.939,1.939,0,0,1-.41-2.11,1.868,1.868,0,0,1,1.4-1.13,2.531,2.531,0,0,1,.38-.03,1.909,1.909,0,0,1,.86.2.766.766,0,0,0,.59.06A.8.8,0,0,0,9,4.32a2.273,2.273,0,0,1,4.06,0,.751.751,0,0,0,.44.38.8.8,0,0,0,.59-.05,1.917,1.917,0,0,1,2.79,1.54A1.886,1.886,0,0,1,16.376,7.66Zm2.46,8.15a1.428,1.428,0,0,1-.92,1.34l-.52.22V10.63h.96a.478.478,0,0,1,.48.47Z"},"child":[]},{"tag":"path","attr":{"d":"M13.577,18.9a.5.5,0,0,1-.5-.5V11.82a.5.5,0,0,1,1,0V18.4A.5.5,0,0,1,13.577,18.9Z"},"child":[]}]}]}]})(props);
};
function CiBellOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bell_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M9.624,5.2c-.571.3-.079,1.124.5.864.509-.227,1.068-.287,1.115-.95.028-.41.014-.81.476-.993a.776.776,0,0,1,1.035.71c.048.461.035.821.548,1.024a4.811,4.811,0,0,1,2.812,2.432,5.63,5.63,0,0,1,.414,2.467v2.02a.5.5,0,0,0,1,0c0-1.646.185-3.394-.521-4.929a5.542,5.542,0,0,0-3.019-2.808c-.034-.013-.155-.069-.227-.092,0-.021,0-.044,0-.059a2.009,2.009,0,0,0-.257-.945,1.739,1.739,0,0,0-3.1.172,1.992,1.992,0,0,0-.153.792c0,.012,0,.033,0,.052C10.24,4.959,9.808,5.107,9.624,5.2Z"},"child":[]},{"tag":"path","attr":{"d":"M4.57,3.86c-.46-.46-1.17.25-.71.7C4.92,5.62,5.98,6.69,7.04,7.75a5.535,5.535,0,0,0-.57,2.44v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.12,2.12,0,0,0,1.15-.34l.99.99a.5.5,0,0,0,.71-.71ZM17.7,18.41a1.15,1.15,0,0,1-.41.08H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19A4.375,4.375,0,0,1,7.8,8.51Z"},"child":[]}]}]}]})(props);
};
function CiBellOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bell_On"},"child":[{"tag":"path","attr":{"d":"M18.79,15.34a2.087,2.087,0,0,0-1.26-.61V10.19a5.5,5.5,0,0,0-1.62-3.91,5.826,5.826,0,0,0-2.15-1.33V4.89a1.8,1.8,0,0,0-1.61-1.81,1.749,1.749,0,0,0-1.91,1.75v.12a5.547,5.547,0,0,0-3.77,5.24v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.121,2.121,0,0,0,2.12-2.12v-.53A2.1,2.1,0,0,0,18.79,15.34Zm-.38,2.03a1.118,1.118,0,0,1-1.12,1.12H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19a4.555,4.555,0,0,1,3.24-4.34.729.729,0,0,0,.53-.71V4.83a.735.735,0,0,1,.25-.56.744.744,0,0,1,.51-.2h.07a.807.807,0,0,1,.69.82v.25a.729.729,0,0,0,.53.71A4.668,4.668,0,0,1,15.2,6.99a4.468,4.468,0,0,1,1.33,3.2v4.76a.8.8,0,0,0,.22.55.773.773,0,0,0,.54.22,1.127,1.127,0,0,1,1.12,1.12Z"},"child":[]}]}]})(props);
};
function CiBezier (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bezier"},"child":[{"tag":"path","attr":{"d":"M20.435,8.005a1.5,1.5,0,1,0-1.41-2H13.5v-.25a.749.749,0,0,0-.75-.75h-1.5a.755.755,0,0,0-.75.75v.25H4.975a1.5,1.5,0,0,0-2.91.5,1.5,1.5,0,0,0,2.91.5h3.79c-2.5,1.61-4.23,5-4.47,8.99h-.28a.749.749,0,0,0-.75.75v1.5a.749.749,0,0,0,.75.75h1.5a.755.755,0,0,0,.75-.75v-1.5a.755.755,0,0,0-.75-.75h-.21c.27-4.22,2.38-7.78,5.19-8.73a.747.747,0,0,0,.75.74h1.5a.741.741,0,0,0,.75-.74c2.81.95,4.93,4.51,5.21,8.73h-.22a.749.749,0,0,0-.75.75v1.5a.749.749,0,0,0,.75.75h1.5a.755.755,0,0,0,.75-.75v-1.5a.755.755,0,0,0-.75-.75H19.7c-.24-3.99-1.97-7.38-4.46-8.99h3.78A1.5,1.5,0,0,0,20.435,8.005Zm0-2a.508.508,0,0,1,.5.5.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A.5.5,0,0,1,20.435,6.005Zm-16.87,1a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5A.5.5,0,0,1,3.565,7.005ZM5.265,18h-1V17h1ZM12.5,7.005h-1v-1h1ZM18.735,17h1v1h-1Z"},"child":[]}]}]})(props);
};
function CiBitcoin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bitcoin"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z"},"child":[]},{"tag":"path","attr":{"d":"M14.28,11.78A1.994,1.994,0,0,0,12.75,8.5H12.5V7.47A.489.489,0,0,0,12,7a.483.483,0,0,0-.5.47V8.5H10.25a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H11.5v1.03A.483.483,0,0,0,12,17a.489.489,0,0,0,.5-.47V15.5h.75a2.006,2.006,0,0,0,2-2A2.033,2.033,0,0,0,14.28,11.78ZM10.25,9.5h2.5a1,1,0,0,1,0,2h-2.5Zm3,5h-3v-2h3a1,1,0,0,1,0,2Z"},"child":[]}]}]}]})(props);
};
function CiBluetooth (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bluetooth"},"child":[{"tag":"path","attr":{"d":"M18.649,15.938,11.829,12l6.82-3.94a.984.984,0,0,0,.5-.87.968.968,0,0,0-.5-.861L12.029,2.5a.989.989,0,0,0-1,0,1,1,0,0,0-.5.87v7.769q-2.1-1.23-4.22-2.44c-.24-.139-.47-.279-.71-.409a.5.5,0,0,0-.51.86L10.039,12c-1.41.81-2.83,1.62-4.23,2.44-.24.129-.48.27-.72.41a.5.5,0,0,0,.51.86c1.65-.951,3.28-1.891,4.93-2.85v7.769a.993.993,0,0,0,.5.871.969.969,0,0,0,1,0l6.62-3.82a1.007,1.007,0,0,0,0-1.74Zm-7.12-12.57,6.62,3.82-6.62,3.83Zm0,17.259V12.988l6.62,3.82Z"},"child":[]}]}]})(props);
};
function CiBookmarkCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bookmark_Check"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.85,9.08c-.11.12-.23.23-.35.35-.83.83-1.65,1.65-2.47,2.48a.513.513,0,0,1-.71,0c-.47-.48-.94-.95-1.42-1.42a.5.5,0,0,1,.71-.71c.35.36.7.71,1.06,1.06.83-.82,1.65-1.65,2.48-2.47C14.6,7.91,15.31,8.62,14.85,9.08Z"},"child":[]}]}]}]})(props);
};
function CiBookmarkMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bookmark_Minus"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z"},"child":[]},{"tag":"path","attr":{"d":"M10,10.277a.5.5,0,0,1,0-1h4a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiBookmarkPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bookmark_Plus"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14,10.28H12.5v1.5a.5.5,0,0,1-1,0v-1.5H10a.5.5,0,0,1,0-1h1.5V7.78a.5.5,0,0,1,1,0v1.5H14A.5.5,0,0,1,14,10.28Z"},"child":[]}]}]}]})(props);
};
function CiBookmarkRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bookmark_Remove"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z"},"child":[]},{"tag":"path","attr":{"d":"M10.23,10.84a.5.5,0,0,0,.71.71L12,10.491,13.06,11.55a.523.523,0,0,0,.71,0,.513.513,0,0,0,0-.71L12.709,9.779,13.77,8.72a.5.5,0,0,0-.71-.71c-.35.35-.7.71-1.06,1.06L10.94,8.01a.5.5,0,0,0-.71,0,.524.524,0,0,0,0,.71c.35.35.71.7,1.06,1.06Z"},"child":[]}]}]}]})(props);
};
function CiBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bookmark"},"child":[{"tag":"path","attr":{"d":"M17.6,21.945a1.483,1.483,0,0,1-1.01-.4l-4.251-3.9a.5.5,0,0,0-.68,0L7.409,21.545a1.5,1.5,0,0,1-2.516-1.1V4.57a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.442a1.481,1.481,0,0,1-.9,1.374A1.507,1.507,0,0,1,17.6,21.945ZM12,16.51a1.5,1.5,0,0,1,1.018.395l4.251,3.9a.5.5,0,0,0,.839-.368V4.57a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.442a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.51Z"},"child":[]}]}]})(props);
};
function CiBowlNoodles (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bowl_Noodles"},"child":[{"tag":"path","attr":{"d":"M19.5,10.705a.948.948,0,0,0-.92-.67h-5.07V8.355l4.75.17h.02a.734.734,0,0,0,.73-.73.718.718,0,0,0-.75-.72l-4.75.17V5.405l4.78-.67a.723.723,0,0,0,.62-.72.487.487,0,0,0-.01-.12.716.716,0,0,0-.87-.58l-4.6.98a1.5,1.5,0,0,0-2.92.47v.15l-1.14.24a1.494,1.494,0,0,0-2.86.61v.01l-1.2.25a.267.267,0,0,0-.2.26v.04a.257.257,0,0,0,.29.21l1.11-.15V7.5l-1.25.04a.263.263,0,0,0-.25.26.256.256,0,0,0,.25.26l1.25.04v1.94H5.425a.963.963,0,0,0-.92.68,10.119,10.119,0,0,0,1.19,8.53l.61.92a1.233,1.233,0,0,0,1.05.57h9.3a1.228,1.228,0,0,0,1.04-.57l.61-.92A10.136,10.136,0,0,0,19.5,10.705Zm-7.99-5.94a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v5.24h-1Zm-2,1.2,1-.14v1.53l-1,.03Zm0,2.25,1,.03v1.79h-1Zm-2-2.45a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v4.24h-1Zm9.96,12.93-.6.93a.261.261,0,0,1-.21.11h-9.3a.236.236,0,0,1-.21-.11l-.61-.93a9.229,9.229,0,0,1-1.11-7.66l13.12-.03A9.122,9.122,0,0,1,17.465,18.7Z"},"child":[]}]}]})(props);
};
function CiBoxList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Box_List"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"path","attr":{"d":"M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"path","attr":{"d":"M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"path","attr":{"d":"M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiBoxes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Boxes"},"child":[{"tag":"path","attr":{"d":"M19.435,11.5h-2.72V4.56a1.5,1.5,0,0,0-1.5-1.5H8.785a1.5,1.5,0,0,0-1.5,1.5V11.5H4.565a1.5,1.5,0,0,0-1.5,1.5v6.44a1.5,1.5,0,0,0,1.5,1.5H11a1.468,1.468,0,0,0,1-.39,1.487,1.487,0,0,0,1,.39h6.44a1.5,1.5,0,0,0,1.5-1.5V13A1.5,1.5,0,0,0,19.435,11.5ZM11.5,19.44a.5.5,0,0,1-.5.5H4.565a.5.5,0,0,1-.5-.5V13a.5.5,0,0,1,.5-.5h1.97v2a.5.5,0,0,0,.5.5h1.5a.508.508,0,0,0,.5-.5v-2H11.5ZM8.285,11.5V4.56a.5.5,0,0,1,.5-.5h1.96v2a.5.5,0,0,0,.5.5h1.5a.5.5,0,0,0,.5-.5v-2h1.97a.5.5,0,0,1,.5.5V11.5Zm11.65,7.94a.508.508,0,0,1-.5.5H13a.508.508,0,0,1-.5-.5V12.5h2.47v2a.5.5,0,0,0,.5.5h1.5a.5.5,0,0,0,.5-.5v-2h1.97a.5.5,0,0,1,.5.5Z"},"child":[]}]}]})(props);
};
function CiBrightnessDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Brightness_Down"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"2.813","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"21.187","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"21.187","cy":"12","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"2.813","cy":"12","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"18.496","cy":"5.504","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"5.504","cy":"18.496","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"18.496","cy":"18.496","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"5.504","cy":"5.504","r":"0.75"},"child":[]}]}]}]})(props);
};
function CiBrightnessUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Brightness_Up"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"3.063","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"20.937","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"20.937","cy":"12","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"3.063","cy":"12","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"18.319","cy":"5.681","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"5.681","cy":"18.319","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"18.319","cy":"18.319","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"5.681","cy":"5.681","r":"1"},"child":[]}]}]}]})(props);
};
function CiBullhorn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Bullhorn"},"child":[{"tag":"path","attr":{"d":"M4.5,16.474c-0.849,-0.4 -1.436,-1.263 -1.436,-2.264l-0,-4.419c-0,-1.38 1.118,-2.5 2.5,-2.5l4.343,0c0.793,0 1.581,-0.132 2.33,-0.392c1.859,-0.705 3.792,-1.727 5.24,-2.922l0.869,-0.718c0.015,-0.013 0.032,-0.025 0.049,-0.036c0.666,-0.424 1.538,0.054 1.538,0.844l0,6.717c0.572,0.11 1.004,0.613 1.004,1.217c-0,0.604 -0.432,1.106 -1.004,1.216l-0,6.718c-0,0.787 -0.872,1.267 -1.538,0.843c-0.017,-0.011 -0.034,-0.023 -0.05,-0.036l-0.868,-0.718c-1.446,-1.195 -3.364,-2.214 -5.226,-2.891c-0.748,-0.261 -1.536,-0.394 -2.328,-0.394c-0.609,-0.029 -1.265,-0.029 -1.265,-0.029l0,2.147c0,1.148 -0.931,2.079 -2.079,2.079c-1.148,-0 -2.079,-0.931 -2.079,-2.079l0,-2.383Zm1,0.236l0,2.147c0,0.596 0.483,1.079 1.079,1.079c0.596,-0 1.079,-0.483 1.079,-1.079c0,-0 0,-2.147 0,-2.147l-2.094,-0c-0.031,-0 -0.053,-0 -0.064,-0Zm6,-0.882l0.142,0.04c2.37,0.664 4.575,1.817 6.473,3.385l0.818,0.677l-0,-15.859l-0.82,0.677c-1.897,1.566 -4.1,2.717 -6.468,3.379l-0.145,0.041l-0,7.66Zm-2.842,-0.118l1.842,0l-0,-7.419l-4.936,0c-0.829,0 -1.5,0.672 -1.5,1.5l-0,4.419c-0,0.829 0.671,1.5 1.499,1.5l3.095,0Z"},"child":[]}]}]})(props);
};
function CiBurger (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Burger"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.325,11.015a7.344,7.344,0,0,0-14.66,0,2.014,2.014,0,0,0-1.6,1.96v.16a2.016,2.016,0,0,0,1.64,1.97l.27,2.45a2.593,2.593,0,0,0,2.59,2.32h8.87a2.593,2.593,0,0,0,2.59-2.32l.27-2.45a2.016,2.016,0,0,0,1.64-1.97v-.16A2,2,0,0,0,19.325,11.015ZM12,5.125a6.365,6.365,0,0,1,6.34,5.85H5.665A6.362,6.362,0,0,1,12,5.125Zm6.04,12.32a1.6,1.6,0,0,1-1.6,1.43H7.565a1.6,1.6,0,0,1-1.6-1.43l-.26-2.31H18.3Zm1.9-4.31a1,1,0,0,1-1,1H5.065a1,1,0,0,1-1-1v-.16a1,1,0,0,1,1-1h13.87a1,1,0,0,1,1,1Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"6.622","r":"0.5"},"child":[]},{"tag":"circle","attr":{"cx":"8.323","cy":"8.323","r":"0.5"},"child":[]},{"tag":"circle","attr":{"cx":"15.676","cy":"8.323","r":"0.5"},"child":[]}]}]}]})(props);
};
function CiCalculator1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Calculator_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16.5,21.937h-9a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5h9a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,16.5,21.937ZM7.5,3.063A1.5,1.5,0,0,0,6,4.563V19.437a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,9.757h-5A1.5,1.5,0,0,1,8,8.257V6.563a1.5,1.5,0,0,1,1.5-1.5h5a1.5,1.5,0,0,1,1.5,1.5V8.257A1.5,1.5,0,0,1,14.5,9.757Zm-5-3.694a.5.5,0,0,0-.5.5V8.257a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V6.563a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"12","cy":"11.508","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"15.25","cy":"11.508","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"8.75","cy":"11.508","r":"0.75"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"12","cy":"14.848","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"15.25","cy":"14.848","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"8.75","cy":"14.848","r":"0.75"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"15.25","cy":"18.187","r":"0.75"},"child":[]},{"tag":"path","attr":{"d":"M12.248,18.687H8.5a.5.5,0,0,1,0-1h3.744a.5.5,0,1,1,0,1Z"},"child":[]}]}]}]}]})(props);
};
function CiCalculator2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Calculator_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.45,7.83h-2.8v2.81a.5.5,0,0,1-1,0V7.83H13.84a.5.5,0,0,1,0-1h2.81V4.02a.5.5,0,0,1,1,0V6.83h2.8A.5.5,0,0,1,20.45,7.83Z"},"child":[]},{"tag":"path","attr":{"d":"M3.545,7.83a.5.5,0,0,1,0-1h6.619a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13.836,16.05a.5.5,0,0,1,0-1h6.619a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M13.836,20.191a.5.5,0,0,1,0-1h6.619a.5.5,0,0,1,0,1Z"},"child":[]}]},{"tag":"path","attr":{"d":"M9.55,19.61a.5.5,0,0,1-.71.7L6.86,18.33c-.66.65-1.33,1.32-1.99,1.98a.5.5,0,0,1-.71-.7l1.99-1.99L4.16,15.63a.5.5,0,0,1,.71-.7l.58.58,1.4,1.4c.67-.66,1.33-1.32,1.99-1.98a.5.5,0,0,1,.71.7L7.56,17.62Z"},"child":[]}]}]}]})(props);
};
function CiCalendarDate (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Calendar_Date"},"child":[{"tag":"path","attr":{"d":"M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41\n            c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87\n            c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565\n            c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59\n            c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59\n            h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z"},"child":[]},{"tag":"path","attr":{"d":"M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392\n            c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626\n            c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z"},"child":[]}]}]})(props);
};
function CiCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Calendar"},"child":[{"tag":"path","attr":{"d":"M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5\n            c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372\n            c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11\n            c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5\n            c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592\n            h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5\n            c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954\n            H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"},"child":[]}]}]})(props);
};
function CiCamera (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Camera"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.435,19.925H3.565a1.5,1.5,0,0,1-1.5-1.5V9.285a1.5,1.5,0,0,1,1.5-1.5H6.223a.5.5,0,0,0,.5-.454l.166-1.8a1.49,1.49,0,0,1,1.5-1.454h7.23a1.5,1.5,0,0,1,1.5,1.5l.164,1.756a.5.5,0,0,0,.5.454h2.658a1.5,1.5,0,0,1,1.5,1.5v9.14A1.5,1.5,0,0,1,20.435,19.925ZM3.565,8.785a.5.5,0,0,0-.5.5v9.14a.5.5,0,0,0,.5.5h16.87a.5.5,0,0,0,.5-.5V9.285a.5.5,0,0,0-.5-.5H17.777a1.5,1.5,0,0,1-1.494-1.362l-.166-1.8a.515.515,0,0,0-.5-.546H8.385a.5.5,0,0,0-.5.5L7.717,7.423A1.5,1.5,0,0,1,6.223,8.785Z"},"child":[]},{"tag":"path","attr":{"d":"M12,17.282a4,4,0,1,1,4-4A4,4,0,0,1,12,17.282Zm0-7a3,3,0,1,0,3,3A3,3,0,0,0,12,10.282Z"},"child":[]}]}]}]})(props);
};
function CiChat1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Chat_1"},"child":[{"tag":"path","attr":{"d":"M3.316,19.937A1.251,1.251,0,0,1,2.065,18.69l0-1.716L2.068,6.56a2.5,2.5,0,0,1,2.5-2.5H19.44a2.5,2.5,0,0,1,2.5,2.5v8.41a2.5,2.5,0,0,1-2.5,2.5H6.918a1.49,1.49,0,0,0-1.06.439L4.2,19.57A1.246,1.246,0,0,1,3.316,19.937ZM4.568,5.062a1.5,1.5,0,0,0-1.5,1.5L3.06,16.973l0,1.714a.25.25,0,0,0,.427.176L5.151,17.2a2.482,2.482,0,0,1,1.767-.732H19.44a1.5,1.5,0,0,0,1.5-1.5V6.562a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]})(props);
};
function CiChat2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Chat_2"},"child":[{"tag":"path","attr":{"d":"M12,19.937a1.243,1.243,0,0,1-.833-.319L9.281,17.932a1.531,1.531,0,0,0-1.08-.458H4.561a2.5,2.5,0,0,1-2.5-2.5l.006-8.41a2.5,2.5,0,0,1,2.5-2.5H19.439a2.5,2.5,0,0,1,2.5,2.5v8.411a2.5,2.5,0,0,1-2.5,2.5H15.79a1.483,1.483,0,0,0-1.062.441l-1.895,1.7A1.243,1.243,0,0,1,12,19.937ZM4.567,5.063a1.5,1.5,0,0,0-1.5,1.5l-.006,8.411a1.5,1.5,0,0,0,1.5,1.5H8.2a2.483,2.483,0,0,1,1.767.732l1.864,1.667a.248.248,0,0,0,.333,0l1.874-1.682a2.5,2.5,0,0,1,1.751-.716h3.649a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]})(props);
};
function CiCircleAlert (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Alert"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.5,9a.5.5,0,0,0-1,0h0V13.02a.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"15.001","r":"0.5"},"child":[]}]},{"tag":"path","attr":{"d":"M12,21.935A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.935ZM12,3.069A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.069Z"},"child":[]}]}]}]})(props);
};
function CiCircleCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Check"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z"},"child":[]},{"tag":"path","attr":{"d":"M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z"},"child":[]}]}]}]})(props);
};
function CiCircleChevDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Chev_Down"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.35,13.85a.492.492,0,0,1-.7,0l-3-3a.495.495,0,0,1,.7-.7L12,12.79l2.65-2.64a.495.495,0,0,1,.7.7Z"},"child":[]},{"tag":"path","attr":{"d":"M21.933,12A9.933,9.933,0,1,1,12,2.067,9.944,9.944,0,0,1,21.933,12ZM3.067,12A8.933,8.933,0,1,0,12,3.067,8.943,8.943,0,0,0,3.067,12Z"},"child":[]}]}]}]})(props);
};
function CiCircleChevLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Chev_Left"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.15,12.35a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7L11.21,12l2.64,2.65a.495.495,0,0,1-.7.7Z"},"child":[]},{"tag":"path","attr":{"d":"M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"},"child":[]}]}]}]})(props);
};
function CiCircleChevRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Chev_Right"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13.85,11.65a.492.492,0,0,1,0,.7l-3,3a.495.495,0,0,1-.7-.7L12.79,12,10.15,9.35a.495.495,0,0,1,.7-.7Z"},"child":[]},{"tag":"path","attr":{"d":"M12,2.067A9.933,9.933,0,1,1,2.067,12,9.944,9.944,0,0,1,12,2.067Zm0,18.866A8.933,8.933,0,1,0,3.067,12,8.943,8.943,0,0,0,12,20.933Z"},"child":[]}]}]}]})(props);
};
function CiCircleChevUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Chev_Up"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.65,10.15a.492.492,0,0,1,.7,0l3,3a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7Z"},"child":[]},{"tag":"path","attr":{"d":"M2.067,12A9.933,9.933,0,1,1,12,21.934,9.944,9.944,0,0,1,2.067,12Zm18.866,0A8.933,8.933,0,1,0,12,20.934,8.943,8.943,0,0,0,20.933,12Z"},"child":[]}]}]}]})(props);
};
function CiCircleInfo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Info"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"8.999","r":"0.5"},"child":[]}]},{"tag":"path","attr":{"d":"M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z"},"child":[]}]}]}]})(props);
};
function CiCircleList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_List"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M5.562,8.062a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,8.062Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,4.062Z"},"child":[]},{"tag":"path","attr":{"d":"M5.562,14.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,14.5Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,10.5Z"},"child":[]},{"tag":"path","attr":{"d":"M5.562,20.938a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,20.938Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,16.938Z"},"child":[]}]}]}]})(props);
};
function CiCircleMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Minus"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15,11.5h0a.5.5,0,0,1,0,1H9a.5.5,0,0,1,0-1Z"},"child":[]},{"tag":"path","attr":{"d":"M12,21.934A9.933,9.933,0,1,1,21.932,12,9.945,9.945,0,0,1,12,21.934ZM12,3.068A8.933,8.933,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.068Z"},"child":[]}]}]}]})(props);
};
function CiCircleMore (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_More"},"child":[{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"12.001","cy":"12","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"16.001","cy":"12","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"8.001","cy":"12","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M12,21.932A9.934,9.934,0,1,1,21.934,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.065Z"},"child":[]}]}]}]})(props);
};
function CiCirclePlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Plus"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"},"child":[]}]}]}]})(props);
};
function CiCircleQuestion (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Question"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.411,12.459a1.547,1.547,0,0,1,.341-.6,2.644,2.644,0,0,1,.535-.417,2.2,2.2,0,0,0,.363-.286,1.2,1.2,0,0,0,.256-.363A1.084,1.084,0,0,0,13,10.341a.923.923,0,0,0-.142-.517.938.938,0,0,0-.374-.338,1.123,1.123,0,0,0-.519-.119,1.173,1.173,0,0,0-.495.107.934.934,0,0,0-.389.335.884.884,0,0,0-.111.224.516.516,0,0,1-.483.359h0a.506.506,0,0,1-.479-.675,1.661,1.661,0,0,1,.178-.349,1.8,1.8,0,0,1,.748-.634,2.437,2.437,0,0,1,1.031-.215,2.4,2.4,0,0,1,1.082.231,1.737,1.737,0,0,1,.721.641,1.772,1.772,0,0,1,.257.96,1.841,1.841,0,0,1-.118.678,1.685,1.685,0,0,1-.334.536,2.289,2.289,0,0,1-.52.417,2.277,2.277,0,0,0-.462.369,1.113,1.113,0,0,0-.256.455,2.344,2.344,0,0,0-.045.283.487.487,0,0,1-.483.429h0a.484.484,0,0,1-.483-.531A2.931,2.931,0,0,1,11.411,12.459Z"},"child":[]},{"tag":"circle","attr":{"cx":"11.793","cy":"14.891","r":"0.587"},"child":[]}]},{"tag":"path","attr":{"d":"M12,21.931A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.931ZM12,3.064A8.934,8.934,0,1,0,20.934,12,8.943,8.943,0,0,0,12,3.064Z"},"child":[]}]}]}]})(props);
};
function CiCircleRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Circle_Remove"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M9.525,13.765a.5.5,0,0,0,.71.71c.59-.59,1.175-1.18,1.765-1.76l1.765,1.76a.5.5,0,0,0,.71-.71c-.59-.58-1.18-1.175-1.76-1.765.41-.42.82-.825,1.23-1.235.18-.18.35-.36.53-.53a.5.5,0,0,0-.71-.71L12,11.293,10.235,9.525a.5.5,0,0,0-.71.71L11.293,12Z"},"child":[]},{"tag":"path","attr":{"d":"M12,21.933A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.067Z"},"child":[]}]}]}]})(props);
};
function CiClock1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Clock_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"},"child":[]},{"tag":"path","attr":{"d":"M11.5,6a.5.5,0,0,1,1,0v4.8c1.13-1.13,2.26-2.27,3.39-3.4a.5.5,0,0,1,.71.71l-4.26,4.25a.463.463,0,0,1-.58.07c-.01-.02-.02-.02-.03-.02a.425.425,0,0,1-.22-.33Z"},"child":[]}]}]}]})(props);
};
function CiClock2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Clock_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"},"child":[]},{"tag":"path","attr":{"d":"M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"},"child":[]}]}]}]})(props);
};
function CiCloudDrizzle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud_Drizzle"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.605,16.787v1.018a.5.5,0,0,0,1,0V16.787a.516.516,0,0,0-.146-.354.5.5,0,0,0-.854.354Z"},"child":[]},{"tag":"path","attr":{"d":"M11.5,16.787v1.018a.516.516,0,0,0,.146.353.5.5,0,0,0,.854-.353V16.787a.521.521,0,0,0-.146-.354.5.5,0,0,0-.854.354Z"},"child":[]},{"tag":"path","attr":{"d":"M14.552,20.343v1.018a.5.5,0,0,0,1,0V20.343a.516.516,0,0,0-.146-.354.5.5,0,0,0-.854.354Z"},"child":[]},{"tag":"path","attr":{"d":"M8.446,20.343v1.018a.5.5,0,0,0,1,0V20.343a.521.521,0,0,0-.146-.354.5.5,0,0,0-.854.354Z"},"child":[]},{"tag":"path","attr":{"d":"M5.393,16.787v1.018a.5.5,0,0,0,1,0V16.787a.521.521,0,0,0-.146-.354.5.5,0,0,0-.854.354Z"},"child":[]},{"tag":"path","attr":{"d":"M16.1,14.228h-5.99A6.116,6.116,0,0,1,3.916,8.474h0A6.044,6.044,0,0,1,9.953,2.139a6.07,6.07,0,0,1,5.8,4.366,3.919,3.919,0,0,1,3.288,1.2,3.85,3.85,0,0,1,1.038,2.908A3.946,3.946,0,0,1,16.1,14.228ZM4.915,8.427a5.117,5.117,0,0,0,5.194,4.8H16.1a2.944,2.944,0,0,0,2.986-2.682,2.873,2.873,0,0,0-3.494-3l-.2.046-.25-.124a.592.592,0,0,1-.262-.377A5.061,5.061,0,0,0,9.953,3.139,5.043,5.043,0,0,0,4.915,8.427Z"},"child":[]}]}]}]})(props);
};
function CiCloudMoon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud_Moon"},"child":[{"tag":"path","attr":{"d":"M21.36,11.54a.71.71,0,0,0-.73-.29,5.278,5.278,0,0,1-6.34-4.78,5.379,5.379,0,0,1,.37-2.42.729.729,0,0,0-.15-.78.7.7,0,0,0-.76-.16A6.317,6.317,0,0,0,9.77,8.99a5.494,5.494,0,0,0-1.22-.13A6.039,6.039,0,0,0,2.5,14.89c0,.1.01.2.01.3A6.114,6.114,0,0,0,8.7,20.94h5.99a3.941,3.941,0,0,0,3.98-3.61,3.755,3.755,0,0,0-.63-2.38A6.283,6.283,0,0,0,21.4,12.3.682.682,0,0,0,21.36,11.54Zm-6.67,8.4H8.7a5.121,5.121,0,0,1-5.19-4.8A5.042,5.042,0,0,1,8.55,9.86a5.059,5.059,0,0,1,4.92,3.95.548.548,0,0,0,.26.37l.25.13.2-.05a2.873,2.873,0,0,1,3.49,3A2.931,2.931,0,0,1,14.69,19.94Zm2.61-5.83a3.917,3.917,0,0,0-2.95-.89A6.043,6.043,0,0,0,10.78,9.3a5.338,5.338,0,0,1,2.73-4.98,6.325,6.325,0,0,0,4.51,7.85,6.642,6.642,0,0,0,2.12.17A5.2,5.2,0,0,1,17.3,14.11Z"},"child":[]}]}]})(props);
};
function CiCloudOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.8,16.577c-.41.49-1.12-.22-.7-.71a3.585,3.585,0,0,0,.37-4.04A3.266,3.266,0,0,0,16.6,10.3a.5.5,0,0,1-.56-.23,5.391,5.391,0,0,0-5.3-3.1c-.64.04-.64-.96,0-1a6.346,6.346,0,0,1,5.99,3.26,4.255,4.255,0,0,1,4.6,2.1A4.579,4.579,0,0,1,20.8,16.577Z"},"child":[]},{"tag":"path","attr":{"d":"M4.941,4.237a.5.5,0,0,0-.7.7l2.69,2.69a6.273,6.273,0,0,0-1.94,3.78,3.342,3.342,0,0,0-2.65,4.6,3.518,3.518,0,0,0,3.48,2.05h11.53c.58.57,1.14,1.14,1.71,1.71a.5.5,0,0,0,.71-.71Zm.3,12.81a2.352,2.352,0,0,1-2.16-2.25,2.309,2.309,0,0,1,2.35-2.42.515.515,0,0,0,.5-.5,5.377,5.377,0,0,1,1.71-3.54q4.35,4.365,8.71,8.72Z"},"child":[]}]}]}]})(props);
};
function CiCloudOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud_On"},"child":[{"tag":"path","attr":{"d":"M21.917,13.484a4.381,4.381,0,0,0-5.19-4.26,6.281,6.281,0,0,0-11.75,2.19,3.237,3.237,0,0,0-2.66,2,3.433,3.433,0,0,0,.82,3.74c1.12,1.03,2.54.89,3.94.89h10.15a4.514,4.514,0,0,0,4.69-4.32Zm-4.65,3.56c-1.19.01-2.38,0-3.56,0-2.75,0-5.49.06-8.23,0a2.383,2.383,0,0,1-2.33-1.73,2.333,2.333,0,0,1,2.28-2.94.515.515,0,0,0,.5-.5,5.3,5.3,0,0,1,10.11-1.81.5.5,0,0,0,.56.23,3.366,3.366,0,0,1,4.33,3.32A3.489,3.489,0,0,1,17.267,17.044Z"},"child":[]}]}]})(props);
};
function CiCloudRainbow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud_Rainbow"},"child":[{"tag":"path","attr":{"d":"M21.8,6.648a8.6,8.6,0,0,0-12.78.82,6.329,6.329,0,0,0-.761-.05,6.212,6.212,0,0,0-6.2,6.2c0,.1.01.2.01.3a6.277,6.277,0,0,0,6.351,5.89h6.159a4.04,4.04,0,0,0,4.081-3.7,3.916,3.916,0,0,0-1.07-2.97,3.98,3.98,0,0,0-3.37-1.23,5.582,5.582,0,0,0-.38-.97,2.617,2.617,0,0,1,3.75-.08c.46.45,1.169-.26.71-.71a3.66,3.66,0,0,0-2.77-1.05,3.594,3.594,0,0,0-2.2.96,6.746,6.746,0,0,0-1.02-1.12,5.131,5.131,0,0,1,7.031.17c.46.45,1.169-.26.71-.71a6.134,6.134,0,0,0-4.51-1.77,5.982,5.982,0,0,0-4.031,1.73,5.632,5.632,0,0,0-1.409-.65,7.615,7.615,0,0,1,10.99-.35C21.546,7.808,22.255,7.1,21.8,6.648Zm-10.56,2.71a.712.712,0,0,0,.11.08,5.238,5.238,0,0,1,1.979,3.06.6.6,0,0,0,.271.37l.25.13.2-.05a2.977,2.977,0,0,1,3.61,3.1,3.037,3.037,0,0,1-3.081,2.76H8.416a5.27,5.27,0,0,1-5.351-4.94,5.2,5.2,0,0,1,8.171-4.51Z"},"child":[]}]}]})(props);
};
function CiCloudSun (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud_Sun"},"child":[{"tag":"path","attr":{"d":"M21.465,9.47l-1.9-1.05.58-2.16a.968.968,0,0,0-.25-.93.957.957,0,0,0-.93-.24l-2.09.6-1.13-1.94a.988.988,0,0,0-.83-.47.967.967,0,0,0-.82.48l-1.06,1.91-2.16-.58a.951.951,0,0,0-.92.24.962.962,0,0,0-.25.93l.6,2.1-.77.44A6.3,6.3,0,0,0,8.1,8.63a6.039,6.039,0,0,0-6.04,6.03c0,.1.01.2.01.3a6.115,6.115,0,0,0,6.19,5.76h5.98a3.952,3.952,0,0,0,3.99-3.62,3.876,3.876,0,0,0-.35-1.88l1.1.3a1.007,1.007,0,0,0,.25.03.907.907,0,0,0,.67-.28.95.95,0,0,0,.25-.92l-.6-2.1,1.93-1.12a.956.956,0,0,0,.47-.83A.945.945,0,0,0,21.465,9.47Zm-7.73,4.57a2.873,2.873,0,0,1,3.49,3,2.947,2.947,0,0,1-2.99,2.68H8.255a5.307,5.307,0,0,1-3.6-1.39,4.935,4.935,0,0,1-1.6-3.41A5.043,5.043,0,0,1,8.1,9.63a5.109,5.109,0,0,1,4.09,2.09,5.932,5.932,0,0,1,.4.65,4.974,4.974,0,0,1,.43,1.21A.64.64,0,0,0,13.735,14.04Zm-.92-3.73a2.106,2.106,0,0,1,4.133-.578,2.114,2.114,0,0,1-2.033,2.688A2.241,2.241,0,0,1,12.815,10.31Zm4.12,3.64a3.9,3.9,0,0,0-1.08-.67,3.11,3.11,0,1,0-4.01-3.34,6.475,6.475,0,0,0-1.09-.69l.06-.03a.978.978,0,0,0,.44-1.07l-.64-2.1,2.17.58a.981.981,0,0,0,1.07-.44l1.03-1.93,1.12,1.92a.952.952,0,0,0,1.08.45L19.175,6l-.57,2.14a.922.922,0,0,0,.44,1.09l1.92,1.04-1.92,1.11a.941.941,0,0,0-.45,1.08l.63,2.09Z"},"child":[]}]}]})(props);
};
function CiCloud (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Cloud"},"child":[{"tag":"path","attr":{"d":"M17.1,19.4H9.646a7.492,7.492,0,0,1-7.588-7.046h0A7.4,7.4,0,0,1,9.452,4.6a7.434,7.434,0,0,1,7.136,5.447,4.731,4.731,0,0,1,4.092,1.441,4.664,4.664,0,0,1,1.26,3.529A4.789,4.789,0,0,1,17.1,19.4ZM3.057,12.309A6.493,6.493,0,0,0,9.646,18.4H17.1a3.787,3.787,0,0,0,3.839-3.453,3.7,3.7,0,0,0-4.5-3.86l-.2.046-.269-.127a.617.617,0,0,1-.273-.392A6.422,6.422,0,0,0,9.452,5.6a6.4,6.4,0,0,0-6.395,6.711Z"},"child":[]}]}]})(props);
};
function CiCoffeeBean (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Coffee_Bean"},"child":[{"tag":"path","attr":{"d":"M19.151,4.868a6.744,6.744,0,0,0-5.96-1.69,12.009,12.009,0,0,0-6.54,3.47,11.988,11.988,0,0,0-3.48,6.55,6.744,6.744,0,0,0,1.69,5.95,6.406,6.406,0,0,0,4.63,1.78,11.511,11.511,0,0,0,7.87-3.56C21.3,13.428,22.1,7.818,19.151,4.868Zm-14.99,8.48a11.041,11.041,0,0,1,3.19-5.99,10.976,10.976,0,0,1,5.99-3.19,8.016,8.016,0,0,1,1.18-.09,5.412,5.412,0,0,1,3.92,1.49.689.689,0,0,1,.11.13,6.542,6.542,0,0,1-2.12,1.23,7.666,7.666,0,0,0-2.96,1.93,7.666,7.666,0,0,0-1.93,2.96,6.589,6.589,0,0,1-1.71,2.63,6.7,6.7,0,0,1-2.63,1.71,7.478,7.478,0,0,0-2.35,1.36A6.18,6.18,0,0,1,4.161,13.348Zm12.49,3.31c-3.55,3.55-8.52,4.35-11.08,1.79a1.538,1.538,0,0,1-.12-.13,6.677,6.677,0,0,1,2.13-1.23,7.862,7.862,0,0,0,2.96-1.93,7.738,7.738,0,0,0,1.93-2.96,6.589,6.589,0,0,1,1.71-2.63,6.589,6.589,0,0,1,2.63-1.71,7.6,7.6,0,0,0,2.34-1.37C20.791,9.2,19.821,13.488,16.651,16.658Z"},"child":[]}]}]})(props);
};
function CiCoffeeCup (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Coffee_Cup"},"child":[{"tag":"path","attr":{"d":"M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"},"child":[]}]}]})(props);
};
function CiCoinInsert (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Coin_Insert"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.44,17.7H17.77a7.484,7.484,0,0,0,1.78-4.86A7.55,7.55,0,1,0,6.23,17.7H2.56a.508.508,0,0,0-.5.5.5.5,0,0,0,.5.5H21.44a.5.5,0,0,0,.5-.5A.508.508,0,0,0,21.44,17.7Zm-5.03,0H7.62a6.546,6.546,0,1,1,8.78-.01Z"},"child":[]},{"tag":"path","attr":{"d":"M14,13.965a1.616,1.616,0,0,1-1.5,1.61v.65a.485.485,0,0,1-.5.48.491.491,0,0,1-.5-.48v-.64h-.81a.5.5,0,0,1-.5-.5.508.508,0,0,1,.5-.5h1.69a.617.617,0,0,0,.62-.62.623.623,0,0,0-.62-.62h-.75a1.618,1.618,0,0,1-.13-3.23v-.65a.491.491,0,0,1,.5-.48.485.485,0,0,1,.5.48v.64h.81a.5.5,0,0,1,0,1H11.63a.62.62,0,0,0,0,1.24h.75A1.626,1.626,0,0,1,14,13.965Z"},"child":[]}]}]}]})(props);
};
function CiCoins1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Coins_1"},"child":[{"tag":"path","attr":{"d":"M18.46,10.905a3.469,3.469,0,0,0-2.47,1.04,2.3,2.3,0,0,0-.86-1.73,2.257,2.257,0,0,0,.86-1.78,2.288,2.288,0,0,0-2.28-2.29H4.35a2.284,2.284,0,0,0-1.43,4.07,2.282,2.282,0,0,0,0,3.57,2.277,2.277,0,0,0,1.43,4.06h9.36a2.29,2.29,0,0,0,2.06-1.29,3.434,3.434,0,0,0,2.69,1.3,3.475,3.475,0,1,0,0-6.95Zm-4.75,5.94H4.35a1.28,1.28,0,1,1,0-2.56h9.36a1.28,1.28,0,1,1,0,2.56Zm0-3.56H4.35a1.285,1.285,0,1,1,0-2.57h9.36a1.285,1.285,0,0,1,0,2.57Zm0-3.57H4.35a1.285,1.285,0,1,1,0-2.57h9.36a1.285,1.285,0,0,1,0,2.57Zm4.75,7.14a2.475,2.475,0,1,1,2.48-2.48A2.477,2.477,0,0,1,18.46,16.855Z"},"child":[]}]}]})(props);
};
function CiCompass1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Compass_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M4.661,20.937a1.589,1.589,0,0,1-1.117-.48,1.534,1.534,0,0,1-.4-1.59L6.58,8.937A3.8,3.8,0,0,1,8.938,6.58l9.93-3.439a1.537,1.537,0,0,1,1.589.4,1.532,1.532,0,0,1,.4,1.588L17.42,15.061a3.8,3.8,0,0,1-2.358,2.358l-9.93,3.439A1.442,1.442,0,0,1,4.661,20.937ZM19.337,4.062a.424.424,0,0,0-.142.024L9.267,7.525A2.8,2.8,0,0,0,7.525,9.266L4.087,19.2a.6.6,0,0,0,.717.718l9.93-3.439a2.8,2.8,0,0,0,1.741-1.741L19.913,4.8a.551.551,0,0,0-.163-.553A.609.609,0,0,0,19.337,4.062Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1.563"},"child":[]}]}]}]})(props);
};
function CiCreditCard1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Credit_Card_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.44,5.14H4.56a2.5,2.5,0,0,0-2.5,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5H19.44a2.5,2.5,0,0,0,2.5-2.5V7.64A2.5,2.5,0,0,0,19.44,5.14ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5v.5H3.06Zm17.88,8.72a1.5,1.5,0,0,1-1.5,1.5H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H20.94Z"},"child":[]},{"tag":"path","attr":{"d":"M8.063,14.247h-3a.5.5,0,1,1,0-1h3a.5.5,0,1,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M18.934,14.25h-6.5a.5.5,0,1,1,0-1h6.5a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiCreditCard2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Credit_Card_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.437,18.859H4.563a2.5,2.5,0,0,1-2.5-2.5V7.641a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8.718A2.5,2.5,0,0,1,19.437,18.859ZM4.563,6.141a1.5,1.5,0,0,0-1.5,1.5v8.718a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V7.641a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M8.063,14.247h-3a.5.5,0,1,1,0-1h3a.5.5,0,1,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M18.934,14.249h-6.5a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"rect","attr":{"x":"16.434","y":"7.14","width":"2","height":"4","rx":"0.5","transform":"translate(8.293 26.574) rotate(-90)"},"child":[]}]}]}]})(props);
};
function CiCreditCardOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Credit_Card_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.94,7.64v9.3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.64H13.49a.75.75,0,0,1,0-1.5h7.45v-.5a1.5,1.5,0,0,0-1.5-1.5H9.89a.5.5,0,0,1,0-1h9.55A2.5,2.5,0,0,1,21.94,7.64Z"},"child":[]},{"tag":"path","attr":{"d":"M8.064,14.246h-3a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M18.935,14.248h-.944a.5.5,0,0,1,0-1h.944a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M18.76,18.05,4.01,3.3c-.46-.46-1.17.25-.71.7L4.44,5.14a2.5,2.5,0,0,0-2.38,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5h13.6L20,20.7c.45.46,1.16-.25.7-.71ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5h.88c.66.67,1.33,1.34,2,2H3.06Zm9.49,5.61h-.12a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.12l3.61,3.61H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H8.94Z"},"child":[]}]}]}]})(props);
};
function CiCrop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Crop"},"child":[{"tag":"path","attr":{"d":"M5.624,6.623l-2.075,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l2.075,-0l0,-2.073c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,2.073l9.191,-0c1.414,-0 2.561,1.147 2.561,2.561l-0,9.193l2.075,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-2.075,0l-0,2.073c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,-0 -0.5,-0.224 -0.5,-0.5l-0,-2.073l-9.191,0c-1.414,0 -2.561,-1.147 -2.561,-2.561l0,-9.193Zm11.752,10.754l-0,-9.193c-0,-0.862 -0.699,-1.561 -1.561,-1.561l-9.191,-0l0,9.193c0,0.862 0.699,1.561 1.561,1.561l9.191,0Z"},"child":[]}]}]})(props);
};
function CiDark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Dark"},"child":[{"tag":"path","attr":{"d":"M12.741,20.917a9.389,9.389,0,0,1-1.395-.105,9.141,9.141,0,0,1-1.465-17.7,1.177,1.177,0,0,1,1.21.281,1.273,1.273,0,0,1,.325,1.293,8.112,8.112,0,0,0-.353,2.68,8.266,8.266,0,0,0,4.366,6.857,7.628,7.628,0,0,0,3.711.993,1.242,1.242,0,0,1,.994,1.963h0A9.148,9.148,0,0,1,12.741,20.917ZM10.261,4.05a.211.211,0,0,0-.065.011,8.137,8.137,0,1,0,9.131,12.526h0a.224.224,0,0,0,.013-.235.232.232,0,0,0-.206-.136A8.619,8.619,0,0,1,14.946,15.1a9.274,9.274,0,0,1-4.883-7.7,9.123,9.123,0,0,1,.4-3.008.286.286,0,0,0-.069-.285A.184.184,0,0,0,10.261,4.05Z"},"child":[]}]}]})(props);
};
function CiDatabase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Database"},"child":[{"tag":"path","attr":{"d":"M12,2.06c-3.53,0-6.18,1.23-6.18,2.86V19.08c0,1.63,2.65,2.86,6.18,2.86s6.18-1.23,6.18-2.86V4.92C18.18,3.29,15.52,2.06,12,2.06Zm5.18,17.02c0,.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V15.96A9.349,9.349,0,0,0,12,17.22a9.373,9.373,0,0,0,5.18-1.26Zm0-4.72c0,.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V11.24A9.349,9.349,0,0,0,12,12.5a9.373,9.373,0,0,0,5.18-1.26Zm0-4.72c0,.78-1.97,1.86-5.18,1.86S6.82,10.42,6.82,9.64V6.52A9.349,9.349,0,0,0,12,7.78a9.373,9.373,0,0,0,5.18-1.26ZM12,6.78c-3.21,0-5.18-1.08-5.18-1.86S8.79,3.06,12,3.06s5.18,1.08,5.18,1.86S15.21,6.78,12,6.78Z"},"child":[]}]}]})(props);
};
function CiDeliveryTruck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Delivery_Truck"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"},"child":[]},{"tag":"path","attr":{"d":"M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiDesktopMouse1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Desktop_Mouse_1"},"child":[{"tag":"path","attr":{"d":"M13.435,2.065h-2.87a6.5,6.5,0,0,0-6.5,6.5v6.87a6.5,6.5,0,0,0,6.5,6.5h2.87a6.5,6.5,0,0,0,6.5-6.5V8.565A6.5,6.5,0,0,0,13.435,2.065Zm-8.37,6.5a5.51,5.51,0,0,1,5.5-5.5h.94v6.44H5.065Zm13.87,6.87a5.5,5.5,0,0,1-5.5,5.5h-2.87a5.5,5.5,0,0,1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43V3.065h.93a5.5,5.5,0,0,1,5.5,5.5Z"},"child":[]}]}]})(props);
};
function CiDesktopMouse2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Desktop_Mouse_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13.437,21.938H10.563a6.508,6.508,0,0,1-6.5-6.5V8.562a6.508,6.508,0,0,1,6.5-6.5h2.874a6.508,6.508,0,0,1,6.5,6.5v6.876A6.508,6.508,0,0,1,13.437,21.938ZM10.563,3.062a5.506,5.506,0,0,0-5.5,5.5v6.876a5.506,5.506,0,0,0,5.5,5.5h2.874a5.506,5.506,0,0,0,5.5-5.5V8.562a5.506,5.506,0,0,0-5.5-5.5Z"},"child":[]},{"tag":"path","attr":{"d":"M11.5,6.541v4a.5.5,0,0,0,1,0v-4a.5.5,0,0,0-1,0Z"},"child":[]}]}]}]})(props);
};
function CiDesktop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Desktop"},"child":[{"tag":"path","attr":{"d":"M18.435,3.065H5.565a2.5,2.5,0,0,0-2.5,2.5v8.87a2.5,2.5,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.5,2.5,0,0,0,2.5-2.5V5.565A2.5,2.5,0,0,0,18.435,3.065Zm-9.33,16.87.38-3h5.03l.37,3Zm10.83-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.5h15.87Zm0-1.5H4.065V5.565a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiDiscount1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Discount_1"},"child":[{"tag":"path","attr":{"d":"M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-10.531,-1.762c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.396,-0.396 -0.396,-1.04 -0,-1.436c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436Zm4.471,-1.838c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 -0,0.707l-6.493,6.493c-0.195,0.195 -0.512,0.195 -0.707,0c-0.195,-0.195 -0.195,-0.512 -0,-0.707l6.493,-6.493Zm-1.315,5.363c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.397,-0.396 -0.397,-1.04 -0,-1.436Z"},"child":[]}]}]})(props);
};
function CiDollar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Dollar"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01a.5.5,0,0,1-1,0V15.5H10.25a.5.5,0,0,1,0-1H12.5a1,1,0,0,0,0-2h-1a2,2,0,0,1,0-4V7.49a.5.5,0,0,1,1,0V8.5h1.25a.5.5,0,0,1,0,1H11.5a1,1,0,0,0,0,2h1A2.006,2.006,0,0,1,14.5,13.5Z"},"child":[]}]}]}]})(props);
};
function CiDroplet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Droplet"},"child":[{"tag":"path","attr":{"d":"M12,21.936A7.27,7.27,0,0,1,7.656,20.5c-2.332-1.724-3.187-5.6-1.868-8.46l4.875-9.173A1.515,1.515,0,0,1,12,2.064h0a1.512,1.512,0,0,1,1.337.805L18.2,12.017c1.331,2.888.475,6.762-1.856,8.485A7.274,7.274,0,0,1,12,21.936ZM12,3.064a.51.51,0,0,0-.456.274L6.683,12.485c-1.1,2.4-.376,5.777,1.568,7.212a6.4,6.4,0,0,0,7.5,0c1.942-1.435,2.668-4.817,1.554-7.237l-4.85-9.122A.507.507,0,0,0,12,3.064Z"},"child":[]}]}]})(props);
};
function CiDumbbell (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Dumbbell"},"child":[{"tag":"path","attr":{"d":"M21.435,11.5h-.38V8.12a1.626,1.626,0,0,0-1.62-1.62h-.63V6.12a1.625,1.625,0,0,0-3.25,0V11.5H8.445V6.12a1.625,1.625,0,0,0-3.25,0V6.5h-.63a1.62,1.62,0,0,0-1.62,1.62V11.5h-.38a.5.5,0,1,0,0,1h.38v3.37a1.622,1.622,0,0,0,1.62,1.63H5.2v.37a1.625,1.625,0,1,0,3.25,0V12.5h7.11v5.37a1.625,1.625,0,1,0,3.25,0V17.5h.63a1.628,1.628,0,0,0,1.62-1.63V12.5h.38a.5.5,0,1,0,0-1ZM5.2,16.5h-.63a.625.625,0,0,1-.62-.63V8.12a.623.623,0,0,1,.62-.62H5.2Zm2.25,1.37a.634.634,0,0,1-.63.63.625.625,0,0,1-.62-.63V6.12a.623.623,0,0,1,.62-.62.632.632,0,0,1,.63.62Zm10.36,0a.625.625,0,1,1-1.25,0V6.12a.625.625,0,0,1,1.25,0Zm2.25-2a.625.625,0,0,1-.62.63h-.63v-9h.63a.623.623,0,0,1,.62.62Z"},"child":[]}]}]})(props);
};
function CiEdit (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Edit"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z"},"child":[]}]}]}]})(props);
};
function CiEraser (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Eraser"},"child":[{"tag":"path","attr":{"d":"M20.454,19.028h-7.01l6.62-6.63a2.935,2.935,0,0,0,.87-2.09,2.844,2.844,0,0,0-.87-2.05l-3.42-3.44a2.93,2.93,0,0,0-4.13.01L3.934,13.4a2.946,2.946,0,0,0,0,4.14l1.48,1.49H3.554a.5.5,0,0,0,0,1h16.9A.5.5,0,0,0,20.454,19.028Zm-7.24-13.5a1.956,1.956,0,0,1,2.73,0l3.42,3.44a1.868,1.868,0,0,1,.57,1.35,1.93,1.93,0,0,1-.57,1.37l-5.64,5.64-6.15-6.16Zm-1.19,13.5h-5.2l-2.18-2.2a1.931,1.931,0,0,1,0-2.72l2.23-2.23,6.15,6.15Z"},"child":[]}]}]})(props);
};
function CiExport (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Export"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12.337,3.176a.455.455,0,0,0-.311-.138c-.015,0-.028,0-.043-.006s-.027,0-.041.006a.457.457,0,0,0-.312.138L7.961,6.845a.5.5,0,0,0,.707.707l2.816-2.815V15.479a.5.5,0,0,0,1,0V4.737L15.3,7.552a.5.5,0,0,0,.707-.707Z"},"child":[]}]}]}]})(props);
};
function CiFaceFrown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Face_Frown"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z"},"child":[]},{"tag":"path","attr":{"d":"M17.206,16.481a6.033,6.033,0,0,0-10.412,0,.5.5,0,0,0,.863.5,5.033,5.033,0,0,1,8.685,0,.5.5,0,0,0,.864-.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"9","cy":"9.011","r":"1.25"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"9.011","r":"1.25"},"child":[]}]}]}]})(props);
};
function CiFaceMeh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Face_Meh"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z"},"child":[]},{"tag":"circle","attr":{"cx":"9.001","cy":"8.99","r":"1.25"},"child":[]},{"tag":"circle","attr":{"cx":"15.001","cy":"8.99","r":"1.25"},"child":[]},{"tag":"path","attr":{"d":"M8.438,15.939h7.125a.5.5,0,0,0,0-1H8.438a.5.5,0,0,0,0,1Z"},"child":[]}]}]}]})(props);
};
function CiFaceSmile (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Face_Smile"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z"},"child":[]},{"tag":"path","attr":{"d":"M16.693,13.744a5.041,5.041,0,0,1-9.387,0c-.249-.59-1.111-.081-.863.505a6.026,6.026,0,0,0,11.114,0c.247-.586-.614-1.1-.864-.505Z"},"child":[]},{"tag":"circle","attr":{"cx":"9","cy":"9.011","r":"1.25"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"9.011","r":"1.25"},"child":[]}]}]}]})(props);
};
function CiFacebook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Facebook"},"child":[{"tag":"path","attr":{"d":"M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z"},"child":[]}]}]})(props);
};
function CiFileOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"File_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z"},"child":[]},{"tag":"path","attr":{"d":"M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z"},"child":[]}]}]}]})(props);
};
function CiFileOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"File_On"},"child":[{"tag":"path","attr":{"d":"M19.485,7.35l-4.97-4.86a1.466,1.466,0,0,0-1.05-.43h-6.9a2.5,2.5,0,0,0-2.5,2.5V19.44a2.507,2.507,0,0,0,2.5,2.5h10.87a2.507,2.507,0,0,0,2.5-2.5V8.42A1.49,1.49,0,0,0,19.485,7.35Zm-1.27.15h-2.34a1.5,1.5,0,0,1-1.5-1.5V3.75Zm.72,11.94a1.5,1.5,0,0,1-1.5,1.5H6.565a1.5,1.5,0,0,1-1.5-1.5V4.56a1.5,1.5,0,0,1,1.5-1.5h6.81V6a2.5,2.5,0,0,0,2.5,2.5h3.06Z"},"child":[]}]}]})(props);
};
function CiFilter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Filter"},"child":[{"tag":"path","attr":{"d":"M14.037,20.937a1.015,1.015,0,0,1-.518-.145l-3.334-2a2.551,2.551,0,0,1-1.233-2.176V12.091a1.526,1.526,0,0,0-.284-.891L4.013,4.658a1.01,1.01,0,0,1,.822-1.6h14.33a1.009,1.009,0,0,1,.822,1.6h0L15.332,11.2a1.527,1.527,0,0,0-.285.891v7.834a1.013,1.013,0,0,1-1.01,1.012ZM4.835,4.063,9.482,10.62a2.515,2.515,0,0,1,.47,1.471v4.524a1.543,1.543,0,0,0,.747,1.318l3.334,2,.014-7.843a2.516,2.516,0,0,1,.471-1.471l4.654-6.542,0,0Z"},"child":[]}]}]})(props);
};
function CiFlag1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Flag_1"},"child":[{"tag":"path","attr":{"d":"M20.565,3.18a.809.809,0,0,0-.81-.02l-1.13.56c-1.63.87-3.82.83-6.5-.13a9.141,9.141,0,0,0-7.3.52l-.76.41V3.56a.5.5,0,0,0-1,0V20.44a.5.5,0,0,0,1,0V15.9a.836.836,0,0,0,.2-.08l1.03-.55a8.163,8.163,0,0,1,6.5-.46c2.95,1.06,5.41,1.08,7.3.07l1.44-.72a.759.759,0,0,0,.4-.66V3.82A.751.751,0,0,0,20.565,3.18Zm-.63,10.16-1.31.66c-1.63.87-3.82.83-6.5-.13a9.141,9.141,0,0,0-7.3.52l-.76.4V5.65L5.3,4.99a8.122,8.122,0,0,1,6.5-.46c2.95,1.06,5.41,1.08,7.29.08l.85-.43Z"},"child":[]}]}]})(props);
};
function CiFloppyDisk (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Floppy_Disk"},"child":[{"tag":"path","attr":{"d":"M20.015,7.015l-4.15-3.39a2.54,2.54,0,0,0-1.58-.56H4.565a1.5,1.5,0,0,0-1.5,1.5v14.87a1.5,1.5,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V8.955A2.507,2.507,0,0,0,20.015,7.015ZM6.565,4.065h5.75v1.37a.5.5,0,0,1-.5.5H7.065a.5.5,0,0,1-.5-.5Zm0,15.87v-5.93a1.5,1.5,0,0,1,1.5-1.5h7.87a1.5,1.5,0,0,1,1.5,1.5v5.93Zm13.37-.5a.5.5,0,0,1-.5.5h-1v-5.93a2.507,2.507,0,0,0-2.5-2.5H8.065a2.5,2.5,0,0,0-2.5,2.5v5.93h-1a.5.5,0,0,1-.5-.5V4.565a.5.5,0,0,1,.5-.5h1v1.37a1.5,1.5,0,0,0,1.5,1.5h4.75a1.5,1.5,0,0,0,1.5-1.5V4.065h.97a1.514,1.514,0,0,1,.95.34l4.14,3.38a1.483,1.483,0,0,1,.56,1.17Z"},"child":[]}]}]})(props);
};
function CiFolderOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Folder_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M4.013,3.3a.5.5,0,0,0-.711.71l.25.25A2.438,2.438,0,0,0,2.062,6.5v11a2.453,2.453,0,0,0,2.451,2.44h14.72l.759.76c.461.46,1.171-.25.711-.7Zm.5,15.64A1.45,1.45,0,0,1,3.062,17.5V6.5a1.444,1.444,0,0,1,1.31-1.43C5.893,6.6,7.432,8.14,8.963,9.66q4.485,4.485,8.96,8.97l.31.31Z"},"child":[]},{"tag":"path","attr":{"d":"M21.438,17.693a.5.5,0,0,1-.5-.5V9.175a1.445,1.445,0,0,0-1.445-1.444H12.827a1.5,1.5,0,0,1-1.474-1.225l-.05-.267a1.445,1.445,0,0,0-1.42-1.178H8.8a.5.5,0,0,1,0-1H9.883a2.446,2.446,0,0,1,2.4,1.994l.05.268a.5.5,0,0,0,.491.408h6.666a2.448,2.448,0,0,1,2.445,2.444v8.018A.5.5,0,0,1,21.438,17.693Z"},"child":[]}]}]}]})(props);
};
function CiFolderOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Folder_On"},"child":[{"tag":"path","attr":{"d":"M19.435,19.94H4.565a2.5,2.5,0,0,1-2.5-2.5V6.56a2.5,2.5,0,0,1,2.5-2.5h5.27A2.5,2.5,0,0,1,12.292,6.1l.042.222a.5.5,0,0,0,.491.408h6.61a2.5,2.5,0,0,1,2.5,2.5v8.21A2.5,2.5,0,0,1,19.435,19.94ZM4.565,5.06a1.5,1.5,0,0,0-1.5,1.5V17.44a1.5,1.5,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V9.23a1.5,1.5,0,0,0-1.5-1.5h-6.61a1.5,1.5,0,0,1-1.474-1.225l-.042-.221A1.5,1.5,0,0,0,9.835,5.06Z"},"child":[]}]}]})(props);
};
function CiFootball (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Football"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.278,4.757a1.64,1.64,0,0,0-1.03-1.04,12.248,12.248,0,0,0-15.53,15.53,1.64,1.64,0,0,0,1.04,1.03,12.306,12.306,0,0,0,3.95.66,12.262,12.262,0,0,0,11.57-16.18Zm-15.2,14.58a.725.725,0,0,1-.42-.42,11.379,11.379,0,0,1-.58-4.26l5.26,5.26A11.352,11.352,0,0,1,5.078,19.337Zm11.56-2.71a11.179,11.179,0,0,1-6.03,3.14l-6.38-6.38a11.083,11.083,0,0,1,3.14-6.02,11.193,11.193,0,0,1,6.03-3.15l6.38,6.38A11.245,11.245,0,0,1,16.638,16.627Zm3.29-7.3-5.26-5.26c.21,0,.41-.01.62-.01a11.154,11.154,0,0,1,3.63.61.682.682,0,0,1,.42.41A11.543,11.543,0,0,1,19.928,9.327Z"},"child":[]},{"tag":"path","attr":{"d":"M10.4,15.257a.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15.5.5,0,0,0,0-.7l-.48-.48L12,12.707l.48.48a.518.518,0,0,0,.35.14.543.543,0,0,0,.36-.14.513.513,0,0,0,0-.71l-.48-.48,1.37-1.37.48.48a.5.5,0,0,0,.7-.71L13.6,8.737a.5.5,0,0,0-.71,0,.5.5,0,0,0,0,.7l.49.49L12,11.3l-.48-.48a.495.495,0,1,0-.7.7l.48.48-1.37,1.38-.49-.49a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71Z"},"child":[]}]}]}]})(props);
};
function CiForkAndKnife (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Fork_Knife"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.83,2.25a6.469,6.469,0,0,0-4.37,6.12v3.15a1.784,1.784,0,0,0,1.78,1.78h2.7v8.14a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V2.56a.508.508,0,0,0-.5-.5.467.467,0,0,0-.17.03ZM16.24,12.3a.781.781,0,0,1-.78-.78V8.37a5.482,5.482,0,0,1,3.48-5.1V12.3Z"},"child":[]},{"tag":"path","attr":{"d":"M11.44,2.07a.5.5,0,0,0-.5.5V7.55H8.5V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V7.55H5.06V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V9.05a2.507,2.507,0,0,0,2.5,2.5H7.5v9.89a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.55h.94a2.5,2.5,0,0,0,2.5-2.5V2.57A.5.5,0,0,0,11.44,2.07Zm-.5,6.98a1.5,1.5,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5v-.5h5.88Z"},"child":[]}]}]}]})(props);
};
function CiFries (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Fries"},"child":[{"tag":"path","attr":{"d":"M19.51,9.535a1.091,1.091,0,0,0-.81-.36H17.67a.5.5,0,0,0-.17.02V4.815a1.5,1.5,0,0,0-1.5-1.5h-.5a1.3,1.3,0,0,0-.52.1,1.474,1.474,0,0,0-1.48-1.35H13a1.5,1.5,0,0,0-1.5,1.5v1.59a1.386,1.386,0,0,0-.5-.09h-.5a1.348,1.348,0,0,0-.5.09v-.34a1.5,1.5,0,0,0-1.5-1.5H8a1.5,1.5,0,0,0-1.5,1.5V9.2a.5.5,0,0,0-.17-.02H5.3a1.1,1.1,0,0,0-1.08,1.2l.85,8.98a2.84,2.84,0,0,0,2.84,2.58h8.18a2.84,2.84,0,0,0,2.84-2.58l.85-8.98A1.112,1.112,0,0,0,19.51,9.535ZM15,4.815a.5.5,0,0,1,.5-.5H16a.5.5,0,0,1,.5.5v6.14h.01A2.915,2.915,0,0,1,15,13.015Zm-2.5,8.53V3.565a.5.5,0,0,1,.5-.5h.5a.5.5,0,0,1,.5.5v9.76Zm-2.5-.02V6.565a.5.5,0,0,1,.5-.5H11a.5.5,0,0,1,.5.5v6.78ZM7.5,4.815a.5.5,0,0,1,.5-.5h.5a.5.5,0,0,1,.5.5v8.2a2.877,2.877,0,0,1-1.5-2.06Zm11.29,5.391-.85,9.049a1.85,1.85,0,0,1-1.85,1.68H7.91a1.84,1.84,0,0,1-1.84-1.68l-.86-9.08H6.33a.1.1,0,0,1,.09.08l.05.56a3.891,3.891,0,0,0,3.88,3.53h3.3a3.884,3.884,0,0,0,3.88-3.53l.05-.56a.106.106,0,0,1,.09-.08Z"},"child":[]}]}]})(props);
};
function CiGift (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Gift"},"child":[{"tag":"path","attr":{"d":"M19.435,5.568h-2.38a1.979,1.979,0,0,0-.51-1.92,2.022,2.022,0,0,0-2.83,0L12,5.367l-1.71-1.719a2,2,0,0,0-2.83,0,1.979,1.979,0,0,0-.51,1.92H4.565a1.5,1.5,0,0,0-1.5,1.5v1A1.487,1.487,0,0,0,4,9.448v8.99a2.507,2.507,0,0,0,2.5,2.5h11a2.5,2.5,0,0,0,2.5-2.5V9.458a1.509,1.509,0,0,0,.94-1.39v-1A1.5,1.5,0,0,0,19.435,5.568ZM8.165,4.357a1,1,0,0,1,1.41,0l1.21,1.211H8.015A.989.989,0,0,1,8.165,4.357ZM11,19.938H6.5a1.5,1.5,0,0,1-1.5-1.5V9.568h6Zm0-11.37H4.565a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H11Zm3.43-4.211A1,1,0,0,1,16,5.568h-2.78ZM19,18.438a1.5,1.5,0,0,1-1.5,1.5H13V9.568h6Zm.94-10.37a.5.5,0,0,1-.5.5H13v-2h6.44a.5.5,0,0,1,.5.5Z"},"child":[]}]}]})(props);
};
function CiGlass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Glass"},"child":[{"tag":"path","attr":{"d":"M18.279,2.54a1.475,1.475,0,0,0-1.1-.48H6.819a1.47,1.47,0,0,0-1.09.48,1.5,1.5,0,0,0-.41,1.12L6.379,19.6a2.51,2.51,0,0,0,2.49,2.34h6.26a2.519,2.519,0,0,0,2.5-2.34l1.05-15.94A1.5,1.5,0,0,0,18.279,2.54Zm-1.65,16.99a1.508,1.508,0,0,1-1.5,1.41H8.869a1.506,1.506,0,0,1-1.49-1.41l-.64-9.62a2.981,2.981,0,0,0,1.17-.49,1.828,1.828,0,0,1,1.18-.39,1.858,1.858,0,0,1,1.19.39,3.025,3.025,0,0,0,3.45,0,1.879,1.879,0,0,1,1.19-.39,1.828,1.828,0,0,1,1.18.39,3,3,0,0,0,1.16.49Zm.7-10.62a2.317,2.317,0,0,1-.69-.33,2.98,2.98,0,0,0-3.45,0,1.885,1.885,0,0,1-1.18.38,1.939,1.939,0,0,1-1.19-.38,2.818,2.818,0,0,0-1.73-.55,2.809,2.809,0,0,0-1.72.55,2.374,2.374,0,0,1-.7.33l-.35-5.32a.468.468,0,0,1,.14-.37.484.484,0,0,1,.36-.16h10.36a.523.523,0,0,1,.37.16.46.46,0,0,1,.13.37Z"},"child":[]}]}]})(props);
};
function CiGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Globe"},"child":[{"tag":"path","attr":{"d":"M14.645,2.428a8.1,8.1,0,0,0-1.61-.3,9.332,9.332,0,0,0-3.6.28l-.07.02a9.928,9.928,0,0,0,.01,19.15,9.091,9.091,0,0,0,2.36.34,1.274,1.274,0,0,0,.27.02,9.65,9.65,0,0,0,2.63-.36,9.931,9.931,0,0,0,.01-19.15Zm-.27.96a8.943,8.943,0,0,1,5.84,5.11h-4.26a13.778,13.778,0,0,0-2.74-5.35A8.254,8.254,0,0,1,14.375,3.388Zm-2.37-.09a12.78,12.78,0,0,1,2.91,5.2H9.075A12.545,12.545,0,0,1,12.005,3.3Zm3.16,6.2a13.193,13.193,0,0,1,0,5.01H8.845a12.185,12.185,0,0,1-.25-2.5,12.353,12.353,0,0,1,.25-2.51Zm-5.6-6.09.07-.02a9.152,9.152,0,0,1,1.16-.23A13.618,13.618,0,0,0,8.045,8.5H3.8A9,9,0,0,1,9.565,3.408Zm-6.5,8.6a8.71,8.71,0,0,1,.37-2.51h4.39a13.95,13.95,0,0,0-.23,2.51,13.757,13.757,0,0,0,.23,2.5H3.435A8.591,8.591,0,0,1,3.065,12.008Zm6.57,8.61a8.9,8.9,0,0,1-5.84-5.11h4.24a13.632,13.632,0,0,0,2.77,5.35A8.1,8.1,0,0,1,9.635,20.618Zm-.56-5.11h5.84a12.638,12.638,0,0,1-2.91,5.21A12.872,12.872,0,0,1,9.075,15.508Zm5.3,5.11a11.551,11.551,0,0,1-1.17.24,13.8,13.8,0,0,0,2.75-5.35h4.26A8.924,8.924,0,0,1,14.375,20.618Zm1.8-6.11a13.611,13.611,0,0,0,0-5.01h4.39a8.379,8.379,0,0,1,.37,2.51,8.687,8.687,0,0,1-.36,2.5Z"},"child":[]}]}]})(props);
};
function CiGps (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"GPS"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,14.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Zm0-4A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5Z"},"child":[]},{"tag":"path","attr":{"d":"M21.435,11.505h-1.46a7.98,7.98,0,0,0-7.48-7.48V2.565a.508.508,0,0,0-.5-.5.515.515,0,0,0-.5.5v1.46a8,8,0,0,0-7.48,7.48H2.565a.5.5,0,1,0,0,1h1.45a8.012,8.012,0,0,0,7.48,7.48v1.45a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5v-1.45a8,8,0,0,0,7.48-7.48h1.46a.5.5,0,0,0,0-1ZM12,19.005a7,7,0,1,1,7-7A7.021,7.021,0,0,1,12,19.005Z"},"child":[]}]}]}]})(props);
};
function CiGrid2H (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Grid__2-H"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,11H5.565a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.437,11ZM5.565,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M18.437,20.936H5.565a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5v2.934A2.5,2.5,0,0,1,18.437,20.936ZM5.565,14a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiGrid2V (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Grid_2-V"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.436,20.937H15.5a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5h2.933a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM15.5,4.065a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5h2.933a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M8.5,20.937H5.564a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,8.5,20.937ZM5.564,4.065a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiGrid31 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Grid_3-1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.434,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5h5.871a2.5,2.5,0,0,1,2.5,2.5v2.933A2.5,2.5,0,0,1,11.434,20.936ZM5.563,14a1.5,1.5,0,0,0-1.5,1.5v2.933a1.5,1.5,0,0,0,1.5,1.5h5.871a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M18.435,20.936a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,5,0v2.934A2.5,2.5,0,0,1,18.435,20.936Zm0-6.934a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,3,0V15.5A1.5,1.5,0,0,0,18.435,14Z"},"child":[]}]},{"tag":"path","attr":{"d":"M18.435,11H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.435a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.435,11ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H18.435a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiGrid32 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Grid_3-2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,11H12.566a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5h5.871a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.437,11ZM12.566,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5h5.871a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M5.565,11a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,1,1,5,0V8.5A2.5,2.5,0,0,1,5.565,11Zm0-6.934a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,3,0V5.564A1.5,1.5,0,0,0,5.565,4.064Z"},"child":[]}]},{"tag":"path","attr":{"d":"M18.437,20.936H5.565a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5v2.934A2.5,2.5,0,0,1,18.437,20.936ZM5.565,14a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiGrid41 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Grid_4-1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8.5,11H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,8.5,11ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H8.5A1.5,1.5,0,0,0,10,8.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M18.436,11H15.5A2.5,2.5,0,0,1,13,8.5V5.564a2.5,2.5,0,0,1,2.5-2.5h2.934a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.436,11ZM15.5,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5A1.5,1.5,0,0,0,15.5,10h2.934a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M8.5,20.936H5.564a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H8.5A2.5,2.5,0,0,1,11,15.5v2.936A2.5,2.5,0,0,1,8.5,20.936ZM5.564,14a1.5,1.5,0,0,0-1.5,1.5v2.936a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V15.5A1.5,1.5,0,0,0,8.5,14Z"},"child":[]},{"tag":"path","attr":{"d":"M18.436,20.936H15.5a2.5,2.5,0,0,1-2.5-2.5V15.5A2.5,2.5,0,0,1,15.5,13h2.934a2.5,2.5,0,0,1,2.5,2.5v2.936A2.5,2.5,0,0,1,18.436,20.936ZM15.5,14A1.5,1.5,0,0,0,14,15.5v2.936a1.5,1.5,0,0,0,1.5,1.5h2.934a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiGrid42 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Grid_4-2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8.5,13.933H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,8.5,13.933ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M8.5,20.935H5.564a2.5,2.5,0,0,1,0-5H8.5a2.5,2.5,0,1,1,0,5Zm-2.934-4a1.5,1.5,0,0,0,0,3H8.5a1.5,1.5,0,1,0,0-3Z"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.436,20.935H15.5a2.5,2.5,0,0,1-2.5-2.5v-5.87a2.5,2.5,0,0,1,2.5-2.5h2.934a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,18.436,20.935ZM15.5,11.065a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5h2.934a1.5,1.5,0,0,0,1.5-1.5v-5.87a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M18.436,8.063H15.5a2.5,2.5,0,0,1,0-5h2.934a2.5,2.5,0,0,1,0,5Zm-2.934-4a1.5,1.5,0,0,0,0,3h2.934a1.5,1.5,0,0,0,0-3Z"},"child":[]}]}]}]}]})(props);
};
function CiHardDrive (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Hard_Drive"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.905,14.325l-1.83-10.04a1.507,1.507,0,0,0-1.47-1.22H6.405A1.493,1.493,0,0,0,4.925,4.3l-1.84,10.03a2.452,2.452,0,0,0-.02.27v4.84a1.5,1.5,0,0,0,1.5,1.5h14.87a1.511,1.511,0,0,0,1.5-1.5V14.6A1.241,1.241,0,0,0,20.905,14.325Zm-15-9.85a.5.5,0,0,1,.5-.41h11.2a.511.511,0,0,1,.49.4l1.74,9.54H4.165Zm14.03,14.96a.5.5,0,0,1-.5.5H4.565a.5.5,0,0,1-.5-.5l.01-4.43h15.86Z"},"child":[]},{"tag":"circle","attr":{"cx":"5.561","cy":"17.47","r":"0.5"},"child":[]},{"tag":"circle","attr":{"cx":"7.561","cy":"17.47","r":"0.5"},"child":[]},{"tag":"path","attr":{"d":"M18.45,17.97a.5.5,0,0,0,0-1h-5a.5.5,0,0,0,0,1Z"},"child":[]}]}]}]})(props);
};
function CiHashtag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Hashtag"},"child":[{"tag":"path","attr":{"d":"M20.435,15.506H16.2l.61-7h3.63a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H16.9l.34-3.87a.509.509,0,0,0-.46-.54.5.5,0,0,0-.54.46l-.35,3.95H8.9l.34-3.87a.509.509,0,0,0-.46-.54.491.491,0,0,0-.54.46l-.35,3.95H3.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h4.24l-.62,7H3.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h3.54l-.34,3.86a.508.508,0,0,0,.45.54h.05a.516.516,0,0,0,.5-.46l.34-3.94h7l-.34,3.86a.508.508,0,0,0,.45.54h.05a.516.516,0,0,0,.5-.46l.34-3.94h4.33a.5.5,0,0,0,.5-.5A.5.5,0,0,0,20.435,15.506Zm-5.25,0H8.2l.61-7h7Z"},"child":[]}]}]})(props);
};
function CiHeadphones (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Headphones"},"child":[{"tag":"path","attr":{"d":"M12.23,3.065h-.46a8.211,8.211,0,0,0-8.2,8.2v6.25a3.385,3.385,0,0,0,.89,2.3,3.423,3.423,0,0,0,2.53,1.12h.53a1.225,1.225,0,0,0,1.22-1.22v-4.4A1.225,1.225,0,0,0,7.52,14.1H7.11a3.6,3.6,0,0,0-2.54,1.05v-3.88a7.208,7.208,0,0,1,7.2-7.2h.46a7.208,7.208,0,0,1,7.2,7.2v3.88a3.6,3.6,0,0,0-2.54-1.05h-.41a1.225,1.225,0,0,0-1.22,1.22v4.4a1.225,1.225,0,0,0,1.22,1.22h.53a3.423,3.423,0,0,0,2.53-1.12,3.385,3.385,0,0,0,.89-2.3v-6.25A8.211,8.211,0,0,0,12.23,3.065ZM4.58,17.275A2.511,2.511,0,0,1,7.11,15.1h.41a.222.222,0,0,1,.22.22v4.4a.222.222,0,0,1-.22.22H6.99a2.422,2.422,0,0,1-1.79-.79,2.322,2.322,0,0,1-.63-1.63A1.927,1.927,0,0,1,4.58,17.275Zm14.22,1.87a2.422,2.422,0,0,1-1.79.79h-.53a.222.222,0,0,1-.22-.22v-4.4a.222.222,0,0,1,.22-.22h.41a2.511,2.511,0,0,1,2.53,2.18,1.927,1.927,0,0,1,.01.24A2.322,2.322,0,0,1,18.8,19.145Z"},"child":[]}]}]})(props);
};
function CiHeart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Heart"},"child":[{"tag":"path","attr":{"d":"M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"},"child":[]}]}]})(props);
};
function CiHome (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Home"},"child":[{"tag":"path","attr":{"d":"M19.37,10.22l-6.2-7.6a1.5,1.5,0,0,0-2.33-.01L4.63,10.22a2.5,2.5,0,0,0-.57,1.59v7.63a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.81A2.5,2.5,0,0,0,19.37,10.22ZM10,20.94v-5.5a1.5,1.5,0,0,1,1.5-1.5h1a1.5,1.5,0,0,1,1.5,1.5v5.5Zm8.94-1.5a1.511,1.511,0,0,1-1.5,1.5H15v-5.5a2.5,2.5,0,0,0-2.5-2.5h-1A2.5,2.5,0,0,0,9,15.44v5.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.81a1.474,1.474,0,0,1,.34-.95l6.22-7.61A.474.474,0,0,1,12,3.06a.479.479,0,0,1,.39.19l6.21,7.61a1.474,1.474,0,0,1,.34.95Z"},"child":[]}]}]})(props);
};
function CiHospital1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Hospital_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.435,7.5h-1.93V5.56a2.5,2.5,0,0,0-2.5-2.5h-4a2.5,2.5,0,0,0-2.5,2.5V7.5H5.565a2.5,2.5,0,0,0-2.5,2.5v9.44a1.511,1.511,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V10A2.5,2.5,0,0,0,18.435,7.5ZM7.505,19.94H4.565a.508.508,0,0,1-.5-.5V10a1.5,1.5,0,0,1,1.5-1.5h1.94Zm8,0h-1.5v-2.5a2.038,2.038,0,0,0-.59-1.42,2,2,0,0,0-3.41,1.42v2.5h-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h4a1.5,1.5,0,0,1,1.5,1.5Zm4.43-.5a.5.5,0,0,1-.5.5h-2.93V8.5h1.93a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.505,8.56a.5.5,0,0,1-.5.5h-1.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.06h-1.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5V6.56a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5h1.5A.508.508,0,0,1,14.505,8.56Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M5.786,13.217a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,5.786,13.217Z"},"child":[]},{"tag":"path","attr":{"d":"M5.786,17.717a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,5.786,17.717Z"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.221,13.217a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,18.221,13.217Z"},"child":[]},{"tag":"path","attr":{"d":"M18.221,17.717a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,18.221,17.717Z"},"child":[]}]}]}]}]})(props);
};
function CiHotdog (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Hotdog"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.1,9.349l-9.74,9.74.01.01,9.74-9.74Z"},"child":[]},{"tag":"path","attr":{"d":"M20.276,9.119l-.47-.47a3.157,3.157,0,0,0-.03-4.43,3.212,3.212,0,0,0-4.42-.03l-.48-.48a2.3,2.3,0,0,0-3.18,0l-7.98,7.98a2.263,2.263,0,0,0,0,3.18l.48.48a3.145,3.145,0,0,0,.03,4.42,3.089,3.089,0,0,0,2.23.92,3.126,3.126,0,0,0,2.2-.89l.47.47a2.245,2.245,0,0,0,3.18,0l7.97-7.97A2.245,2.245,0,0,0,20.276,9.119Zm-15.85,3.27,7.97-7.97a1.243,1.243,0,0,1,1.77,0l.47.47L4.9,14.629l-.47-.47A1.249,1.249,0,0,1,4.426,12.389Zm3.52,6.7a2.2,2.2,0,0,1-3.02-.03,2.149,2.149,0,0,1-.03-3.01l11.16-11.16a2.163,2.163,0,0,1,1.49-.6,2.155,2.155,0,0,1,1.55,3.65Zm11.63-7.49-7.98,7.97a1.275,1.275,0,0,1-1.76,0l-.47-.47-.01-.01,9.74-9.74.01.01.47.47A1.268,1.268,0,0,1,19.576,11.6Z"},"child":[]},{"tag":"path","attr":{"d":"M6.57,17.569a.5.5,0,0,1-.354-.854,4.533,4.533,0,0,1,1.357-.967,3.491,3.491,0,0,0,1.1-.778,3.514,3.514,0,0,0,.779-1.1,5.034,5.034,0,0,1,2.324-2.324,3.517,3.517,0,0,0,1.1-.78,3.536,3.536,0,0,0,.78-1.1,4.534,4.534,0,0,1,.97-1.359,4.54,4.54,0,0,1,1.359-.97,3.53,3.53,0,0,0,1.1-.78.5.5,0,1,1,.707.707,4.516,4.516,0,0,1-1.36.969,3.506,3.506,0,0,0-1.1.781,3.535,3.535,0,0,0-.781,1.1,4.516,4.516,0,0,1-.969,1.36,4.5,4.5,0,0,1-1.359.969,4.029,4.029,0,0,0-1.874,1.874,4.5,4.5,0,0,1-.967,1.357,4.524,4.524,0,0,1-1.358.968,3.51,3.51,0,0,0-1.1.777A.5.5,0,0,1,6.57,17.569Z"},"child":[]}]}]}]})(props);
};
function CiIceCream (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Ice_Cream"},"child":[{"tag":"path","attr":{"d":"M16.54,5.94a4.594,4.594,0,0,0-9.08,0,3.065,3.065,0,0,0-.76,5.85l3.92,9.25a1.5,1.5,0,0,0,2.76,0l3.92-9.26a3.058,3.058,0,0,0-.76-5.84ZM12.46,20.65a.5.5,0,0,1-.92,0L7.89,12.03h8.22Zm3.64-9.62H7.9a2.06,2.06,0,1,1,.01-4.12.5.5,0,0,0,.5-.48,3.6,3.6,0,0,1,7.18,0,.506.506,0,0,0,.51.48,2.06,2.06,0,0,1,0,4.12Z"},"child":[]}]}]})(props);
};
function CiImageOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Image_Off"},"child":[{"tag":"path","attr":{"d":"M19.937,14.218l0,-8.654c0,-0.829 -0.672,-1.5 -1.5,-1.5l-10.628,-0c-0.276,-0 -0.5,-0.225 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l10.628,-0c1.38,-0 2.5,1.118 2.5,2.5l0,10.624c0,0.276 -0.224,0.5 -0.5,0.501c-0.276,-0 -0.5,-0.225 -0.5,-0.5l0,-0.556l-4.583,-4.584c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.162,0.162 2.37,2.37 3.876,3.876Zm-0.121,6.304c-0.395,0.262 -0.869,0.415 -1.379,0.415l-12.874,-0c-1.381,-0 -2.5,-1.119 -2.5,-2.5l0,-12.873c0,-0.51 0.153,-0.984 0.414,-1.38l-0.263,-0.263c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.088,0.088 0.176,0.176 0.263,0.263c0.245,0.245 16.095,16.094 16.339,16.338l0.263,0.263c0.455,0.456 -0.252,1.163 -0.707,0.707c-0.088,-0.087 -0.175,-0.175 -0.263,-0.263Zm-11.104,-11.103l-2.001,-2.001c-0.094,0.196 -0.146,0.415 -0.146,0.647c-0,0.829 0.672,1.5 1.5,1.5c0.232,-0 0.451,-0.052 0.647,-0.146Zm-2.733,-2.733l-1.77,-1.77c-0.093,0.196 -0.146,0.416 -0.146,0.648l0,10.717l1.926,-1.926c0.587,-0.586 1.536,-0.586 2.122,-0l0.555,0.554c0.195,0.196 0.511,0.196 0.706,0l2.415,-2.415l-2.343,-2.343c-0.395,0.262 -0.869,0.414 -1.379,0.414c-1.38,-0 -2.5,-1.119 -2.5,-2.5c-0,-0.509 0.152,-0.983 0.414,-1.379Zm-1.916,11.009l0,0.741c0,0.829 0.671,1.5 1.5,1.5l12.874,0c0.232,0 0.451,-0.052 0.647,-0.145c-0.165,-0.165 -3.264,-3.263 -6.59,-6.59l-2.414,2.415c-0.585,0.586 -1.537,0.586 -2.122,0l-0.554,-0.554c-0.195,-0.196 -0.512,-0.196 -0.708,0l-2.633,2.633Z"},"child":[]}]}]})(props);
};
function CiImageOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Image_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z"},"child":[]},{"tag":"path","attr":{"d":"M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z"},"child":[]}]}]}]})(props);
};
function CiImport (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Import"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z"},"child":[]},{"tag":"path","attr":{"d":"M11.63,15.818a.459.459,0,0,0,.312.138c.014,0,.027.005.042.006s.027,0,.041-.006a.457.457,0,0,0,.312-.138l3.669-3.669a.5.5,0,0,0-.707-.707l-2.815,2.815V3.515a.5.5,0,0,0-1,0V14.257L8.668,11.442a.5.5,0,0,0-.707.707Z"},"child":[]}]}]}]})(props);
};
function CiInboxIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Inbox_In"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.5,9.361V4.531a.5.5,0,0,1,1,0v4.82l1.27-1.27a.524.524,0,0,1,.71,0,.513.513,0,0,1,0,.71l-2.13,2.12a.492.492,0,0,1-.7,0l-2.12-2.12a.5.5,0,0,1,0-.71.511.511,0,0,1,.7,0Z"},"child":[]},{"tag":"path","attr":{"d":"M20.488,19.949H3.512A1.451,1.451,0,0,1,2.062,18.5V12.861a1.451,1.451,0,0,1,1.45-1.449h4.1a1.444,1.444,0,0,1,1.3.8l1.373,2.726a.449.449,0,0,0,.4.247h2.629a.448.448,0,0,0,.4-.248l1.373-2.724a1.442,1.442,0,0,1,1.3-.8h4.1a1.451,1.451,0,0,1,1.45,1.449V18.5A1.451,1.451,0,0,1,20.488,19.949ZM3.512,12.412a.45.45,0,0,0-.45.449V18.5a.45.45,0,0,0,.45.449H20.488a.45.45,0,0,0,.45-.449V12.861a.45.45,0,0,0-.45-.449h-4.1a.449.449,0,0,0-.4.247L14.61,15.384a1.445,1.445,0,0,1-1.295.8H10.686a1.442,1.442,0,0,1-1.295-.8L8.018,12.659a.449.449,0,0,0-.4-.247Z"},"child":[]}]}]}]})(props);
};
function CiInboxOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Inbox_Out"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.488,19.944H3.512a1.452,1.452,0,0,1-1.45-1.45V12.856a1.452,1.452,0,0,1,1.45-1.45h4.1a1.442,1.442,0,0,1,1.3.8l1.373,2.725a.449.449,0,0,0,.4.247h2.629a.448.448,0,0,0,.4-.248L15.09,12.2a1.442,1.442,0,0,1,1.3-.8h4.1a1.452,1.452,0,0,1,1.45,1.45v5.638A1.452,1.452,0,0,1,20.488,19.944ZM3.512,12.406a.451.451,0,0,0-.45.45v5.638a.45.45,0,0,0,.45.45H20.488a.45.45,0,0,0,.45-.45V12.856a.451.451,0,0,0-.45-.45h-4.1a.449.449,0,0,0-.4.247L14.61,15.378a1.445,1.445,0,0,1-1.295.8H10.686a1.444,1.444,0,0,1-1.295-.8L8.018,12.653a.449.449,0,0,0-.4-.247Z"},"child":[]},{"tag":"path","attr":{"d":"M12.5,5.753v4.83a.5.5,0,0,1-1,0V5.763l-1.27,1.27a.524.524,0,0,1-.71,0,.513.513,0,0,1,0-.71l2.13-2.12a.492.492,0,0,1,.7,0l2.12,2.12a.5.5,0,0,1,0,.71.511.511,0,0,1-.7,0Z"},"child":[]}]}]}]})(props);
};
function CiIndent (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Indent"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,9.688h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,15.312h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M7.91,11.65a.492.492,0,0,1,0,.7l-2,2a.495.495,0,0,1-.7-.7L6.36,12.5H3.54a.5.5,0,0,1,0-1H6.35c-.38-.38-.76-.76-1.14-1.15a.495.495,0,0,1,.7-.7Z"},"child":[]}]}]}]})(props);
};
function CiInstagram (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Instagram"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z"},"child":[]},{"tag":"circle","attr":{"cx":"17.2","cy":"6.83","r":"1.075"},"child":[]}]}]}]})(props);
};
function CiKeyboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Keyboard"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.437,18.5H4.562a2.5,2.5,0,0,1-2.5-2.5V8a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8A2.5,2.5,0,0,1,19.437,18.5ZM4.562,6.5A1.5,1.5,0,0,0,3.062,8v8a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M5.548,16.5h12.9a.5.5,0,0,0,0-1H5.548a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"5.82","cy":"9.248","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"9.94","cy":"9.248","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"14.06","cy":"9.248","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"18.18","cy":"9.248","r":"0.75"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"5.82","cy":"12.998","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"9.94","cy":"12.998","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"14.06","cy":"12.998","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"18.18","cy":"12.998","r":"0.75"},"child":[]}]}]}]}]})(props);
};
function CiLaptop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Laptop"},"child":[{"tag":"path","attr":{"d":"M21.485,16.155a.992.992,0,0,0-.77-.36h-.33V6.565a2.5,2.5,0,0,0-2.5-2.5H6.115a2.5,2.5,0,0,0-2.5,2.5V15.8h-.34a1,1,0,0,0-.98,1.17l.3,1.73a1.5,1.5,0,0,0,1.48,1.24h15.85a1.5,1.5,0,0,0,1.48-1.24l.3-1.73A.986.986,0,0,0,21.485,16.155ZM4.615,6.565a1.5,1.5,0,0,1,1.5-1.5h11.77a1.5,1.5,0,0,1,1.5,1.5V15.8H4.615Zm15.8,11.96a.494.494,0,0,1-.49.41H4.075a.494.494,0,0,1-.49-.41l-.31-1.73h17.44Z"},"child":[]}]}]})(props);
};
function CiLemon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Lemon"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M6,20.924a2.172,2.172,0,0,1-1.545-.642l-.734-.733a2.207,2.207,0,0,1-.16-2.947,1.18,1.18,0,0,0,.272-1.117A9.105,9.105,0,0,1,6.205,6.208a9.1,9.1,0,0,1,9.277-2.371,1.149,1.149,0,0,0,1.062-.229l.055-.044a2.205,2.205,0,0,1,2.946.161l.734.733a2.207,2.207,0,0,1,.16,2.947,1.179,1.179,0,0,0-.272,1.116A9.11,9.11,0,0,1,17.8,17.8,9.109,9.109,0,0,1,8.518,20.17a1.14,1.14,0,0,0-1.062.229A2.324,2.324,0,0,1,6,20.924ZM12.812,4.4a8.427,8.427,0,0,0-5.9,2.519,8.1,8.1,0,0,0-2.133,8.246,2.149,2.149,0,0,1-.395,2.014,1.227,1.227,0,0,0,.044,1.667l.734.733a1.209,1.209,0,0,0,1.613.088,2.175,2.175,0,0,1,2.067-.438,8.1,8.1,0,0,0,8.246-2.133,8.1,8.1,0,0,0,2.133-8.246,2.144,2.144,0,0,1,.395-2.013,1.229,1.229,0,0,0-.044-1.668l-.734-.733a1.206,1.206,0,0,0-1.612-.089l-.052.042a2.148,2.148,0,0,1-2.016.4A7.213,7.213,0,0,0,12.812,4.4Z"},"child":[]},{"tag":"path","attr":{"d":"M6.457,12.286a.523.523,0,0,1-.178-.032.5.5,0,0,1-.29-.646,9.841,9.841,0,0,1,5.338-5.5.5.5,0,1,1,.386.921,8.845,8.845,0,0,0-4.789,4.939A.5.5,0,0,1,6.457,12.286Z"},"child":[]}]}]}]})(props);
};
function CiLight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Light"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z"},"child":[]},{"tag":"path","attr":{"d":"M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z"},"child":[]},{"tag":"path","attr":{"d":"M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z"},"child":[]},{"tag":"path","attr":{"d":"M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z"},"child":[]},{"tag":"path","attr":{"d":"M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z"},"child":[]},{"tag":"path","attr":{"d":"M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z"},"child":[]}]}]}]})(props);
};
function CiLineHeight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Line_Height"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.439,4.062h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.439,9.686h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.439,15.31h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.439,20.934h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M3.208,18.8a.5.5,0,0,1,.71-.71l1.14,1.14V4.775l-1.14,1.14a.513.513,0,0,1-.71,0,.5.5,0,0,1,0-.71l2-2a.494.494,0,0,1,.34-.14.549.549,0,0,1,.37.14l2,2a.524.524,0,0,1,0,.71.5.5,0,0,1-.71,0l-1.15-1.15v14.47l1.15-1.15a.5.5,0,1,1,.71.71l-2,2a.513.513,0,0,1-.71,0Z"},"child":[]}]}]}]})(props);
};
function CiLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Link"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.9,8a4.055,4.055,0,0,1,1.352.135,2.511,2.511,0,0,1-.7,4.863.5.5,0,0,0,0,1,3.508,3.508,0,0,0,2.944-5.2A3.557,3.557,0,0,0,11.434,7H5.59A3.5,3.5,0,0,0,5.4,14c.724.041,1.458,0,2.183,0a.5.5,0,0,0,0-1h0c-1.323,0-2.915.262-3.891-.843A2.522,2.522,0,0,1,5.59,8Z"},"child":[]},{"tag":"path","attr":{"d":"M18.41,17a3.5,3.5,0,0,0,.192-6.994c-.724-.041-1.458,0-2.183,0a.5.5,0,0,0,0,1h0c1.323,0,2.915-.262,3.891.843A2.522,2.522,0,0,1,18.41,16H13.1a4.055,4.055,0,0,1-1.352-.135,2.511,2.511,0,0,1,.7-4.863.5.5,0,0,0,0-1,3.508,3.508,0,0,0-2.944,5.2A3.557,3.557,0,0,0,12.566,17Z"},"child":[]}]}]}]})(props);
};
function CiLinkedin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"LinkedIn"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"},"child":[]},{"tag":"circle","attr":{"cx":"7.376","cy":"6.744","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z"},"child":[]}]}]}]}]})(props);
};
function CiLocationArrow1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Location_Arrow_1"},"child":[{"tag":"path","attr":{"d":"M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z"},"child":[]}]}]})(props);
};
function CiLocationOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Location_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.2,14.462a.5.5,0,0,1-.417-.775A6.791,6.791,0,0,0,18.831,9.06a6.909,6.909,0,0,0-6.022-5.946A6.834,6.834,0,0,0,8.252,4.175a.5.5,0,1,1-.545-.838,7.882,7.882,0,0,1,10.909,10.9A.5.5,0,0,1,18.2,14.462Z"},"child":[]},{"tag":"path","attr":{"d":"M4,3.3a.5.5,0,0,0-.7.7l1.92,1.92a7.784,7.784,0,0,0-1.11,4.03A7.879,7.879,0,0,0,5.55,14.5l5.06,6.74a1.724,1.724,0,0,0,1.39.69,1.705,1.705,0,0,0,1.38-.69l3.06-4.09c.5.49.99.99,1.48,1.48.7.69,1.39,1.38,2.08,2.07.45.46,1.16-.25.7-.71Zm8.58,17.34a.734.734,0,0,1-.58.29.754.754,0,0,1-.59-.29l-5.05-6.73a6.9,6.9,0,0,1-.41-7.26q1.5,1.515,3.01,3.01,3.39,3.39,6.77,6.78Z"},"child":[]}]}]}]})(props);
};
function CiLocationOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Location_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"},"child":[]},{"tag":"path","attr":{"d":"M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"},"child":[]}]}]}]})(props);
};
function CiLock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Lock"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.44,9.33h-1.1V6.4a4.34,4.34,0,0,0-8.68,0V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33ZM8.66,6.4a3.34,3.34,0,0,1,6.68,0V9.33H8.66ZM18.94,19.44a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z"},"child":[]}]}]}]})(props);
};
function CiLogin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Login"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"},"child":[]},{"tag":"path","attr":{"d":"M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"},"child":[]}]}]}]})(props);
};
function CiLogout (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Logout"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"},"child":[]},{"tag":"path","attr":{"d":"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"},"child":[]}]}]}]})(props);
};
function CiLollipop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Lollipop"},"child":[{"tag":"path","attr":{"d":"M18,6.565h-.19a6,6,0,0,0-11.62,0H6a1.5,1.5,0,1,0,0,3h.19a5.992,5.992,0,0,0,5.31,4.48v7.39a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-7.39a6.013,6.013,0,0,0,5.31-4.48H18a1.5,1.5,0,1,0,0-3Zm-6-3.5a4.991,4.991,0,0,1,4.77,3.5H7.23A4.991,4.991,0,0,1,12,3.065Zm0,10a4.991,4.991,0,0,1-4.77-3.5h9.54A4.991,4.991,0,0,1,12,13.065Zm6-4.5H6a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H18a.5.5,0,0,1,.5.5A.508.508,0,0,1,18,8.565Z"},"child":[]}]}]})(props);
};
function CiMail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mail"},"child":[{"tag":"path","attr":{"d":"M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"},"child":[]}]}]})(props);
};
function CiMapPin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Map_Pin"},"child":[{"tag":"path","attr":{"d":"M12,2.06a5.5,5.5,0,0,0-.5,10.97v8.41a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.03A5.5,5.5,0,0,0,12,2.06Zm0,10a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,12,12.06Z"},"child":[]}]}]})(props);
};
function CiMap (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Map"},"child":[{"tag":"path","attr":{"d":"M20.21,4.576a1.906,1.906,0,0,0-1.63-.35l-3.53.89a1.086,1.086,0,0,1-.44,0L9.63,3.876a2.041,2.041,0,0,0-.92,0L4.5,4.936a1.893,1.893,0,0,0-1.44,1.84v11.15a1.871,1.871,0,0,0,.73,1.5,1.906,1.906,0,0,0,1.63.35l3.53-.89a1.086,1.086,0,0,1,.44,0l4.98,1.24a2.315,2.315,0,0,0,.46.05,2.4,2.4,0,0,0,.46-.05l4.21-1.06a1.893,1.893,0,0,0,1.44-1.84V6.076A1.871,1.871,0,0,0,20.21,4.576ZM8.67,17.926l-3.49.87a.89.89,0,0,1-1.12-.87V6.776a.9.9,0,0,1,.68-.87l3.93-.99Zm5.66,1.16-4.66-1.16V4.916l4.66,1.16Zm5.61-1.86a.9.9,0,0,1-.68.87l-3.93.99V6.076l3.49-.87a.908.908,0,0,1,.78.16.886.886,0,0,1,.34.71Z"},"child":[]}]}]})(props);
};
function CiMaximize1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Maximize_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z"},"child":[]},{"tag":"path","attr":{"d":"M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z"},"child":[]}]}]}]})(props);
};
function CiMaximize2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Maximize_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.513,3.066H4.93a2.058,2.058,0,0,0-1.15.22,1.6,1.6,0,0,0-.717,1.437v5.793a.5.5,0,0,0,1,0V5.107a2.521,2.521,0,0,1,.022-.689c.115-.373.469-.352.777-.352h5.651a.5.5,0,0,0,0-1Z"},"child":[]},{"tag":"path","attr":{"d":"M3.063,13.488v5.583a2.057,2.057,0,0,0,.221,1.15,1.6,1.6,0,0,0,1.436.717h5.793a.5.5,0,0,0,0-1H5.1a2.483,2.483,0,0,1-.689-.022c-.372-.115-.352-.469-.352-.777V13.488a.5.5,0,0,0-1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M13.487,20.934H19.07a2.058,2.058,0,0,0,1.15-.22,1.6,1.6,0,0,0,.717-1.437V13.484a.5.5,0,0,0-1,0v5.409a2.521,2.521,0,0,1-.022.689c-.115.373-.469.352-.777.352H13.487a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.937,10.512V4.929a2.057,2.057,0,0,0-.221-1.15,1.6,1.6,0,0,0-1.436-.717H13.487a.5.5,0,0,0,0,1H18.9a2.483,2.483,0,0,1,.689.022c.372.115.352.469.352.777v5.651a.5.5,0,0,0,1,0Z"},"child":[]}]}]}]})(props);
};
function CiMedal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Medal"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.692,3.755a1.519,1.519,0,0,0-1.27-.69h-4.41a1.487,1.487,0,0,0-1.36.87L12,7.485l-1.66-3.55a1.487,1.487,0,0,0-1.36-.87H4.572a1.5,1.5,0,0,0-1.35,2.14l3.73,8.02a5.638,5.638,0,0,0-.46,2.21,5.5,5.5,0,0,0,11,0,5.419,5.419,0,0,0-.46-2.2l3.75-8.03A1.525,1.525,0,0,0,20.692,3.755ZM4.122,4.785a.527.527,0,0,1,.03-.49.494.494,0,0,1,.42-.23h4.41a.507.507,0,0,1,.46.29l2.61,5.58h-.06a5.505,5.505,0,0,0-4.43,2.25Zm7.87,15.15a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,11.992,19.935Zm7.89-15.15-3.46,7.4a5.454,5.454,0,0,0-3.21-2.11l-.66-1.42,2-4.3a.507.507,0,0,1,.46-.29h4.41a.482.482,0,0,1,.42.23A.505.505,0,0,1,19.882,4.785Z"},"child":[]},{"tag":"path","attr":{"d":"M12.077,16.88l1.024.538a.174.174,0,0,0,.253-.184l-.2-1.14a.174.174,0,0,1,.051-.154l.828-.807a.175.175,0,0,0-.1-.3L12.8,14.669a.177.177,0,0,1-.132-.1l-.512-1.037a.174.174,0,0,0-.313,0l-.512,1.037a.174.174,0,0,1-.131.1l-1.145.166a.175.175,0,0,0-.1.3l.828.807a.174.174,0,0,1,.05.154l-.2,1.14a.174.174,0,0,0,.253.184l1.024-.538A.172.172,0,0,1,12.077,16.88Z"},"child":[]}]}]}]})(props);
};
function CiMedicalCase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Medical_Case"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.435,6.465h-1.43v-.9a2.5,2.5,0,0,0-2.5-2.5h-5a2.5,2.5,0,0,0-2.5,2.5v.9H5.565a2.5,2.5,0,0,0-2.5,2.5v9.47a2.5,2.5,0,0,0,2.5,2.5h12.87a2.5,2.5,0,0,0,2.5-2.5V8.965A2.5,2.5,0,0,0,18.435,6.465Zm-10.43-.9a1.5,1.5,0,0,1,1.5-1.5h5a1.5,1.5,0,0,1,1.5,1.5v.9h-8Zm11.93,12.87a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V8.965a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.505,13.675a.5.5,0,0,1-.5.5h-1.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5h-1.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5h1.5A.508.508,0,0,1,14.505,13.675Z"},"child":[]}]}]}]})(props);
};
function CiMedicalClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Medical_Clipboard"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.44,3.5H15.75V2.97a.949.949,0,0,0-1-.91H9.25a.949.949,0,0,0-1,.91V3.5H6.56A2.5,2.5,0,0,0,4.06,6V19.44a2.5,2.5,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V6A2.5,2.5,0,0,0,17.44,3.5ZM9.25,3.06l5.5.01V4.19c0,.61-.69,1.12-1.5,1.12h-2.5c-.82,0-1.5-.51-1.5-1.12Zm9.69,16.38a1.511,1.511,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6a1.5,1.5,0,0,1,1.5-1.5H8.28a2.4,2.4,0,0,0,2.47,1.81h2.5A2.4,2.4,0,0,0,15.72,4.5h1.72A1.5,1.5,0,0,1,18.94,6Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,12.71a.5.5,0,0,1-.5.5H12.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5H14A.508.508,0,0,1,14.5,12.71Z"},"child":[]}]}]}]})(props);
};
function CiMedicalCross (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Medical_Cross"},"child":[{"tag":"path","attr":{"d":"M12.943,20.93H11.057a2.388,2.388,0,0,1-2.386-2.386V15.3l-3.215.029a2.39,2.39,0,0,1-2.387-2.386V11.057A2.39,2.39,0,0,1,5.456,8.67H8.7L8.671,5.456A2.388,2.388,0,0,1,11.057,3.07h1.886a2.388,2.388,0,0,1,2.386,2.386V8.7l3.215-.03a2.39,2.39,0,0,1,2.387,2.387v1.886a2.39,2.39,0,0,1-2.387,2.386H15.3l.028,3.215A2.388,2.388,0,0,1,12.943,20.93ZM5.456,9.67a1.388,1.388,0,0,0-1.387,1.387v1.886a1.388,1.388,0,0,0,1.387,1.386H8.7a.972.972,0,0,1,.972.971v3.244a1.388,1.388,0,0,0,1.386,1.386h1.886a1.388,1.388,0,0,0,1.386-1.386V15.3a.972.972,0,0,1,.972-.971h3.243a1.388,1.388,0,0,0,1.387-1.386V11.057A1.388,1.388,0,0,0,18.544,9.67H15.3a.972.972,0,0,1-.972-.97V5.456A1.388,1.388,0,0,0,12.943,4.07H11.057A1.388,1.388,0,0,0,9.671,5.456V8.7a.972.972,0,0,1-.972.97Z"},"child":[]}]}]})(props);
};
function CiMedicalMask (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Medical_Mask"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.435,12.53H19.5V9.17h1.94a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H19.5V7.23A2.5,2.5,0,0,0,17,4.73H7a2.507,2.507,0,0,0-2.5,2.5v.94H2.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H4.5v3.36H2.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H4.5v.33a4.283,4.283,0,0,0,2.43,3.84l1.74.82a7.79,7.79,0,0,0,6.67,0l1.73-.82h.01a4.274,4.274,0,0,0,2.42-3.84v-.33h1.94a.5.5,0,0,0,.5-.5A.5.5,0,0,0,21.435,12.53ZM18.5,13.86a3.238,3.238,0,0,1-1.85,2.93l-1.73.82a6.767,6.767,0,0,1-5.83,0l-1.73-.82A3.248,3.248,0,0,1,5.5,13.86V7.23A1.5,1.5,0,0,1,7,5.73H17a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,14.534h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M16,10.168H8a.5.5,0,1,1,0-1h8a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiMemoPad (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Memo_Pad"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.44,2.065H6.56a2.507,2.507,0,0,0-2.5,2.5v14.87a2.507,2.507,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V4.565A2.5,2.5,0,0,0,17.44,2.065Zm1.5,17.37a1.5,1.5,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6.505H18.94Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M7.549,9.506h0a.5.5,0,0,1,0-1h8.909a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M7.549,12.506h0a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M7.566,18.374h0a.5.5,0,1,1,0-1h3.251a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]}]})(props);
};
function CiMenuBurger (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Menu_Burger"},"child":[{"tag":"path","attr":{"d":"M3.563,4.063c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001Z"},"child":[]},{"tag":"path","attr":{"d":"M3.563,12.501c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"},"child":[]},{"tag":"path","attr":{"d":"M3.563,20.939c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"},"child":[]}]}]})(props);
};
function CiMenuFries (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Menu_Fries"},"child":[{"tag":"path","attr":{"d":"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"},"child":[]}]}]})(props);
};
function CiMenuKebab (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Menu_Kebab"},"child":[{"tag":"path","attr":{"d":"M14.5,12c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,-0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,-0 2.5,1.12 2.5,2.5Zm-1,-0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,-0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,4.563c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,-0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,-0 2.5,1.12 2.5,2.5Zm-1,-0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,-0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,19.437c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,0 2.5,1.12 2.5,2.5Zm-1,0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5Z"},"child":[]}]}]})(props);
};
function CiMicrochip (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Microchip"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13,14.5H11A1.5,1.5,0,0,1,9.5,13V11A1.5,1.5,0,0,1,11,9.5h2A1.5,1.5,0,0,1,14.5,11v2A1.5,1.5,0,0,1,13,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"path","attr":{"d":"M20.435,14.5h-1.93v-5h1.93a.5.5,0,0,0,0-1h-1.93V8a2.507,2.507,0,0,0-2.5-2.5h-.5V3.565a.508.508,0,0,0-.5-.5.5.5,0,0,0-.5.5V5.5h-5V3.565a.508.508,0,0,0-.5-.5.5.5,0,0,0-.5.5V5.5h-.5A2.5,2.5,0,0,0,5.505,8v.5H3.565a.5.5,0,1,0,0,1h1.94v5H3.565a.5.5,0,1,0,0,1h1.94V16a2.5,2.5,0,0,0,2.5,2.5h.5v1.94a.5.5,0,0,0,1,0V18.5h5v1.94a.5.5,0,0,0,1,0V18.5h.5a2.507,2.507,0,0,0,2.5-2.5v-.5h1.93a.5.5,0,0,0,0-1ZM17.505,16a1.5,1.5,0,0,1-1.5,1.5h-8a1.5,1.5,0,0,1-1.5-1.5V8a1.5,1.5,0,0,1,1.5-1.5h8a1.511,1.511,0,0,1,1.5,1.5Z"},"child":[]}]}]}]})(props);
};
function CiMicrophoneOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Microphone_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16.5,7.046v4.72a.5.5,0,0,1-1,0V9.946H14a.5.5,0,0,1,0-1h1.5v-2H13.57a.5.5,0,0,1,0-1h1.87a3.23,3.23,0,0,0-.2-.72,3.533,3.533,0,0,0-6.16-.59c-.36.53-1.23.03-.87-.5a4.509,4.509,0,0,1,7.71.21A5.255,5.255,0,0,1,16.5,7.046Z"},"child":[]},{"tag":"path","attr":{"d":"M20.14,19.436q-2.625-2.64-5.27-5.28Q10.685,9.986,6.51,5.8c-.65-.64-1.3-1.29-1.94-1.94a.5.5,0,0,0-.71.71Q5.69,6.381,7.5,8.206v3.92a4.591,4.591,0,0,0,3.59,4.61,4.629,4.629,0,0,0,3.9-1.04c.24.24.48.47.71.71a5.252,5.252,0,0,1-6.62.67,5.2,5.2,0,0,1-2.05-2.76,7.608,7.608,0,0,1-.24-2.33v-2.2a.5.5,0,0,0-1,0,15.463,15.463,0,0,0,.34,4.99,6.276,6.276,0,0,0,5.37,4.17v1.99H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H12.5v-2a6.118,6.118,0,0,0,3.91-1.82l1.08,1.08c.65.65,1.3,1.3,1.95,1.94A.5.5,0,0,0,20.14,19.436Zm-11.2-5.42a3.991,3.991,0,0,1-.44-2.03V9.206l5.77,5.77A3.521,3.521,0,0,1,8.94,14.016Z"},"child":[]}]}]}]})(props);
};
function CiMicrophoneOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Microphone_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.989,2.065a4.507,4.507,0,0,0-4.5,4.5v5.76a4.5,4.5,0,0,0,9,0V6.565A4.507,4.507,0,0,0,11.989,2.065Zm0,13.76a3.5,3.5,0,0,1-3.5-3.5V6.565a3.5,3.5,0,0,1,6.94-.62h-1.87a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.93v2h-1.93a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.93v2h-1.94a.508.508,0,0,0-.5.5.515.515,0,0,0,.5.5h1.88A3.492,3.492,0,0,1,11.989,15.825Z"},"child":[]},{"tag":"path","attr":{"d":"M12.489,18.925v2.01h3.5a.5.5,0,0,1,0,1h-8a.5.5,0,0,1,0-1h3.5v-1.99a6.055,6.055,0,0,1-2.74-.88,6.291,6.291,0,0,1-2.97-5.14c-.03-1.04,0-2.09,0-3.13a.5.5,0,0,1,1,0c0,1.04-.03,2.09,0,3.13A5.212,5.212,0,0,0,17.2,12.7c.01-.96,0-1.93,0-2.9a.5.5,0,0,1,1,0,26.322,26.322,0,0,1-.08,3.97A6.235,6.235,0,0,1,12.489,18.925Z"},"child":[]}]}]}]})(props);
};
function CiMinimize1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Minimize_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11,17.78a.5.5,0,0,1-1,0V14.71L3.92,20.79a.5.5,0,0,1-.71-.71c.29-.29.58-.57.87-.86C5.82,17.48,7.55,15.74,9.3,14H6.22a.5.5,0,0,1,0-1H10.5a.429.429,0,0,1,.34.14c.01.01.02.01.02.02a.384.384,0,0,1,.13.26Z"},"child":[]},{"tag":"path","attr":{"d":"M14.7,10h3.08a.5.5,0,0,1,0,1H13.5a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26L13,6.22a.5.5,0,0,1,1,0V9.29l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71Z"},"child":[]}]}]}]})(props);
};
function CiMinimize2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Minimize_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.563,11.016H9.146A2.057,2.057,0,0,0,10.3,10.8a1.6,1.6,0,0,0,.717-1.436V3.566a.5.5,0,0,0-1,0V8.974a2.481,2.481,0,0,1-.022.689c-.115.373-.468.353-.777.353H3.563a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M11.013,20.438V14.855a2.065,2.065,0,0,0-.22-1.15,1.6,1.6,0,0,0-1.437-.717H3.563a.5.5,0,0,0,0,1H8.972a2.482,2.482,0,0,1,.689.022c.373.115.352.469.352.777v5.651a.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,12.984H14.854a2.057,2.057,0,0,0-1.15.221,1.6,1.6,0,0,0-.717,1.436v5.793a.5.5,0,0,0,1,0V15.026a2.481,2.481,0,0,1,.022-.689c.115-.373.468-.353.777-.353h5.651a.5.5,0,0,0,0-1Z"},"child":[]},{"tag":"path","attr":{"d":"M12.987,3.562V9.145a2.065,2.065,0,0,0,.22,1.15,1.6,1.6,0,0,0,1.437.717h5.793a.5.5,0,0,0,0-1H15.028a2.482,2.482,0,0,1-.689-.022c-.373-.115-.352-.469-.352-.777V3.562a.5.5,0,0,0-1,0Z"},"child":[]}]}]}]})(props);
};
function CiMobile1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mobile_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10,18.933h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z"},"child":[]}]}]}]})(props);
};
function CiMobile2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mobile_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"12","cy":"17.937","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z"},"child":[]}]}]}]})(props);
};
function CiMobile3 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mobile_3"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16.73,2.065H7.27a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.46a2.386,2.386,0,0,0,2.24-2.5V4.565A2.386,2.386,0,0,0,16.73,2.065Zm1.24,17.37a1.391,1.391,0,0,1-1.24,1.5H7.27a1.391,1.391,0,0,1-1.24-1.5V4.565a1.391,1.391,0,0,1,1.24-1.5H8.8v.51a1,1,0,0,0,1,1h4.4a1,1,0,0,0,1-1v-.51h1.53a1.391,1.391,0,0,1,1.24,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M10,18.934h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z"},"child":[]}]}]}]})(props);
};
function CiMobile4 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mobile_4"},"child":[{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"12.003","cy":"18.937","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M16.725,2.065H7.275a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.45a2.379,2.379,0,0,0,2.24-2.5V4.565A2.379,2.379,0,0,0,16.725,2.065Zm1.24,17.37a1.384,1.384,0,0,1-1.24,1.5H7.275a1.391,1.391,0,0,1-1.24-1.5v-2.5h11.93Zm0-3.5H6.035V4.565a1.391,1.391,0,0,1,1.24-1.5h9.45a1.384,1.384,0,0,1,1.24,1.5Z"},"child":[]}]}]}]})(props);
};
function CiMoneyBill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Money_Bill"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.44,5.78H4.56a2.507,2.507,0,0,0-2.5,2.5v7.44a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5V8.28A2.5,2.5,0,0,0,19.44,5.78ZM3.06,8.28a1.5,1.5,0,0,1,1.5-1.5H6.04A3.521,3.521,0,0,1,3.06,9.76Zm1.5,8.94a1.511,1.511,0,0,1-1.5-1.5V14.24a3.521,3.521,0,0,1,2.98,2.98Zm16.38-1.5a1.5,1.5,0,0,1-1.5,1.5H17.96a3.521,3.521,0,0,1,2.98-2.98Zm0-2.49a4.528,4.528,0,0,0-3.99,3.99H7.05a4.528,4.528,0,0,0-3.99-3.99V10.77A4.528,4.528,0,0,0,7.05,6.78h9.9a4.528,4.528,0,0,0,3.99,3.99Zm0-3.47a3.521,3.521,0,0,1-2.98-2.98h1.48a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"12.002","cy":"11.998","r":"2"},"child":[]}]}]}]})(props);
};
function CiMoneyCheck1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Money_Check_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.437,18.218H4.563a2.5,2.5,0,0,1-2.5-2.5V8.282a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v7.436A2.5,2.5,0,0,1,19.437,18.218ZM4.563,6.782a1.5,1.5,0,0,0-1.5,1.5v7.436a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8.282a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12,12.786H5.064a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M14,15.714H5.064a.5.5,0,1,1,0-1H14a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"rect","attr":{"x":"15.436","y":"8.283","width":"4","height":"2","rx":"0.5"},"child":[]}]}]}]})(props);
};
function CiMonitor (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Monitor"},"child":[{"tag":"path","attr":{"d":"M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5v8.88a2.507,2.507,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM14.9,19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiMountain1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mountain_1"},"child":[{"tag":"path","attr":{"d":"M20.857,19.525l-6.57-14.96a2.5,2.5,0,0,0-4.58-.01l-6.56,14.96a1,1,0,0,0,.07.96.985.985,0,0,0,.84.46h15.89a1,1,0,0,0,.91-1.41ZM10.627,4.965a1.5,1.5,0,0,1,2.75,0l2.43,5.53-1.45,1.45a.5.5,0,0,1-.71,0l-2.04-2.03a1.5,1.5,0,0,0-1.06-.44h-1.9Zm-6.57,14.96,4.15-9.45h2.34a.491.491,0,0,1,.36.15l2.03,2.03A1.508,1.508,0,0,0,14,13.1a1.491,1.491,0,0,0,1.06-.44l1.18-1.17,3.71,8.45Z"},"child":[]}]}]})(props);
};
function CiMug1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Mug_1"},"child":[{"tag":"path","attr":{"d":"M18.115,5.91V4.97a1.2,1.2,0,0,0-1.2-1.2H4.265a1.2,1.2,0,0,0-1.2,1.2v9.14a11.321,11.321,0,0,0,.8,4.17A3.3,3.3,0,0,0,7,20.23h7.19a3.312,3.312,0,0,0,3.14-1.95,10.989,10.989,0,0,0,.74-3.13l1.04-.52a3.319,3.319,0,0,0,1.83-2.97V9.19A3.326,3.326,0,0,0,18.115,5.91Zm-1.73,12.01a2.3,2.3,0,0,1-2.2,1.31H7a2.312,2.312,0,0,1-2.2-1.31,10.238,10.238,0,0,1-.73-3.81V4.97a.2.2,0,0,1,.2-.2h12.65a.2.2,0,0,1,.2.2v9.14A10.238,10.238,0,0,1,16.385,17.92Zm3.55-6.26a2.287,2.287,0,0,1-1.28,2.07l-.54.27V6.93a2.316,2.316,0,0,1,1.82,2.26Z"},"child":[]}]}]})(props);
};
function CiMusicNote1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Music_Note_1"},"child":[{"tag":"path","attr":{"d":"M20.05,3.657a2.487,2.487,0,0,0-2.03-.56l-7.88,1.33a2.483,2.483,0,0,0-2.08,2.46v8.82a3,3,0,1,0,1,2.23V9.387l10.88-1.83v6.22a2.936,2.936,0,0,0-2-.77,3,3,0,1,0,3,3V5.567A2.513,2.513,0,0,0,20.05,3.657ZM6.06,19.937a2,2,0,1,1,2-2A1.993,1.993,0,0,1,6.06,19.937Zm11.88-1.93a2,2,0,1,1,2-2A2,2,0,0,1,17.94,18.007Zm2-11.46L9.06,8.377V6.887a1.483,1.483,0,0,1,1.25-1.47l7.88-1.33a1.493,1.493,0,0,1,1.75,1.48Z"},"child":[]}]}]})(props);
};
function CiNoWaitingSign (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"No_Waiting_Sign"},"child":[{"tag":"path","attr":{"d":"M12,2.07a9.93,9.93,0,1,0,7.03,16.95.374.374,0,0,0,.06-.07A9.837,9.837,0,0,0,21.935,12,9.944,9.944,0,0,0,12,2.07Zm0,18.86A8.945,8.945,0,0,1,3.065,12a8.84,8.84,0,0,1,2.28-5.95l12.61,12.61A8.925,8.925,0,0,1,12,20.93Zm6.67-2.98L6.045,5.34a8.934,8.934,0,0,1,12.62,12.61Z"},"child":[]}]}]})(props);
};
function CiPalette (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Palette"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.31,20.93a1.62,1.62,0,0,0,1.62-1.62V15.93a1.62,1.62,0,0,0-1.62-1.62H14.37l4.66-4.66a1.642,1.642,0,0,0,0-2.3L16.64,4.96a1.636,1.636,0,0,0-2.3,0L9.69,9.62V4.56a1.5,1.5,0,0,0-1.5-1.5H4.57a1.5,1.5,0,0,0-1.5,1.5V18.44a2.507,2.507,0,0,0,2.5,2.5ZM9.69,11.04l5.36-5.37a.628.628,0,0,1,.88,0l2.39,2.39a.628.628,0,0,1,0,.88L9.69,17.57ZM4.07,4.56a.5.5,0,0,1,.5-.5H8.19a.5.5,0,0,1,.5.5V8.48H4.07Zm0,4.92H8.69v4.43H4.07ZM7.29,19.93l-1.72.01a1.5,1.5,0,0,1-1.5-1.5V14.91H8.69v3.53a1.5,1.5,0,0,1-1.4,1.49m12.64-.62a.623.623,0,0,1-.62.62H9.19a2.381,2.381,0,0,0,.42-.86l3.76-3.76h5.94a.623.623,0,0,1,.62.62Z"},"child":[]},{"tag":"circle","attr":{"cx":"6.382","cy":"17.419","r":"0.844"},"child":[]}]}]}]})(props);
};
function CiPaperplane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Paper_Plane"},"child":[{"tag":"path","attr":{"d":"M21.061,11.077,3.741,4.157a.994.994,0,0,0-1.17.32,1,1,0,0,0-.01,1.22l4.49,6a.525.525,0,0,1-.01.62L2.511,18.3a1.02,1.02,0,0,0,0,1.22,1,1,0,0,0,.8.4,1.021,1.021,0,0,0,.38-.07l17.36-6.9a1.006,1.006,0,0,0,.01-1.87ZM3.371,5.087l16.06,6.42H8.061a1.329,1.329,0,0,0-.21-.41Zm-.06,13.82,4.53-5.98a1.212,1.212,0,0,0,.22-.42h11.38Z"},"child":[]}]}]})(props);
};
function CiParking1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Parking_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"},"child":[]},{"tag":"path","attr":{"d":"M12.569,8.5h-1.75a.749.749,0,0,0-.75.75v5.74a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.5h1.5a2.5,2.5,0,0,0,0-5Zm0,4h-1.5v-3h1.5a1.5,1.5,0,0,1,0,3Z"},"child":[]}]}]}]})(props);
};
function CiPassport1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Passport_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16.5,21.936h-9a2.5,2.5,0,0,1-2.5-2.5V4.564a2.5,2.5,0,0,1,2.5-2.5h9a2.5,2.5,0,0,1,2.5,2.5V19.436A2.5,2.5,0,0,1,16.5,21.936ZM7.5,3.064A1.5,1.5,0,0,0,6,4.564V19.436a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V4.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12,12.563a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,12,12.563Zm0-6a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,12,6.563Z"},"child":[]},{"tag":"path","attr":{"d":"M15,18.438H9a.5.5,0,0,1,0-1h6a.5.5,0,1,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiPause1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Pause_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8.25,21.937H6.564a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5H8.25a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,8.25,21.937ZM6.564,3.063a1.5,1.5,0,0,0-1.5,1.5V19.437a1.5,1.5,0,0,0,1.5,1.5H8.25a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M17.436,21.937H15.75a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5h1.686a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,17.436,21.937ZM15.75,3.063a1.5,1.5,0,0,0-1.5,1.5V19.437a1.5,1.5,0,0,0,1.5,1.5h1.686a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiPen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Pen"},"child":[{"tag":"path","attr":{"d":"M20.235,11.284a2.3,2.3,0,0,0-3.01-.149L15.444,5.744a2.484,2.484,0,0,0-2.1-1.7l-8.581-.93A1.5,1.5,0,0,0,3.115,4.765l.93,8.579a2.479,2.479,0,0,0,1.7,2.1l5.39,1.77a2.258,2.258,0,0,0-.51,1.43,2.257,2.257,0,0,0,2.25,2.25,2.263,2.263,0,0,0,1.591-.661l5.77-5.769a2.249,2.249,0,0,0,0-3.181Zm-14.18,3.21a1.5,1.5,0,0,1-1.02-1.26l-.9-8.39,4.01,4.01a1.188,1.188,0,0,0,.281,1.221,1.167,1.167,0,1,0,1.649-1.651,1.143,1.143,0,0,0-1.209-.269l-4.02-4.02,8.39.9a1.476,1.476,0,0,1,1.259,1.02l1.931,5.86-4.51,4.51Zm11.709-2.51a1.25,1.25,0,0,1,2.13.891,1.237,1.237,0,0,1-.369.88l-5.771,5.77a1.277,1.277,0,0,1-1.769,0,1.253,1.253,0,0,1,0-1.76Z"},"child":[]}]}]})(props);
};
function CiPenpot (props) {
  return GenIcon({"tag":"svg","attr":{"id":"Penpot","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4.415,7.22a.755.755,0,0,0-.35.64v9.67a1.536,1.536,0,0,0,.88,1.38l5.96,2.82a2.618,2.618,0,0,0,2.19,0l5.96-2.82a1.536,1.536,0,0,0,.88-1.38V7.86a.742.742,0,0,0-.36-.64l-2.23-1.15v-1a.98.98,0,0,0-.15-.52l-1.33-2.16a.749.749,0,0,0-1.28,0L13.3,4.5l-.66-1.07A.755.755,0,0,0,12,3.08a.791.791,0,0,0-.64.36l-.65,1.06L9.4,2.39a.749.749,0,0,0-1.28,0L6.805,4.55a.98.98,0,0,0-.15.52v1Zm12.93-.01.7.35-.7.33Zm-2.44-3.43h.64l.5.81h-1.64Zm1.44,1.81V8.36l-.61.29V5.59Zm-2.23,0h.62V9.12l-.62.3ZM8.445,3.78h.64l.5.81H7.945Zm1.44,1.81V9.41l-.61-.29V5.59Zm-2.23,0h.62V8.65l-.62-.29Zm-1,1.62v.68l-.7-.33ZM5.365,18a.52.52,0,0,1-.3-.47V8.24l6.43,3.04v9.59Zm6.13-7.83-.61-.29V6.64h.61Zm-.32-4.53.51-.82h.62l.51.82Zm1.94,1V9.89l-.62.29V6.64ZM12.5,20.88V11.29l6.44-3.05v9.29a.512.512,0,0,1-.31.47Z"},"child":[]}]})(props);
};
function CiPercent (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Percent"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.066Z"},"child":[]},{"tag":"path","attr":{"d":"M9,10.258a1.5,1.5,0,1,1,1.061-.439h0A1.5,1.5,0,0,1,9,10.258Zm0-2a.5.5,0,1,0,.353.146A.5.5,0,0,0,9,8.259Z"},"child":[]},{"tag":"path","attr":{"d":"M7.758,16.743A.5.5,0,0,1,7.4,15.89L15.889,7.4a.5.5,0,0,1,.707.707L8.111,16.6A.5.5,0,0,1,7.758,16.743Z"},"child":[]},{"tag":"path","attr":{"d":"M15,16.742a1.5,1.5,0,1,1,1.061-.438A1.493,1.493,0,0,1,15,16.742Zm0-2a.5.5,0,0,0-.354.147h0a.5.5,0,0,0-.146.352.5.5,0,1,0,1,0,.5.5,0,0,0-.5-.5Z"},"child":[]}]}]}]})(props);
};
function CiPhone (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Phone"},"child":[{"tag":"path","attr":{"d":"M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z"},"child":[]}]}]})(props);
};
function CiPickerEmpty (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Picker_Empty"},"child":[{"tag":"path","attr":{"d":"M20.94,5.876a2.805,2.805,0,0,0-.84-2.01,2.856,2.856,0,0,0-3.97,0l-2.21,2.21-.75-.75a.8.8,0,0,0-1.1,0,.785.785,0,0,0,0,1.1l.75.75-8.77,8.76a3.248,3.248,0,0,0-.92,2.13l-.07,1.52a1.311,1.311,0,0,0,.38.97,1.332,1.332,0,0,0,.91.38h.06l1.52-.07a3.248,3.248,0,0,0,2.13-.92l8.76-8.77.75.75a.8.8,0,0,0,1.1,0,.785.785,0,0,0,0-1.1l-.75-.75L20.1,7.9A2.828,2.828,0,0,0,20.94,5.876ZM7.35,19.236a2.22,2.22,0,0,1-1.46.63l-1.53.07a.243.243,0,0,1-.21-.09.3.3,0,0,1-.09-.21l.07-1.53a2.22,2.22,0,0,1,.63-1.46l8.77-8.76,2.59,2.59ZM19.4,7.2l-2.18,2.18-2.59-2.59,2.21-2.22a1.861,1.861,0,0,1,2.56,0,1.846,1.846,0,0,1,.54,1.31A1.869,1.869,0,0,1,19.4,7.2Z"},"child":[]}]}]})(props);
};
function CiPickerHalf (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Picker_Half"},"child":[{"tag":"path","attr":{"d":"M20.936,5.889a2.825,2.825,0,0,0-4.81-2.02l-2.21,2.22-.75-.75a.771.771,0,0,0-.55-.22.8.8,0,0,0-.55.22.785.785,0,0,0,0,1.1l.75.75-8.76,8.76a3.154,3.154,0,0,0-.92,2.13l-.07,1.52a1.316,1.316,0,0,0,1.28,1.35h.06l1.52-.07a3.21,3.21,0,0,0,2.13-.93l8.76-8.76.75.75a.8.8,0,0,0,1.1,0,.785.785,0,0,0,0-1.1l-.75-.75,2.18-2.18A2.845,2.845,0,0,0,20.936,5.889Zm-8.56,8.33H7.2l6.33-6.32,2.59,2.59ZM19.4,7.2l-2.18,2.19L14.626,6.8l2.21-2.22a1.823,1.823,0,0,1,2.56,0,1.859,1.859,0,0,1,0,2.62Z"},"child":[]}]}]})(props);
};
function CiPill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Pill"},"child":[{"tag":"path","attr":{"d":"M19.31,4.691a5.5,5.5,0,0,0-7.78,0l-6.84,6.84a5.5,5.5,0,0,0,3.89,9.39,5.524,5.524,0,0,0,3.89-1.61l6.84-6.84a5.5,5.5,0,0,0,0-7.78Zm-.71,7.07-3.42,3.42L8.82,8.821,12.24,5.4a4.5,4.5,0,0,1,7.68,3.17A4.429,4.429,0,0,1,18.6,11.761Z"},"child":[]}]}]})(props);
};
function CiPillsBottle1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"meds_Bottle_1"},"child":[{"tag":"path","attr":{"d":"M17.435,2.06H6.565a2.5,2.5,0,0,0-2.5,2.5v2a1.492,1.492,0,0,0,1.22,1.47V19.44a2.5,2.5,0,0,0,2.5,2.5h8.43a2.5,2.5,0,0,0,2.5-2.5V8.03a1.492,1.492,0,0,0,1.22-1.47v-2A2.5,2.5,0,0,0,17.435,2.06Zm.28,17.38a1.5,1.5,0,0,1-1.5,1.5H7.785a1.5,1.5,0,0,1-1.5-1.5v-.88h3.52a.491.491,0,0,0,.48-.5.485.485,0,0,0-.48-.5H6.285V15h2.57a.5.5,0,0,0,0-1H6.285V11.45h3.52a.491.491,0,0,0,.48-.5.485.485,0,0,0-.48-.5H6.285V8.06h11.43Zm1.22-12.88a.5.5,0,0,1-.5.5H5.565a.5.5,0,0,1-.5-.5v-2a1.5,1.5,0,0,1,1.5-1.5h10.87a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiPizza (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Pizza"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.807,13.437l-.01-.04a19.05,19.05,0,0,0-10.23-10.21,1.574,1.574,0,0,0-2.08.93l-5.32,14.69a1.58,1.58,0,0,0,1.48,2.12,1.654,1.654,0,0,0,.54-.09l14.7-5.32a1.585,1.585,0,0,0,.91-.85A1.547,1.547,0,0,0,20.807,13.437Zm-6.98,2.98a1,1,0,0,0,.2.16L4.847,19.9a.582.582,0,0,1-.6-.14.556.556,0,0,1-.14-.61l2.39-6.6a1,1,0,0,0,.16.2,1.81,1.81,0,0,0,2.56-2.56,1.782,1.782,0,0,0-1.7-.47l1.09-2.98a17.346,17.346,0,0,1,6.82,5.57,2.447,2.447,0,0,0-1.6.71A2.4,2.4,0,0,0,13.827,16.417Zm6.05-2.15a.592.592,0,0,1-.33.31l-1.32.47c-.11-.23-.22-.45-.33-.67-.12-.24-.25-.48-.38-.71-.31-.55-.65-1.08-1-1.58a18.655,18.655,0,0,0-7.57-6.3l.48-1.33a.561.561,0,0,1,.31-.33.456.456,0,0,1,.23-.05.793.793,0,0,1,.25.05,18.013,18.013,0,0,1,9.67,9.68v.02A.561.561,0,0,1,19.877,14.267Z"},"child":[]},{"tag":"circle","attr":{"cx":"7.835","cy":"16.489","r":"1.075"},"child":[]}]}]}]})(props);
};
function CiPlane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Plane"},"child":[{"tag":"path","attr":{"d":"M11.9,20.936H10.85a.911.911,0,0,1-.9-1.023l.693-5.548H7.3l-.513.9a1.329,1.329,0,0,1-.992.657L5.1,16a.9.9,0,0,1-.8-.31.912.912,0,0,1-.185-.839l.774-2.769a.318.318,0,0,0,0-.173L4.114,9.145A.909.909,0,0,1,5.1,8l.695.083a1.331,1.331,0,0,1,.992.656l.513.9h3.34L9.946,4.088a.911.911,0,0,1,.9-1.024H11.9a1.327,1.327,0,0,1,1.236.857l2.144,5.714h1.046a8.5,8.5,0,0,1,1.758.184,2.166,2.166,0,0,1,1.429.9,2.209,2.209,0,0,1,.365,1.7A2.288,2.288,0,0,1,17.95,14.2l-.16.024a10.926,10.926,0,0,1-1.721.137h-.787l-2.144,5.714A1.327,1.327,0,0,1,11.9,20.936Zm-.951-1H11.9a.323.323,0,0,0,.3-.209l2.214-5.905a.71.71,0,0,1,.661-.457h.991a9.946,9.946,0,0,0,1.567-.125l.16-.025a1.3,1.3,0,0,0,1.1-.979,1.227,1.227,0,0,0-.2-.937,1.2,1.2,0,0,0-.793-.5,7.647,7.647,0,0,0-1.577-.167h-1.25a.711.711,0,0,1-.661-.456L12.2,4.273a.323.323,0,0,0-.3-.209h-.951l.722,5.778a.7.7,0,0,1-.7.793H7.127a.7.7,0,0,1-.614-.359l-.6-1.045a.32.32,0,0,0-.241-.16L5.113,9l.738,2.64a1.34,1.34,0,0,1,0,.711L5.113,15l.562-.067a.32.32,0,0,0,.241-.16l.6-1.049a.7.7,0,0,1,.612-.355h3.846a.7.7,0,0,1,.7.794ZM7.386,14.212l0,.005Zm3.295-.179v0Zm0-4.067v0Zm-3.3-.186,0,0Z"},"child":[]}]}]})(props);
};
function CiPlay1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Play_1"},"child":[{"tag":"path","attr":{"d":"M6.562,21.94a2.5,2.5,0,0,1-2.5-2.5V4.56A2.5,2.5,0,0,1,7.978,2.5L18.855,9.939a2.5,2.5,0,0,1,0,4.12L7.977,21.5A2.5,2.5,0,0,1,6.562,21.94Zm0-18.884a1.494,1.494,0,0,0-.7.177,1.477,1.477,0,0,0-.8,1.327V19.439a1.5,1.5,0,0,0,2.35,1.235l10.877-7.44a1.5,1.5,0,0,0,0-2.471L7.413,3.326A1.491,1.491,0,0,0,6.564,3.056Z"},"child":[]}]}]})(props);
};
function CiPlug1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Plug_1"},"child":[{"tag":"path","attr":{"d":"M17.305,5.755H15.5V2.545a.5.5,0,0,0-1,0v3.21h-5V2.545a.5.5,0,0,0-1,0v3.21H6.7a1.566,1.566,0,0,0-1.57,1.57v4.28a7.046,7.046,0,0,0,6.37,7.11v2.72a.5.5,0,0,0,1,0v-2.7a6.874,6.874,0,0,0,6.38-6.86V7.325A1.573,1.573,0,0,0,17.305,5.755Zm.57,6.12a5.875,5.875,0,0,1-6.06,5.87,6.054,6.054,0,0,1-5.69-6.14V7.325a.563.563,0,0,1,.57-.57h10.61a.57.57,0,0,1,.57.57Z"},"child":[]}]}]})(props);
};
function CiPower (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Power"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M6.638,5.209a8.782,8.782,0,1,0,13.917,8.96,8.871,8.871,0,0,0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93,7.93,0,0,1,3.082,7.113,7.787,7.787,0,0,1-15.308.956A7.9,7.9,0,0,1,7.345,5.916c.507-.394-.205-1.1-.707-.707Z"},"child":[]},{"tag":"path","attr":{"d":"M12.5,12.519a.5.5,0,0,1-1,0V3.548h0a.5.5,0,0,1,1,0Z"},"child":[]}]}]}]})(props);
};
function CiRainbow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Rainbow"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M3.089,16.71A9,9,0,0,1,8.97,8.326,8.912,8.912,0,0,1,20.911,16.71a.5.5,0,0,0,1,0,10.033,10.033,0,0,0-6.46-9.291,9.981,9.981,0,0,0-11.06,2.944,10.058,10.058,0,0,0-2.3,6.347.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M5.985,16.71A6.078,6.078,0,0,1,12,10.7a6.078,6.078,0,0,1,6.015,6.015.5.5,0,0,0,1,0A7.013,7.013,0,0,0,6.606,12.228,7.151,7.151,0,0,0,4.985,16.71a.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M8.88,16.71a3.12,3.12,0,0,1,6.24,0,.5.5,0,0,0,1,0,4.119,4.119,0,0,0-7.255-2.669A4.219,4.219,0,0,0,7.88,16.71a.5.5,0,0,0,1,0Z"},"child":[]}]}]}]})(props);
};
function CiRead (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"read"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z"},"child":[]},{"tag":"path","attr":{"d":"M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2.028"},"child":[]}]}]}]})(props);
};
function CiReceipt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Receipt"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,21.919a1.454,1.454,0,0,1-.791-.232L9.645,20.666a.47.47,0,0,0-.439-.028l-1.776.829a1.466,1.466,0,0,1-1.4-.087,1.214,1.214,0,0,1-.581-1.02V3.641A1.217,1.217,0,0,1,6.033,2.62a1.469,1.469,0,0,1,1.4-.087l1.775.829a.469.469,0,0,0,.439-.026L11.21,2.313a1.464,1.464,0,0,1,1.581,0l1.564,1.022a.469.469,0,0,0,.44.026l1.775-.829a1.461,1.461,0,0,1,1.4.087,1.217,1.217,0,0,1,.581,1.021V20.36a1.216,1.216,0,0,1-.581,1.02,1.46,1.46,0,0,1-1.4.087L14.8,20.639a.474.474,0,0,0-.441.027l-1.564,1.021A1.448,1.448,0,0,1,12,21.919ZM9.4,19.6a1.44,1.44,0,0,1,.79.234l1.564,1.02a.464.464,0,0,0,.487,0l1.565-1.021a1.462,1.462,0,0,1,1.41-.095l1.774.828a.463.463,0,0,0,.437-.024.221.221,0,0,0,.118-.177V3.641a.219.219,0,0,0-.118-.177.461.461,0,0,0-.437-.025l-1.775.829a1.458,1.458,0,0,1-1.409-.095L12.243,3.151a.467.467,0,0,0-.486,0L10.192,4.172a1.467,1.467,0,0,1-1.41.1L7.007,3.439a.461.461,0,0,0-.437.025.219.219,0,0,0-.118.177V20.36a.221.221,0,0,0,.118.177.468.468,0,0,0,.437.024l1.776-.829A1.461,1.461,0,0,1,9.4,19.6Z"},"child":[]},{"tag":"path","attr":{"d":"M15.046,7.4H8.954a.5.5,0,0,1,0-1h6.092a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M15.046,10.953H8.954a.5.5,0,0,1,0-1h6.092a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M12,14.5H8.954a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiRedo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Redo"},"child":[{"tag":"path","attr":{"d":"M4.061,13.67A7.958,7.958,0,0,0,16.2,19.74a8.061,8.061,0,0,0,3.77-6.77.5.5,0,0,0-1,0,6.976,6.976,0,0,1-11,5.7,6.969,6.969,0,0,1,1-11.97,10.075,10.075,0,0,1,4.64-.69V7.46a.5.5,0,0,0,.81.39l2.47-1.95a.5.5,0,0,0,0-.79L14.4,3.17a.5.5,0,0,0-.8.4V5.01c-.71-.01-1.43-.03-2.13.02a7.985,7.985,0,0,0-7.41,8.64Z"},"child":[]}]}]})(props);
};
function CiRepeat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Repeat"},"child":[{"tag":"path","attr":{"d":"M2.078,17.562c-0.01,-0.039 -0.016,-0.08 -0.016,-0.123c0,-0.138 0.056,-0.263 0.147,-0.353c0.008,-0.009 1.416,-1.417 2,-2c0.198,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.147,1.146l15.669,0c0.828,0 1.5,-0.671 1.5,-1.5l0,-3.439c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,3.439c0,1.381 -1.12,2.5 -2.5,2.5l-15.669,0l1.147,1.147c0.198,0.198 0.183,0.507 -0,0.707c-0.183,0.199 -0.522,0.185 -0.707,-0l-2,-2c-0.066,-0.063 -0.11,-0.143 -0.131,-0.231Zm19.845,-11.105c0.01,0.039 0.015,0.08 0.015,0.122c0,0.138 -0.056,0.263 -0.147,0.354c-0.008,0.008 -1.416,1.417 -2,2c-0.197,0.198 -0.507,0.183 -0.707,-0c-0.199,-0.183 -0.185,-0.522 0,-0.707l1.147,-1.147l-15.669,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,3.439c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-3.439c0,-1.381 1.12,-2.5 2.5,-2.5l15.669,0l-1.146,-1.146c-0.198,-0.198 -0.183,-0.507 -0,-0.707c0.183,-0.199 0.522,-0.185 0.707,-0l2,2c0.065,0.063 0.11,0.143 0.131,0.231Z"},"child":[]}]}]})(props);
};
function CiRollingSuitcase (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Rolling_Suitcase"},"child":[{"tag":"path","attr":{"d":"M16.25,7.49H15V3.56a1.5,1.5,0,0,0-1.5-1.5h-3A1.511,1.511,0,0,0,9,3.56V7.49H7.75a2.5,2.5,0,0,0-2.5,2.5v8.44a2.5,2.5,0,0,0,2.5,2.5h.5v.01a1,1,0,0,0,2,0v-.01h3.5v.01a1,1,0,0,0,2,0v-.01h.5a2.5,2.5,0,0,0,2.5-2.5V9.99A2.5,2.5,0,0,0,16.25,7.49ZM10,3.56a.508.508,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V7.5H10Zm7.75,14.87a1.5,1.5,0,0,1-1.5,1.5H7.75a1.5,1.5,0,0,1-1.5-1.5V9.99a1.511,1.511,0,0,1,1.5-1.5h8.5a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiRoute (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Route"},"child":[{"tag":"path","attr":{"d":"M21.792,17.086c-.58-.58-1.16-1.17-1.75-1.75-.08-.08-.16-.17-.25-.25a.492.492,0,0,0-.7,0,.5.5,0,0,0,0,.71l1.14,1.14H9.282a2.22,2.22,0,0,1,0-4.44h3a3.215,3.215,0,1,0,0-6.43H7.012a2.5,2.5,0,1,0,0,1h5.27a2.215,2.215,0,1,1,0,4.43h-3a3.22,3.22,0,1,0,0,6.44h10.96l-.9.9c-.09.08-.17.17-.25.25a.5.5,0,0,0,0,.71.511.511,0,0,0,.7,0l1.75-1.75.25-.25A.5.5,0,0,0,21.792,17.086ZM4.562,8.066a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,4.562,8.066Z"},"child":[]}]}]})(props);
};
function CiRouter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Router"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.44,10.94H17.93V4.54a.5.5,0,0,0-1,0v6.4H7.06V7a.5.5,0,0,0-1,0v3.94H4.56a2.507,2.507,0,0,0-2.5,2.5v4a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5v-4A2.5,2.5,0,0,0,19.44,10.94Zm1.5,6.5a1.5,1.5,0,0,1-1.5,1.5H4.56a1.511,1.511,0,0,1-1.5-1.5v-4a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"4.75","cy":"15.436","r":"0.75"},"child":[]},{"tag":"circle","attr":{"cx":"8.25","cy":"15.436","r":"0.75"},"child":[]},{"tag":"path","attr":{"d":"M18.5,16.936h-5a1.5,1.5,0,1,1,0-3h5a1.5,1.5,0,0,1,0,3Zm-5-2a.5.5,0,1,0,0,1h5a.5.5,0,0,0,0-1Z"},"child":[]}]}]}]})(props);
};
function CiRuler (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Ruler"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M9.479,3.5a1.5,1.5,0,0,0-2.12,0L3.5,7.35a1.516,1.516,0,0,0-.44,1.06A1.5,1.5,0,0,0,3.5,9.47L14.519,20.5a1.509,1.509,0,0,0,2.13,0l3.85-3.86a1.491,1.491,0,0,0,0-2.12ZM8.359,7.08a.5.5,0,0,0,0,.71.524.524,0,0,0,.71,0c.55-.56,1.09-1.1,1.65-1.64l1.25,1.25-.9.9a.483.483,0,0,0,0,.7.5.5,0,0,0,.71,0c.29-.3.6-.6.9-.89l1.25,1.25-1.64,1.65a.495.495,0,0,0,.7.7c.56-.55,1.1-1.09,1.65-1.64l1.25,1.25-.9.9a.524.524,0,0,0-.14.36.5.5,0,0,0,.14.35.513.513,0,0,0,.71,0l.9-.9,1.26,1.26-1.65,1.64a.5.5,0,0,0,.71.71c.55-.56,1.09-1.1,1.65-1.64l1.23,1.23a.5.5,0,0,1,0,.7l-3.86,3.86a.5.5,0,0,1-.71,0L4.209,8.77a.491.491,0,0,1-.15-.36.485.485,0,0,1,.15-.35L8.069,4.2a.508.508,0,0,1,.7,0l1.24,1.24Z"},"child":[]},{"tag":"path","attr":{"d":"M18.939,12.96l-.04-.04c.01,0,.01,0,.02.01S18.939,12.95,18.939,12.96Z"},"child":[]}]}]}]})(props);
};
function CiSatellite1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Satellite_1"},"child":[{"tag":"path","attr":{"d":"M17.135,12.37a5.447,5.447,0,0,0,3.42-1.2.982.982,0,0,0,.37-.72,1.04,1.04,0,0,0-.31-.8l-2.78-2.78c.39-.39.8-.8,1.19-1.2.08-.07.15-.14.23-.22a.511.511,0,0,0,0-.7.5.5,0,0,0-.71,0c-.48.47-.94.94-1.42,1.41l-2.78-2.78a1.077,1.077,0,0,0-.8-.31,1,1,0,0,0-.72.37,5.454,5.454,0,0,0-1.19,3.67l-1.45,1.46L7.855,6.24a.978.978,0,0,0-1.41,0L3.365,9.32a1,1,0,0,0,0,1.41L5.7,13.06l-.41.4a2.65,2.65,0,0,0,0,3.74L6.8,18.71a2.632,2.632,0,0,0,3.74,0l.4-.4,2.33,2.33a1,1,0,0,0,1.41,0l3.08-3.09a1,1,0,0,0,0-1.41l-2.32-2.32,1.45-1.46A2.09,2.09,0,0,0,17.135,12.37ZM4.065,10.03l3.09-3.09,2.32,2.33L6.4,12.35Zm12.99,6.82-3.08,3.08-2.33-2.33,3.08-3.08Zm-5.23-8.51a5.482,5.482,0,0,0,3.84,3.83l-5.84,5.84a1.642,1.642,0,0,1-2.32,0l-1.52-1.52a1.642,1.642,0,0,1,0-2.32Zm2.12,1.71a4.417,4.417,0,0,1-.3-5.96l3.13,3.13,3.14,3.14.02.03A4.5,4.5,0,0,1,13.945,10.05Z"},"child":[]}]}]})(props);
};
function CiSaveDown1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Save_Down_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.617,6.383a7.944,7.944,0,0,1-1.748,12.568A8.028,8.028,0,0,1,4.283,13.908,8.028,8.028,0,0,1,6.378,6.391c.451-.46-.256-1.168-.707-.707A8.946,8.946,0,0,0,15.427,20.27a8.946,8.946,0,0,0,2.9-14.594c-.451-.461-1.158.247-.707.707Z"},"child":[]},{"tag":"path","attr":{"d":"M15.355,10.6l-3,3a.5.5,0,0,1-.35.15.508.508,0,0,1-.36-.15l-3-3a.5.5,0,0,1,.71-.71l2.14,2.14V3.555a.508.508,0,0,1,.5-.5.5.5,0,0,1,.5.5v8.49l2.15-2.16a.5.5,0,0,1,.71.71Z"},"child":[]}]}]}]})(props);
};
function CiSaveDown2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Save_Down_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.948H5.563a2.372,2.372,0,0,1-2.5-2.21v-11a2.372,2.372,0,0,1,2.5-2.211h.462a.5.5,0,0,1,0,1H5.563a1.38,1.38,0,0,0-1.5,1.211v11a1.38,1.38,0,0,0,1.5,1.21H18.437a1.38,1.38,0,0,0,1.5-1.21v-11a1.38,1.38,0,0,0-1.5-1.211h-.462a.5.5,0,0,1,0-1h.462a2.372,2.372,0,0,1,2.5,2.211v11A2.372,2.372,0,0,1,18.437,20.948Z"},"child":[]},{"tag":"path","attr":{"d":"M15.355,10.592l-3,3a.5.5,0,0,1-.35.15.508.508,0,0,1-.36-.15l-3-3a.5.5,0,0,1,.71-.71l2.14,2.139V3.552a.508.508,0,0,1,.5-.5.5.5,0,0,1,.5.5v8.49l2.15-2.16a.5.5,0,0,1,.71.71Z"},"child":[]}]}]}]})(props);
};
function CiSaveUp1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Save_Up_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.617,6.374a7.946,7.946,0,0,1-1.748,12.569A8.028,8.028,0,0,1,4.283,13.9,8.029,8.029,0,0,1,6.378,6.382c.451-.46-.256-1.168-.707-.707a8.946,8.946,0,0,0,9.756,14.587,8.946,8.946,0,0,0,2.9-14.595c-.451-.46-1.158.247-.707.707Z"},"child":[]},{"tag":"path","attr":{"d":"M8.645,6.213l3-3a.5.5,0,0,1,.35-.15.508.508,0,0,1,.36.15l3,3a.5.5,0,0,1-.71.71l-2.14-2.14v8.47a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V4.763l-2.15,2.16a.5.5,0,0,1-.71-.71Z"},"child":[]}]}]}]})(props);
};
function CiSaveUp2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Save_Up_2"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.937H5.563a2.372,2.372,0,0,1-2.5-2.211v-11a2.372,2.372,0,0,1,2.5-2.212h.462a.5.5,0,0,1,0,1H5.563a1.381,1.381,0,0,0-1.5,1.212v11a1.38,1.38,0,0,0,1.5,1.211H18.437a1.38,1.38,0,0,0,1.5-1.211v-11a1.381,1.381,0,0,0-1.5-1.212h-.462a.5.5,0,0,1,0-1h.462a2.372,2.372,0,0,1,2.5,2.212v11A2.372,2.372,0,0,1,18.437,20.937Z"},"child":[]},{"tag":"path","attr":{"d":"M8.645,6.213l3-3a.5.5,0,0,1,.35-.15.508.508,0,0,1,.36.15l3,3a.5.5,0,0,1-.71.71l-2.14-2.14v8.47a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V4.763l-2.15,2.16a.5.5,0,0,1-.71-.71Z"},"child":[]}]}]}]})(props);
};
function CiSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .GenIcon */ .k5)({"tag":"svg","attr":{"version":"1.1","id":"search","x":"0px","y":"0px","viewBox":"0 0 24 24","style":"enable-background:new 0 0 24 24;"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31\n\t\tc0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z\n\t\t M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02\n\t\tz"},"child":[]}]}]})(props);
};
function CiServer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Server"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.437,11H3.563a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,11ZM3.563,5.065a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5V5.565a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,19.935H3.563a1.5,1.5,0,0,1-1.5-1.5v-3.93a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,19.935ZM3.563,14.005a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5v-3.93a.5.5,0,0,0-.5-.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"5.563","cy":"7.53","r":"0.5"},"child":[]},{"tag":"circle","attr":{"cx":"7.563","cy":"7.53","r":"0.5"},"child":[]},{"tag":"path","attr":{"d":"M13.452,8.03a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"circle","attr":{"cx":"5.563","cy":"16.47","r":"0.5"},"child":[]},{"tag":"circle","attr":{"cx":"7.563","cy":"16.47","r":"0.5"},"child":[]},{"tag":"path","attr":{"d":"M13.452,16.97a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiSettings (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Settings"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"},"child":[]},{"tag":"path","attr":{"d":"M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"},"child":[]}]}]}]})(props);
};
function CiShare1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Share_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.223,11.075a.5.5,0,0,0,.7.71l7-7v3.58a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V3.575a.5.5,0,0,0-.5-.5h-4.79a.5.5,0,0,0,0,1h3.58Z"},"child":[]},{"tag":"path","attr":{"d":"M17.876,20.926H6.124a3.053,3.053,0,0,1-3.05-3.05V6.124a3.053,3.053,0,0,1,3.05-3.05h6.028a.5.5,0,0,1,0,1H6.124a2.053,2.053,0,0,0-2.05,2.05V17.876a2.053,2.053,0,0,0,2.05,2.05H17.876a2.053,2.053,0,0,0,2.05-2.05V11.849a.5.5,0,0,1,1,0v6.027A3.053,3.053,0,0,1,17.876,20.926Z"},"child":[]}]}]}]})(props);
};
function CiShare2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Share_2"},"child":[{"tag":"path","attr":{"d":"M18.44,15.94a2.5,2.5,0,0,0-1.96.95L7.97,12.64a2.356,2.356,0,0,0,0-1.29l8.5-4.25a2.5,2.5,0,1,0-.53-1.54,2.269,2.269,0,0,0,.09.65l-8.5,4.25a2.5,2.5,0,1,0,0,3.08l8.5,4.25a2.269,2.269,0,0,0-.09.65,2.5,2.5,0,1,0,2.5-2.5Zm0-11.88a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,18.44,4.06ZM5.56,13.5A1.5,1.5,0,1,1,7.06,12,1.5,1.5,0,0,1,5.56,13.5Zm12.88,6.44a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,18.44,19.94Z"},"child":[]}]}]})(props);
};
function CiShirt (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Shirt"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16.657,21.949H7.343a2.5,2.5,0,0,1-2.5-2.5V11.222a6.468,6.468,0,0,1,.112-1.2L5.224,8.59a5.572,5.572,0,0,0,.094-1.015V3.3a1.252,1.252,0,0,1,1.25-1.25H8.815a1.251,1.251,0,0,1,1.25,1.25V6.413a1.935,1.935,0,0,0,3.87,0V3.3a1.251,1.251,0,0,1,1.25-1.25h2.247a1.252,1.252,0,0,1,1.25,1.25V7.575a5.486,5.486,0,0,0,.1,1.015l.269,1.431a6.57,6.57,0,0,1,.111,1.2v8.227A2.5,2.5,0,0,1,16.657,21.949ZM6.568,3.051a.251.251,0,0,0-.25.25V7.575a6.543,6.543,0,0,1-.111,1.2l-.27,1.432a5.5,5.5,0,0,0-.094,1.015v8.227a1.5,1.5,0,0,0,1.5,1.5h9.314a1.5,1.5,0,0,0,1.5-1.5V11.222a5.519,5.519,0,0,0-.094-1.016l-.269-1.43a6.453,6.453,0,0,1-.112-1.2V3.3a.251.251,0,0,0-.25-.25H15.185a.251.251,0,0,0-.25.25V6.413a2.935,2.935,0,0,1-5.87,0V3.3a.251.251,0,0,0-.25-.25Z"},"child":[]},{"tag":"path","attr":{"d":"M11.986,17.333V13.874a.075.075,0,0,0-.114-.064l-.638.392a.149.149,0,0,1-.228-.128v-.65a.3.3,0,0,1,.145-.258l.764-.457a.3.3,0,0,1,.154-.043H12.7a.3.3,0,0,1,.3.3v4.367a.3.3,0,0,1-.3.3h-.409A.3.3,0,0,1,11.986,17.333Z"},"child":[]}]}]}]})(props);
};
function CiShop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Shop"},"child":[{"tag":"path","attr":{"d":"M20.6,5.26a2.512,2.512,0,0,0-2.48-2.2H5.885a2.512,2.512,0,0,0-2.48,2.19l-.3,2.47a3.411,3.411,0,0,0,1.16,2.56v8.16a2.5,2.5,0,0,0,2.5,2.5h10.47a2.5,2.5,0,0,0,2.5-2.5V10.28A3.411,3.411,0,0,0,20.9,7.72Zm-6.59,14.68h-4V15.86a1.5,1.5,0,0,1,1.5-1.5h1a1.5,1.5,0,0,1,1.5,1.5Zm4.73-1.5a1.5,1.5,0,0,1-1.5,1.5h-2.23V15.86a2.5,2.5,0,0,0-2.5-2.5h-1a2.5,2.5,0,0,0-2.5,2.5v4.08H6.765a1.5,1.5,0,0,1-1.5-1.5V10.87a3.223,3.223,0,0,0,1.24.24,3.358,3.358,0,0,0,2.58-1.19.241.241,0,0,1,.34,0,3.358,3.358,0,0,0,2.58,1.19A3.393,3.393,0,0,0,14.6,9.92a.219.219,0,0,1,.16-.07.238.238,0,0,1,.17.07,3.358,3.358,0,0,0,2.58,1.19,3.173,3.173,0,0,0,1.23-.24Zm-1.23-8.33a2.386,2.386,0,0,1-1.82-.83,1.2,1.2,0,0,0-.92-.43h-.01a1.194,1.194,0,0,0-.92.42,2.476,2.476,0,0,1-3.65,0,1.24,1.24,0,0,0-1.86,0A2.405,2.405,0,0,1,4.1,7.78l.3-2.4a1.517,1.517,0,0,1,1.49-1.32h12.23a1.5,1.5,0,0,1,1.49,1.32l.29,2.36A2.392,2.392,0,0,1,17.505,10.11Z"},"child":[]}]}]})(props);
};
function CiShoppingBasket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Shopping_Basket"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.44,7.937H17.3l-1.21-4.51a.508.508,0,0,0-.61-.35.489.489,0,0,0-.35.61l1.14,4.25H7.74l1.14-4.25a.5.5,0,0,0-.36-.61.513.513,0,0,0-.61.35l-1.2,4.51H4.56a1.5,1.5,0,0,0-.32,2.96l.74,7.77a2.492,2.492,0,0,0,2.49,2.27h9.06a2.492,2.492,0,0,0,2.49-2.27l.74-7.77a1.5,1.5,0,0,0-.32-2.96Zm-1.41,10.64a1.5,1.5,0,0,1-1.5,1.36H7.47a1.5,1.5,0,0,1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.508.508,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.44a.5.5,0,0,1,.5.5A.508.508,0,0,1,19.44,9.937Z"},"child":[]},{"tag":"path","attr":{"d":"M9.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,9.5,17.432Z"},"child":[]},{"tag":"path","attr":{"d":"M14.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,14.5,17.432Z"},"child":[]}]}]}]})(props);
};
function CiShoppingCart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Shopping_Cart"},"child":[{"tag":"path","attr":{"d":"M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"},"child":[]}]}]})(props);
};
function CiShoppingTag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Shopping_Tag"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.605,5.988a2.8,2.8,0,0,0-2.6-2.59l-4.56-.32a2.842,2.842,0,0,0-2.17.81L3.9,11.278a2.794,2.794,0,0,0,0,3.95l4.87,4.88a2.8,2.8,0,0,0,3.96,0l7.38-7.39a2.779,2.779,0,0,0,.81-2.17ZM12.015,19.4a1.8,1.8,0,0,1-2.54,0l-4.87-4.87a1.793,1.793,0,0,1,0-2.55l1.17-1.17,7.42,7.42Zm7.38-7.38-5.5,5.5L6.485,10.1l5.5-5.5a1.786,1.786,0,0,1,1.27-.53c.04,0,.08.01.12.01l4.56.32a1.8,1.8,0,0,1,1.67,1.66l.32,4.56A1.829,1.829,0,0,1,19.4,12.018Z"},"child":[]},{"tag":"circle","attr":{"cx":"17","cy":"6.999","r":"0.862"},"child":[]}]}]}]})(props);
};
function CiShuffle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Shuffle"},"child":[{"tag":"path","attr":{"d":"M21.794,17.082a.513.513,0,0,1,0,.71c-.08.08-.17.16-.25.25-.58.58-1.17,1.16-1.75,1.75a.5.5,0,0,1-.71-.71c.09-.08.17-.17.25-.25l.9-.9h-3.85a2.509,2.509,0,0,1-2.15-1.21L12,12.982l-2.24,3.74a2.509,2.509,0,0,1-2.15,1.21H2.564a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h5.05A1.507,1.507,0,0,0,8.9,16.2l2.51-4.2L8.9,7.792a1.507,1.507,0,0,0-1.29-.73H2.564a.5.5,0,0,1,0-1h5.05a2.518,2.518,0,0,1,2.15,1.22L12,11.032l2.24-3.75a2.489,2.489,0,0,1,2.14-1.22h3.85l-1.15-1.15a.5.5,0,1,1,.71-.7c.08.08.17.16.25.25.58.58,1.17,1.16,1.75,1.75a.5.5,0,0,1,0,.7c-.08.09-.17.17-.25.25-.58.59-1.17,1.17-1.75,1.75a.5.5,0,1,1-.71-.7l.25-.25.9-.9h-3.85a1.519,1.519,0,0,0-1.29.73L12.584,12l2.51,4.2a1.519,1.519,0,0,0,1.29.73h3.84l-1.14-1.14a.5.5,0,0,1,.71-.71Z"},"child":[]}]}]})(props);
};
function CiSignpostDuo1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Signpost_Duo_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.437,11.5H6.536a2.628,2.628,0,0,1-1.723-.629L2.564,8.915A1.329,1.329,0,0,1,2.57,6.831L4.813,4.88a2.619,2.619,0,0,1,1.723-.629h13.9a1.451,1.451,0,0,1,1.5,1.393v4.463A1.451,1.451,0,0,1,20.437,11.5Zm-13.9-6.25a1.64,1.64,0,0,0-1.067.384L3.215,7.6a.364.364,0,0,0-.152.281.349.349,0,0,0,.141.27l.011.01,2.254,1.961a1.644,1.644,0,0,0,1.067.384h13.9a.463.463,0,0,0,.5-.394V5.644a.463.463,0,0,0-.5-.393Z"},"child":[]},{"tag":"path","attr":{"d":"M17.464,19.749H3.563a1.451,1.451,0,0,1-1.5-1.394V13.892a1.451,1.451,0,0,1,1.5-1.393h13.9a2.621,2.621,0,0,1,1.724.63l2.249,1.956a1.329,1.329,0,0,1-.007,2.083l-2.242,1.951A2.625,2.625,0,0,1,17.464,19.749ZM3.563,13.5a.463.463,0,0,0-.5.393v4.463a.463.463,0,0,0,.5.394h13.9a1.644,1.644,0,0,0,1.068-.385l2.253-1.96a.362.362,0,0,0,.152-.28.351.351,0,0,0-.141-.271l-.011-.01-2.254-1.96a1.64,1.64,0,0,0-1.067-.384Z"},"child":[]}]}]}]})(props);
};
function CiSignpostL1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Signpost_L_1"},"child":[{"tag":"path","attr":{"d":"M20.437,16H6.536a2.489,2.489,0,0,1-1.744-.709L2.542,13.1a1.5,1.5,0,0,1,.007-2.2L4.792,8.709A2.483,2.483,0,0,1,6.536,8h13.9a1.5,1.5,0,0,1,1.5,1.5v5A1.5,1.5,0,0,1,20.437,16ZM6.536,9a1.491,1.491,0,0,0-1.046.425l-2.255,2.2A.5.5,0,0,0,3.063,12a.494.494,0,0,0,.162.369l.01.01,2.254,2.2A1.492,1.492,0,0,0,6.536,15h13.9a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,0-.5-.5Z"},"child":[]}]}]})(props);
};
function CiSignpostR1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Signpost_R_1"},"child":[{"tag":"path","attr":{"d":"M3.563,8h13.9a2.489,2.489,0,0,1,1.744.709l2.25,2.192a1.5,1.5,0,0,1-.007,2.2l-2.243,2.187A2.483,2.483,0,0,1,17.464,16H3.563a1.5,1.5,0,0,1-1.5-1.5v-5A1.5,1.5,0,0,1,3.563,8Zm13.9,7a1.491,1.491,0,0,0,1.046-.425l2.255-2.2A.5.5,0,0,0,20.937,12a.494.494,0,0,0-.162-.369l-.01-.01-2.254-2.2A1.492,1.492,0,0,0,17.464,9H3.563a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5Z"},"child":[]}]}]})(props);
};
function CiSliderHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Slider_Horizontal"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.45,7.5H9.99A2,2,0,0,0,8.06,6h-1A2,2,0,0,0,5.13,7.5H2.55a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5H5.13A2,2,0,0,0,7.06,10h1A2,2,0,0,0,9.99,8.5H21.45A.5.5,0,0,0,21.45,7.5ZM8.06,9h-1a1.006,1.006,0,0,1-1-.98V8a1,1,0,0,1,1-1h1a1,1,0,1,1,0,2Z"},"child":[]},{"tag":"path","attr":{"d":"M21.45,15.5H18.87A2,2,0,0,0,16.94,14h-1a2,2,0,0,0-1.93,1.5H2.55a.5.5,0,0,0,0,1H14.01A2,2,0,0,0,15.94,18h1a2,2,0,0,0,1.93-1.5h2.58a.5.5,0,0,0,.5-.5A.508.508,0,0,0,21.45,15.5Zm-3.51.5a1,1,0,0,1-1,1h-1a1,1,0,1,1,0-2h1a1.006,1.006,0,0,1,1,.98Z"},"child":[]}]}]}]})(props);
};
function CiSliderVertical (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Slider_Vertical"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8.5,5.13V2.55a.5.5,0,0,0-.5-.5.508.508,0,0,0-.5.5V5.13A2,2,0,0,0,6,7.06v1A2,2,0,0,0,7.5,9.99V21.45a.5.5,0,0,0,1,0V9.99A2,2,0,0,0,10,8.06v-1A2,2,0,0,0,8.5,5.13ZM9,8.06a1,1,0,1,1-2,0v-1a1.006,1.006,0,0,1,.98-1H8a1,1,0,0,1,1,1Z"},"child":[]},{"tag":"path","attr":{"d":"M16.5,14.01V2.55a.5.5,0,0,0-1,0V14.01A2,2,0,0,0,14,15.94v1a2,2,0,0,0,1.5,1.93v2.58a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V18.87A2,2,0,0,0,18,16.94v-1A2,2,0,0,0,16.5,14.01Zm.5,2.93a1.006,1.006,0,0,1-.98,1H16a1,1,0,0,1-1-1v-1a1,1,0,1,1,2,0Z"},"child":[]}]}]}]})(props);
};
function CiSpeaker (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Speaker"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.437,21.938H6.562a2.5,2.5,0,0,1-2.5-2.5V4.562a2.5,2.5,0,0,1,2.5-2.5H17.437a2.5,2.5,0,0,1,2.5,2.5V19.438A2.5,2.5,0,0,1,17.437,21.938ZM6.562,3.062a1.5,1.5,0,0,0-1.5,1.5V19.438a1.5,1.5,0,0,0,1.5,1.5H17.437a1.5,1.5,0,0,0,1.5-1.5V4.562a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12,18.939a3.75,3.75,0,1,1,3.75-3.75A3.755,3.755,0,0,1,12,18.939Zm0-6.5a2.75,2.75,0,1,0,2.75,2.75A2.752,2.752,0,0,0,12,12.439Z"},"child":[]},{"tag":"path","attr":{"d":"M12,9.563a2.25,2.25,0,1,1,2.25-2.25A2.253,2.253,0,0,1,12,9.563Zm0-3.5a1.25,1.25,0,1,0,1.25,1.25A1.251,1.251,0,0,0,12,6.063Z"},"child":[]}]}]}]})(props);
};
function CiSquareAlert (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Alert"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.936H5.562a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.562,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.5,10.982a.5.5,0,0,1,1,0V15h0a.5.5,0,0,1-1,0Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"9","r":"0.5"},"child":[]}]}]}]}]})(props);
};
function CiSquareCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Check"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.939H5.563a2.5,2.5,0,0,1-2.5-2.5V5.566a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.439A2.5,2.5,0,0,1,18.437,20.939ZM5.563,4.066a1.5,1.5,0,0,0-1.5,1.5V18.439a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.566a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M15.81,10.4c.45-.46-.26-1.17-.71-.71l-3.56,3.56c-.58-.58-1.16-1.15-1.73-1.73a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z"},"child":[]}]}]}]})(props);
};
function CiSquareChevDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Chev_Down"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8.65,10.85a.495.495,0,0,1,.7-.7L12,12.79l2.65-2.64a.495.495,0,0,1,.7.7l-3,3a.492.492,0,0,1-.7,0Z"},"child":[]},{"tag":"path","attr":{"d":"M3.063,18.437V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437a2.5,2.5,0,0,1-2.5,2.5H5.563A2.5,2.5,0,0,1,3.063,18.437ZM19.937,5.563a1.5,1.5,0,0,0-1.5-1.5H5.563a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiSquareChevLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Chev_Left"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.21,12l2.64,2.65a.495.495,0,0,1-.7.7c-.13-.12-.25-.24-.38-.37-.87-.87-1.75-1.75-2.62-2.63a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7Z"},"child":[]},{"tag":"path","attr":{"d":"M18.437,20.939H5.562a2.5,2.5,0,0,1-2.5-2.5V5.566a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.439A2.5,2.5,0,0,1,18.437,20.939ZM5.562,4.066a1.5,1.5,0,0,0-1.5,1.5V18.439a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.566a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiSquareChevRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Chev_Right"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.85,15.35a.495.495,0,0,1-.7-.7L12.79,12,10.15,9.35a.495.495,0,0,1,.7-.7l3,3a.492.492,0,0,1,0,.7Z"},"child":[]},{"tag":"path","attr":{"d":"M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiSquareChevUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Chev_Up"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15.35,13.15a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7l3-3a.492.492,0,0,1,.7,0Z"},"child":[]},{"tag":"path","attr":{"d":"M20.937,5.563V18.437a2.5,2.5,0,0,1-2.5,2.5H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437A2.5,2.5,0,0,1,20.937,5.563ZM4.063,18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5H5.563a1.5,1.5,0,0,0-1.5,1.5Z"},"child":[]}]}]}]})(props);
};
function CiSquareInfo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Info"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.438,20.937H5.564a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.438,20.937ZM5.564,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.5,9a.5.5,0,0,0-1,0h0v4.018a.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"14.999","r":"0.5"},"child":[]}]}]}]}]})(props);
};
function CiSquareMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Minus"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiSquareMore (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_More"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.938H5.562a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.437,20.938ZM5.562,4.065a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"circle","attr":{"cx":"11.999","cy":"12.002","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"15.999","cy":"12.002","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"7.999","cy":"12.002","r":"1"},"child":[]}]}]}]})(props);
};
function CiSquarePlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Plus"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"},"child":[]}]}]}]})(props);
};
function CiSquareQuestion (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Question"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.41,12.461a1.555,1.555,0,0,1,.341-.6,2.68,2.68,0,0,1,.535-.417,2.2,2.2,0,0,0,.363-.285,1.218,1.218,0,0,0,.256-.364A1.083,1.083,0,0,0,13,10.344a.927.927,0,0,0-.142-.518.946.946,0,0,0-.374-.338,1.135,1.135,0,0,0-.519-.119,1.188,1.188,0,0,0-.5.107.934.934,0,0,0-.389.335.884.884,0,0,0-.111.224.515.515,0,0,1-.483.359h0a.506.506,0,0,1-.479-.675,1.653,1.653,0,0,1,.178-.348,1.789,1.789,0,0,1,.748-.634,2.609,2.609,0,0,1,2.113.015,1.733,1.733,0,0,1,.721.642,1.766,1.766,0,0,1,.257.959,1.833,1.833,0,0,1-.118.678,1.674,1.674,0,0,1-.334.536,2.289,2.289,0,0,1-.52.417,2.245,2.245,0,0,0-.462.37,1.1,1.1,0,0,0-.256.454,2.344,2.344,0,0,0-.045.283.486.486,0,0,1-.483.429h0a.484.484,0,0,1-.483-.53A2.928,2.928,0,0,1,11.41,12.461Z"},"child":[]},{"tag":"circle","attr":{"cx":"11.792","cy":"14.894","r":"0.587"},"child":[]}]},{"tag":"path","attr":{"d":"M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]}]})(props);
};
function CiSquareRemove (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Square_Remove"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M13.767,14.477a.5.5,0,0,0,.71-.71L12.707,12l1.77-1.77a.5.5,0,0,0-.71-.7L12,11.3l-1.77-1.77a.5.5,0,0,0-.7.7c.59.59,1.17,1.18,1.77,1.77l-1.77,1.77c-.46.45.25,1.16.7.71L12,12.707Z"},"child":[]}]}]}]})(props);
};
function CiStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Star"},"child":[{"tag":"path","attr":{"d":"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},"child":[]}]}]})(props);
};
function CiStethoscope (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Stethoscope"},"child":[{"tag":"path","attr":{"d":"M18.185,9.256a2.748,2.748,0,0,0-.5,5.45v2.31a2.923,2.923,0,0,1-2.92,2.92h-2.78a2.923,2.923,0,0,1-2.92-2.92v-.98a5.5,5.5,0,0,0,5-5.47V5.286a1.483,1.483,0,0,0-1.03-1.42l-2.31-.78a.5.5,0,0,0-.63.32.491.491,0,0,0,.31.63l2.32.78a.486.486,0,0,1,.34.47v5.28a4.5,4.5,0,0,1-9,0V5.286a.486.486,0,0,1,.34-.47l2.32-.78a.491.491,0,0,0,.31-.63.5.5,0,0,0-.63-.32l-2.31.78a1.483,1.483,0,0,0-1.03,1.42v5.28a5.5,5.5,0,0,0,5,5.47v.98a3.926,3.926,0,0,0,3.92,3.92h2.78a3.926,3.926,0,0,0,3.92-3.92v-2.31a2.748,2.748,0,0,0-.5-5.45Zm0,4.5a1.75,1.75,0,1,1,1.75-1.75A1.758,1.758,0,0,1,18.185,13.756Z"},"child":[]}]}]})(props);
};
function CiStickyNote (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Sticky_Note"},"child":[{"tag":"path","attr":{"d":"M18.44,3.065H5.56a2.507,2.507,0,0,0-2.5,2.5v12.87a2.507,2.507,0,0,0,2.5,2.5h8.68A2.482,2.482,0,0,0,16,20.2l4.21-4.2a2.505,2.505,0,0,0,.73-1.77V5.565A2.5,2.5,0,0,0,18.44,3.065Zm-4.38,13.5v3.37H5.56a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H18.44a1.5,1.5,0,0,1,1.5,1.5v8.5H16.56A2.507,2.507,0,0,0,14.06,16.565Zm1,3.13v-3.13a1.5,1.5,0,0,1,1.5-1.5h3.13Z"},"child":[]}]}]})(props);
};
function CiStop1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Stop_1"},"child":[{"tag":"path","attr":{"d":"M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]}]}]})(props);
};
function CiStopSign1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Stop_Sign_1"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.531,15.688H10.14a.5.5,0,0,1,0-1h2.391a1.094,1.094,0,0,0,0-2.188H11.468a2.094,2.094,0,0,1,0-4.188h2.391a.5.5,0,0,1,0,1H11.468a1.094,1.094,0,0,0,0,2.188h1.063a2.094,2.094,0,0,1,0,4.188Z"},"child":[]},{"tag":"path","attr":{"d":"M15.079,21.933H8.92A2.482,2.482,0,0,1,7.153,21.2L2.8,16.847a2.484,2.484,0,0,1-.732-1.768V8.921A2.486,2.486,0,0,1,2.8,7.153L7.153,2.8A2.482,2.482,0,0,1,8.92,2.067h6.159a2.482,2.482,0,0,1,1.767.732L21.2,7.154a2.482,2.482,0,0,1,.732,1.767v6.158a2.491,2.491,0,0,1-.731,1.768L16.846,21.2A2.482,2.482,0,0,1,15.079,21.933ZM8.92,3.067a1.511,1.511,0,0,0-1.06.439L3.506,7.861a1.489,1.489,0,0,0-.439,1.06v6.158a1.491,1.491,0,0,0,.439,1.061L7.86,20.494a1.511,1.511,0,0,0,1.06.439h6.159a1.511,1.511,0,0,0,1.06-.439l4.355-4.354a1.494,1.494,0,0,0,.439-1.061V8.921a1.511,1.511,0,0,0-.439-1.06L16.139,3.506a1.511,1.511,0,0,0-1.06-.439Z"},"child":[]}]}]}]})(props);
};
function CiStopwatch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Stopwatch"},"child":[{"tag":"path","attr":{"d":"M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z"},"child":[]}]}]})(props);
};
function CiStreamOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Stream_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M4.911,4.206c-.45-.45-1.16.26-.71.71l.32.32v.01A10.646,10.646,0,0,0,5.541,19.8c.48.43,1.19-.28.71-.71a9.623,9.623,0,0,1-1.01-13.13l2.27,2.27a6.022,6.022,0,0,0,.61,8.18c.48.44,1.19-.27.71-.7a5.024,5.024,0,0,1-.61-6.77l2.61,2.61a1.13,1.13,0,0,0-.09.45,1.248,1.248,0,0,0,1.25,1.24,1.13,1.13,0,0,0,.45-.09l4.77,4.77.86.86a3.024,3.024,0,0,1-.31.31.355.355,0,0,0-.11.16.406.406,0,0,0-.04.19.381.381,0,0,0,.04.19.386.386,0,0,0,.11.17.5.5,0,0,0,.35.14.585.585,0,0,0,.13-.02.432.432,0,0,0,.22-.12c.11-.1.22-.2.32-.3.1.09.19.19.29.29.45.45,1.16-.26.71-.71Z"},"child":[]},{"tag":"path","attr":{"d":"M17.73,4.908a9.624,9.624,0,0,1,2.3,11.1c-.265.582.6,1.09.864.505A10.647,10.647,0,0,0,18.438,4.2c-.475-.433-1.185.272-.708.707Z"},"child":[]},{"tag":"path","attr":{"d":"M15.15,8.291a5.016,5.016,0,0,1,1.6,4.572.515.515,0,0,0,.349.615.5.5,0,0,0,.615-.349,6.042,6.042,0,0,0-1.852-5.546c-.476-.431-1.185.274-.708.708Z"},"child":[]}]}]}]})(props);
};
function CiStreamOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Stream_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z"},"child":[]},{"tag":"path","attr":{"d":"M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1.244"},"child":[]},{"tag":"path","attr":{"d":"M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z"},"child":[]},{"tag":"path","attr":{"d":"M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z"},"child":[]}]}]}]})(props);
};
function CiSun (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Sun"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12,20.937a1.074,1.074,0,0,1-.94-.542L9.61,17.9a.084.084,0,0,0-.1-.041L6.728,18.6A1.087,1.087,0,0,1,5.4,17.272l.748-2.8a.088.088,0,0,0-.041-.1l-2.5-1.439a1.086,1.086,0,0,1,0-1.881L6.1,9.61a.087.087,0,0,0,.041-.1L5.4,6.728A1.087,1.087,0,0,1,6.728,5.4l2.8.748a.091.091,0,0,0,.1-.041l1.439-2.5A1.076,1.076,0,0,1,12,3.063h0a1.074,1.074,0,0,1,.94.542L14.39,6.1a.084.084,0,0,0,.1.041L17.272,5.4A1.087,1.087,0,0,1,18.6,6.728l-.748,2.8a.087.087,0,0,0,.041.1l2.5,1.439a1.086,1.086,0,0,1,0,1.881L17.9,14.39a.089.089,0,0,0-.041.1l.748,2.784A1.087,1.087,0,0,1,17.272,18.6l-2.8-.748a.089.089,0,0,0-.1.041l-1.439,2.5a1.076,1.076,0,0,1-.94.544ZM9.534,16.853a1.091,1.091,0,0,1,.942.541l1.448,2.5a.082.082,0,0,0,.075.043h0a.081.081,0,0,0,.074-.043l1.44-2.5a1.083,1.083,0,0,1,1.221-.507l2.8.747a.087.087,0,0,0,.106-.106l-.747-2.785a1.089,1.089,0,0,1,.5-1.222l2.5-1.448a.086.086,0,0,0,0-.15l-2.5-1.439a1.086,1.086,0,0,1-.507-1.221l.747-2.8a.08.08,0,0,0-.022-.083.086.086,0,0,0-.085-.023l-2.784.747a1.088,1.088,0,0,1-1.222-.5l-1.448-2.5A.082.082,0,0,0,12,4.063h0a.081.081,0,0,0-.074.043l-1.44,2.5a1.087,1.087,0,0,1-1.222.507l-2.8-.747a.087.087,0,0,0-.106.106L7.11,9.254a1.089,1.089,0,0,1-.5,1.222l-2.5,1.448A.082.082,0,0,0,4.063,12a.081.081,0,0,0,.043.074l2.5,1.44a1.087,1.087,0,0,1,.507,1.221l-.747,2.8a.08.08,0,0,0,.022.083.087.087,0,0,0,.085.023l2.784-.747A1.077,1.077,0,0,1,9.534,16.853Z"},"child":[]},{"tag":"path","attr":{"d":"M12,15.875A3.875,3.875,0,1,1,15.875,12,3.88,3.88,0,0,1,12,15.875Zm0-6.75A2.875,2.875,0,1,0,14.875,12,2.879,2.879,0,0,0,12,9.125Z"},"child":[]}]}]}]})(props);
};
function CiTablets1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Tablets_1"},"child":[{"tag":"path","attr":{"d":"M14.76,3.065a6.171,6.171,0,0,0-6.11,5.58,6.159,6.159,0,1,0,6.71,6.71,6.159,6.159,0,0,0-.6-12.29ZM9.23,19.935A5.166,5.166,0,0,1,5.24,11.5l7.27,7.26A5.153,5.153,0,0,1,9.23,19.935Zm3.99-1.88-7.27-7.27a5.165,5.165,0,0,1,7.27,7.27Zm2.15-3.71a6.12,6.12,0,0,0-5.72-5.71,5.157,5.157,0,1,1,5.72,5.71Z"},"child":[]}]}]})(props);
};
function CiTempHigh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Temp_High"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M14.863,13.4V4.939a2.929,2.929,0,0,0-.84-2.03,2.859,2.859,0,0,0-2.23-.82,2.948,2.948,0,0,0-2.66,3l.01,8.28a4.755,4.755,0,0,0,1.9,8.46,5.093,5.093,0,0,0,.95.09,4.759,4.759,0,0,0,4.76-4.75A4.684,4.684,0,0,0,14.863,13.4Zm-.48,6.66a3.783,3.783,0,0,1-3.15.78,3.7,3.7,0,0,1-2.92-2.98,3.745,3.745,0,0,1,1.43-3.69.962.962,0,0,0,.39-.77V5.089a1.968,1.968,0,0,1,1.73-2,.66.66,0,0,1,.14-.01,1.878,1.878,0,0,1,1.86,1.86V13.4a.962.962,0,0,0,.39.77,3.742,3.742,0,0,1,.13,5.89Z"},"child":[]},{"tag":"path","attr":{"d":"M13.893,17.169a1.89,1.89,0,0,1-3.78,0,1.858,1.858,0,0,1,1.39-1.81V5.4a.5.5,0,0,1,1,0v9.96A1.869,1.869,0,0,1,13.893,17.169Z"},"child":[]}]}]}]})(props);
};
function CiTextAlignCenter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Text_Align_Center"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.437,4.063H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M16.5,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M16.5,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,1,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,20.937H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiTextAlignJustify (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Text_Align_Justify"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,8.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,16.5H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiTextAlignLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Text_Align_Left"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.438,4.063H3.563a.5.5,0,1,1,0-1H20.438a.5.5,0,1,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M12.562,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M12.562,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.436,12.5H3.562a.5.5,0,1,1,0-1H20.436a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.436,20.937H3.562a.5.5,0,0,1,0-1H20.436a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiTextAlignRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Text_Align_Right"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,8.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiText (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Text"},"child":[{"tag":"path","attr":{"d":"M18.44,2.06H5.56a1.5,1.5,0,0,0-1.5,1.5v4.5a.5.5,0,0,0,1,0v-1H10V20.94H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H14V7.06h4.94v1a.5.5,0,0,0,1,0V3.56A1.5,1.5,0,0,0,18.44,2.06Zm.5,4H14a1,1,0,0,0-1,1V20.94H11V7.06a1,1,0,0,0-1-1H5.06V3.56a.5.5,0,0,1,.5-.5H18.44a.5.5,0,0,1,.5.5Z"},"child":[]}]}]})(props);
};
function CiTimer (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Timer"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M2.336,9.685A9.934,9.934,0,0,0,13.592,21.808,9.931,9.931,0,0,0,20.708,7.23,10.046,10.046,0,0,0,12,2.072a.507.507,0,0,0-.5.5v4.2a.5.5,0,0,0,1,0v-4.2l-.5.5a8.935,8.935,0,0,1,8.433,11.892A8.938,8.938,0,0,1,6.468,19.027,9.041,9.041,0,0,1,3.3,9.951c.142-.627-.822-.9-.964-.266Z"},"child":[]},{"tag":"path","attr":{"d":"M7.4,8.117a.5.5,0,0,1,.707-.707l4.243,4.242h0a.5.5,0,0,1-.707.707Z"},"child":[]}]}]}]})(props);
};
function CiTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Trash"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"},"child":[]},{"tag":"path","attr":{"d":"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"},"child":[]}]}]}]})(props);
};
function CiTrophy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Trophy"},"child":[{"tag":"path","attr":{"d":"M19.435,5.055h-.97c.01-.12.02-.24.02-.36a1.645,1.645,0,0,0-.45-1.18,1.462,1.462,0,0,0-1.05-.45H7.025a1.484,1.484,0,0,0-1.06.45,1.6,1.6,0,0,0-.44,1.18c0,.12.01.24.02.36h-.98a1.5,1.5,0,0,0-1.5,1.5v2a4.5,4.5,0,0,0,4.27,4.49c1.07,2.3,2.53,3.79,4.17,4.04v2.85h-4a.5.5,0,1,0,0,1h9a.5.5,0,0,0,0-1h-4v-2.85c1.64-.25,3.1-1.74,4.17-4.04a4.493,4.493,0,0,0,4.26-4.49v-2A1.5,1.5,0,0,0,19.435,5.055Zm-15.37,3.5v-2a.5.5,0,0,1,.5-.5h1.04a22.9,22.9,0,0,0,1.28,5.93A3.5,3.5,0,0,1,4.065,8.555Zm7.94,7.57c-2.82,0-5.23-5.04-5.48-11.47a.573.573,0,0,1,.16-.44.48.48,0,0,1,.34-.15h9.96a.442.442,0,0,1,.33.15.62.62,0,0,1,.17.44C17.235,11.085,14.825,16.125,12.005,16.125Zm7.93-7.57a3.508,3.508,0,0,1-2.8,3.42,23.353,23.353,0,0,0,1.27-5.92h1.03a.5.5,0,0,1,.5.5Z"},"child":[]}]}]})(props);
};
function CiTurnL1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Turn_L_1"},"child":[{"tag":"path","attr":{"d":"M20.939,9.509v10.93a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.509a3.5,3.5,0,0,0-3.5-3.5h-9.9l-.01,1.44a.5.5,0,0,1-.81.4l-2.47-1.96a.5.5,0,0,1,0-.78l2.49-1.94a.5.5,0,0,1,.81.4l-.01,1.44h9.9A4.507,4.507,0,0,1,20.939,9.509Z"},"child":[]}]}]})(props);
};
function CiTurnR1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Turn_R_1"},"child":[{"tag":"path","attr":{"d":"M3.061,9.509v10.93a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V9.509a3.5,3.5,0,0,1,3.5-3.5h9.9l.01,1.44a.5.5,0,0,0,.81.4l2.47-1.96a.5.5,0,0,0,0-.78l-2.49-1.94a.5.5,0,0,0-.81.4l.01,1.44h-9.9A4.507,4.507,0,0,0,3.061,9.509Z"},"child":[]}]}]})(props);
};
function CiTwitter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Twitter"},"child":[{"tag":"path","attr":{"d":"M19.913,5.322a1.034,1.034,0,0,1,.837,1.629L19.708,8.432c-.064,5.086-1.765,8.539-5.056,10.264A10.917,10.917,0,0,1,9.6,19.835a12.233,12.233,0,0,1-6.2-1.524.76.76,0,0,1-.317-.8.768.768,0,0,1,.63-.6,20.6,20.6,0,0,0,3.745-.886C2,13.5,3.19,7.824,3.71,6.081a1.028,1.028,0,0,1,1.729-.422,9.931,9.931,0,0,0,5.995,2.95A4.188,4.188,0,0,1,12.725,5.3a4.125,4.125,0,0,1,5.7.02ZM4.521,17.794c1.862.872,6.226,1.819,9.667.016,2.955-1.549,4.476-4.732,4.521-9.461a.771.771,0,0,1,.142-.436l1.081-1.538-.041-.053c-.518-.007-1.029-.014-1.55,0a.835.835,0,0,1-.547-.221,3.13,3.13,0,0,0-4.383-.072,3.174,3.174,0,0,0-.935,2.87.646.646,0,0,1-.154.545.591.591,0,0,1-.516.205A10.924,10.924,0,0,1,4.722,6.354c-.67,2.078-1.52,7.094,3.869,9.065a.632.632,0,0,1,.416.538.625.625,0,0,1-.3.6A13.178,13.178,0,0,1,4.521,17.794ZM11.875,8.65h0Zm7.793-.161,0,0Z"},"child":[]}]}]})(props);
};
function CiUmbrella (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Umbrella"},"child":[{"tag":"path","attr":{"d":"M12.5,4.06v-.5a.509.509,0,0,0-.15-.35.483.483,0,0,0-.7,0,.491.491,0,0,0-.15.35v.5a8.41,8.41,0,0,0-7.88,7.82.976.976,0,0,0,.27.74,1.029,1.029,0,0,0,.74.32H11.5v5.22a1.653,1.653,0,0,1-.62,1.54A1.528,1.528,0,0,1,8.5,18.54a.5.5,0,0,0-1,0,2.433,2.433,0,0,0,2.43,2.4,2.45,2.45,0,0,0,2.57-2.29c.08-1.39,0-2.81,0-4.2V12.94h6.87a1.029,1.029,0,0,0,.74-.32.976.976,0,0,0,.27-.74A8.41,8.41,0,0,0,12.5,4.06Zm6.87,7.88-14.75.01a7.4,7.4,0,0,1,14.76-.02C19.38,11.94,19.38,11.94,19.37,11.94Z"},"child":[]}]}]})(props);
};
function CiUndo (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Undo"},"child":[{"tag":"path","attr":{"d":"M19.939,13.67A7.958,7.958,0,0,1,7.8,19.74a8.061,8.061,0,0,1-3.77-6.77.5.5,0,0,1,1,0,6.976,6.976,0,0,0,11,5.7,6.969,6.969,0,0,0-1-11.97,10.075,10.075,0,0,0-4.64-.69V7.46a.5.5,0,0,1-.81.39L7.109,5.9a.5.5,0,0,1,0-.79L9.6,3.17a.5.5,0,0,1,.8.4V5.01c.71-.01,1.43-.03,2.13.02a7.985,7.985,0,0,1,7.41,8.64Z"},"child":[]}]}]})(props);
};
function CiUnlock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Unlock"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.44,9.33h-1.1c0-.97.01-1.95,0-2.92A4.343,4.343,0,0,0,8.36,4.04c-.36.53.51,1.03.87.5a3.365,3.365,0,0,1,5.23-.39c1.04,1.11.88,2.57.88,3.96V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33Zm1.5,10.11a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z"},"child":[]}]}]}]})(props);
};
function CiUnread (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"unread"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.182,6.314a10.215,10.215,0,0,1,7.9,1.782,9.145,9.145,0,0,1,2.5,2.817,1.875,1.875,0,0,1,.082,2.024,9.266,9.266,0,0,1-1.485,2.008c-.446.464.26,1.172.707.707,1.1-1.144,2.533-2.86,1.9-4.554a8.845,8.845,0,0,0-2.721-3.5A11.243,11.243,0,0,0,9.916,5.35c-.633.11-.364,1.074.266.964Z"},"child":[]},{"tag":"path","attr":{"d":"M19.824,19.11q-3.045-3.045-6.09-6.08c-.93-.93-1.85-1.86-2.77-2.77Q8.849,8.145,6.754,6.04L4.894,4.18c-.45-.45-1.16.26-.71.71l1.9,1.9a10.42,10.42,0,0,0-3.22,3.12,3.743,3.743,0,0,0-.8,2.28,4.581,4.581,0,0,0,.99,2.17,10.925,10.925,0,0,0,8.18,4.5A11.379,11.379,0,0,0,17,17.71l.25.25,1.86,1.86C19.564,20.27,20.274,19.56,19.824,19.11Zm-10.3-8.88c.25.24.49.49.73.73A2.039,2.039,0,0,0,12,14.03a2.023,2.023,0,0,0,1.04-.28c.25.24.49.49.73.73a3.047,3.047,0,0,1-4.25-4.25Zm-3.7,5.6a9.558,9.558,0,0,1-1.81-1.84c-.53-.71-1.19-1.62-.85-2.55a8.348,8.348,0,0,1,3.65-3.92c.67.67,1.34,1.33,2,2a4.04,4.04,0,0,0,5.67,5.67c.6.59,1.19,1.19,1.78,1.78A10.4,10.4,0,0,1,5.824,15.83Z"},"child":[]}]}]}]})(props);
};
function CiUsb (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Usb"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.44,8.355H18.31v-.14a1.443,1.443,0,0,0-1.44-1.45H7.29a5.235,5.235,0,0,0,0,10.47h9.58a1.443,1.443,0,0,0,1.44-1.45v-.14h2.13a1.511,1.511,0,0,0,1.5-1.5V9.855A1.5,1.5,0,0,0,20.44,8.355Zm-3.13,7.43a.446.446,0,0,1-.44.45H7.29a4.235,4.235,0,0,1,0-8.47h9.58a.446.446,0,0,1,.44.45Zm3.63-1.64a.508.508,0,0,1-.5.5H18.31V9.355h2.13a.5.5,0,0,1,.5.5Z"},"child":[]},{"tag":"path","attr":{"d":"M6.29,13.444A1.446,1.446,0,1,1,7.738,12,1.447,1.447,0,0,1,6.29,13.444Zm0-1.892A.446.446,0,1,0,6.738,12,.446.446,0,0,0,6.29,11.552Z"},"child":[]}]}]}]})(props);
};
function CiUser (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"User"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"},"child":[]},{"tag":"path","attr":{"d":"M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"},"child":[]}]}]}]})(props);
};
function CiVault (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Vault"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15.935,6.06H8.065a2,2,0,0,0-2,2v6a1.993,1.993,0,0,0,2,2h7.87a2,2,0,0,0,2-2v-6A2.006,2.006,0,0,0,15.935,6.06Zm1,8a1,1,0,0,1-1,1H8.065a.99.99,0,0,1-1-1v-6a1,1,0,0,1,1-1h7.87a1,1,0,0,1,1,1Z"},"child":[]},{"tag":"path","attr":{"d":"M18.435,3.06H5.565a2.507,2.507,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5v.38a1.5,1.5,0,0,0,1.5,1.5h1.43a1.5,1.5,0,0,0,1.5-1.5v-.38h4v.38a1.5,1.5,0,0,0,1.5,1.5h1.44a1.5,1.5,0,0,0,1.5-1.5v-.38a2.5,2.5,0,0,0,2.5-2.5v-11A2.507,2.507,0,0,0,18.435,3.06ZM8.995,19.44a.5.5,0,0,1-.5.5H7.065a.5.5,0,0,1-.5-.5v-.38h2.43Zm8.44,0a.5.5,0,0,1-.5.5H15.5a.508.508,0,0,1-.5-.5v-.38h2.44Zm2.5-2.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-11a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.265,10.56h-.61A1.656,1.656,0,0,0,12.5,9.4V8.79a.491.491,0,0,0-.5-.48.5.5,0,0,0-.5.48V9.4a1.656,1.656,0,0,0-1.16,1.16h-.61a.5.5,0,0,0-.48.5.491.491,0,0,0,.48.5h.61a1.656,1.656,0,0,0,1.16,1.16v.62a.489.489,0,0,0,.5.47.483.483,0,0,0,.5-.47v-.62a1.622,1.622,0,0,0,1.16-1.16h.61a.485.485,0,0,0,.48-.5A.491.491,0,0,0,14.265,10.56ZM12,11.81a.75.75,0,1,1,.75-.75A.749.749,0,0,1,12,11.81Z"},"child":[]}]}]}]})(props);
};
function CiVial (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Vial"},"child":[{"tag":"path","attr":{"d":"M20.779,9.441l-.48-.47L15.039,3.7l-.48-.48a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.47.48L4.159,14.581a3.694,3.694,0,0,0,0,5.22l.04.04a3.706,3.706,0,0,0,5.23,0L19.6,9.671l.47.48a.52.52,0,0,0,.71,0A.513.513,0,0,0,20.779,9.441Zm-12.06,9.69a2.7,2.7,0,0,1-3.81,0l-.04-.04a2.7,2.7,0,0,1,0-3.81l1.7-1.7h7.71Zm6.56-6.55H7.569l7.47-7.46,3.85,3.85Z"},"child":[]}]}]})(props);
};
function CiVideoOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Video_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.783,9.51v6.53a.5.5,0,0,1-1,0V9.6c0-.85.06-1.72,0-2.57-.03-.37-.27-.5-.61-.3-.39.22-.76.51-1.13.76-.73.49-1.47.99-2.2,1.49,0,.71-.01,1.41-.01,2.11a.5.5,0,0,1-1,0V9.12c0-.58.01-1.16,0-1.74a1.524,1.524,0,0,0-1.56-1.5c-1.22-.01-2.43,0-3.65,0a.5.5,0,0,1,0-1h2.13c.6,0,1.22-.05,1.81.01a2.54,2.54,0,0,1,2.27,2.5c0,.13.01.26,0,.39.77-.53,1.55-1.05,2.32-1.57a2.466,2.466,0,0,1,1.26-.6,1.364,1.364,0,0,1,1.37,1.36C20.813,7.81,20.783,8.67,20.783,9.51Z"},"child":[]},{"tag":"path","attr":{"d":"M19.773,19.08q-6.5-6.51-12.99-13c-.62-.62-1.24-1.24-1.87-1.86-.45-.46-1.16.25-.7.71l.28.28A2.468,2.468,0,0,0,3.2,7.38v9.24a2.5,2.5,0,0,0,2.5,2.5h7.63a2.5,2.5,0,0,0,2.5-2.5v-.07l1.37,1.37c.62.62,1.24,1.24,1.87,1.86A.5.5,0,0,0,19.773,19.08Zm-4.94-2.46a1.5,1.5,0,0,1-1.5,1.5H5.7a1.5,1.5,0,0,1-1.5-1.5V7.38a1.5,1.5,0,0,1,1.04-1.42l9.59,9.59Z"},"child":[]}]}]}]})(props);
};
function CiVideoOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Video_On"},"child":[{"tag":"path","attr":{"d":"M21.05,5.05a1.433,1.433,0,0,0-1.48.08L16.25,7.37V6.56a2.5,2.5,0,0,0-2.5-2.5H4.69a2.5,2.5,0,0,0-2.5,2.5V17.44a2.5,2.5,0,0,0,2.5,2.5h9.06a2.5,2.5,0,0,0,2.5-2.5v-.81l3.32,2.24a1.5,1.5,0,0,0,.81.24,1.414,1.414,0,0,0,1.43-1.43V6.32A1.437,1.437,0,0,0,21.05,5.05Zm-5.8,12.39a1.5,1.5,0,0,1-1.5,1.5H4.69a1.5,1.5,0,0,1-1.5-1.5V6.56a1.5,1.5,0,0,1,1.5-1.5h9.06a1.5,1.5,0,0,1,1.5,1.5Zm5.56.24a.415.415,0,0,1-.23.38.425.425,0,0,1-.45-.02l-3.88-2.62V8.58l3.88-2.62a.425.425,0,0,1,.45-.02.415.415,0,0,1,.23.38Z"},"child":[]}]}]})(props);
};
function CiViewBoard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"View_Board"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.437,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.563,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M12.5,14.544a.5.5,0,0,1-1,0v-8h0a.5.5,0,0,1,1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M16.717,12.453a.5.5,0,0,1-1,0V6.544h0a.5.5,0,0,1,1,0Z"},"child":[]},{"tag":"path","attr":{"d":"M8.28,6.544a.5.5,0,0,0-1,0h0v4a.5.5,0,0,0,1,0Z"},"child":[]}]}]}]})(props);
};
function CiViewColumn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"View_Column"},"child":[{"tag":"path","attr":{"d":"M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.514,2.514,0,0,0,2.5,2.5H18.44a2.514,2.514,0,0,0,2.5-2.5V5.56A2.507,2.507,0,0,0,18.44,3.06ZM8.67,19.94H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5H8.67Zm1-15.88h4.66V19.94H9.67ZM19.94,18.44a1.511,1.511,0,0,1-1.5,1.5H15.33V4.06h3.11a1.5,1.5,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiViewList (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"View_List"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.436,20.937H5.562a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM5.562,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M6.544,8.283h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.512.512,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z"},"child":[]},{"tag":"path","attr":{"d":"M6.544,12.5h0a.523.523,0,0,1-.353-.146.5.5,0,0,1,0-.708.516.516,0,0,1,.353-.146H7.55a.521.521,0,0,1,.353.146.5.5,0,0,1,0,.708.516.516,0,0,1-.353.146Z"},"child":[]},{"tag":"path","attr":{"d":"M6.544,16.72h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.516.516,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z"},"child":[]},{"tag":"path","attr":{"d":"M10.554,8.281h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M10.554,12.5h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M10.554,16.718h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiViewTable (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"View_Table"},"child":[{"tag":"path","attr":{"d":"M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.514,2.514,0,0,0,2.5-2.5V5.56A2.514,2.514,0,0,0,18.44,3.06ZM8.71,19.94H5.56a1.5,1.5,0,0,1-1.5-1.5V15.33H8.71Zm0-5.61H4.06V9.67H8.71Zm0-5.66H4.06V5.56a1.5,1.5,0,0,1,1.5-1.5H8.71Zm11.23,9.77a1.511,1.511,0,0,1-1.5,1.5H9.71V15.33H19.94Zm0-4.11H9.71V9.67H19.94Zm0-5.66H9.71V4.06h8.73a1.511,1.511,0,0,1,1.5,1.5Z"},"child":[]}]}]})(props);
};
function CiViewTimeline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"View_Timeline"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.436,20.94H5.562a2.5,2.5,0,0,1-2.5-2.5V5.567a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.436,20.94ZM5.562,4.067a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.567a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M6.544,8.287h0a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M9.271,12.5h0a.5.5,0,0,1,0-1h5.454a.5.5,0,0,1,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M12,16.724h0a.5.5,0,0,1,0-1h5.455a.5.5,0,0,1,0,1Z"},"child":[]}]}]}]})(props);
};
function CiVirus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Virus"},"child":[{"tag":"path","attr":{"d":"M5.86,19.905a.485.485,0,0,0,.35.15.469.469,0,0,0,.35-.15.483.483,0,0,0,0-.7l-.53-.53,1.74-1.74a6.426,6.426,0,0,0,3.73,1.54v2.46h-.75a.5.5,0,0,0,0,1h2.5a.5.5,0,1,0,0-1H12.5v-2.46a6.426,6.426,0,0,0,3.73-1.54l1.74,1.74-.53.53a.483.483,0,0,0,0,.7.469.469,0,0,0,.35.15.485.485,0,0,0,.35-.15l1.77-1.76a.513.513,0,0,0,0-.71.5.5,0,0,0-.71,0l-.52.53-1.74-1.74a6.435,6.435,0,0,0,1.54-3.73h2.46v.75a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-2.5a.508.508,0,0,0-.5-.5.5.5,0,0,0-.5.5v.75H18.48a6.418,6.418,0,0,0-1.55-3.72l1.75-1.74.52.53a.508.508,0,0,0,.36.15.5.5,0,0,0,.35-.15.513.513,0,0,0,0-.71l-1.77-1.77a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.53.53-1.74,1.74a6.382,6.382,0,0,0-3.73-1.55V3.065h.75a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5h-2.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h.75v2.45a6.382,6.382,0,0,0-3.73,1.55L6.03,5.325l.53-.53a.5.5,0,0,0,0-.71.5.5,0,0,0-.7,0L4.09,5.855a.513.513,0,0,0,0,.71.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15l.52-.53,1.75,1.74A6.418,6.418,0,0,0,5.52,11.5H3.06v-.75a.5.5,0,0,0-.5-.5.508.508,0,0,0-.5.5v2.5a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V12.5H5.52a6.435,6.435,0,0,0,1.54,3.73l-1.74,1.74-.52-.53a.5.5,0,0,0-.71,0,.513.513,0,0,0,0,.71Zm10.03-4.02A5.5,5.5,0,1,1,17.5,12,5.448,5.448,0,0,1,15.89,15.885Z"},"child":[]}]}]})(props);
};
function CiVoicemail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Voicemail"},"child":[{"tag":"path","attr":{"d":"M17.435,7.5a4.5,4.5,0,0,0-2.82,8H9.385a4.494,4.494,0,1,0-2.82,1h10.87a4.5,4.5,0,0,0,0-9ZM3.065,12a3.5,3.5,0,1,1,3.56,3.5h-.06A3.5,3.5,0,0,1,3.065,12Zm14.37,3.5h-.06a3.53,3.53,0,1,1,.06,0Z"},"child":[]}]}]})(props);
};
function CiVolumeHigh (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Volume_High"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13.816,19.937a1.446,1.446,0,0,1-.717-.194L9.43,17.623a3.257,3.257,0,0,0-1.625-.434H4.439a2.379,2.379,0,0,1-2.375-2.376V9.187A2.378,2.378,0,0,1,4.439,6.812H7.805A3.257,3.257,0,0,0,9.43,6.376L13.1,4.259A1.437,1.437,0,0,1,15.255,5.5V18.5a1.424,1.424,0,0,1-.718,1.245A1.445,1.445,0,0,1,13.816,19.937ZM4.439,7.812A1.377,1.377,0,0,0,3.064,9.187v5.626a1.378,1.378,0,0,0,1.375,1.376H7.805a4.254,4.254,0,0,1,2.125.569L13.6,18.876a.439.439,0,0,0,.657-.38V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.251,4.251,0,0,1-2.125.57Z"},"child":[]},{"tag":"path","attr":{"d":"M18.407,6.262a7.79,7.79,0,0,1,.021,11.476c-.474.437.235,1.143.707.707a8.793,8.793,0,0,0-.021-12.89c-.474-.434-1.184.272-.707.707Z"},"child":[]},{"tag":"path","attr":{"d":"M16.91,9.031a4.021,4.021,0,0,1,.012,5.938c-.474.438.234,1.143.707.707a5.025,5.025,0,0,0-.012-7.352c-.474-.434-1.183.272-.707.707Z"},"child":[]}]}]}]})(props);
};
function CiVolumeMute (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Volume_Mute"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13.817,19.936a1.424,1.424,0,0,1-.719-.2L9.43,17.624a3.254,3.254,0,0,0-1.625-.436H4.44a2.377,2.377,0,0,1-2.375-2.375V9.187A2.378,2.378,0,0,1,4.44,6.811H7.805A3.257,3.257,0,0,0,9.43,6.377L13.1,4.259A1.438,1.438,0,0,1,15.255,5.5V18.5a1.423,1.423,0,0,1-.718,1.245A1.439,1.439,0,0,1,13.817,19.936ZM4.44,7.811A1.377,1.377,0,0,0,3.065,9.187v5.626A1.377,1.377,0,0,0,4.44,16.188H7.805a4.247,4.247,0,0,1,2.125.571L13.6,18.876a.437.437,0,0,0,.439,0,.433.433,0,0,0,.218-.379V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.25,4.25,0,0,1-2.125.569Z"},"child":[]},{"tag":"path","attr":{"d":"M17.606,14.445a.5.5,0,0,1-.7-.711c.17-.169.34-.349.52-.52l1.21-1.209c-.57-.581-1.15-1.161-1.73-1.74a.5.5,0,0,1,.7-.71l1.74,1.739,1.74-1.739a.5.5,0,0,1,.7.71l-1.73,1.74,1.73,1.729a.5.5,0,0,1-.7.711L19.343,12.7Z"},"child":[]}]}]}]})(props);
};
function CiVolume (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Volume"},"child":[{"tag":"path","attr":{"d":"M17.849,20.934a1.555,1.555,0,0,1-.781-.212l-4.16-2.4a3.769,3.769,0,0,0-1.877-.5H7.214a2.631,2.631,0,0,1-2.628-2.627V8.809A2.631,2.631,0,0,1,7.214,6.182h3.817a3.747,3.747,0,0,0,1.877-.5l4.16-2.4a1.564,1.564,0,0,1,2.346,1.354V19.369a1.57,1.57,0,0,1-1.565,1.565ZM7.214,7.182A1.63,1.63,0,0,0,5.586,8.809v6.382a1.629,1.629,0,0,0,1.628,1.627h3.817a4.756,4.756,0,0,1,2.377.637l4.16,2.4a.543.543,0,0,0,.563,0,.553.553,0,0,0,.283-.487V4.632a.565.565,0,0,0-.846-.489l-4.16,2.4a4.753,4.753,0,0,1-2.377.637Z"},"child":[]}]}]})(props);
};
function CiWallet (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Wallet"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z"},"child":[]},{"tag":"circle","attr":{"cx":"14.519","cy":"11.996","r":"1"},"child":[]}]}]}]})(props);
};
function CiWarning (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Warning"},"child":[{"tag":"g","attr":{},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.5,8.752a.5.5,0,0,0-1,0h0v6a.5.5,0,0,0,1,0Z"},"child":[]},{"tag":"circle","attr":{"cx":"11.999","cy":"16.736","r":"0.5"},"child":[]}]},{"tag":"path","attr":{"d":"M18.642,20.934H5.385A2.5,2.5,0,0,1,3.163,17.29L9.792,4.421a2.5,2.5,0,0,1,4.444,0L20.865,17.29a2.5,2.5,0,0,1-2.223,3.644ZM12.014,4.065a1.478,1.478,0,0,0-1.334.814L4.052,17.748a1.5,1.5,0,0,0,1.333,2.186H18.642a1.5,1.5,0,0,0,1.334-2.186L13.348,4.879A1.478,1.478,0,0,0,12.014,4.065Z"},"child":[]}]}]}]})(props);
};
function CiWavePulse1 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Wave_Pulse_1"},"child":[{"tag":"path","attr":{"d":"M8.974,18h0a1.446,1.446,0,0,1-1.259-.972L5.872,12.883c-.115-.26-.262-.378-.349-.378H2.562a.5.5,0,1,1,0-1H5.523a1.444,1.444,0,0,1,1.263.972l1.839,4.145c.116.261.258.378.349.378h0c.088,0,.229-.113.344-.368L13.7,6.956A1.423,1.423,0,0,1,14.958,6h0a1.449,1.449,0,0,1,1.26.975l1.839,4.151c.11.249.259.379.349.379h3.028a.5.5,0,0,1,0,1H18.41a1.444,1.444,0,0,1-1.263-.975L15.308,7.379c-.116-.261-.259-.378-.35-.379h0c-.088,0-.229.114-.344.368l-4.385,9.676A1.437,1.437,0,0,1,8.974,18Z"},"child":[]}]}]})(props);
};
function CiWheat (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Wheat"},"child":[{"tag":"path","attr":{"d":"M15.247,13.836a3.115,3.115,0,0,0,.79-2.78,1.053,1.053,0,0,0-.8-.81,3.1,3.1,0,0,0,.8-2.79,1.061,1.061,0,0,0-.82-.82,3.211,3.211,0,0,0-2.04.25A3.09,3.09,0,0,0,14,4.816a3.1,3.1,0,0,0-1.41-2.57,1.043,1.043,0,0,0-1.16-.01A3.124,3.124,0,0,0,10,4.816a3.052,3.052,0,0,0,.83,2.07,3.154,3.154,0,0,0-2.04-.25,1.048,1.048,0,0,0-.82.82,3.1,3.1,0,0,0,.79,2.79,1.041,1.041,0,0,0-.79.81,3.11,3.11,0,0,0,.78,2.78,1.071,1.071,0,0,0-.78.82,3.031,3.031,0,0,0,3,3.7,2.436,2.436,0,0,0,.53-.05v3.15a.5.5,0,0,0,1,0v-3.15a2.469,2.469,0,0,0,.54.05,3.054,3.054,0,0,0,2.17-.88,3.124,3.124,0,0,0,.83-2.82A1.083,1.083,0,0,0,15.247,13.836Zm-3.83,3.48a2.12,2.12,0,0,1-1.92-.55,2.041,2.041,0,0,1-.51-1.96,2.558,2.558,0,0,1,.47-.04,1.984,1.984,0,0,1,1.45.59A2.011,2.011,0,0,1,11.417,17.316Zm0-3.6a2.112,2.112,0,0,1-1.92-.55,2.022,2.022,0,0,1-.51-1.95,1.93,1.93,0,0,1,.47-.05,1.984,1.984,0,0,1,1.45.59A2.011,2.011,0,0,1,11.417,13.716Zm0-3.6a2.112,2.112,0,0,1-1.92-.55,2.022,2.022,0,0,1-.51-1.95,2.592,2.592,0,0,1,.47-.05,1.984,1.984,0,0,1,1.45.59A2.011,2.011,0,0,1,11.417,10.116Zm.56-3.55A2.1,2.1,0,0,1,11,4.816a2.005,2.005,0,0,1,1.04-1.74A2.1,2.1,0,0,1,13,4.816,2.054,2.054,0,0,1,11.977,6.566Zm2.53,10.2a2.072,2.072,0,0,1-1.96.51,2.384,2.384,0,0,1-.05-.45v-.02a2.065,2.065,0,0,1,.59-1.46,1.99,1.99,0,0,1,1.4-.57,2.279,2.279,0,0,1,.57.07A2.14,2.14,0,0,1,14.507,16.766Zm0-3.6a2.047,2.047,0,0,1-1.96.51,2.384,2.384,0,0,1-.05-.45v-.02a2.024,2.024,0,0,1,.59-1.45,1.957,1.957,0,0,1,1.4-.58,2.863,2.863,0,0,1,.57.07A2.14,2.14,0,0,1,14.507,13.166Zm0-3.6a2.024,2.024,0,0,1-1.96.51,2.384,2.384,0,0,1-.05-.45v-.02a2.024,2.024,0,0,1,.59-1.45,1.955,1.955,0,0,1,1.41-.57,2.259,2.259,0,0,1,.56.07A2.12,2.12,0,0,1,14.507,9.566Z"},"child":[]}]}]})(props);
};
function CiWifiOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Wi-Fi_Off"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.37,6.564a12.392,12.392,0,0,1,10.71,3.93c.436.476,1.141-.233.708-.708A13.324,13.324,0,0,0,10.37,5.564c-.631.076-.638,1.077,0,1Z"},"child":[]},{"tag":"path","attr":{"d":"M13.907,10.283A8.641,8.641,0,0,1,18.349,12.9c.434.477,1.139-.232.707-.707a9.586,9.586,0,0,0-4.883-2.871c-.626-.146-.893.818-.266.965Z"},"child":[]},{"tag":"circle","attr":{"cx":"12.003","cy":"16.922","r":"1.12"},"child":[]},{"tag":"path","attr":{"d":"M19.773,19.06a.5.5,0,0,1-.71.71l-5.84-5.84A4.478,4.478,0,0,0,8.7,15.24c-.43.48-1.14-.23-.71-.7a5.47,5.47,0,0,1,4.06-1.78l-2.37-2.37a8.693,8.693,0,0,0-4.03,2.53c-.43.48-1.13-.23-.7-.71A9.439,9.439,0,0,1,8.893,9.6L6.883,7.59a12.557,12.557,0,0,0-3.96,2.94.5.5,0,1,1-.7-.71,13.109,13.109,0,0,1,3.91-2.98l-1.9-1.9a.5.5,0,0,1,.71-.71Z"},"child":[]}]}]}]})(props);
};
function CiWifiOn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Wi-Fi_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M2.922,10.777a12.194,12.194,0,0,1,18.155-.034c.436.476,1.141-.233.707-.707a13.189,13.189,0,0,0-19.569.034c-.432.475.273,1.184.707.707Z"},"child":[]},{"tag":"path","attr":{"d":"M5.654,13.169a8.615,8.615,0,0,1,12.691-.024c.437.475,1.143-.234.707-.707a9.621,9.621,0,0,0-14.106.024c-.433.474.272,1.184.708.707Z"},"child":[]},{"tag":"path","attr":{"d":"M8.7,15.492a4.47,4.47,0,0,1,6.6-.013c.438.474,1.143-.235.707-.707a5.475,5.475,0,0,0-8.015.013c-.434.474.271,1.183.707.707Z"},"child":[]},{"tag":"circle","attr":{"cx":"11.999","cy":"17.172","r":"1.12"},"child":[]}]}]}]})(props);
};
function CiYoutube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Youtube"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.437,19.937H4.562a2.5,2.5,0,0,1-2.5-2.5V6.563a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5V17.437A2.5,2.5,0,0,1,19.437,19.937ZM4.562,5.063a1.5,1.5,0,0,0-1.5,1.5V17.437a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z"},"child":[]},{"tag":"path","attr":{"d":"M14.568,11.149,10.6,8.432a1.032,1.032,0,0,0-1.614.851v5.434a1.032,1.032,0,0,0,1.614.851l3.972-2.717A1.031,1.031,0,0,0,14.568,11.149Z"},"child":[]}]}]}]})(props);
};
function CiZoomIn (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Zoom_In"},"child":[{"tag":"path","attr":{"d":"M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z"},"child":[]}]}]})(props);
};
function CiZoomOut (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Zoom_Out"},"child":[{"tag":"path","attr":{"d":"M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z"},"child":[]}]}]})(props);
};


/***/ }),

/***/ 689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ GenIcon)
/* harmony export */ });
/* unused harmony export IconBase */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var _iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(535);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), props.children);
  };
  return _iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .IconContext */ .V !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .IconContext */ .V.Consumer, null, conf => elem(conf)) : elem(_iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .DefaultContext */ .f);
}

/***/ }),

/***/ 535:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ IconContext),
/* harmony export */   f: () => (/* binding */ DefaultContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultContext);

/***/ }),

/***/ 390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export IconsManifest */
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "MIT",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]

/***/ }),

/***/ 63:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k5: () => (/* reexport safe */ _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__.k)
/* harmony export */ });
/* harmony import */ var _iconsManifest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(535);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG = {
    name: 'practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG',
    displayName: 'practice',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG"] = practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG);

})();

practiceBA8B93128F294885B62BE9FA88A1B276_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map