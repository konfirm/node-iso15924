/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Nkdb - Naxi Dongba (na²¹ɕi³³ to³³ba²¹, Nakhi Tomba)', () => {
		const nkdb = factory('Nkdb');

		it('instances are singletons', (next) => {
			const singleton = factory('Nkdb');
			const upper = factory('NKDB');
			const lower = factory('nkdb');
			const code = factory.code('Nkdb');
			const numeric = factory.numeric('085');
			const number = factory.numeric(85);
			const instance = new ISO15924('Nkdb', '085');

			expect(singleton).to.shallow.equal(nkdb);
			expect(upper).to.shallow.equal(nkdb);
			expect(lower).to.shallow.equal(nkdb);
			expect(code).to.shallow.equal(nkdb);
			expect(numeric).to.shallow.equal(nkdb);
			expect(number).to.shallow.equal(nkdb);
			expect(instance).not.to.shallow.equal(nkdb);
			expect(instance.code).to.equal(nkdb.code);
			expect(instance.numeric).to.equal(nkdb.numeric);

			next();
		});

		it('has code "Nkdb"', (next) => {
			expect(nkdb.code).to.equal('Nkdb');

			next();
		});

		it('has numeric "085"', (next) => {
			expect(nkdb.numeric).to.equal('085');

			next();
		});

		it('implements toString', (next) => {
			expect(nkdb.toString).to.be.function();
			expect(nkdb.toString()).to.equal('Nkdb');
			expect(String(nkdb)).to.equal('Nkdb');
			expect(0 + nkdb).to.equal('0Nkdb');
			expect('code:' + nkdb).to.equal('code:Nkdb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(nkdb.toJSON).to.be.function();
			expect(nkdb.toJSON()).to.equal('Nkdb');
			expect(JSON.stringify(nkdb)).to.equal('"Nkdb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(nkdb.valueOf).to.be.function();
			expect(nkdb.valueOf()).to.equal(85);
			expect(Number(nkdb)).to.equal(85);
			expect(+nkdb).to.equal(85);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(nkdb.valueOf).to.be.function();
			expect(nkdb.valueOf()).to.equal(85);
			expect(Number(nkdb)).to.equal(85);
			expect(+nkdb).to.equal(85);

			expect(0 + nkdb).to.equal('0Nkdb');
			expect(String(nkdb)).to.equal('Nkdb');

			next();
		});
	});
});
