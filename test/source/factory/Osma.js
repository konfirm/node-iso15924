/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Osma - Osmanya', () => {
		const osma = factory('Osma');

		it('instances are singletons', (next) => {
			const singleton = factory('Osma');
			const upper = factory('OSMA');
			const lower = factory('osma');
			const code = factory.code('Osma');
			const numeric = factory.numeric('260');
			const number = factory.numeric(260);
			const instance = new ISO15924('Osma', '260');

			expect(singleton).to.shallow.equal(osma);
			expect(upper).to.shallow.equal(osma);
			expect(lower).to.shallow.equal(osma);
			expect(code).to.shallow.equal(osma);
			expect(numeric).to.shallow.equal(osma);
			expect(number).to.shallow.equal(osma);
			expect(instance).not.to.shallow.equal(osma);
			expect(instance.code).to.equal(osma.code);
			expect(instance.numeric).to.equal(osma.numeric);

			next();
		});

		it('has code "Osma"', (next) => {
			expect(osma.code).to.equal('Osma');

			next();
		});

		it('has numeric "260"', (next) => {
			expect(osma.numeric).to.equal('260');

			next();
		});

		it('implements toString', (next) => {
			expect(osma.toString).to.be.function();
			expect(osma.toString()).to.equal('Osma');
			expect(String(osma)).to.equal('Osma');
			expect(0 + osma).to.equal('0Osma');
			expect('code:' + osma).to.equal('code:Osma');

			next();
		});

		it('implements toJSON', (next) => {
			expect(osma.toJSON).to.be.function();
			expect(osma.toJSON()).to.equal('Osma');
			expect(JSON.stringify(osma)).to.equal('"Osma"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(osma.valueOf).to.be.function();
			expect(osma.valueOf()).to.equal(260);
			expect(Number(osma)).to.equal(260);
			expect(+osma).to.equal(260);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(osma.valueOf).to.be.function();
			expect(osma.valueOf()).to.equal(260);
			expect(Number(osma)).to.equal(260);
			expect(+osma).to.equal(260);

			expect(0 + osma).to.equal('0Osma');
			expect(String(osma)).to.equal('Osma');

			next();
		});
	});
});
