export interface WrapperResult<T> {
  data: T;
  meta?: {
    count?: number;
  };
}
