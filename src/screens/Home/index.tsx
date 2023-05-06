import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeItem} from '../../components/HomeItem';
import {useAppSelector} from '../../store/hooks';

export const Home: React.FC = () => {
  const {templateItems} = useAppSelector(state => state.template);
  return (
    <SafeAreaView className="flex-1 p-4 bg-slate-700">
      <View className="p-4">
        <Text className="text-xl font-black my-4 text-white">
          Template React Native CLI configurado com:
        </Text>
        <View>
          {templateItems?.map(item => (
            <HomeItem key={item}>{item}</HomeItem>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
