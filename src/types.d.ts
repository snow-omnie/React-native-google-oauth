export type NativeStackParamList = {
    Home: undefined;
    Posts: { userId: string };
    ProfileScreen: undefined;
    Login: undefined;

}
export type BottomStackParamList = {
    Post: undefined;
    Profile: undefined;
    PostDetails: undefined;
    Home: undefined;
}
export type MyListProps = {
    brand?: string,
    category?: string,
    description?: string,
    images?: Array<string>,
    price?: number,
    rating?: number,
    title?: string,
    id?: number
};