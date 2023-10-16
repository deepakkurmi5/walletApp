declare type Voidable<T> = T | undefined;

declare type SWRParams<F> = ReturnType<F>;

declare type SWRArgs<F> = Parameters<F>[0];

interface MarketTabsProps {
  id: string;
  title: string;
  ref?: RefObject<View>;
}

declare module '*.png';
