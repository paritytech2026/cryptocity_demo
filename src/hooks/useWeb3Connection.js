import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

export function useWeb3Connection() {
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(async () => {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    await web3Provider.send("eth_requestAccounts", []);

    const web3Signer = web3Provider.getSigner();
    const userAddress = await web3Signer.getAddress();
    const network = await web3Provider.getNetwork();

    setProvider(web3Provider);
    setSigner(web3Signer);
    setAccount(userAddress);
    setChainId(network.chainId);
    setIsConnected(true);

    return { provider: web3Provider, signer: web3Signer, account: userAddress, chainId: network.chainId };
  }, []);

  const disconnect = useCallback(() => {
    setAccount("");
    setChainId(null);
    setProvider(null);
    setSigner(null);
    setIsConnected(false);
  }, []);

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        disconnect();
        return;
      }
      setAccount(accounts[0]);
      setIsConnected(true);
    };

    const handleChainChanged = async () => {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await web3Provider.getNetwork();
      setChainId(network.chainId);
      setProvider(web3Provider);
      setSigner(web3Provider.getSigner());
    };

    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts) => {
        if (accounts.length > 0) {
          const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
          const web3Signer = web3Provider.getSigner();
          web3Provider.getNetwork().then((network) => {
            setProvider(web3Provider);
            setSigner(web3Signer);
            setAccount(accounts[0]);
            setChainId(network.chainId);
            setIsConnected(true);
          });
        }
      });

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, [disconnect]);

  return { account, chainId, provider, signer, isConnected, connect, disconnect };
}
