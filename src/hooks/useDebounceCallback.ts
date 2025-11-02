import { useCallback, useRef } from 'react';

export function useDebouncedCallback<TArgs extends unknown[], TReturn extends void>(
  callback: (...args: TArgs) => TReturn,
  delay: number
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);

  // Keep callback reference up to date
  callbackRef.current = callback;

  const debouncedCallback = useCallback(
    (...args: TArgs) => {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  return debouncedCallback;
}