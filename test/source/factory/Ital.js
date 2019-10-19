/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Ital - Old Italic (Etruscan, Oscan, etc.)', () => {
		const ital = factory('Ital');

		it('instances are singletons', (next) => {
			const singleton = factory('Ital');
			const upper = factory('ITAL');
			const lower = factory('ital');
			const code = factory.code('Ital');
			const numeric = factory.numeric('210');
			const number = factory.numeric(210);
			const instance = new ISO15924('Ital', '210');

			expect(singleton).to.shallow.equal(ital);
			expect(upper).to.shallow.equal(ital);
			expect(lower).to.shallow.equal(ital);
			expect(code).to.shallow.equal(ital);
			expect(numeric).to.shallow.equal(ital);
			expect(number).to.shallow.equal(ital);
			expect(instance).not.to.shallow.equal(ital);
			expect(instance.code).to.equal(ital.code);
			expect(instance.numeric).to.equal(ital.numeric);

			next();
		});

		it('has code "Ital"', (next) => {
			expect(ital.code).to.equal('Ital');

			next();
		});

		it('has numeric "210"', (next) => {
			expect(ital.numeric).to.equal('210');

			next();
		});

		it('implements toString', (next) => {
			expect(ital.toString).to.be.function();
			expect(ital.toString()).to.equal('Ital');
			expect(String(ital)).to.equal('Ital');
			expect(0 + ital).to.equal('0Ital');
			expect('code:' + ital).to.equal('code:Ital');

			next();
		});

		it('implements toJSON', (next) => {
			expect(ital.toJSON).to.be.function();
			expect(ital.toJSON()).to.equal('Ital');
			expect(JSON.stringify(ital)).to.equal('"Ital"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(ital.valueOf).to.be.function();
			expect(ital.valueOf()).to.equal(210);
			expect(Number(ital)).to.equal(210);
			expect(+ital).to.equal(210);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(ital.valueOf).to.be.function();
			expect(ital.valueOf()).to.equal(210);
			expect(Number(ital)).to.equal(210);
			expect(+ital).to.equal(210);

			expect(0 + ital).to.equal('0Ital');
			expect(String(ital)).to.equal('Ital');

			next();
		});
	});
});
