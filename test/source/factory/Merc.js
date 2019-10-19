/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Merc - Meroitic Cursive', () => {
		const merc = factory('Merc');

		it('instances are singletons', (next) => {
			const singleton = factory('Merc');
			const upper = factory('MERC');
			const lower = factory('merc');
			const code = factory.code('Merc');
			const numeric = factory.numeric('101');
			const number = factory.numeric(101);
			const instance = new ISO15924('Merc', '101');

			expect(singleton).to.shallow.equal(merc);
			expect(upper).to.shallow.equal(merc);
			expect(lower).to.shallow.equal(merc);
			expect(code).to.shallow.equal(merc);
			expect(numeric).to.shallow.equal(merc);
			expect(number).to.shallow.equal(merc);
			expect(instance).not.to.shallow.equal(merc);
			expect(instance.code).to.equal(merc.code);
			expect(instance.numeric).to.equal(merc.numeric);

			next();
		});

		it('has code "Merc"', (next) => {
			expect(merc.code).to.equal('Merc');

			next();
		});

		it('has numeric "101"', (next) => {
			expect(merc.numeric).to.equal('101');

			next();
		});

		it('implements toString', (next) => {
			expect(merc.toString).to.be.function();
			expect(merc.toString()).to.equal('Merc');
			expect(String(merc)).to.equal('Merc');
			expect(0 + merc).to.equal('0Merc');
			expect('code:' + merc).to.equal('code:Merc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(merc.toJSON).to.be.function();
			expect(merc.toJSON()).to.equal('Merc');
			expect(JSON.stringify(merc)).to.equal('"Merc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(merc.valueOf).to.be.function();
			expect(merc.valueOf()).to.equal(101);
			expect(Number(merc)).to.equal(101);
			expect(+merc).to.equal(101);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(merc.valueOf).to.be.function();
			expect(merc.valueOf()).to.equal(101);
			expect(Number(merc)).to.equal(101);
			expect(+merc).to.equal(101);

			expect(0 + merc).to.equal('0Merc');
			expect(String(merc)).to.equal('Merc');

			next();
		});
	});
});
