import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key: string, value: object) => {
    try {
        const jsonValue = JSON.stringify(value);
        console.log("key", key, "value", value)
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
        console.log(e)
    }
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue) {
            console.log("getData", jsonValue)
            return JSON.parse(jsonValue)
        } else {
            return null
        }
    } catch (e) {
        // error reading value
        console.log(e)
    }
};

export const signOut = async (navigation: any) => {
    console.log("in signout")
    try {
        AsyncStorage.clear()
        navigation.navigate("Login")
    } catch (e) {

    }
}