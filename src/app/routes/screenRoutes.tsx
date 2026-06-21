import { JSX } from 'react/jsx-runtime';
import Admin from '@/features/admin/presentation/pages/Admin';
import Login from '@/features/auth/presentation/pages/Login';
import { NavigateFn, Screen } from '@/app/navigation/navigation';

export const initialScreen: Screen = 'login';

export const screenRoutes: Record<Screen, (navigate: NavigateFn) => JSX.Element> = {
  login: (navigate) => <Login navigate={navigate} />,
  admin: (navigate) => <Admin navigate={navigate} />,
};
