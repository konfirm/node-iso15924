/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Egyd - Egyptian demotic', () => {
		const egyd = factory('Egyd');

		it('instances are singletons', (next) => {
			const singleton = factory('Egyd');
			const upper = factory('EGYD');
			const lower = factory('egyd');
			const code = factory.code('Egyd');
			const numeric = factory.numeric('070');
			const number = factory.numeric(70);
			const instance = new ISO15924('Egyd', '070');

			expect(singleton).to.shallow.equal(egyd);
			expect(upper).to.shallow.equal(egyd);
			expect(lower).to.shallow.equal(egyd);
			expect(code).to.shallow.equal(egyd);
			expect(numeric).to.shallow.equal(egyd);
			expect(number).to.shallow.equal(egyd);
			expect(instance).not.to.shallow.equal(egyd);
			expect(instance.code).to.equal(egyd.code);
			expect(instance.numeric).to.equal(egyd.numeric);

			next();
		});

		it('has code "Egyd"', (next) => {
			expect(egyd.code).to.equal('Egyd');

			next();
		});

		it('has numeric "070"', (next) => {
			expect(egyd.numeric).to.equal('070');

			next();
		});

		it('implements toString', (next) => {
			expect(egyd.toString).to.be.function();
			expect(egyd.toString()).to.equal('Egyd');
			expect(String(egyd)).to.equal('Egyd');
			expect(0 + egyd).to.equal('0Egyd');
			expect('code:' + egyd).to.equal('code:Egyd');

			next();
		});

		it('implements toJSON', (next) => {
			expect(egyd.toJSON).to.be.function();
			expect(egyd.toJSON()).to.equal('Egyd');
			expect(JSON.stringify(egyd)).to.equal('"Egyd"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(egyd.valueOf).to.be.function();
			expect(egyd.valueOf()).to.equal(70);
			expect(Number(egyd)).to.equal(70);
			expect(+egyd).to.equal(70);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(egyd.valueOf).to.be.function();
			expect(egyd.valueOf()).to.equal(70);
			expect(Number(egyd)).to.equal(70);
			expect(+egyd).to.equal(70);

			expect(0 + egyd).to.equal('0Egyd');
			expect(String(egyd)).to.equal('Egyd');

			next();
		});
	});
});
