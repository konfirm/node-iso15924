/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Egyp - Egyptian hieroglyphs', () => {
		const egyp = factory('Egyp');

		it('instances are singletons', (next) => {
			const singleton = factory('Egyp');
			const upper = factory('EGYP');
			const lower = factory('egyp');
			const code = factory.code('Egyp');
			const numeric = factory.numeric('050');
			const number = factory.numeric(50);
			const instance = new ISO15924('Egyp', '050');

			expect(singleton).to.shallow.equal(egyp);
			expect(upper).to.shallow.equal(egyp);
			expect(lower).to.shallow.equal(egyp);
			expect(code).to.shallow.equal(egyp);
			expect(numeric).to.shallow.equal(egyp);
			expect(number).to.shallow.equal(egyp);
			expect(instance).not.to.shallow.equal(egyp);
			expect(instance.code).to.equal(egyp.code);
			expect(instance.numeric).to.equal(egyp.numeric);

			next();
		});

		it('has code "Egyp"', (next) => {
			expect(egyp.code).to.equal('Egyp');

			next();
		});

		it('has numeric "050"', (next) => {
			expect(egyp.numeric).to.equal('050');

			next();
		});

		it('implements toString', (next) => {
			expect(egyp.toString).to.be.function();
			expect(egyp.toString()).to.equal('Egyp');
			expect(String(egyp)).to.equal('Egyp');
			expect(0 + egyp).to.equal('0Egyp');
			expect('code:' + egyp).to.equal('code:Egyp');

			next();
		});

		it('implements toJSON', (next) => {
			expect(egyp.toJSON).to.be.function();
			expect(egyp.toJSON()).to.equal('Egyp');
			expect(JSON.stringify(egyp)).to.equal('"Egyp"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(egyp.valueOf).to.be.function();
			expect(egyp.valueOf()).to.equal(50);
			expect(Number(egyp)).to.equal(50);
			expect(+egyp).to.equal(50);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(egyp.valueOf).to.be.function();
			expect(egyp.valueOf()).to.equal(50);
			expect(Number(egyp)).to.equal(50);
			expect(+egyp).to.equal(50);

			expect(0 + egyp).to.equal('0Egyp');
			expect(String(egyp)).to.equal('Egyp');

			next();
		});
	});
});
