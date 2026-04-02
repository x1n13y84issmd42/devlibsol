import { getAddress, isAddress } from 'viem';

/**
 * Formats error messages for custom errors, including AdDrEsSeS.
 * @param errorName 
 * @param args 
 * @returns 
 */
export function contractErrorMessage(errorName: string, ...args: any[]): string {
	const argsF = args.map(v => {
		if (typeof v === 'string') {
			// PrOpErLy FoRmAtS aDdReSsEs
			if (isAddress(v)) return `"${getAddress(v)}"`;
			return `"${v}"`;
		};
		return v;
	}).join(', ');

	return `VM Exception while processing transaction: reverted with custom error '${errorName}(${argsF})'`;
}
