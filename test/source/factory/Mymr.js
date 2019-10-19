/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mymr - Myanmar (Burmese)', () => {
		const mymr = factory('Mymr');

		it('instances are singletons', (next) => {
			const singleton = factory('Mymr');
			const upper = factory('MYMR');
			const lower = factory('mymr');
			const code = factory.code('Mymr');
			const numeric = factory.numeric('350');
			const number = factory.numeric(350);
			const instance = new ISO15924('Mymr', '350');

			expect(singleton).to.shallow.equal(mymr);
			expect(upper).to.shallow.equal(mymr);
			expect(lower).to.shallow.equal(mymr);
			expect(code).to.shallow.equal(mymr);
			expect(numeric).to.shallow.equal(mymr);
			expect(number).to.shallow.equal(mymr);
			expect(instance).not.to.shallow.equal(mymr);
			expect(instance.code).to.equal(mymr.code);
			expect(instance.numeric).to.equal(mymr.numeric);

			next();
		});

		it('has code "Mymr"', (next) => {
			expect(mymr.code).to.equal('Mymr');

			next();
		});

		it('has numeric "350"', (next) => {
			expect(mymr.numeric).to.equal('350');

			next();
		});

		it('implements toString', (next) => {
			expect(mymr.toString).to.be.function();
			expect(mymr.toString()).to.equal('Mymr');
			expect(String(mymr)).to.equal('Mymr');
			expect(0 + mymr).to.equal('0Mymr');
			expect('code:' + mymr).to.equal('code:Mymr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mymr.toJSON).to.be.function();
			expect(mymr.toJSON()).to.equal('Mymr');
			expect(JSON.stringify(mymr)).to.equal('"Mymr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mymr.valueOf).to.be.function();
			expect(mymr.valueOf()).to.equal(350);
			expect(Number(mymr)).to.equal(350);
			expect(+mymr).to.equal(350);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mymr.valueOf).to.be.function();
			expect(mymr.valueOf()).to.equal(350);
			expect(Number(mymr)).to.equal(350);
			expect(+mymr).to.equal(350);

			expect(0 + mymr).to.equal('0Mymr');
			expect(String(mymr)).to.equal('Mymr');

			next();
		});
	});
});
