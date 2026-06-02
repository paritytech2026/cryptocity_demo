import { createContext, useContext } from "react";
import { useWeb3Connection } from "../hooks/useWeb3Connection";

const Web3Context = createContext(null);

export function Web3Provider({ children }) {
  const web3 = useWeb3Connection();
  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
  const ctx = useContext(Web3Context);
  if (!ctx) throw new Error("useWeb3 must be used within a Web3Provider");
  return ctx;
}
