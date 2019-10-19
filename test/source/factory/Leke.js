/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Leke - Leke', () => {
		const leke = factory('Leke');

		it('instances are singletons', (next) => {
			const singleton = factory('Leke');
			const upper = factory('LEKE');
			const lower = factory('leke');
			const code = factory.code('Leke');
			const numeric = factory.numeric('364');
			const number = factory.numeric(364);
			const instance = new ISO15924('Leke', '364');

			expect(singleton).to.shallow.equal(leke);
			expect(upper).to.shallow.equal(leke);
			expect(lower).to.shallow.equal(leke);
			expect(code).to.shallow.equal(leke);
			expect(numeric).to.shallow.equal(leke);
			expect(number).to.shallow.equal(leke);
			expect(instance).not.to.shallow.equal(leke);
			expect(instance.code).to.equal(leke.code);
			expect(instance.numeric).to.equal(leke.numeric);

			next();
		});

		it('has code "Leke"', (next) => {
			expect(leke.code).to.equal('Leke');

			next();
		});

		it('has numeric "364"', (next) => {
			expect(leke.numeric).to.equal('364');

			next();
		});

		it('implements toString', (next) => {
			expect(leke.toString).to.be.function();
			expect(leke.toString()).to.equal('Leke');
			expect(String(leke)).to.equal('Leke');
			expect(0 + leke).to.equal('0Leke');
			expect('code:' + leke).to.equal('code:Leke');

			next();
		});

		it('implements toJSON', (next) => {
			expect(leke.toJSON).to.be.function();
			expect(leke.toJSON()).to.equal('Leke');
			expect(JSON.stringify(leke)).to.equal('"Leke"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(leke.valueOf).to.be.function();
			expect(leke.valueOf()).to.equal(364);
			expect(Number(leke)).to.equal(364);
			expect(+leke).to.equal(364);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(leke.valueOf).to.be.function();
			expect(leke.valueOf()).to.equal(364);
			expect(Number(leke)).to.equal(364);
			expect(+leke).to.equal(364);

			expect(0 + leke).to.equal('0Leke');
			expect(String(leke)).to.equal('Leke');

			next();
		});
	});
});
