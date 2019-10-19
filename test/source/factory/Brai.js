/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Brai - Braille', () => {
		const brai = factory('Brai');

		it('instances are singletons', (next) => {
			const singleton = factory('Brai');
			const upper = factory('BRAI');
			const lower = factory('brai');
			const code = factory.code('Brai');
			const numeric = factory.numeric('570');
			const number = factory.numeric(570);
			const instance = new ISO15924('Brai', '570');

			expect(singleton).to.shallow.equal(brai);
			expect(upper).to.shallow.equal(brai);
			expect(lower).to.shallow.equal(brai);
			expect(code).to.shallow.equal(brai);
			expect(numeric).to.shallow.equal(brai);
			expect(number).to.shallow.equal(brai);
			expect(instance).not.to.shallow.equal(brai);
			expect(instance.code).to.equal(brai.code);
			expect(instance.numeric).to.equal(brai.numeric);

			next();
		});

		it('has code "Brai"', (next) => {
			expect(brai.code).to.equal('Brai');

			next();
		});

		it('has numeric "570"', (next) => {
			expect(brai.numeric).to.equal('570');

			next();
		});

		it('implements toString', (next) => {
			expect(brai.toString).to.be.function();
			expect(brai.toString()).to.equal('Brai');
			expect(String(brai)).to.equal('Brai');
			expect(0 + brai).to.equal('0Brai');
			expect('code:' + brai).to.equal('code:Brai');

			next();
		});

		it('implements toJSON', (next) => {
			expect(brai.toJSON).to.be.function();
			expect(brai.toJSON()).to.equal('Brai');
			expect(JSON.stringify(brai)).to.equal('"Brai"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(brai.valueOf).to.be.function();
			expect(brai.valueOf()).to.equal(570);
			expect(Number(brai)).to.equal(570);
			expect(+brai).to.equal(570);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(brai.valueOf).to.be.function();
			expect(brai.valueOf()).to.equal(570);
			expect(Number(brai)).to.equal(570);
			expect(+brai).to.equal(570);

			expect(0 + brai).to.equal('0Brai');
			expect(String(brai)).to.equal('Brai');

			next();
		});
	});
});
