import {html} from 'lit-html';
import {styleMap} from 'lit-html/directives/style-map.js';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor = null,
  size,
  label,
  onClick,
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return html`
    <button
      type="button"
      class=${[
        'storybook-button',
        `storybook-button--${size || 'medium'}`,
        'test5555',
        mode,
      ].join(' ')}
      style=${styleMap({backgroundColor})}
      @click=${onClick}
    >
      ${label} 55 666666666 test 3
    </button>
  `;
};
