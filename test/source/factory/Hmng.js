/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hmng - Pahawh Hmong', () => {
		const hmng = factory('Hmng');

		it('instances are singletons', (next) => {
			const singleton = factory('Hmng');
			const upper = factory('HMNG');
			const lower = factory('hmng');
			const code = factory.code('Hmng');
			const numeric = factory.numeric('450');
			const number = factory.numeric(450);
			const instance = new ISO15924('Hmng', '450');

			expect(singleton).to.shallow.equal(hmng);
			expect(upper).to.shallow.equal(hmng);
			expect(lower).to.shallow.equal(hmng);
			expect(code).to.shallow.equal(hmng);
			expect(numeric).to.shallow.equal(hmng);
			expect(number).to.shallow.equal(hmng);
			expect(instance).not.to.shallow.equal(hmng);
			expect(instance.code).to.equal(hmng.code);
			expect(instance.numeric).to.equal(hmng.numeric);

			next();
		});

		it('has code "Hmng"', (next) => {
			expect(hmng.code).to.equal('Hmng');

			next();
		});

		it('has numeric "450"', (next) => {
			expect(hmng.numeric).to.equal('450');

			next();
		});

		it('implements toString', (next) => {
			expect(hmng.toString).to.be.function();
			expect(hmng.toString()).to.equal('Hmng');
			expect(String(hmng)).to.equal('Hmng');
			expect(0 + hmng).to.equal('0Hmng');
			expect('code:' + hmng).to.equal('code:Hmng');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hmng.toJSON).to.be.function();
			expect(hmng.toJSON()).to.equal('Hmng');
			expect(JSON.stringify(hmng)).to.equal('"Hmng"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hmng.valueOf).to.be.function();
			expect(hmng.valueOf()).to.equal(450);
			expect(Number(hmng)).to.equal(450);
			expect(+hmng).to.equal(450);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hmng.valueOf).to.be.function();
			expect(hmng.valueOf()).to.equal(450);
			expect(Number(hmng)).to.equal(450);
			expect(+hmng).to.equal(450);

			expect(0 + hmng).to.equal('0Hmng');
			expect(String(hmng)).to.equal('Hmng');

			next();
		});
	});
});
