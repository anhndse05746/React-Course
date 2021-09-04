import _ from "lodash";

export const paginate = (
  items: any[],
  pageSize: number,
  pageNumber: number
): any[] => {
  let startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
