/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabk - Codes reserved for private use', () => {
		const qabk = factory('Qabk');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabk');
			const upper = factory('QABK');
			const lower = factory('qabk');
			const code = factory.code('Qabk');
			const numeric = factory.numeric('936');
			const number = factory.numeric(936);
			const instance = new ISO15924('Qabk', '936');

			expect(singleton).to.shallow.equal(qabk);
			expect(upper).to.shallow.equal(qabk);
			expect(lower).to.shallow.equal(qabk);
			expect(code).to.shallow.equal(qabk);
			expect(numeric).to.shallow.equal(qabk);
			expect(number).to.shallow.equal(qabk);
			expect(instance).not.to.shallow.equal(qabk);
			expect(instance.code).to.equal(qabk.code);
			expect(instance.numeric).to.equal(qabk.numeric);

			next();
		});

		it('has code "Qabk"', (next) => {
			expect(qabk.code).to.equal('Qabk');

			next();
		});

		it('has numeric "936"', (next) => {
			expect(qabk.numeric).to.equal('936');

			next();
		});

		it('implements toString', (next) => {
			expect(qabk.toString).to.be.function();
			expect(qabk.toString()).to.equal('Qabk');
			expect(String(qabk)).to.equal('Qabk');
			expect(0 + qabk).to.equal('0Qabk');
			expect('code:' + qabk).to.equal('code:Qabk');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabk.toJSON).to.be.function();
			expect(qabk.toJSON()).to.equal('Qabk');
			expect(JSON.stringify(qabk)).to.equal('"Qabk"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabk.valueOf).to.be.function();
			expect(qabk.valueOf()).to.equal(936);
			expect(Number(qabk)).to.equal(936);
			expect(+qabk).to.equal(936);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabk.valueOf).to.be.function();
			expect(qabk.valueOf()).to.equal(936);
			expect(Number(qabk)).to.equal(936);
			expect(+qabk).to.equal(936);

			expect(0 + qabk).to.equal('0Qabk');
			expect(String(qabk)).to.equal('Qabk');

			next();
		});
	});
});
