/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mtei - Meitei Mayek (Meithei, Meetei)', () => {
		const mtei = factory('Mtei');

		it('instances are singletons', (next) => {
			const singleton = factory('Mtei');
			const upper = factory('MTEI');
			const lower = factory('mtei');
			const code = factory.code('Mtei');
			const numeric = factory.numeric('337');
			const number = factory.numeric(337);
			const instance = new ISO15924('Mtei', '337');

			expect(singleton).to.shallow.equal(mtei);
			expect(upper).to.shallow.equal(mtei);
			expect(lower).to.shallow.equal(mtei);
			expect(code).to.shallow.equal(mtei);
			expect(numeric).to.shallow.equal(mtei);
			expect(number).to.shallow.equal(mtei);
			expect(instance).not.to.shallow.equal(mtei);
			expect(instance.code).to.equal(mtei.code);
			expect(instance.numeric).to.equal(mtei.numeric);

			next();
		});

		it('has code "Mtei"', (next) => {
			expect(mtei.code).to.equal('Mtei');

			next();
		});

		it('has numeric "337"', (next) => {
			expect(mtei.numeric).to.equal('337');

			next();
		});

		it('implements toString', (next) => {
			expect(mtei.toString).to.be.function();
			expect(mtei.toString()).to.equal('Mtei');
			expect(String(mtei)).to.equal('Mtei');
			expect(0 + mtei).to.equal('0Mtei');
			expect('code:' + mtei).to.equal('code:Mtei');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mtei.toJSON).to.be.function();
			expect(mtei.toJSON()).to.equal('Mtei');
			expect(JSON.stringify(mtei)).to.equal('"Mtei"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mtei.valueOf).to.be.function();
			expect(mtei.valueOf()).to.equal(337);
			expect(Number(mtei)).to.equal(337);
			expect(+mtei).to.equal(337);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mtei.valueOf).to.be.function();
			expect(mtei.valueOf()).to.equal(337);
			expect(Number(mtei)).to.equal(337);
			expect(+mtei).to.equal(337);

			expect(0 + mtei).to.equal('0Mtei');
			expect(String(mtei)).to.equal('Mtei');

			next();
		});
	});
});
