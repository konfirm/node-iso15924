/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Latn - Latin', () => {
		const latn = factory('Latn');

		it('instances are singletons', (next) => {
			const singleton = factory('Latn');
			const upper = factory('LATN');
			const lower = factory('latn');
			const code = factory.code('Latn');
			const numeric = factory.numeric('215');
			const number = factory.numeric(215);
			const instance = new ISO15924('Latn', '215');

			expect(singleton).to.shallow.equal(latn);
			expect(upper).to.shallow.equal(latn);
			expect(lower).to.shallow.equal(latn);
			expect(code).to.shallow.equal(latn);
			expect(numeric).to.shallow.equal(latn);
			expect(number).to.shallow.equal(latn);
			expect(instance).not.to.shallow.equal(latn);
			expect(instance.code).to.equal(latn.code);
			expect(instance.numeric).to.equal(latn.numeric);

			next();
		});

		it('has code "Latn"', (next) => {
			expect(latn.code).to.equal('Latn');

			next();
		});

		it('has numeric "215"', (next) => {
			expect(latn.numeric).to.equal('215');

			next();
		});

		it('implements toString', (next) => {
			expect(latn.toString).to.be.function();
			expect(latn.toString()).to.equal('Latn');
			expect(String(latn)).to.equal('Latn');
			expect(0 + latn).to.equal('0Latn');
			expect('code:' + latn).to.equal('code:Latn');

			next();
		});

		it('implements toJSON', (next) => {
			expect(latn.toJSON).to.be.function();
			expect(latn.toJSON()).to.equal('Latn');
			expect(JSON.stringify(latn)).to.equal('"Latn"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(latn.valueOf).to.be.function();
			expect(latn.valueOf()).to.equal(215);
			expect(Number(latn)).to.equal(215);
			expect(+latn).to.equal(215);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(latn.valueOf).to.be.function();
			expect(latn.valueOf()).to.equal(215);
			expect(Number(latn)).to.equal(215);
			expect(+latn).to.equal(215);

			expect(0 + latn).to.equal('0Latn');
			expect(String(latn)).to.equal('Latn');

			next();
		});
	});
});
