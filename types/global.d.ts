declare type Voidable<T> = T | undefined;

declare type SWRParams<F> = ReturnType<F>;

declare type SWRArgs<F> = Parameters<F>[0];
