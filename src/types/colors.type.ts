export interface IPrimary {
  ['primary-25']?: boolean;
  ['primary-50']?: boolean;
  ['primary-100']?: boolean;
  ['primary-200']?: boolean;
  ['primary-300']?: boolean;
  ['primary-400']?: boolean;
  ['primary-500']?: boolean;
  ['primary-600']?: boolean;
  ['primary-700']?: boolean;
  ['primary-800']?: boolean;
}

export interface IGray {
  ['gray-25']?: boolean;
  ['gray-50']?: boolean;
  ['gray-100']?: boolean;
  ['gray-200']?: boolean;
  ['gray-300']?: boolean;
  ['gray-400']?: boolean;
  ['gray-500']?: boolean;
  ['gray-600']?: boolean;
  ['gray-700']?: boolean;
  ['gray-800']?: boolean;
}

type primary = 'primary';
type gray = 'gray';

export type TPrimary =
  | `${primary}-25`
  | `${primary}-50`
  | `${primary}-100`
  | `${primary}-200`
  | `${primary}-300`
  | `${primary}-400`
  | `${primary}-500`
  | `${primary}-600`
  | `${primary}-700`
  | `${primary}-800`;

export type TGray =
  | `${gray}-25`
  | `${gray}-50`
  | `${gray}-100`
  | `${gray}-200`
  | `${gray}-300`
  | `${gray}-400`
  | `${gray}-500`
  | `${gray}-600`
  | `${gray}-700`
  | `${gray}-800`;
