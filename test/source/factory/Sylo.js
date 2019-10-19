/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sylo - Syloti Nagri', () => {
		const sylo = factory('Sylo');

		it('instances are singletons', (next) => {
			const singleton = factory('Sylo');
			const upper = factory('SYLO');
			const lower = factory('sylo');
			const code = factory.code('Sylo');
			const numeric = factory.numeric('316');
			const number = factory.numeric(316);
			const instance = new ISO15924('Sylo', '316');

			expect(singleton).to.shallow.equal(sylo);
			expect(upper).to.shallow.equal(sylo);
			expect(lower).to.shallow.equal(sylo);
			expect(code).to.shallow.equal(sylo);
			expect(numeric).to.shallow.equal(sylo);
			expect(number).to.shallow.equal(sylo);
			expect(instance).not.to.shallow.equal(sylo);
			expect(instance.code).to.equal(sylo.code);
			expect(instance.numeric).to.equal(sylo.numeric);

			next();
		});

		it('has code "Sylo"', (next) => {
			expect(sylo.code).to.equal('Sylo');

			next();
		});

		it('has numeric "316"', (next) => {
			expect(sylo.numeric).to.equal('316');

			next();
		});

		it('implements toString', (next) => {
			expect(sylo.toString).to.be.function();
			expect(sylo.toString()).to.equal('Sylo');
			expect(String(sylo)).to.equal('Sylo');
			expect(0 + sylo).to.equal('0Sylo');
			expect('code:' + sylo).to.equal('code:Sylo');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sylo.toJSON).to.be.function();
			expect(sylo.toJSON()).to.equal('Sylo');
			expect(JSON.stringify(sylo)).to.equal('"Sylo"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sylo.valueOf).to.be.function();
			expect(sylo.valueOf()).to.equal(316);
			expect(Number(sylo)).to.equal(316);
			expect(+sylo).to.equal(316);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sylo.valueOf).to.be.function();
			expect(sylo.valueOf()).to.equal(316);
			expect(Number(sylo)).to.equal(316);
			expect(+sylo).to.equal(316);

			expect(0 + sylo).to.equal('0Sylo');
			expect(String(sylo)).to.equal('Sylo');

			next();
		});
	});
});
