/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabl - Codes reserved for private use', () => {
		const qabl = factory('Qabl');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabl');
			const upper = factory('QABL');
			const lower = factory('qabl');
			const code = factory.code('Qabl');
			const numeric = factory.numeric('937');
			const number = factory.numeric(937);
			const instance = new ISO15924('Qabl', '937');

			expect(singleton).to.shallow.equal(qabl);
			expect(upper).to.shallow.equal(qabl);
			expect(lower).to.shallow.equal(qabl);
			expect(code).to.shallow.equal(qabl);
			expect(numeric).to.shallow.equal(qabl);
			expect(number).to.shallow.equal(qabl);
			expect(instance).not.to.shallow.equal(qabl);
			expect(instance.code).to.equal(qabl.code);
			expect(instance.numeric).to.equal(qabl.numeric);

			next();
		});

		it('has code "Qabl"', (next) => {
			expect(qabl.code).to.equal('Qabl');

			next();
		});

		it('has numeric "937"', (next) => {
			expect(qabl.numeric).to.equal('937');

			next();
		});

		it('implements toString', (next) => {
			expect(qabl.toString).to.be.function();
			expect(qabl.toString()).to.equal('Qabl');
			expect(String(qabl)).to.equal('Qabl');
			expect(0 + qabl).to.equal('0Qabl');
			expect('code:' + qabl).to.equal('code:Qabl');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabl.toJSON).to.be.function();
			expect(qabl.toJSON()).to.equal('Qabl');
			expect(JSON.stringify(qabl)).to.equal('"Qabl"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabl.valueOf).to.be.function();
			expect(qabl.valueOf()).to.equal(937);
			expect(Number(qabl)).to.equal(937);
			expect(+qabl).to.equal(937);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabl.valueOf).to.be.function();
			expect(qabl.valueOf()).to.equal(937);
			expect(Number(qabl)).to.equal(937);
			expect(+qabl).to.equal(937);

			expect(0 + qabl).to.equal('0Qabl');
			expect(String(qabl)).to.equal('Qabl');

			next();
		});
	});
});
