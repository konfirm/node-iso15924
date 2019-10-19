/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Perm - Old Permic', () => {
		const perm = factory('Perm');

		it('instances are singletons', (next) => {
			const singleton = factory('Perm');
			const upper = factory('PERM');
			const lower = factory('perm');
			const code = factory.code('Perm');
			const numeric = factory.numeric('227');
			const number = factory.numeric(227);
			const instance = new ISO15924('Perm', '227');

			expect(singleton).to.shallow.equal(perm);
			expect(upper).to.shallow.equal(perm);
			expect(lower).to.shallow.equal(perm);
			expect(code).to.shallow.equal(perm);
			expect(numeric).to.shallow.equal(perm);
			expect(number).to.shallow.equal(perm);
			expect(instance).not.to.shallow.equal(perm);
			expect(instance.code).to.equal(perm.code);
			expect(instance.numeric).to.equal(perm.numeric);

			next();
		});

		it('has code "Perm"', (next) => {
			expect(perm.code).to.equal('Perm');

			next();
		});

		it('has numeric "227"', (next) => {
			expect(perm.numeric).to.equal('227');

			next();
		});

		it('implements toString', (next) => {
			expect(perm.toString).to.be.function();
			expect(perm.toString()).to.equal('Perm');
			expect(String(perm)).to.equal('Perm');
			expect(0 + perm).to.equal('0Perm');
			expect('code:' + perm).to.equal('code:Perm');

			next();
		});

		it('implements toJSON', (next) => {
			expect(perm.toJSON).to.be.function();
			expect(perm.toJSON()).to.equal('Perm');
			expect(JSON.stringify(perm)).to.equal('"Perm"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(perm.valueOf).to.be.function();
			expect(perm.valueOf()).to.equal(227);
			expect(Number(perm)).to.equal(227);
			expect(+perm).to.equal(227);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(perm.valueOf).to.be.function();
			expect(perm.valueOf()).to.equal(227);
			expect(Number(perm)).to.equal(227);
			expect(+perm).to.equal(227);

			expect(0 + perm).to.equal('0Perm');
			expect(String(perm)).to.equal('Perm');

			next();
		});
	});
});
