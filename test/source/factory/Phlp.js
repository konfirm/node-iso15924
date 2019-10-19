/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Phlp - Psalter Pahlavi', () => {
		const phlp = factory('Phlp');

		it('instances are singletons', (next) => {
			const singleton = factory('Phlp');
			const upper = factory('PHLP');
			const lower = factory('phlp');
			const code = factory.code('Phlp');
			const numeric = factory.numeric('132');
			const number = factory.numeric(132);
			const instance = new ISO15924('Phlp', '132');

			expect(singleton).to.shallow.equal(phlp);
			expect(upper).to.shallow.equal(phlp);
			expect(lower).to.shallow.equal(phlp);
			expect(code).to.shallow.equal(phlp);
			expect(numeric).to.shallow.equal(phlp);
			expect(number).to.shallow.equal(phlp);
			expect(instance).not.to.shallow.equal(phlp);
			expect(instance.code).to.equal(phlp.code);
			expect(instance.numeric).to.equal(phlp.numeric);

			next();
		});

		it('has code "Phlp"', (next) => {
			expect(phlp.code).to.equal('Phlp');

			next();
		});

		it('has numeric "132"', (next) => {
			expect(phlp.numeric).to.equal('132');

			next();
		});

		it('implements toString', (next) => {
			expect(phlp.toString).to.be.function();
			expect(phlp.toString()).to.equal('Phlp');
			expect(String(phlp)).to.equal('Phlp');
			expect(0 + phlp).to.equal('0Phlp');
			expect('code:' + phlp).to.equal('code:Phlp');

			next();
		});

		it('implements toJSON', (next) => {
			expect(phlp.toJSON).to.be.function();
			expect(phlp.toJSON()).to.equal('Phlp');
			expect(JSON.stringify(phlp)).to.equal('"Phlp"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(phlp.valueOf).to.be.function();
			expect(phlp.valueOf()).to.equal(132);
			expect(Number(phlp)).to.equal(132);
			expect(+phlp).to.equal(132);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(phlp.valueOf).to.be.function();
			expect(phlp.valueOf()).to.equal(132);
			expect(Number(phlp)).to.equal(132);
			expect(+phlp).to.equal(132);

			expect(0 + phlp).to.equal('0Phlp');
			expect(String(phlp)).to.equal('Phlp');

			next();
		});
	});
});
