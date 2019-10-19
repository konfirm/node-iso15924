/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Jamo - Jamo (alias for Jamo subset of Hangul)', () => {
		const jamo = factory('Jamo');

		it('instances are singletons', (next) => {
			const singleton = factory('Jamo');
			const upper = factory('JAMO');
			const lower = factory('jamo');
			const code = factory.code('Jamo');
			const numeric = factory.numeric('284');
			const number = factory.numeric(284);
			const instance = new ISO15924('Jamo', '284');

			expect(singleton).to.shallow.equal(jamo);
			expect(upper).to.shallow.equal(jamo);
			expect(lower).to.shallow.equal(jamo);
			expect(code).to.shallow.equal(jamo);
			expect(numeric).to.shallow.equal(jamo);
			expect(number).to.shallow.equal(jamo);
			expect(instance).not.to.shallow.equal(jamo);
			expect(instance.code).to.equal(jamo.code);
			expect(instance.numeric).to.equal(jamo.numeric);

			next();
		});

		it('has code "Jamo"', (next) => {
			expect(jamo.code).to.equal('Jamo');

			next();
		});

		it('has numeric "284"', (next) => {
			expect(jamo.numeric).to.equal('284');

			next();
		});

		it('implements toString', (next) => {
			expect(jamo.toString).to.be.function();
			expect(jamo.toString()).to.equal('Jamo');
			expect(String(jamo)).to.equal('Jamo');
			expect(0 + jamo).to.equal('0Jamo');
			expect('code:' + jamo).to.equal('code:Jamo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(jamo.toJSON).to.be.function();
			expect(jamo.toJSON()).to.equal('Jamo');
			expect(JSON.stringify(jamo)).to.equal('"Jamo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(jamo.valueOf).to.be.function();
			expect(jamo.valueOf()).to.equal(284);
			expect(Number(jamo)).to.equal(284);
			expect(+jamo).to.equal(284);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(jamo.valueOf).to.be.function();
			expect(jamo.valueOf()).to.equal(284);
			expect(Number(jamo)).to.equal(284);
			expect(+jamo).to.equal(284);

			expect(0 + jamo).to.equal('0Jamo');
			expect(String(jamo)).to.equal('Jamo');

			next();
		});
	});
});
