export interface ILink {
  title: string;
  href: string;
  onClick?: (ev) => void;
}

export interface IButton {
  title: string;
  onClick: (ev: Event) => void;
}