export type Screen =
  | 'login'
  | 'admin';

export type NavigateFn = (screen: Screen) => void;
