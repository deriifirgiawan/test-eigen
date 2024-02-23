export interface IBaseResponseWithPaginationModel<T> {
	status: string;
	totalResults: number;
	articles: T;
}

export type BaseResponseWithPagination<T> = IBaseResponseWithPaginationModel<T>;
