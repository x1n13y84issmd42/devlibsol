export namespace soltest {
	export const Address0 = "0x0000000000000000000000000000000000000000";
	export const ETH = 1000000000000000000n;

	export function ether(v: bigint) {
		return v * ETH;
	}
}
