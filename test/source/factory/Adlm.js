/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Adlm - Adlam', () => {
		const adlm = factory('Adlm');

		it('instances are singletons', (next) => {
			const singleton = factory('Adlm');
			const upper = factory('ADLM');
			const lower = factory('adlm');
			const code = factory.code('Adlm');
			const numeric = factory.numeric('166');
			const number = factory.numeric(166);
			const instance = new ISO15924('Adlm', '166');

			expect(singleton).to.shallow.equal(adlm);
			expect(upper).to.shallow.equal(adlm);
			expect(lower).to.shallow.equal(adlm);
			expect(code).to.shallow.equal(adlm);
			expect(numeric).to.shallow.equal(adlm);
			expect(number).to.shallow.equal(adlm);
			expect(instance).not.to.shallow.equal(adlm);
			expect(instance.code).to.equal(adlm.code);
			expect(instance.numeric).to.equal(adlm.numeric);

			next();
		});

		it('has code "Adlm"', (next) => {
			expect(adlm.code).to.equal('Adlm');

			next();
		});

		it('has numeric "166"', (next) => {
			expect(adlm.numeric).to.equal('166');

			next();
		});

		it('implements toString', (next) => {
			expect(adlm.toString).to.be.function();
			expect(adlm.toString()).to.equal('Adlm');
			expect(String(adlm)).to.equal('Adlm');
			expect(0 + adlm).to.equal('0Adlm');
			expect('code:' + adlm).to.equal('code:Adlm');

			next();
		});

		it('implements toJSON', (next) => {
			expect(adlm.toJSON).to.be.function();
			expect(adlm.toJSON()).to.equal('Adlm');
			expect(JSON.stringify(adlm)).to.equal('"Adlm"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(adlm.valueOf).to.be.function();
			expect(adlm.valueOf()).to.equal(166);
			expect(Number(adlm)).to.equal(166);
			expect(+adlm).to.equal(166);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(adlm.valueOf).to.be.function();
			expect(adlm.valueOf()).to.equal(166);
			expect(Number(adlm)).to.equal(166);
			expect(+adlm).to.equal(166);

			expect(0 + adlm).to.equal('0Adlm');
			expect(String(adlm)).to.equal('Adlm');

			next();
		});
	});
});
