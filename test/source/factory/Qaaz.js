/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaaz - Codes reserved for private use', () => {
		const qaaz = factory('Qaaz');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaaz');
			const upper = factory('QAAZ');
			const lower = factory('qaaz');
			const code = factory.code('Qaaz');
			const numeric = factory.numeric('925');
			const number = factory.numeric(925);
			const instance = new ISO15924('Qaaz', '925');

			expect(singleton).to.shallow.equal(qaaz);
			expect(upper).to.shallow.equal(qaaz);
			expect(lower).to.shallow.equal(qaaz);
			expect(code).to.shallow.equal(qaaz);
			expect(numeric).to.shallow.equal(qaaz);
			expect(number).to.shallow.equal(qaaz);
			expect(instance).not.to.shallow.equal(qaaz);
			expect(instance.code).to.equal(qaaz.code);
			expect(instance.numeric).to.equal(qaaz.numeric);

			next();
		});

		it('has code "Qaaz"', (next) => {
			expect(qaaz.code).to.equal('Qaaz');

			next();
		});

		it('has numeric "925"', (next) => {
			expect(qaaz.numeric).to.equal('925');

			next();
		});

		it('implements toString', (next) => {
			expect(qaaz.toString).to.be.function();
			expect(qaaz.toString()).to.equal('Qaaz');
			expect(String(qaaz)).to.equal('Qaaz');
			expect(0 + qaaz).to.equal('0Qaaz');
			expect('code:' + qaaz).to.equal('code:Qaaz');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaaz.toJSON).to.be.function();
			expect(qaaz.toJSON()).to.equal('Qaaz');
			expect(JSON.stringify(qaaz)).to.equal('"Qaaz"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaaz.valueOf).to.be.function();
			expect(qaaz.valueOf()).to.equal(925);
			expect(Number(qaaz)).to.equal(925);
			expect(+qaaz).to.equal(925);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaaz.valueOf).to.be.function();
			expect(qaaz.valueOf()).to.equal(925);
			expect(Number(qaaz)).to.equal(925);
			expect(+qaaz).to.equal(925);

			expect(0 + qaaz).to.equal('0Qaaz');
			expect(String(qaaz)).to.equal('Qaaz');

			next();
		});
	});
});
