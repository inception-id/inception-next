export type ApiResponse<T> = {
  status: number;
  data: T;
  message: string;
};

export type Pagination = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};
