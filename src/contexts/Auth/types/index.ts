export type AuthType = {
  isLogged: boolean;
  user?: UserType;
  actions?: {
    setLogged(isLogged: boolean): void;
    setUser(user: UserType): void;
  };
};

export type Props = {
  children: JSX.Element;
};

export interface UserType {
  name: string;
  email: string;
  token: string;
}
