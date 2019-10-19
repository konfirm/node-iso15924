/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Lyci - Lycian', () => {
		const lyci = factory('Lyci');

		it('instances are singletons', (next) => {
			const singleton = factory('Lyci');
			const upper = factory('LYCI');
			const lower = factory('lyci');
			const code = factory.code('Lyci');
			const numeric = factory.numeric('202');
			const number = factory.numeric(202);
			const instance = new ISO15924('Lyci', '202');

			expect(singleton).to.shallow.equal(lyci);
			expect(upper).to.shallow.equal(lyci);
			expect(lower).to.shallow.equal(lyci);
			expect(code).to.shallow.equal(lyci);
			expect(numeric).to.shallow.equal(lyci);
			expect(number).to.shallow.equal(lyci);
			expect(instance).not.to.shallow.equal(lyci);
			expect(instance.code).to.equal(lyci.code);
			expect(instance.numeric).to.equal(lyci.numeric);

			next();
		});

		it('has code "Lyci"', (next) => {
			expect(lyci.code).to.equal('Lyci');

			next();
		});

		it('has numeric "202"', (next) => {
			expect(lyci.numeric).to.equal('202');

			next();
		});

		it('implements toString', (next) => {
			expect(lyci.toString).to.be.function();
			expect(lyci.toString()).to.equal('Lyci');
			expect(String(lyci)).to.equal('Lyci');
			expect(0 + lyci).to.equal('0Lyci');
			expect('code:' + lyci).to.equal('code:Lyci');

			next();
		});

		it('implements toJSON', (next) => {
			expect(lyci.toJSON).to.be.function();
			expect(lyci.toJSON()).to.equal('Lyci');
			expect(JSON.stringify(lyci)).to.equal('"Lyci"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(lyci.valueOf).to.be.function();
			expect(lyci.valueOf()).to.equal(202);
			expect(Number(lyci)).to.equal(202);
			expect(+lyci).to.equal(202);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(lyci.valueOf).to.be.function();
			expect(lyci.valueOf()).to.equal(202);
			expect(Number(lyci)).to.equal(202);
			expect(+lyci).to.equal(202);

			expect(0 + lyci).to.equal('0Lyci');
			expect(String(lyci)).to.equal('Lyci');

			next();
		});
	});
});
