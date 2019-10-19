/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Syrc - Syriac', () => {
		const syrc = factory('Syrc');

		it('instances are singletons', (next) => {
			const singleton = factory('Syrc');
			const upper = factory('SYRC');
			const lower = factory('syrc');
			const code = factory.code('Syrc');
			const numeric = factory.numeric('135');
			const number = factory.numeric(135);
			const instance = new ISO15924('Syrc', '135');

			expect(singleton).to.shallow.equal(syrc);
			expect(upper).to.shallow.equal(syrc);
			expect(lower).to.shallow.equal(syrc);
			expect(code).to.shallow.equal(syrc);
			expect(numeric).to.shallow.equal(syrc);
			expect(number).to.shallow.equal(syrc);
			expect(instance).not.to.shallow.equal(syrc);
			expect(instance.code).to.equal(syrc.code);
			expect(instance.numeric).to.equal(syrc.numeric);

			next();
		});

		it('has code "Syrc"', (next) => {
			expect(syrc.code).to.equal('Syrc');

			next();
		});

		it('has numeric "135"', (next) => {
			expect(syrc.numeric).to.equal('135');

			next();
		});

		it('implements toString', (next) => {
			expect(syrc.toString).to.be.function();
			expect(syrc.toString()).to.equal('Syrc');
			expect(String(syrc)).to.equal('Syrc');
			expect(0 + syrc).to.equal('0Syrc');
			expect('code:' + syrc).to.equal('code:Syrc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(syrc.toJSON).to.be.function();
			expect(syrc.toJSON()).to.equal('Syrc');
			expect(JSON.stringify(syrc)).to.equal('"Syrc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(syrc.valueOf).to.be.function();
			expect(syrc.valueOf()).to.equal(135);
			expect(Number(syrc)).to.equal(135);
			expect(+syrc).to.equal(135);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(syrc.valueOf).to.be.function();
			expect(syrc.valueOf()).to.equal(135);
			expect(Number(syrc)).to.equal(135);
			expect(+syrc).to.equal(135);

			expect(0 + syrc).to.equal('0Syrc');
			expect(String(syrc)).to.equal('Syrc');

			next();
		});
	});
});
