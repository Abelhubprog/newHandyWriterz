declare module '@coinbase/commerce.js';
declare module 'next/headers';

// Add other global type declarations here if needed in the future

declare global {
  var __mockDataWarningShown: boolean | undefined;
  interface Window {
    __disableMetamaskDetection?: boolean;
    ethereum?: {
      isMetaMask?: boolean;
      _isDisabled?: boolean;
      request?: (args?: any) => Promise<any>;
      on?: (...args: any[]) => void;
      removeListener?: (...args: any[]) => void;
      autoRefreshOnNetworkChange?: boolean;
    };
    process?: NodeJS.Process & { env: Record<string, string | undefined> };
    global?: any;
  }
}
