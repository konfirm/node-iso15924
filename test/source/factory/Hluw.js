/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hluw - Anatolian Hieroglyphs (Luwian Hieroglyphs, Hittite Hieroglyphs)', () => {
		const hluw = factory('Hluw');

		it('instances are singletons', (next) => {
			const singleton = factory('Hluw');
			const upper = factory('HLUW');
			const lower = factory('hluw');
			const code = factory.code('Hluw');
			const numeric = factory.numeric('080');
			const number = factory.numeric(80);
			const instance = new ISO15924('Hluw', '080');

			expect(singleton).to.shallow.equal(hluw);
			expect(upper).to.shallow.equal(hluw);
			expect(lower).to.shallow.equal(hluw);
			expect(code).to.shallow.equal(hluw);
			expect(numeric).to.shallow.equal(hluw);
			expect(number).to.shallow.equal(hluw);
			expect(instance).not.to.shallow.equal(hluw);
			expect(instance.code).to.equal(hluw.code);
			expect(instance.numeric).to.equal(hluw.numeric);

			next();
		});

		it('has code "Hluw"', (next) => {
			expect(hluw.code).to.equal('Hluw');

			next();
		});

		it('has numeric "080"', (next) => {
			expect(hluw.numeric).to.equal('080');

			next();
		});

		it('implements toString', (next) => {
			expect(hluw.toString).to.be.function();
			expect(hluw.toString()).to.equal('Hluw');
			expect(String(hluw)).to.equal('Hluw');
			expect(0 + hluw).to.equal('0Hluw');
			expect('code:' + hluw).to.equal('code:Hluw');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hluw.toJSON).to.be.function();
			expect(hluw.toJSON()).to.equal('Hluw');
			expect(JSON.stringify(hluw)).to.equal('"Hluw"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hluw.valueOf).to.be.function();
			expect(hluw.valueOf()).to.equal(80);
			expect(Number(hluw)).to.equal(80);
			expect(+hluw).to.equal(80);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hluw.valueOf).to.be.function();
			expect(hluw.valueOf()).to.equal(80);
			expect(Number(hluw)).to.equal(80);
			expect(+hluw).to.equal(80);

			expect(0 + hluw).to.equal('0Hluw');
			expect(String(hluw)).to.equal('Hluw');

			next();
		});
	});
});
