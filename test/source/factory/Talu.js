/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Talu - New Tai Lue', () => {
		const talu = factory('Talu');

		it('instances are singletons', (next) => {
			const singleton = factory('Talu');
			const upper = factory('TALU');
			const lower = factory('talu');
			const code = factory.code('Talu');
			const numeric = factory.numeric('354');
			const number = factory.numeric(354);
			const instance = new ISO15924('Talu', '354');

			expect(singleton).to.shallow.equal(talu);
			expect(upper).to.shallow.equal(talu);
			expect(lower).to.shallow.equal(talu);
			expect(code).to.shallow.equal(talu);
			expect(numeric).to.shallow.equal(talu);
			expect(number).to.shallow.equal(talu);
			expect(instance).not.to.shallow.equal(talu);
			expect(instance.code).to.equal(talu.code);
			expect(instance.numeric).to.equal(talu.numeric);

			next();
		});

		it('has code "Talu"', (next) => {
			expect(talu.code).to.equal('Talu');

			next();
		});

		it('has numeric "354"', (next) => {
			expect(talu.numeric).to.equal('354');

			next();
		});

		it('implements toString', (next) => {
			expect(talu.toString).to.be.function();
			expect(talu.toString()).to.equal('Talu');
			expect(String(talu)).to.equal('Talu');
			expect(0 + talu).to.equal('0Talu');
			expect('code:' + talu).to.equal('code:Talu');

			next();
		});

		it('implements toJSON', (next) => {
			expect(talu.toJSON).to.be.function();
			expect(talu.toJSON()).to.equal('Talu');
			expect(JSON.stringify(talu)).to.equal('"Talu"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(talu.valueOf).to.be.function();
			expect(talu.valueOf()).to.equal(354);
			expect(Number(talu)).to.equal(354);
			expect(+talu).to.equal(354);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(talu.valueOf).to.be.function();
			expect(talu.valueOf()).to.equal(354);
			expect(Number(talu)).to.equal(354);
			expect(+talu).to.equal(354);

			expect(0 + talu).to.equal('0Talu');
			expect(String(talu)).to.equal('Talu');

			next();
		});
	});
});
