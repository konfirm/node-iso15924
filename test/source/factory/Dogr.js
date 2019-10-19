/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Dogr - Dogra', () => {
		const dogr = factory('Dogr');

		it('instances are singletons', (next) => {
			const singleton = factory('Dogr');
			const upper = factory('DOGR');
			const lower = factory('dogr');
			const code = factory.code('Dogr');
			const numeric = factory.numeric('328');
			const number = factory.numeric(328);
			const instance = new ISO15924('Dogr', '328');

			expect(singleton).to.shallow.equal(dogr);
			expect(upper).to.shallow.equal(dogr);
			expect(lower).to.shallow.equal(dogr);
			expect(code).to.shallow.equal(dogr);
			expect(numeric).to.shallow.equal(dogr);
			expect(number).to.shallow.equal(dogr);
			expect(instance).not.to.shallow.equal(dogr);
			expect(instance.code).to.equal(dogr.code);
			expect(instance.numeric).to.equal(dogr.numeric);

			next();
		});

		it('has code "Dogr"', (next) => {
			expect(dogr.code).to.equal('Dogr');

			next();
		});

		it('has numeric "328"', (next) => {
			expect(dogr.numeric).to.equal('328');

			next();
		});

		it('implements toString', (next) => {
			expect(dogr.toString).to.be.function();
			expect(dogr.toString()).to.equal('Dogr');
			expect(String(dogr)).to.equal('Dogr');
			expect(0 + dogr).to.equal('0Dogr');
			expect('code:' + dogr).to.equal('code:Dogr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(dogr.toJSON).to.be.function();
			expect(dogr.toJSON()).to.equal('Dogr');
			expect(JSON.stringify(dogr)).to.equal('"Dogr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(dogr.valueOf).to.be.function();
			expect(dogr.valueOf()).to.equal(328);
			expect(Number(dogr)).to.equal(328);
			expect(+dogr).to.equal(328);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(dogr.valueOf).to.be.function();
			expect(dogr.valueOf()).to.equal(328);
			expect(Number(dogr)).to.equal(328);
			expect(+dogr).to.equal(328);

			expect(0 + dogr).to.equal('0Dogr');
			expect(String(dogr)).to.equal('Dogr');

			next();
		});
	});
});
