/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaac - Codes reserved for private use', () => {
		const qaac = factory('Qaac');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaac');
			const upper = factory('QAAC');
			const lower = factory('qaac');
			const code = factory.code('Qaac');
			const numeric = factory.numeric('902');
			const number = factory.numeric(902);
			const instance = new ISO15924('Qaac', '902');

			expect(singleton).to.shallow.equal(qaac);
			expect(upper).to.shallow.equal(qaac);
			expect(lower).to.shallow.equal(qaac);
			expect(code).to.shallow.equal(qaac);
			expect(numeric).to.shallow.equal(qaac);
			expect(number).to.shallow.equal(qaac);
			expect(instance).not.to.shallow.equal(qaac);
			expect(instance.code).to.equal(qaac.code);
			expect(instance.numeric).to.equal(qaac.numeric);

			next();
		});

		it('has code "Qaac"', (next) => {
			expect(qaac.code).to.equal('Qaac');

			next();
		});

		it('has numeric "902"', (next) => {
			expect(qaac.numeric).to.equal('902');

			next();
		});

		it('implements toString', (next) => {
			expect(qaac.toString).to.be.function();
			expect(qaac.toString()).to.equal('Qaac');
			expect(String(qaac)).to.equal('Qaac');
			expect(0 + qaac).to.equal('0Qaac');
			expect('code:' + qaac).to.equal('code:Qaac');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaac.toJSON).to.be.function();
			expect(qaac.toJSON()).to.equal('Qaac');
			expect(JSON.stringify(qaac)).to.equal('"Qaac"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaac.valueOf).to.be.function();
			expect(qaac.valueOf()).to.equal(902);
			expect(Number(qaac)).to.equal(902);
			expect(+qaac).to.equal(902);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaac.valueOf).to.be.function();
			expect(qaac.valueOf()).to.equal(902);
			expect(Number(qaac)).to.equal(902);
			expect(+qaac).to.equal(902);

			expect(0 + qaac).to.equal('0Qaac');
			expect(String(qaac)).to.equal('Qaac');

			next();
		});
	});
});
