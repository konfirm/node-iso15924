/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Egyh - Egyptian hieratic', () => {
		const egyh = factory('Egyh');

		it('instances are singletons', (next) => {
			const singleton = factory('Egyh');
			const upper = factory('EGYH');
			const lower = factory('egyh');
			const code = factory.code('Egyh');
			const numeric = factory.numeric('060');
			const number = factory.numeric(60);
			const instance = new ISO15924('Egyh', '060');

			expect(singleton).to.shallow.equal(egyh);
			expect(upper).to.shallow.equal(egyh);
			expect(lower).to.shallow.equal(egyh);
			expect(code).to.shallow.equal(egyh);
			expect(numeric).to.shallow.equal(egyh);
			expect(number).to.shallow.equal(egyh);
			expect(instance).not.to.shallow.equal(egyh);
			expect(instance.code).to.equal(egyh.code);
			expect(instance.numeric).to.equal(egyh.numeric);

			next();
		});

		it('has code "Egyh"', (next) => {
			expect(egyh.code).to.equal('Egyh');

			next();
		});

		it('has numeric "060"', (next) => {
			expect(egyh.numeric).to.equal('060');

			next();
		});

		it('implements toString', (next) => {
			expect(egyh.toString).to.be.function();
			expect(egyh.toString()).to.equal('Egyh');
			expect(String(egyh)).to.equal('Egyh');
			expect(0 + egyh).to.equal('0Egyh');
			expect('code:' + egyh).to.equal('code:Egyh');

			next();
		});

		it('implements toJSON', (next) => {
			expect(egyh.toJSON).to.be.function();
			expect(egyh.toJSON()).to.equal('Egyh');
			expect(JSON.stringify(egyh)).to.equal('"Egyh"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(egyh.valueOf).to.be.function();
			expect(egyh.valueOf()).to.equal(60);
			expect(Number(egyh)).to.equal(60);
			expect(+egyh).to.equal(60);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(egyh.valueOf).to.be.function();
			expect(egyh.valueOf()).to.equal(60);
			expect(Number(egyh)).to.equal(60);
			expect(+egyh).to.equal(60);

			expect(0 + egyh).to.equal('0Egyh');
			expect(String(egyh)).to.equal('Egyh');

			next();
		});
	});
});
