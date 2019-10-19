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
	});
});
