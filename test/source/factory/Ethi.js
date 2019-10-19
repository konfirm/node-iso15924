/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Ethi - Ethiopic (Geʻez)', () => {
		const ethi = factory('Ethi');

		it('instances are singletons', (next) => {
			const singleton = factory('Ethi');
			const upper = factory('ETHI');
			const lower = factory('ethi');
			const code = factory.code('Ethi');
			const numeric = factory.numeric('430');
			const number = factory.numeric(430);
			const instance = new ISO15924('Ethi', '430');

			expect(singleton).to.shallow.equal(ethi);
			expect(upper).to.shallow.equal(ethi);
			expect(lower).to.shallow.equal(ethi);
			expect(code).to.shallow.equal(ethi);
			expect(numeric).to.shallow.equal(ethi);
			expect(number).to.shallow.equal(ethi);
			expect(instance).not.to.shallow.equal(ethi);
			expect(instance.code).to.equal(ethi.code);
			expect(instance.numeric).to.equal(ethi.numeric);

			next();
		});

		it('has code "Ethi"', (next) => {
			expect(ethi.code).to.equal('Ethi');

			next();
		});

		it('has numeric "430"', (next) => {
			expect(ethi.numeric).to.equal('430');

			next();
		});

		it('implements toString', (next) => {
			expect(ethi.toString).to.be.function();
			expect(ethi.toString()).to.equal('Ethi');
			expect(String(ethi)).to.equal('Ethi');
			expect(0 + ethi).to.equal('0Ethi');
			expect('code:' + ethi).to.equal('code:Ethi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(ethi.toJSON).to.be.function();
			expect(ethi.toJSON()).to.equal('Ethi');
			expect(JSON.stringify(ethi)).to.equal('"Ethi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(ethi.valueOf).to.be.function();
			expect(ethi.valueOf()).to.equal(430);
			expect(Number(ethi)).to.equal(430);
			expect(+ethi).to.equal(430);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(ethi.valueOf).to.be.function();
			expect(ethi.valueOf()).to.equal(430);
			expect(Number(ethi)).to.equal(430);
			expect(+ethi).to.equal(430);

			expect(0 + ethi).to.equal('0Ethi');
			expect(String(ethi)).to.equal('Ethi');

			next();
		});
	});
});
