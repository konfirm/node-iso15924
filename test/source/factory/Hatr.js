/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hatr - Hatran', () => {
		const hatr = factory('Hatr');

		it('instances are singletons', (next) => {
			const singleton = factory('Hatr');
			const upper = factory('HATR');
			const lower = factory('hatr');
			const code = factory.code('Hatr');
			const numeric = factory.numeric('127');
			const number = factory.numeric(127);
			const instance = new ISO15924('Hatr', '127');

			expect(singleton).to.shallow.equal(hatr);
			expect(upper).to.shallow.equal(hatr);
			expect(lower).to.shallow.equal(hatr);
			expect(code).to.shallow.equal(hatr);
			expect(numeric).to.shallow.equal(hatr);
			expect(number).to.shallow.equal(hatr);
			expect(instance).not.to.shallow.equal(hatr);
			expect(instance.code).to.equal(hatr.code);
			expect(instance.numeric).to.equal(hatr.numeric);

			next();
		});

		it('has code "Hatr"', (next) => {
			expect(hatr.code).to.equal('Hatr');

			next();
		});

		it('has numeric "127"', (next) => {
			expect(hatr.numeric).to.equal('127');

			next();
		});

		it('implements toString', (next) => {
			expect(hatr.toString).to.be.function();
			expect(hatr.toString()).to.equal('Hatr');
			expect(String(hatr)).to.equal('Hatr');
			expect(0 + hatr).to.equal('0Hatr');
			expect('code:' + hatr).to.equal('code:Hatr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hatr.toJSON).to.be.function();
			expect(hatr.toJSON()).to.equal('Hatr');
			expect(JSON.stringify(hatr)).to.equal('"Hatr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hatr.valueOf).to.be.function();
			expect(hatr.valueOf()).to.equal(127);
			expect(Number(hatr)).to.equal(127);
			expect(+hatr).to.equal(127);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hatr.valueOf).to.be.function();
			expect(hatr.valueOf()).to.equal(127);
			expect(Number(hatr)).to.equal(127);
			expect(+hatr).to.equal(127);

			expect(0 + hatr).to.equal('0Hatr');
			expect(String(hatr)).to.equal('Hatr');

			next();
		});
	});
});
