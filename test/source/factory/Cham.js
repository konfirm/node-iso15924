/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cham - Cham', () => {
		const cham = factory('Cham');

		it('instances are singletons', (next) => {
			const singleton = factory('Cham');
			const upper = factory('CHAM');
			const lower = factory('cham');
			const code = factory.code('Cham');
			const numeric = factory.numeric('358');
			const number = factory.numeric(358);
			const instance = new ISO15924('Cham', '358');

			expect(singleton).to.shallow.equal(cham);
			expect(upper).to.shallow.equal(cham);
			expect(lower).to.shallow.equal(cham);
			expect(code).to.shallow.equal(cham);
			expect(numeric).to.shallow.equal(cham);
			expect(number).to.shallow.equal(cham);
			expect(instance).not.to.shallow.equal(cham);
			expect(instance.code).to.equal(cham.code);
			expect(instance.numeric).to.equal(cham.numeric);

			next();
		});

		it('has code "Cham"', (next) => {
			expect(cham.code).to.equal('Cham');

			next();
		});

		it('has numeric "358"', (next) => {
			expect(cham.numeric).to.equal('358');

			next();
		});

		it('implements toString', (next) => {
			expect(cham.toString).to.be.function();
			expect(cham.toString()).to.equal('Cham');
			expect(String(cham)).to.equal('Cham');
			expect(0 + cham).to.equal('0Cham');
			expect('code:' + cham).to.equal('code:Cham');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cham.toJSON).to.be.function();
			expect(cham.toJSON()).to.equal('Cham');
			expect(JSON.stringify(cham)).to.equal('"Cham"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cham.valueOf).to.be.function();
			expect(cham.valueOf()).to.equal(358);
			expect(Number(cham)).to.equal(358);
			expect(+cham).to.equal(358);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cham.valueOf).to.be.function();
			expect(cham.valueOf()).to.equal(358);
			expect(Number(cham)).to.equal(358);
			expect(+cham).to.equal(358);

			expect(0 + cham).to.equal('0Cham');
			expect(String(cham)).to.equal('Cham');

			next();
		});
	});
});
