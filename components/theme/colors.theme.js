"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
const lit_1 = require("lit");
exports.colors = (0, lit_1.css) `
  :host {
    /* Base */
    --white: #ffffff;
    --black: #000000;

    /* Gray */
    --gray-25: #fcfcfd;
    --gray-50: #f9fafb;
    --gray-100: #f2f4f7;
    --gray-200: #eaecf0;
    --gray-300: #d0d5dd;
    --gray-400: #98a2b3;
    --gray-500: #667085;
    --gray-600: #475467;
    --gray-700: #344054;
    --gray-800: #1d2939;
    --gray-900: #101828;

    /* Primary */
    --primary-25: #f5f8ff;
    --primary-50: #eff4ff;
    --primary-100: #d1e0ff;
    --primary-200: #b2ccff;
    --primary-300: #84adff;
    --primary-400: #528bff;
    --primary-500: #2970ff;
    --primary-600: #155eef;
    --primary-700: #004eeb;
    --primary-800: #0040c1;
    --primary-900: #00359e;

    /* Error */
    --error-25: #fffbfa;
    --error-50: #fef3f2;
    --error-100: #fee4e2;
    --error-200: #fecdca;
    --error-300: #fda29b;
    --error-400: #f97066;
    --error-500: #f04438;
    --error-600: #d92d20;
    --error-700: #b42318;
    --error-800: #912018;
    --error-900: #7a271a;

    /* Warring */
    --warning-25: #fffcf5;
    --warning-50: #fffaeb;
    --warning-100: #fef0c7;
    --warning-200: #fedf89;
    --warning-300: #fec84b;
    --warning-400: #fdb022;
    --warning-500: #f79009;
    --warning-600: #dc6803;
    --warning-700: #b54708;
    --warning-800: #93370d;
    --warning-900: #7a2e0e;

    /* Success */
    --success-25: #f6fef9;
    --success-50: #ecfdf3;
    --success-100: #d1fadf;
    --success-200: #a6f4c5;
    --success-300: #6ce9a6;
    --success-400: #32d583;
    --success-500: #12b76a;
    --success-600: #039855;
    --success-700: #027a48;
    --success-800: #05603a;
    --success-900: #054f31;

    /* Moderm Green */
    --modern-green-25: #fcfcfd;
    --modern-green-50: #f9fafb;
    --modern-green-100: #f2f4f7;
    --modern-green-200: #eaecf0;
    --modern-green-300: #d0d5dd;
    --modern-green-400: #98a2b3;
    --modern-green-500: #667085;
    --modern-green-600: #475467;
    --modern-green-700: #344054;
    --modern-green-800: #1d2939;
    --modern-green-900: #101828;

    /* Surgeon Green */
    --surgeon-green-25: #fcfcfd;
    --surgeon-green-50: #f9fafb;
    --surgeon-green-100: #f2f4f7;
    --surgeon-green-200: #eaecf0;
    --surgeon-green-300: #d0d5dd;
    --surgeon-green-400: #98a2b3;
    --surgeon-green-500: #667085;
    --surgeon-green-600: #475467;
    --surgeon-green-700: #344054;
    --surgeon-green-800: #1d2939;
    --surgeon-green-900: #101828;

    /* Wellness Green */
    --wellness-green-25: #fcfcfd;
    --wellness-green-50: #f9fafb;
    --wellness-green-100: #f2f4f7;
    --wellness-green-200: #eaecf0;
    --wellness-green-300: #d0d5dd;
    --wellness-green-400: #98a2b3;
    --wellness-green-500: #667085;
    --wellness-green-600: #475467;
    --wellness-green-700: #344054;
    --wellness-green-800: #1d2939;
    --wellness-green-900: #101828;

    /* Safe blue */
    --safe-blue-25: #fcfcfd;
    --safe-blue-50: #f9fafb;
    --safe-blue-100: #f2f4f7;
    --safe-blue-200: #eaecf0;
    --safe-blue-300: #d0d5dd;
    --safe-blue-400: #98a2b3;
    --safe-blue-500: #667085;
    --safe-blue-600: #475467;
    --safe-blue-700: #344054;
    --safe-blue-800: #1d2939;
    --safe-blue-900: #101828;

    /* Blueprint */
    --blueprint-25: #fcfcfd;
    --blueprint-50: #f9fafb;
    --blueprint-100: #f2f4f7;
    --blueprint-200: #eaecf0;
    --blueprint-300: #d0d5dd;
    --blueprint-400: #98a2b3;
    --blueprint-500: #667085;
    --blueprint-600: #475467;
    --blueprint-700: #344054;
    --blueprint-800: #1d2939;
    --blueprint-900: #101828;

    /* Violet Alert */
    --violet-alert-25: #fcfcfd;
    --violet-alert-50: #f9fafb;
    --violet-alert-100: #f2f4f7;
    --violet-alert-200: #eaecf0;
    --violet-alert-300: #d0d5dd;
    --violet-alert-400: #98a2b3;
    --violet-alert-500: #667085;
    --violet-alert-600: #475467;
    --violet-alert-700: #344054;
    --violet-alert-800: #1d2939;
    --violet-alert-900: #101828;

    /* Purple */
    --purple-25: #fcfcfd;
    --purple-50: #f9fafb;
    --purple-100: #f2f4f7;
    --purple-200: #eaecf0;
    --purple-300: #d0d5dd;
    --purple-400: #98a2b3;
    --purple-500: #667085;
    --purple-600: #475467;
    --purple-700: #344054;
    --purple-800: #1d2939;
    --purple-900: #101828;

    /* Pinky */
    --pinky-25: #fcfcfd;
    --pinky-50: #f9fafb;
    --pinky-100: #f2f4f7;
    --pinky-200: #eaecf0;
    --pinky-300: #d0d5dd;
    --pinky-400: #98a2b3;
    --pinky-500: #667085;
    --pinky-600: #475467;
    --pinky-700: #344054;
    --pinky-800: #1d2939;
    --pinky-900: #101828;

    /* Red Flag */
    --red-flag-25: #fcfcfd;
    --red-flag-50: #f9fafb;
    --red-flag-100: #f2f4f7;
    --red-flag-200: #eaecf0;
    --red-flag-300: #d0d5dd;
    --red-flag-400: #98a2b3;
    --red-flag-500: #667085;
    --red-flag-600: #475467;
    --red-flag-700: #344054;
    --red-flag-800: #1d2939;
    --red-flag-900: #101828;

    /* Alarm Orange */
    --alarm-orange-25: #fcfcfd;
    --alarm-orange-50: #f9fafb;
    --alarm-orange-100: #f2f4f7;
    --alarm-orange-200: #eaecf0;
    --alarm-orange-300: #d0d5dd;
    --alarm-orange-400: #98a2b3;
    --alarm-orange-500: #667085;
    --alarm-orange-600: #475467;
    --alarm-orange-700: #344054;
    --alarm-orange-800: #1d2939;
    --alarm-orange-900: #101828;

    /* Warning Yellow */
    --warning-yellow-25: #fcfcfd;
    --warning-yellow-50: #f9fafb;
    --warning-yellow-100: #f2f4f7;
    --warning-yellow-200: #eaecf0;
    --warning-yellow-300: #d0d5dd;
    --warning-yellow-400: #98a2b3;
    --warning-yellow-500: #667085;
    --warning-yellow-600: #475467;
    --warning-yellow-700: #344054;
    --warning-yellow-800: #1d2939;
    --warning-yellow-900: #101828;

    /* bluestate */
    --bluestate-25: #fdfeff;
    --bluestate-50: #f8fafc;
    --bluestate-100: #f1f5f9;
    --bluestate-200: #e2e8f0;
    --bluestate-300: #cbd5e1;
    --bluestate-400: #94a3b8;
    --bluestate-500: #64748b;
    --bluestate-600: #475569;
    --bluestate-700: #334155;
    --bluestate-800: #1e293b;
    --bluestate-900: #0f172a;
  }
  :host(.light) {
    /* button */
    --btn-primary-800: var(--primary-800);
    --btn-secondary-100: var(--primary-100);
    --btn-text-100: var(--primary-100);
    --btn-disabled-100: var(--primary-100);

    --bg-base-25: var(--primary-25);
    --txt-primary-900: var(--primary-900);
  }

  /* warm use calibate color not change color */

  :host(.dark) {
    /* button */
    --btn-primary-800: var(--primary-800);
    --btn-secondary-100: var(--primary-100);
    --btn-text-100: var(--primary-100);
    --btn-disabled-100: var(--primary-100);

    --bg-base-25: var(--primary-25);
    --txt-primary-900: var(--primary-900);
  }
`;
