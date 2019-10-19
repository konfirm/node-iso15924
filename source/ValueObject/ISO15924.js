const storage = new WeakMap();

/**
 * ISO15924 base class
 *
 * @class ISO15924
 */
class ISO15924 {
	/**
	 * Creates an instance of ISO15924
	 *
	 * @param {object} { code, numeric }
	 * @memberof ISO15924
	 */
	constructor(code, numeric) {
		storage.set(this, { code, numeric });
	}

	/**
	 * The ISO-15924 four letter code
	 *
	 * @readonly
	 * @memberof ISO15924
	 */
	get code() {
		const { code } = storage.get(this);

		return code;
	}

	/**
	 * The ISO-15924 numeric code
	 *
	 * @readonly
	 * @memberof ISO15924
	 */
	get numeric() {
		const { numeric } = storage.get(this);

		return numeric;
	}

	/**
	 * The ISO-15924 String representation
	 *
	 * @returns {string} code
	 * @memberof ISO15924
	 */
	toString() {
		return this.code;
	}

	/**
	 * The ISO-15924 JSON-able representation
	 *
	 * @returns {string} JSON-able
	 * @memberof ISO15924
	 */
	toJSON() {
		return String(this);
	}

	/**
	 * The ISO-15924 primitive value
	 *
	 * @returns {number} numeric
	 * @memberof ISO15924
	 */
	valueOf() {
		return Number(this.numeric || 0);
	}

	/**
	 * Set the order of primitive casting to be String and then Number
	 *
	 * @param {string} hint
	 * @returns
	 * @memberof ISO15924
	 */
	[Symbol.toPrimitive](hint) {
		return hint === 'number' ? Number(this.numeric || 0) : this.code;
	}
}

module.exports = ISO15924;
