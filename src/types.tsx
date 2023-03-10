
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SignUp: {navigation: any} | undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Admin: undefined;
  Dashboard: undefined;
  NotFoundScreen: undefined;
  Payments: undefined;
  Plan: undefined;
  Product: undefined;
  Header: {children: React.ReactNode};
  Foorter: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type SignUpScreenProps = {
	navigation: any,
};

export type LoginScreenProps = {
    navigation: any
};

export type ForgotPasswordScreenProps = {
    navigation: any,
}
