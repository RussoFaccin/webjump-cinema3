import * as React from "react";

interface Props {
  data: any[];
  renderItem(item: any, index?: number): JSX.Element;
}

const FlatList = ({ data, renderItem }: Props) => {
  if (!data || !renderItem) {
    return null;
  }
  
  const tmpList: JSX.Element[] = data.map(renderItem);
  return <>{tmpList}</>;
};

export default FlatList;
