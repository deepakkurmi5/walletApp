import type {SWRConfiguration} from 'swr';

import {localStorageProvider as provider} from './swr-cache';

interface configurationWithProvider extends SWRConfiguration {
  provider?: typeof provider;
}

export const dedupeEach = (dedupingInterval = 2000) => ({dedupingInterval});

export const keepPrevious = () => ({keepPreviousData: true});

export const refreshEach = (refreshInterval = 10000) => ({refreshInterval});

export const revalOnFocus = (revalidateOnFocus = false) => ({
  revalidateOnFocus,
});

export default (config?: SWRConfiguration): configurationWithProvider => ({
  ...(config || {}),
  ...dedupeEach(10e3),
  ...revalOnFocus(),
  provider,
});
