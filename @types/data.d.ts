type TodoProps = {
  id: string;
  title: string;
  timeStamp: string | Date;
  completed: boolean;
}[];

type RootStackParamList = {
  Todo: TodoProps;
  Profile: undefined;
};
