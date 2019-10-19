/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Lydi - Lydian', () => {
		const lydi = factory('Lydi');

		it('instances are singletons', (next) => {
			const singleton = factory('Lydi');
			const upper = factory('LYDI');
			const lower = factory('lydi');
			const code = factory.code('Lydi');
			const numeric = factory.numeric('116');
			const number = factory.numeric(116);
			const instance = new ISO15924('Lydi', '116');

			expect(singleton).to.shallow.equal(lydi);
			expect(upper).to.shallow.equal(lydi);
			expect(lower).to.shallow.equal(lydi);
			expect(code).to.shallow.equal(lydi);
			expect(numeric).to.shallow.equal(lydi);
			expect(number).to.shallow.equal(lydi);
			expect(instance).not.to.shallow.equal(lydi);
			expect(instance.code).to.equal(lydi.code);
			expect(instance.numeric).to.equal(lydi.numeric);

			next();
		});

		it('has code "Lydi"', (next) => {
			expect(lydi.code).to.equal('Lydi');

			next();
		});

		it('has numeric "116"', (next) => {
			expect(lydi.numeric).to.equal('116');

			next();
		});

		it('implements toString', (next) => {
			expect(lydi.toString).to.be.function();
			expect(lydi.toString()).to.equal('Lydi');
			expect(String(lydi)).to.equal('Lydi');
			expect(0 + lydi).to.equal('0Lydi');
			expect('code:' + lydi).to.equal('code:Lydi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(lydi.toJSON).to.be.function();
			expect(lydi.toJSON()).to.equal('Lydi');
			expect(JSON.stringify(lydi)).to.equal('"Lydi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(lydi.valueOf).to.be.function();
			expect(lydi.valueOf()).to.equal(116);
			expect(Number(lydi)).to.equal(116);
			expect(+lydi).to.equal(116);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(lydi.valueOf).to.be.function();
			expect(lydi.valueOf()).to.equal(116);
			expect(Number(lydi)).to.equal(116);
			expect(+lydi).to.equal(116);

			expect(0 + lydi).to.equal('0Lydi');
			expect(String(lydi)).to.equal('Lydi');

			next();
		});
	});
});
