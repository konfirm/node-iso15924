/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Marc - Marchen', () => {
		const marc = factory('Marc');

		it('instances are singletons', (next) => {
			const singleton = factory('Marc');
			const upper = factory('MARC');
			const lower = factory('marc');
			const code = factory.code('Marc');
			const numeric = factory.numeric('332');
			const number = factory.numeric(332);
			const instance = new ISO15924('Marc', '332');

			expect(singleton).to.shallow.equal(marc);
			expect(upper).to.shallow.equal(marc);
			expect(lower).to.shallow.equal(marc);
			expect(code).to.shallow.equal(marc);
			expect(numeric).to.shallow.equal(marc);
			expect(number).to.shallow.equal(marc);
			expect(instance).not.to.shallow.equal(marc);
			expect(instance.code).to.equal(marc.code);
			expect(instance.numeric).to.equal(marc.numeric);

			next();
		});

		it('has code "Marc"', (next) => {
			expect(marc.code).to.equal('Marc');

			next();
		});

		it('has numeric "332"', (next) => {
			expect(marc.numeric).to.equal('332');

			next();
		});

		it('implements toString', (next) => {
			expect(marc.toString).to.be.function();
			expect(marc.toString()).to.equal('Marc');
			expect(String(marc)).to.equal('Marc');
			expect(0 + marc).to.equal('0Marc');
			expect('code:' + marc).to.equal('code:Marc');

			next();
		});

		it('implements toJSON', (next) => {
			expect(marc.toJSON).to.be.function();
			expect(marc.toJSON()).to.equal('Marc');
			expect(JSON.stringify(marc)).to.equal('"Marc"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(marc.valueOf).to.be.function();
			expect(marc.valueOf()).to.equal(332);
			expect(Number(marc)).to.equal(332);
			expect(+marc).to.equal(332);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(marc.valueOf).to.be.function();
			expect(marc.valueOf()).to.equal(332);
			expect(Number(marc)).to.equal(332);
			expect(+marc).to.equal(332);

			expect(0 + marc).to.equal('0Marc');
			expect(String(marc)).to.equal('Marc');

			next();
		});
	});
});
