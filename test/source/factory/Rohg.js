/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Rohg - Hanifi Rohingya', () => {
		const rohg = factory('Rohg');

		it('instances are singletons', (next) => {
			const singleton = factory('Rohg');
			const upper = factory('ROHG');
			const lower = factory('rohg');
			const code = factory.code('Rohg');
			const numeric = factory.numeric('167');
			const number = factory.numeric(167);
			const instance = new ISO15924('Rohg', '167');

			expect(singleton).to.shallow.equal(rohg);
			expect(upper).to.shallow.equal(rohg);
			expect(lower).to.shallow.equal(rohg);
			expect(code).to.shallow.equal(rohg);
			expect(numeric).to.shallow.equal(rohg);
			expect(number).to.shallow.equal(rohg);
			expect(instance).not.to.shallow.equal(rohg);
			expect(instance.code).to.equal(rohg.code);
			expect(instance.numeric).to.equal(rohg.numeric);

			next();
		});

		it('has code "Rohg"', (next) => {
			expect(rohg.code).to.equal('Rohg');

			next();
		});

		it('has numeric "167"', (next) => {
			expect(rohg.numeric).to.equal('167');

			next();
		});

		it('implements toString', (next) => {
			expect(rohg.toString).to.be.function();
			expect(rohg.toString()).to.equal('Rohg');
			expect(String(rohg)).to.equal('Rohg');
			expect(0 + rohg).to.equal('0Rohg');
			expect('code:' + rohg).to.equal('code:Rohg');

			next();
		});

		it('implements toJSON', (next) => {
			expect(rohg.toJSON).to.be.function();
			expect(rohg.toJSON()).to.equal('Rohg');
			expect(JSON.stringify(rohg)).to.equal('"Rohg"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(rohg.valueOf).to.be.function();
			expect(rohg.valueOf()).to.equal(167);
			expect(Number(rohg)).to.equal(167);
			expect(+rohg).to.equal(167);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(rohg.valueOf).to.be.function();
			expect(rohg.valueOf()).to.equal(167);
			expect(Number(rohg)).to.equal(167);
			expect(+rohg).to.equal(167);

			expect(0 + rohg).to.equal('0Rohg');
			expect(String(rohg)).to.equal('Rohg');

			next();
		});
	});
});
