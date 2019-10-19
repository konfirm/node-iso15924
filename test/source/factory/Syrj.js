/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Syrj - Syriac (Western variant)', () => {
		const syrj = factory('Syrj');

		it('instances are singletons', (next) => {
			const singleton = factory('Syrj');
			const upper = factory('SYRJ');
			const lower = factory('syrj');
			const code = factory.code('Syrj');
			const numeric = factory.numeric('137');
			const number = factory.numeric(137);
			const instance = new ISO15924('Syrj', '137');

			expect(singleton).to.shallow.equal(syrj);
			expect(upper).to.shallow.equal(syrj);
			expect(lower).to.shallow.equal(syrj);
			expect(code).to.shallow.equal(syrj);
			expect(numeric).to.shallow.equal(syrj);
			expect(number).to.shallow.equal(syrj);
			expect(instance).not.to.shallow.equal(syrj);
			expect(instance.code).to.equal(syrj.code);
			expect(instance.numeric).to.equal(syrj.numeric);

			next();
		});

		it('has code "Syrj"', (next) => {
			expect(syrj.code).to.equal('Syrj');

			next();
		});

		it('has numeric "137"', (next) => {
			expect(syrj.numeric).to.equal('137');

			next();
		});

		it('implements toString', (next) => {
			expect(syrj.toString).to.be.function();
			expect(syrj.toString()).to.equal('Syrj');
			expect(String(syrj)).to.equal('Syrj');
			expect(0 + syrj).to.equal('0Syrj');
			expect('code:' + syrj).to.equal('code:Syrj');

			next();
		});

		it('implements toJSON', (next) => {
			expect(syrj.toJSON).to.be.function();
			expect(syrj.toJSON()).to.equal('Syrj');
			expect(JSON.stringify(syrj)).to.equal('"Syrj"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(syrj.valueOf).to.be.function();
			expect(syrj.valueOf()).to.equal(137);
			expect(Number(syrj)).to.equal(137);
			expect(+syrj).to.equal(137);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(syrj.valueOf).to.be.function();
			expect(syrj.valueOf()).to.equal(137);
			expect(Number(syrj)).to.equal(137);
			expect(+syrj).to.equal(137);

			expect(0 + syrj).to.equal('0Syrj');
			expect(String(syrj)).to.equal('Syrj');

			next();
		});
	});
});
