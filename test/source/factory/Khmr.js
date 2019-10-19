/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Khmr - Khmer', () => {
		const khmr = factory('Khmr');

		it('instances are singletons', (next) => {
			const singleton = factory('Khmr');
			const upper = factory('KHMR');
			const lower = factory('khmr');
			const code = factory.code('Khmr');
			const numeric = factory.numeric('355');
			const number = factory.numeric(355);
			const instance = new ISO15924('Khmr', '355');

			expect(singleton).to.shallow.equal(khmr);
			expect(upper).to.shallow.equal(khmr);
			expect(lower).to.shallow.equal(khmr);
			expect(code).to.shallow.equal(khmr);
			expect(numeric).to.shallow.equal(khmr);
			expect(number).to.shallow.equal(khmr);
			expect(instance).not.to.shallow.equal(khmr);
			expect(instance.code).to.equal(khmr.code);
			expect(instance.numeric).to.equal(khmr.numeric);

			next();
		});

		it('has code "Khmr"', (next) => {
			expect(khmr.code).to.equal('Khmr');

			next();
		});

		it('has numeric "355"', (next) => {
			expect(khmr.numeric).to.equal('355');

			next();
		});

		it('implements toString', (next) => {
			expect(khmr.toString).to.be.function();
			expect(khmr.toString()).to.equal('Khmr');
			expect(String(khmr)).to.equal('Khmr');
			expect(0 + khmr).to.equal('0Khmr');
			expect('code:' + khmr).to.equal('code:Khmr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(khmr.toJSON).to.be.function();
			expect(khmr.toJSON()).to.equal('Khmr');
			expect(JSON.stringify(khmr)).to.equal('"Khmr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(khmr.valueOf).to.be.function();
			expect(khmr.valueOf()).to.equal(355);
			expect(Number(khmr)).to.equal(355);
			expect(+khmr).to.equal(355);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(khmr.valueOf).to.be.function();
			expect(khmr.valueOf()).to.equal(355);
			expect(Number(khmr)).to.equal(355);
			expect(+khmr).to.equal(355);

			expect(0 + khmr).to.equal('0Khmr');
			expect(String(khmr)).to.equal('Khmr');

			next();
		});
	});
});
