/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Syrn - Syriac (Eastern variant)', () => {
		const syrn = factory('Syrn');

		it('instances are singletons', (next) => {
			const singleton = factory('Syrn');
			const upper = factory('SYRN');
			const lower = factory('syrn');
			const code = factory.code('Syrn');
			const numeric = factory.numeric('136');
			const number = factory.numeric(136);
			const instance = new ISO15924('Syrn', '136');

			expect(singleton).to.shallow.equal(syrn);
			expect(upper).to.shallow.equal(syrn);
			expect(lower).to.shallow.equal(syrn);
			expect(code).to.shallow.equal(syrn);
			expect(numeric).to.shallow.equal(syrn);
			expect(number).to.shallow.equal(syrn);
			expect(instance).not.to.shallow.equal(syrn);
			expect(instance.code).to.equal(syrn.code);
			expect(instance.numeric).to.equal(syrn.numeric);

			next();
		});

		it('has code "Syrn"', (next) => {
			expect(syrn.code).to.equal('Syrn');

			next();
		});

		it('has numeric "136"', (next) => {
			expect(syrn.numeric).to.equal('136');

			next();
		});

		it('implements toString', (next) => {
			expect(syrn.toString).to.be.function();
			expect(syrn.toString()).to.equal('Syrn');
			expect(String(syrn)).to.equal('Syrn');
			expect(0 + syrn).to.equal('0Syrn');
			expect('code:' + syrn).to.equal('code:Syrn');

			next();
		});

		it('implements toJSON', (next) => {
			expect(syrn.toJSON).to.be.function();
			expect(syrn.toJSON()).to.equal('Syrn');
			expect(JSON.stringify(syrn)).to.equal('"Syrn"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(syrn.valueOf).to.be.function();
			expect(syrn.valueOf()).to.equal(136);
			expect(Number(syrn)).to.equal(136);
			expect(+syrn).to.equal(136);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(syrn.valueOf).to.be.function();
			expect(syrn.valueOf()).to.equal(136);
			expect(Number(syrn)).to.equal(136);
			expect(+syrn).to.equal(136);

			expect(0 + syrn).to.equal('0Syrn');
			expect(String(syrn)).to.equal('Syrn');

			next();
		});
	});
});
