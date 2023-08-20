export const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

export const getPagingData = <G>(data: {rows: G[], count: number}, page: number, limit: number) => {
  const { count: totalItems, rows } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, rows, totalPages, currentPage };
};
