/* global source, describe, it, each, expect */

const { main } = require('../../package.json');
const factory = require(`${__dirname}/../../${main}`);

describe('ISO 15924', () => {
	describe('main', () => {
		it('is a function', (next) => {
			expect(factory).to.be.function();

			next();
		});

		it('exposes "ISO15924" class', (next) => {
			expect(factory.ISO15924).to.be.function();

			next();
		});

		it('exposes "code" function', (next) => {
			expect(factory.code).to.be.function();

			next();
		});

		it('exposes "numeric" function', (next) => {
			expect(factory.numeric).to.be.function();

			next();
		});

		it('factories "Latn" script', (next) => {
			const { code, numeric, ISO15924 } = factory;
			const latn = factory('Latn');

			expect(code('Latn')).to.shallow.equal(latn);
			expect(numeric('215')).to.shallow.equal(latn);
			expect(latn).to.be.instanceOf(ISO15924);
			expect(latn.code).to.equal('Latn');
			expect(latn.numeric).to.equal('215');

			next();
		});

		it('does not factory unknown scripts', (next) => {
			const { code, numeric } = factory;

			expect(() => code('Unkn')).to.throw(
				/^Unknown ISO15924 code "Unkn"$/
			);
			expect(() => code('Unk')).to.throw(/^Unknown ISO15924 code "Unk"$/);
			expect(() => code('Un')).to.throw(/^Unknown ISO15924 code "Un"$/);
			expect(() => code('U')).to.throw(/^Unknown ISO15924 code "U"$/);
			expect(() => code('unkn')).to.throw(
				/^Unknown ISO15924 code "Unkn"$/
			);
			expect(() => code('unk')).to.throw(/^Unknown ISO15924 code "Unk"$/);
			expect(() => code('un')).to.throw(/^Unknown ISO15924 code "Un"$/);
			expect(() => code('u')).to.throw(/^Unknown ISO15924 code "U"$/);

			expect(() => numeric('1234')).to.throw(
				/^Unknown ISO15924 code "1234"$/
			);
			expect(() => numeric('12')).to.throw(
				/^Unknown ISO15924 code "012"$/
			);
			expect(() => numeric(12)).to.throw(/^Unknown ISO15924 code "012"$/);
			expect(() => numeric(1)).to.throw(/^Unknown ISO15924 code "001"$/);

			next();
		});
	});
});
