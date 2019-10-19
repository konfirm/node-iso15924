/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabp - Codes reserved for private use', () => {
		const qabp = factory('Qabp');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabp');
			const upper = factory('QABP');
			const lower = factory('qabp');
			const code = factory.code('Qabp');
			const numeric = factory.numeric('941');
			const number = factory.numeric(941);
			const instance = new ISO15924('Qabp', '941');

			expect(singleton).to.shallow.equal(qabp);
			expect(upper).to.shallow.equal(qabp);
			expect(lower).to.shallow.equal(qabp);
			expect(code).to.shallow.equal(qabp);
			expect(numeric).to.shallow.equal(qabp);
			expect(number).to.shallow.equal(qabp);
			expect(instance).not.to.shallow.equal(qabp);
			expect(instance.code).to.equal(qabp.code);
			expect(instance.numeric).to.equal(qabp.numeric);

			next();
		});

		it('has code "Qabp"', (next) => {
			expect(qabp.code).to.equal('Qabp');

			next();
		});

		it('has numeric "941"', (next) => {
			expect(qabp.numeric).to.equal('941');

			next();
		});

		it('implements toString', (next) => {
			expect(qabp.toString).to.be.function();
			expect(qabp.toString()).to.equal('Qabp');
			expect(String(qabp)).to.equal('Qabp');
			expect(0 + qabp).to.equal('0Qabp');
			expect('code:' + qabp).to.equal('code:Qabp');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabp.toJSON).to.be.function();
			expect(qabp.toJSON()).to.equal('Qabp');
			expect(JSON.stringify(qabp)).to.equal('"Qabp"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabp.valueOf).to.be.function();
			expect(qabp.valueOf()).to.equal(941);
			expect(Number(qabp)).to.equal(941);
			expect(+qabp).to.equal(941);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabp.valueOf).to.be.function();
			expect(qabp.valueOf()).to.equal(941);
			expect(Number(qabp)).to.equal(941);
			expect(+qabp).to.equal(941);

			expect(0 + qabp).to.equal('0Qabp');
			expect(String(qabp)).to.equal('Qabp');

			next();
		});
	});
});
