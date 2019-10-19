/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cans - Unified Canadian Aboriginal Syllabics', () => {
		const cans = factory('Cans');

		it('instances are singletons', (next) => {
			const singleton = factory('Cans');
			const upper = factory('CANS');
			const lower = factory('cans');
			const code = factory.code('Cans');
			const numeric = factory.numeric('440');
			const number = factory.numeric(440);
			const instance = new ISO15924('Cans', '440');

			expect(singleton).to.shallow.equal(cans);
			expect(upper).to.shallow.equal(cans);
			expect(lower).to.shallow.equal(cans);
			expect(code).to.shallow.equal(cans);
			expect(numeric).to.shallow.equal(cans);
			expect(number).to.shallow.equal(cans);
			expect(instance).not.to.shallow.equal(cans);
			expect(instance.code).to.equal(cans.code);
			expect(instance.numeric).to.equal(cans.numeric);

			next();
		});

		it('has code "Cans"', (next) => {
			expect(cans.code).to.equal('Cans');

			next();
		});

		it('has numeric "440"', (next) => {
			expect(cans.numeric).to.equal('440');

			next();
		});

		it('implements toString', (next) => {
			expect(cans.toString).to.be.function();
			expect(cans.toString()).to.equal('Cans');
			expect(String(cans)).to.equal('Cans');
			expect(0 + cans).to.equal('0Cans');
			expect('code:' + cans).to.equal('code:Cans');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cans.toJSON).to.be.function();
			expect(cans.toJSON()).to.equal('Cans');
			expect(JSON.stringify(cans)).to.equal('"Cans"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cans.valueOf).to.be.function();
			expect(cans.valueOf()).to.equal(440);
			expect(Number(cans)).to.equal(440);
			expect(+cans).to.equal(440);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cans.valueOf).to.be.function();
			expect(cans.valueOf()).to.equal(440);
			expect(Number(cans)).to.equal(440);
			expect(+cans).to.equal(440);

			expect(0 + cans).to.equal('0Cans');
			expect(String(cans)).to.equal('Cans');

			next();
		});
	});
});
