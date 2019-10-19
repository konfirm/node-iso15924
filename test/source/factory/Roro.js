/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Roro - Rongorongo', () => {
		const roro = factory('Roro');

		it('instances are singletons', (next) => {
			const singleton = factory('Roro');
			const upper = factory('RORO');
			const lower = factory('roro');
			const code = factory.code('Roro');
			const numeric = factory.numeric('620');
			const number = factory.numeric(620);
			const instance = new ISO15924('Roro', '620');

			expect(singleton).to.shallow.equal(roro);
			expect(upper).to.shallow.equal(roro);
			expect(lower).to.shallow.equal(roro);
			expect(code).to.shallow.equal(roro);
			expect(numeric).to.shallow.equal(roro);
			expect(number).to.shallow.equal(roro);
			expect(instance).not.to.shallow.equal(roro);
			expect(instance.code).to.equal(roro.code);
			expect(instance.numeric).to.equal(roro.numeric);

			next();
		});

		it('has code "Roro"', (next) => {
			expect(roro.code).to.equal('Roro');

			next();
		});

		it('has numeric "620"', (next) => {
			expect(roro.numeric).to.equal('620');

			next();
		});

		it('implements toString', (next) => {
			expect(roro.toString).to.be.function();
			expect(roro.toString()).to.equal('Roro');
			expect(String(roro)).to.equal('Roro');
			expect(0 + roro).to.equal('0Roro');
			expect('code:' + roro).to.equal('code:Roro');

			next();
		});

		it('implements toJSON', (next) => {
			expect(roro.toJSON).to.be.function();
			expect(roro.toJSON()).to.equal('Roro');
			expect(JSON.stringify(roro)).to.equal('"Roro"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(roro.valueOf).to.be.function();
			expect(roro.valueOf()).to.equal(620);
			expect(Number(roro)).to.equal(620);
			expect(+roro).to.equal(620);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(roro.valueOf).to.be.function();
			expect(roro.valueOf()).to.equal(620);
			expect(Number(roro)).to.equal(620);
			expect(+roro).to.equal(620);

			expect(0 + roro).to.equal('0Roro');
			expect(String(roro)).to.equal('Roro');

			next();
		});
	});
});
