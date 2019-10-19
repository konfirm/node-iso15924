/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tglg - Tagalog (Baybayin, Alibata)', () => {
		const tglg = factory('Tglg');

		it('instances are singletons', (next) => {
			const singleton = factory('Tglg');
			const upper = factory('TGLG');
			const lower = factory('tglg');
			const code = factory.code('Tglg');
			const numeric = factory.numeric('370');
			const number = factory.numeric(370);
			const instance = new ISO15924('Tglg', '370');

			expect(singleton).to.shallow.equal(tglg);
			expect(upper).to.shallow.equal(tglg);
			expect(lower).to.shallow.equal(tglg);
			expect(code).to.shallow.equal(tglg);
			expect(numeric).to.shallow.equal(tglg);
			expect(number).to.shallow.equal(tglg);
			expect(instance).not.to.shallow.equal(tglg);
			expect(instance.code).to.equal(tglg.code);
			expect(instance.numeric).to.equal(tglg.numeric);

			next();
		});

		it('has code "Tglg"', (next) => {
			expect(tglg.code).to.equal('Tglg');

			next();
		});

		it('has numeric "370"', (next) => {
			expect(tglg.numeric).to.equal('370');

			next();
		});

		it('implements toString', (next) => {
			expect(tglg.toString).to.be.function();
			expect(tglg.toString()).to.equal('Tglg');
			expect(String(tglg)).to.equal('Tglg');
			expect(0 + tglg).to.equal('0Tglg');
			expect('code:' + tglg).to.equal('code:Tglg');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tglg.toJSON).to.be.function();
			expect(tglg.toJSON()).to.equal('Tglg');
			expect(JSON.stringify(tglg)).to.equal('"Tglg"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tglg.valueOf).to.be.function();
			expect(tglg.valueOf()).to.equal(370);
			expect(Number(tglg)).to.equal(370);
			expect(+tglg).to.equal(370);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tglg.valueOf).to.be.function();
			expect(tglg.valueOf()).to.equal(370);
			expect(Number(tglg)).to.equal(370);
			expect(+tglg).to.equal(370);

			expect(0 + tglg).to.equal('0Tglg');
			expect(String(tglg)).to.equal('Tglg');

			next();
		});
	});
});
