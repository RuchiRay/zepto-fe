export interface ListItemType {
  id: string;
  name: string;
  mail: string;
  img: string;
}

export type StateDispatch = React.Dispatch<
  React.SetStateAction<ListItemType[]>
>;
