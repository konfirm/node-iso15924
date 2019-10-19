/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hung - Old Hungarian (Hungarian Runic)', () => {
		const hung = factory('Hung');

		it('instances are singletons', (next) => {
			const singleton = factory('Hung');
			const upper = factory('HUNG');
			const lower = factory('hung');
			const code = factory.code('Hung');
			const numeric = factory.numeric('176');
			const number = factory.numeric(176);
			const instance = new ISO15924('Hung', '176');

			expect(singleton).to.shallow.equal(hung);
			expect(upper).to.shallow.equal(hung);
			expect(lower).to.shallow.equal(hung);
			expect(code).to.shallow.equal(hung);
			expect(numeric).to.shallow.equal(hung);
			expect(number).to.shallow.equal(hung);
			expect(instance).not.to.shallow.equal(hung);
			expect(instance.code).to.equal(hung.code);
			expect(instance.numeric).to.equal(hung.numeric);

			next();
		});

		it('has code "Hung"', (next) => {
			expect(hung.code).to.equal('Hung');

			next();
		});

		it('has numeric "176"', (next) => {
			expect(hung.numeric).to.equal('176');

			next();
		});

		it('implements toString', (next) => {
			expect(hung.toString).to.be.function();
			expect(hung.toString()).to.equal('Hung');
			expect(String(hung)).to.equal('Hung');
			expect(0 + hung).to.equal('0Hung');
			expect('code:' + hung).to.equal('code:Hung');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hung.toJSON).to.be.function();
			expect(hung.toJSON()).to.equal('Hung');
			expect(JSON.stringify(hung)).to.equal('"Hung"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hung.valueOf).to.be.function();
			expect(hung.valueOf()).to.equal(176);
			expect(Number(hung)).to.equal(176);
			expect(+hung).to.equal(176);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hung.valueOf).to.be.function();
			expect(hung.valueOf()).to.equal(176);
			expect(Number(hung)).to.equal(176);
			expect(+hung).to.equal(176);

			expect(0 + hung).to.equal('0Hung');
			expect(String(hung)).to.equal('Hung');

			next();
		});
	});
});
