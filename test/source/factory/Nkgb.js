/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Nkgb - Naxi Geba (na²¹ɕi³³ gʌ²¹ba²¹, &#x27;Na-&#x27;Khi ²Ggŏ-¹baw, Nakhi Geba)', () => {
		const nkgb = factory('Nkgb');

		it('instances are singletons', (next) => {
			const singleton = factory('Nkgb');
			const upper = factory('NKGB');
			const lower = factory('nkgb');
			const code = factory.code('Nkgb');
			const numeric = factory.numeric('420');
			const number = factory.numeric(420);
			const instance = new ISO15924('Nkgb', '420');

			expect(singleton).to.shallow.equal(nkgb);
			expect(upper).to.shallow.equal(nkgb);
			expect(lower).to.shallow.equal(nkgb);
			expect(code).to.shallow.equal(nkgb);
			expect(numeric).to.shallow.equal(nkgb);
			expect(number).to.shallow.equal(nkgb);
			expect(instance).not.to.shallow.equal(nkgb);
			expect(instance.code).to.equal(nkgb.code);
			expect(instance.numeric).to.equal(nkgb.numeric);

			next();
		});

		it('has code "Nkgb"', (next) => {
			expect(nkgb.code).to.equal('Nkgb');

			next();
		});

		it('has numeric "420"', (next) => {
			expect(nkgb.numeric).to.equal('420');

			next();
		});

		it('implements toString', (next) => {
			expect(nkgb.toString).to.be.function();
			expect(nkgb.toString()).to.equal('Nkgb');
			expect(String(nkgb)).to.equal('Nkgb');
			expect(0 + nkgb).to.equal('0Nkgb');
			expect('code:' + nkgb).to.equal('code:Nkgb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(nkgb.toJSON).to.be.function();
			expect(nkgb.toJSON()).to.equal('Nkgb');
			expect(JSON.stringify(nkgb)).to.equal('"Nkgb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(nkgb.valueOf).to.be.function();
			expect(nkgb.valueOf()).to.equal(420);
			expect(Number(nkgb)).to.equal(420);
			expect(+nkgb).to.equal(420);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(nkgb.valueOf).to.be.function();
			expect(nkgb.valueOf()).to.equal(420);
			expect(Number(nkgb)).to.equal(420);
			expect(+nkgb).to.equal(420);

			expect(0 + nkgb).to.equal('0Nkgb');
			expect(String(nkgb)).to.equal('Nkgb');

			next();
		});
	});
});
