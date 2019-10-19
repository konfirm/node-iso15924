/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Osge - Osage', () => {
		const osge = factory('Osge');

		it('instances are singletons', (next) => {
			const singleton = factory('Osge');
			const upper = factory('OSGE');
			const lower = factory('osge');
			const code = factory.code('Osge');
			const numeric = factory.numeric('219');
			const number = factory.numeric(219);
			const instance = new ISO15924('Osge', '219');

			expect(singleton).to.shallow.equal(osge);
			expect(upper).to.shallow.equal(osge);
			expect(lower).to.shallow.equal(osge);
			expect(code).to.shallow.equal(osge);
			expect(numeric).to.shallow.equal(osge);
			expect(number).to.shallow.equal(osge);
			expect(instance).not.to.shallow.equal(osge);
			expect(instance.code).to.equal(osge.code);
			expect(instance.numeric).to.equal(osge.numeric);

			next();
		});

		it('has code "Osge"', (next) => {
			expect(osge.code).to.equal('Osge');

			next();
		});

		it('has numeric "219"', (next) => {
			expect(osge.numeric).to.equal('219');

			next();
		});

		it('implements toString', (next) => {
			expect(osge.toString).to.be.function();
			expect(osge.toString()).to.equal('Osge');
			expect(String(osge)).to.equal('Osge');
			expect(0 + osge).to.equal('0Osge');
			expect('code:' + osge).to.equal('code:Osge');

			next();
		});

		it('implements toJSON', (next) => {
			expect(osge.toJSON).to.be.function();
			expect(osge.toJSON()).to.equal('Osge');
			expect(JSON.stringify(osge)).to.equal('"Osge"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(osge.valueOf).to.be.function();
			expect(osge.valueOf()).to.equal(219);
			expect(Number(osge)).to.equal(219);
			expect(+osge).to.equal(219);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(osge.valueOf).to.be.function();
			expect(osge.valueOf()).to.equal(219);
			expect(Number(osge)).to.equal(219);
			expect(+osge).to.equal(219);

			expect(0 + osge).to.equal('0Osge');
			expect(String(osge)).to.equal('Osge');

			next();
		});
	});
});
