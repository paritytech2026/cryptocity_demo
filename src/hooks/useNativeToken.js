import { useEffect, useState } from "react";
import { ethers } from "ethers";

export function useNativeToken(provider, account) {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!provider || !account) {
      console.log("No provider or account, resetting balance");
      setBalance(null);
      return;
    }

    provider.getBalance(account).then((raw) => {
      setBalance(parseFloat(ethers.utils.formatEther(raw)).toFixed(4));
    });
  }, [provider, account]);

  return balance;
}
