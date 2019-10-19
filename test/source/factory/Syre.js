/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Syre - Syriac (Estrangelo variant)', () => {
		const syre = factory('Syre');

		it('instances are singletons', (next) => {
			const singleton = factory('Syre');
			const upper = factory('SYRE');
			const lower = factory('syre');
			const code = factory.code('Syre');
			const numeric = factory.numeric('138');
			const number = factory.numeric(138);
			const instance = new ISO15924('Syre', '138');

			expect(singleton).to.shallow.equal(syre);
			expect(upper).to.shallow.equal(syre);
			expect(lower).to.shallow.equal(syre);
			expect(code).to.shallow.equal(syre);
			expect(numeric).to.shallow.equal(syre);
			expect(number).to.shallow.equal(syre);
			expect(instance).not.to.shallow.equal(syre);
			expect(instance.code).to.equal(syre.code);
			expect(instance.numeric).to.equal(syre.numeric);

			next();
		});

		it('has code "Syre"', (next) => {
			expect(syre.code).to.equal('Syre');

			next();
		});

		it('has numeric "138"', (next) => {
			expect(syre.numeric).to.equal('138');

			next();
		});

		it('implements toString', (next) => {
			expect(syre.toString).to.be.function();
			expect(syre.toString()).to.equal('Syre');
			expect(String(syre)).to.equal('Syre');
			expect(0 + syre).to.equal('0Syre');
			expect('code:' + syre).to.equal('code:Syre');

			next();
		});

		it('implements toJSON', (next) => {
			expect(syre.toJSON).to.be.function();
			expect(syre.toJSON()).to.equal('Syre');
			expect(JSON.stringify(syre)).to.equal('"Syre"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(syre.valueOf).to.be.function();
			expect(syre.valueOf()).to.equal(138);
			expect(Number(syre)).to.equal(138);
			expect(+syre).to.equal(138);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(syre.valueOf).to.be.function();
			expect(syre.valueOf()).to.equal(138);
			expect(Number(syre)).to.equal(138);
			expect(+syre).to.equal(138);

			expect(0 + syre).to.equal('0Syre');
			expect(String(syre)).to.equal('Syre');

			next();
		});
	});
});
