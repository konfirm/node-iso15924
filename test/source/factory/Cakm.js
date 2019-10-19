/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cakm - Chakma', () => {
		const cakm = factory('Cakm');

		it('instances are singletons', (next) => {
			const singleton = factory('Cakm');
			const upper = factory('CAKM');
			const lower = factory('cakm');
			const code = factory.code('Cakm');
			const numeric = factory.numeric('349');
			const number = factory.numeric(349);
			const instance = new ISO15924('Cakm', '349');

			expect(singleton).to.shallow.equal(cakm);
			expect(upper).to.shallow.equal(cakm);
			expect(lower).to.shallow.equal(cakm);
			expect(code).to.shallow.equal(cakm);
			expect(numeric).to.shallow.equal(cakm);
			expect(number).to.shallow.equal(cakm);
			expect(instance).not.to.shallow.equal(cakm);
			expect(instance.code).to.equal(cakm.code);
			expect(instance.numeric).to.equal(cakm.numeric);

			next();
		});

		it('has code "Cakm"', (next) => {
			expect(cakm.code).to.equal('Cakm');

			next();
		});

		it('has numeric "349"', (next) => {
			expect(cakm.numeric).to.equal('349');

			next();
		});

		it('implements toString', (next) => {
			expect(cakm.toString).to.be.function();
			expect(cakm.toString()).to.equal('Cakm');
			expect(String(cakm)).to.equal('Cakm');
			expect(0 + cakm).to.equal('0Cakm');
			expect('code:' + cakm).to.equal('code:Cakm');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cakm.toJSON).to.be.function();
			expect(cakm.toJSON()).to.equal('Cakm');
			expect(JSON.stringify(cakm)).to.equal('"Cakm"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cakm.valueOf).to.be.function();
			expect(cakm.valueOf()).to.equal(349);
			expect(Number(cakm)).to.equal(349);
			expect(+cakm).to.equal(349);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cakm.valueOf).to.be.function();
			expect(cakm.valueOf()).to.equal(349);
			expect(Number(cakm)).to.equal(349);
			expect(+cakm).to.equal(349);

			expect(0 + cakm).to.equal('0Cakm');
			expect(String(cakm)).to.equal('Cakm');

			next();
		});
	});
});
