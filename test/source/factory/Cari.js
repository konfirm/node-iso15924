/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cari - Carian', () => {
		const cari = factory('Cari');

		it('instances are singletons', (next) => {
			const singleton = factory('Cari');
			const upper = factory('CARI');
			const lower = factory('cari');
			const code = factory.code('Cari');
			const numeric = factory.numeric('201');
			const number = factory.numeric(201);
			const instance = new ISO15924('Cari', '201');

			expect(singleton).to.shallow.equal(cari);
			expect(upper).to.shallow.equal(cari);
			expect(lower).to.shallow.equal(cari);
			expect(code).to.shallow.equal(cari);
			expect(numeric).to.shallow.equal(cari);
			expect(number).to.shallow.equal(cari);
			expect(instance).not.to.shallow.equal(cari);
			expect(instance.code).to.equal(cari.code);
			expect(instance.numeric).to.equal(cari.numeric);

			next();
		});

		it('has code "Cari"', (next) => {
			expect(cari.code).to.equal('Cari');

			next();
		});

		it('has numeric "201"', (next) => {
			expect(cari.numeric).to.equal('201');

			next();
		});

		it('implements toString', (next) => {
			expect(cari.toString).to.be.function();
			expect(cari.toString()).to.equal('Cari');
			expect(String(cari)).to.equal('Cari');
			expect(0 + cari).to.equal('0Cari');
			expect('code:' + cari).to.equal('code:Cari');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cari.toJSON).to.be.function();
			expect(cari.toJSON()).to.equal('Cari');
			expect(JSON.stringify(cari)).to.equal('"Cari"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cari.valueOf).to.be.function();
			expect(cari.valueOf()).to.equal(201);
			expect(Number(cari)).to.equal(201);
			expect(+cari).to.equal(201);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cari.valueOf).to.be.function();
			expect(cari.valueOf()).to.equal(201);
			expect(Number(cari)).to.equal(201);
			expect(+cari).to.equal(201);

			expect(0 + cari).to.equal('0Cari');
			expect(String(cari)).to.equal('Cari');

			next();
		});
	});
});
