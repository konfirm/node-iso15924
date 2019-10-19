/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Elba - Elbasan', () => {
		const elba = factory('Elba');

		it('instances are singletons', (next) => {
			const singleton = factory('Elba');
			const upper = factory('ELBA');
			const lower = factory('elba');
			const code = factory.code('Elba');
			const numeric = factory.numeric('226');
			const number = factory.numeric(226);
			const instance = new ISO15924('Elba', '226');

			expect(singleton).to.shallow.equal(elba);
			expect(upper).to.shallow.equal(elba);
			expect(lower).to.shallow.equal(elba);
			expect(code).to.shallow.equal(elba);
			expect(numeric).to.shallow.equal(elba);
			expect(number).to.shallow.equal(elba);
			expect(instance).not.to.shallow.equal(elba);
			expect(instance.code).to.equal(elba.code);
			expect(instance.numeric).to.equal(elba.numeric);

			next();
		});

		it('has code "Elba"', (next) => {
			expect(elba.code).to.equal('Elba');

			next();
		});

		it('has numeric "226"', (next) => {
			expect(elba.numeric).to.equal('226');

			next();
		});

		it('implements toString', (next) => {
			expect(elba.toString).to.be.function();
			expect(elba.toString()).to.equal('Elba');
			expect(String(elba)).to.equal('Elba');
			expect(0 + elba).to.equal('0Elba');
			expect('code:' + elba).to.equal('code:Elba');

			next();
		});

		it('implements toJSON', (next) => {
			expect(elba.toJSON).to.be.function();
			expect(elba.toJSON()).to.equal('Elba');
			expect(JSON.stringify(elba)).to.equal('"Elba"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(elba.valueOf).to.be.function();
			expect(elba.valueOf()).to.equal(226);
			expect(Number(elba)).to.equal(226);
			expect(+elba).to.equal(226);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(elba.valueOf).to.be.function();
			expect(elba.valueOf()).to.equal(226);
			expect(Number(elba)).to.equal(226);
			expect(+elba).to.equal(226);

			expect(0 + elba).to.equal('0Elba');
			expect(String(elba)).to.equal('Elba');

			next();
		});
	});
});
