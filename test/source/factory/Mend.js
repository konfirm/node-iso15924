/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mend - Mende Kikakui', () => {
		const mend = factory('Mend');

		it('instances are singletons', (next) => {
			const singleton = factory('Mend');
			const upper = factory('MEND');
			const lower = factory('mend');
			const code = factory.code('Mend');
			const numeric = factory.numeric('438');
			const number = factory.numeric(438);
			const instance = new ISO15924('Mend', '438');

			expect(singleton).to.shallow.equal(mend);
			expect(upper).to.shallow.equal(mend);
			expect(lower).to.shallow.equal(mend);
			expect(code).to.shallow.equal(mend);
			expect(numeric).to.shallow.equal(mend);
			expect(number).to.shallow.equal(mend);
			expect(instance).not.to.shallow.equal(mend);
			expect(instance.code).to.equal(mend.code);
			expect(instance.numeric).to.equal(mend.numeric);

			next();
		});

		it('has code "Mend"', (next) => {
			expect(mend.code).to.equal('Mend');

			next();
		});

		it('has numeric "438"', (next) => {
			expect(mend.numeric).to.equal('438');

			next();
		});

		it('implements toString', (next) => {
			expect(mend.toString).to.be.function();
			expect(mend.toString()).to.equal('Mend');
			expect(String(mend)).to.equal('Mend');
			expect(0 + mend).to.equal('0Mend');
			expect('code:' + mend).to.equal('code:Mend');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mend.toJSON).to.be.function();
			expect(mend.toJSON()).to.equal('Mend');
			expect(JSON.stringify(mend)).to.equal('"Mend"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mend.valueOf).to.be.function();
			expect(mend.valueOf()).to.equal(438);
			expect(Number(mend)).to.equal(438);
			expect(+mend).to.equal(438);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mend.valueOf).to.be.function();
			expect(mend.valueOf()).to.equal(438);
			expect(Number(mend)).to.equal(438);
			expect(+mend).to.equal(438);

			expect(0 + mend).to.equal('0Mend');
			expect(String(mend)).to.equal('Mend');

			next();
		});
	});
});
