export const ETH = 1000000000000000000n;

export function wei(v: bigint) {
	return v;
}

export function ether(v: bigint) {
	return v * ETH;
}
