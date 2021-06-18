import * as React from "react";
import { Props } from "./types";

const FlatList = ({ data, renderItem }: Props) => {
  if (!data || !renderItem) {
    return null;
  }

  const tmpList: JSX.Element[] = data.map(renderItem);
  return <>{tmpList}</>;
};

export default FlatList;
