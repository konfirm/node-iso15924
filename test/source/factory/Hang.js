/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hang - Hangul (Hangŭl, Hangeul)', () => {
		const hang = factory('Hang');

		it('instances are singletons', (next) => {
			const singleton = factory('Hang');
			const upper = factory('HANG');
			const lower = factory('hang');
			const code = factory.code('Hang');
			const numeric = factory.numeric('286');
			const number = factory.numeric(286);
			const instance = new ISO15924('Hang', '286');

			expect(singleton).to.shallow.equal(hang);
			expect(upper).to.shallow.equal(hang);
			expect(lower).to.shallow.equal(hang);
			expect(code).to.shallow.equal(hang);
			expect(numeric).to.shallow.equal(hang);
			expect(number).to.shallow.equal(hang);
			expect(instance).not.to.shallow.equal(hang);
			expect(instance.code).to.equal(hang.code);
			expect(instance.numeric).to.equal(hang.numeric);

			next();
		});

		it('has code "Hang"', (next) => {
			expect(hang.code).to.equal('Hang');

			next();
		});

		it('has numeric "286"', (next) => {
			expect(hang.numeric).to.equal('286');

			next();
		});

		it('implements toString', (next) => {
			expect(hang.toString).to.be.function();
			expect(hang.toString()).to.equal('Hang');
			expect(String(hang)).to.equal('Hang');
			expect(0 + hang).to.equal('0Hang');
			expect('code:' + hang).to.equal('code:Hang');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hang.toJSON).to.be.function();
			expect(hang.toJSON()).to.equal('Hang');
			expect(JSON.stringify(hang)).to.equal('"Hang"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hang.valueOf).to.be.function();
			expect(hang.valueOf()).to.equal(286);
			expect(Number(hang)).to.equal(286);
			expect(+hang).to.equal(286);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hang.valueOf).to.be.function();
			expect(hang.valueOf()).to.equal(286);
			expect(Number(hang)).to.equal(286);
			expect(+hang).to.equal(286);

			expect(0 + hang).to.equal('0Hang');
			expect(String(hang)).to.equal('Hang');

			next();
		});
	});
});
