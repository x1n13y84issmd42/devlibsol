import assert from 'node:assert';
import { contractErrorMessage } from './testutils.js';

declare module 'node:assert' {
	function reverts(fn: Promise<unknown>, errorName: string, ...args: any[]): Promise<void>;
}

/**
 * Asserts that the given contract call reverts with a specified error which has specified arguments.
 * @param fn A contract method call expected to revert with a custom error.
 * @param errorName Name of the expected custom error.
 * @param args Arguments to the error.
 */
assert.reverts = async function (fn: Promise<unknown>, errorName: string, ...args: string[]): Promise<void> {
	try {
		await fn;
		assert.fail(`Contract should have failed with ${errorName} error.`);
	} catch(e: any) {
		assert.equal(
			e.details,
			contractErrorMessage(errorName, ...args)
		);
	}
}

export default assert;
