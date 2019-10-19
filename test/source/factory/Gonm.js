/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Gonm - Masaram Gondi', () => {
		const gonm = factory('Gonm');

		it('instances are singletons', (next) => {
			const singleton = factory('Gonm');
			const upper = factory('GONM');
			const lower = factory('gonm');
			const code = factory.code('Gonm');
			const numeric = factory.numeric('313');
			const number = factory.numeric(313);
			const instance = new ISO15924('Gonm', '313');

			expect(singleton).to.shallow.equal(gonm);
			expect(upper).to.shallow.equal(gonm);
			expect(lower).to.shallow.equal(gonm);
			expect(code).to.shallow.equal(gonm);
			expect(numeric).to.shallow.equal(gonm);
			expect(number).to.shallow.equal(gonm);
			expect(instance).not.to.shallow.equal(gonm);
			expect(instance.code).to.equal(gonm.code);
			expect(instance.numeric).to.equal(gonm.numeric);

			next();
		});

		it('has code "Gonm"', (next) => {
			expect(gonm.code).to.equal('Gonm');

			next();
		});

		it('has numeric "313"', (next) => {
			expect(gonm.numeric).to.equal('313');

			next();
		});

		it('implements toString', (next) => {
			expect(gonm.toString).to.be.function();
			expect(gonm.toString()).to.equal('Gonm');
			expect(String(gonm)).to.equal('Gonm');
			expect(0 + gonm).to.equal('0Gonm');
			expect('code:' + gonm).to.equal('code:Gonm');

			next();
		});

		it('implements toJSON', (next) => {
			expect(gonm.toJSON).to.be.function();
			expect(gonm.toJSON()).to.equal('Gonm');
			expect(JSON.stringify(gonm)).to.equal('"Gonm"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(gonm.valueOf).to.be.function();
			expect(gonm.valueOf()).to.equal(313);
			expect(Number(gonm)).to.equal(313);
			expect(+gonm).to.equal(313);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(gonm.valueOf).to.be.function();
			expect(gonm.valueOf()).to.equal(313);
			expect(Number(gonm)).to.equal(313);
			expect(+gonm).to.equal(313);

			expect(0 + gonm).to.equal('0Gonm');
			expect(String(gonm)).to.equal('Gonm');

			next();
		});
	});
});
