import React from 'react';
import {Text} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const HomeItem: React.FC<Props> = ({children}) => {
  return <Text className="text-slate-100 mb-1 text-lg">{children}</Text>;
};
