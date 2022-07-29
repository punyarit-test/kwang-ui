"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mounted = void 0;
const react_1 = require("react");
const mounted = (method) => {
    const isMounted = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (!isMounted.current) {
            method();
            isMounted.current = true;
        }
    }, []);
};
exports.mounted = mounted;
