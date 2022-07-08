"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
const lit_1 = require("lit");
exports.colors = (0, lit_1.css) `
  :host {
    --base-1-100: #dfff39;
    --base-2-100: #c0fafd;
    --base-3-100: #c0d5fd;
    --base-4-100: #fdc0c0;
  }

  :host(.standard) {
    --color-1-100: var(--base-1-100);
  }

  :host(.warm) {
    --color-1-100: var(--base-2-100);
  }

  :host(.dim) {
    --color-1-100: var(--base-3-100);
  }

  :host(.dark) {
    --color-1-100: var(--base-4-100);
  }
`;
//# sourceMappingURL=colors.theme.js.map