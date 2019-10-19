/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabi - Codes reserved for private use', () => {
		const qabi = factory('Qabi');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabi');
			const upper = factory('QABI');
			const lower = factory('qabi');
			const code = factory.code('Qabi');
			const numeric = factory.numeric('934');
			const number = factory.numeric(934);
			const instance = new ISO15924('Qabi', '934');

			expect(singleton).to.shallow.equal(qabi);
			expect(upper).to.shallow.equal(qabi);
			expect(lower).to.shallow.equal(qabi);
			expect(code).to.shallow.equal(qabi);
			expect(numeric).to.shallow.equal(qabi);
			expect(number).to.shallow.equal(qabi);
			expect(instance).not.to.shallow.equal(qabi);
			expect(instance.code).to.equal(qabi.code);
			expect(instance.numeric).to.equal(qabi.numeric);

			next();
		});

		it('has code "Qabi"', (next) => {
			expect(qabi.code).to.equal('Qabi');

			next();
		});

		it('has numeric "934"', (next) => {
			expect(qabi.numeric).to.equal('934');

			next();
		});

		it('implements toString', (next) => {
			expect(qabi.toString).to.be.function();
			expect(qabi.toString()).to.equal('Qabi');
			expect(String(qabi)).to.equal('Qabi');
			expect(0 + qabi).to.equal('0Qabi');
			expect('code:' + qabi).to.equal('code:Qabi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabi.toJSON).to.be.function();
			expect(qabi.toJSON()).to.equal('Qabi');
			expect(JSON.stringify(qabi)).to.equal('"Qabi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabi.valueOf).to.be.function();
			expect(qabi.valueOf()).to.equal(934);
			expect(Number(qabi)).to.equal(934);
			expect(+qabi).to.equal(934);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabi.valueOf).to.be.function();
			expect(qabi.valueOf()).to.equal(934);
			expect(Number(qabi)).to.equal(934);
			expect(+qabi).to.equal(934);

			expect(0 + qabi).to.equal('0Qabi');
			expect(String(qabi)).to.equal('Qabi');

			next();
		});
	});
});
