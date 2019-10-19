/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabm - Codes reserved for private use', () => {
		const qabm = factory('Qabm');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabm');
			const upper = factory('QABM');
			const lower = factory('qabm');
			const code = factory.code('Qabm');
			const numeric = factory.numeric('938');
			const number = factory.numeric(938);
			const instance = new ISO15924('Qabm', '938');

			expect(singleton).to.shallow.equal(qabm);
			expect(upper).to.shallow.equal(qabm);
			expect(lower).to.shallow.equal(qabm);
			expect(code).to.shallow.equal(qabm);
			expect(numeric).to.shallow.equal(qabm);
			expect(number).to.shallow.equal(qabm);
			expect(instance).not.to.shallow.equal(qabm);
			expect(instance.code).to.equal(qabm.code);
			expect(instance.numeric).to.equal(qabm.numeric);

			next();
		});

		it('has code "Qabm"', (next) => {
			expect(qabm.code).to.equal('Qabm');

			next();
		});

		it('has numeric "938"', (next) => {
			expect(qabm.numeric).to.equal('938');

			next();
		});

		it('implements toString', (next) => {
			expect(qabm.toString).to.be.function();
			expect(qabm.toString()).to.equal('Qabm');
			expect(String(qabm)).to.equal('Qabm');
			expect(0 + qabm).to.equal('0Qabm');
			expect('code:' + qabm).to.equal('code:Qabm');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabm.toJSON).to.be.function();
			expect(qabm.toJSON()).to.equal('Qabm');
			expect(JSON.stringify(qabm)).to.equal('"Qabm"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabm.valueOf).to.be.function();
			expect(qabm.valueOf()).to.equal(938);
			expect(Number(qabm)).to.equal(938);
			expect(+qabm).to.equal(938);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabm.valueOf).to.be.function();
			expect(qabm.valueOf()).to.equal(938);
			expect(Number(qabm)).to.equal(938);
			expect(+qabm).to.equal(938);

			expect(0 + qabm).to.equal('0Qabm');
			expect(String(qabm)).to.equal('Qabm');

			next();
		});
	});
});
