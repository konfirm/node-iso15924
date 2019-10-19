/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Jurc - Jurchen', () => {
		const jurc = factory('Jurc');

		it('instances are singletons', (next) => {
			const singleton = factory('Jurc');
			const upper = factory('JURC');
			const lower = factory('jurc');
			const code = factory.code('Jurc');
			const numeric = factory.numeric('510');
			const number = factory.numeric(510);
			const instance = new ISO15924('Jurc', '510');

			expect(singleton).to.shallow.equal(jurc);
			expect(upper).to.shallow.equal(jurc);
			expect(lower).to.shallow.equal(jurc);
			expect(code).to.shallow.equal(jurc);
			expect(numeric).to.shallow.equal(jurc);
			expect(number).to.shallow.equal(jurc);
			expect(instance).not.to.shallow.equal(jurc);
			expect(instance.code).to.equal(jurc.code);
			expect(instance.numeric).to.equal(jurc.numeric);

			next();
		});

		it('has code "Jurc"', (next) => {
			expect(jurc.code).to.equal('Jurc');

			next();
		});

		it('has numeric "510"', (next) => {
			expect(jurc.numeric).to.equal('510');

			next();
		});

		it('implements toString', (next) => {
			expect(jurc.toString).to.be.function();
			expect(jurc.toString()).to.equal('Jurc');
			expect(String(jurc)).to.equal('Jurc');
			expect(0 + jurc).to.equal('0Jurc');
			expect('code:' + jurc).to.equal('code:Jurc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(jurc.toJSON).to.be.function();
			expect(jurc.toJSON()).to.equal('Jurc');
			expect(JSON.stringify(jurc)).to.equal('"Jurc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(jurc.valueOf).to.be.function();
			expect(jurc.valueOf()).to.equal(510);
			expect(Number(jurc)).to.equal(510);
			expect(+jurc).to.equal(510);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(jurc.valueOf).to.be.function();
			expect(jurc.valueOf()).to.equal(510);
			expect(Number(jurc)).to.equal(510);
			expect(+jurc).to.equal(510);

			expect(0 + jurc).to.equal('0Jurc');
			expect(String(jurc)).to.equal('Jurc');

			next();
		});
	});
});
