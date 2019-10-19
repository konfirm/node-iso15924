/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Sarb - Old South Arabian', () => {
		const sarb = factory('Sarb');

		it('instances are singletons', (next) => {
			const singleton = factory('Sarb');
			const upper = factory('SARB');
			const lower = factory('sarb');
			const code = factory.code('Sarb');
			const numeric = factory.numeric('105');
			const number = factory.numeric(105);
			const instance = new ISO15924('Sarb', '105');

			expect(singleton).to.shallow.equal(sarb);
			expect(upper).to.shallow.equal(sarb);
			expect(lower).to.shallow.equal(sarb);
			expect(code).to.shallow.equal(sarb);
			expect(numeric).to.shallow.equal(sarb);
			expect(number).to.shallow.equal(sarb);
			expect(instance).not.to.shallow.equal(sarb);
			expect(instance.code).to.equal(sarb.code);
			expect(instance.numeric).to.equal(sarb.numeric);

			next();
		});

		it('has code "Sarb"', (next) => {
			expect(sarb.code).to.equal('Sarb');

			next();
		});

		it('has numeric "105"', (next) => {
			expect(sarb.numeric).to.equal('105');

			next();
		});

		it('implements toString', (next) => {
			expect(sarb.toString).to.be.function();
			expect(sarb.toString()).to.equal('Sarb');
			expect(String(sarb)).to.equal('Sarb');
			expect(0 + sarb).to.equal('0Sarb');
			expect('code:' + sarb).to.equal('code:Sarb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(sarb.toJSON).to.be.function();
			expect(sarb.toJSON()).to.equal('Sarb');
			expect(JSON.stringify(sarb)).to.equal('"Sarb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(sarb.valueOf).to.be.function();
			expect(sarb.valueOf()).to.equal(105);
			expect(Number(sarb)).to.equal(105);
			expect(+sarb).to.equal(105);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(sarb.valueOf).to.be.function();
			expect(sarb.valueOf()).to.equal(105);
			expect(Number(sarb)).to.equal(105);
			expect(+sarb).to.equal(105);

			expect(0 + sarb).to.equal('0Sarb');
			expect(String(sarb)).to.equal('Sarb');

			next();
		});
	});
});
