import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FiCopy, FiCheck } from 'react-icons/fi';

function WalletModal({ isOpen, toggle, account, balance, onDisconnect }) {
  const [copied, setCopied] = useState(false);
  const isDark = document.documentElement.classList.contains('dark');

  const handleCopy = () => {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDisconnect = () => {
    onDisconnect();
    toggle();
  };

  const modalStyles = isDark ? {
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    borderColor: '#334155',
  } : {};

  const rowStyles = isDark ? {
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
  } : { backgroundColor: '#f1f5f9' };

  const labelStyles = isDark ? { color: '#94a3b8' } : {};

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="md">
      <ModalHeader toggle={toggle} style={modalStyles}>
        Connected Wallet
      </ModalHeader>
      <ModalBody style={modalStyles}>
        <div className="mb-3">
          <p className="text-xs mb-1" style={labelStyles}>Address</p>
          <div className="flex items-center gap-2 rounded-md px-3 py-2" style={rowStyles}>
            <span className="text-sm font-mono flex-1 truncate">{account}</span>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 hover:text-primary-600"
              style={isDark ? { color: '#94a3b8' } : { color: '#64748b' }}
              title="Copy address"
            >
              {copied ? <FiCheck size={15} className="text-green-400" /> : <FiCopy size={15} />}
            </button>
          </div>
        </div>
        <div>
          <p className="text-xs mb-1" style={labelStyles}>ETH Balance</p>
          <div className="rounded-md px-3 py-2" style={rowStyles}>
            <span className="text-sm font-semibold">
              {balance !== null ? `${balance} ETH` : 'Loading...'}
            </span>
          </div>
        </div>
      </ModalBody>
      <ModalFooter style={modalStyles}>
        <Button color="danger" outline size="sm" onClick={handleDisconnect}>
          Disconnect
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default WalletModal;

