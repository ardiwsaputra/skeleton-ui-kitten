import AsyncStorage from '@react-native-community/async-storage';

const storageSet = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const storageGet = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const stroageDestroy = async () => {
  await AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
};

export {storageSet, storageGet, stroageDestroy};
