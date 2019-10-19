/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Lisu - Lisu (Fraser)', () => {
		const lisu = factory('Lisu');

		it('instances are singletons', (next) => {
			const singleton = factory('Lisu');
			const upper = factory('LISU');
			const lower = factory('lisu');
			const code = factory.code('Lisu');
			const numeric = factory.numeric('399');
			const number = factory.numeric(399);
			const instance = new ISO15924('Lisu', '399');

			expect(singleton).to.shallow.equal(lisu);
			expect(upper).to.shallow.equal(lisu);
			expect(lower).to.shallow.equal(lisu);
			expect(code).to.shallow.equal(lisu);
			expect(numeric).to.shallow.equal(lisu);
			expect(number).to.shallow.equal(lisu);
			expect(instance).not.to.shallow.equal(lisu);
			expect(instance.code).to.equal(lisu.code);
			expect(instance.numeric).to.equal(lisu.numeric);

			next();
		});

		it('has code "Lisu"', (next) => {
			expect(lisu.code).to.equal('Lisu');

			next();
		});

		it('has numeric "399"', (next) => {
			expect(lisu.numeric).to.equal('399');

			next();
		});

		it('implements toString', (next) => {
			expect(lisu.toString).to.be.function();
			expect(lisu.toString()).to.equal('Lisu');
			expect(String(lisu)).to.equal('Lisu');
			expect(0 + lisu).to.equal('0Lisu');
			expect('code:' + lisu).to.equal('code:Lisu');

			next();
		});

		it('implements toJSON', (next) => {
			expect(lisu.toJSON).to.be.function();
			expect(lisu.toJSON()).to.equal('Lisu');
			expect(JSON.stringify(lisu)).to.equal('"Lisu"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(lisu.valueOf).to.be.function();
			expect(lisu.valueOf()).to.equal(399);
			expect(Number(lisu)).to.equal(399);
			expect(+lisu).to.equal(399);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(lisu.valueOf).to.be.function();
			expect(lisu.valueOf()).to.equal(399);
			expect(Number(lisu)).to.equal(399);
			expect(+lisu).to.equal(399);

			expect(0 + lisu).to.equal('0Lisu');
			expect(String(lisu)).to.equal('Lisu');

			next();
		});
	});
});
