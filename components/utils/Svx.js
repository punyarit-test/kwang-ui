"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvxStore = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Context = (0, react_1.createContext)({});
const SvxProvider = (props) => {
    return ((0, jsx_runtime_1.jsx)(Context.Provider, { value: {
            ...props.svx(),
        }, children: props.children }));
};
exports.default = SvxProvider;
function SvxStore() {
    return (0, react_1.useContext)(Context);
}
exports.SvxStore = SvxStore;
