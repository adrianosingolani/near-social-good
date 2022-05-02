const GAS = 100000000000000;

export function addCause(cause) {
  return window.contract.addCause(cause);
}

export function getCauses() {
  return window.contract.getCauses();
}

export async function supportCause({ causeIndex, amount }) {
  console.log('test');
  await window.contract.supportCause({ causeIndex: causeIndex }, GAS, amount);
}