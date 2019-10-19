/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Beng - Bengali (Bangla)', () => {
		const beng = factory('Beng');

		it('instances are singletons', (next) => {
			const singleton = factory('Beng');
			const upper = factory('BENG');
			const lower = factory('beng');
			const code = factory.code('Beng');
			const numeric = factory.numeric('325');
			const number = factory.numeric(325);
			const instance = new ISO15924('Beng', '325');

			expect(singleton).to.shallow.equal(beng);
			expect(upper).to.shallow.equal(beng);
			expect(lower).to.shallow.equal(beng);
			expect(code).to.shallow.equal(beng);
			expect(numeric).to.shallow.equal(beng);
			expect(number).to.shallow.equal(beng);
			expect(instance).not.to.shallow.equal(beng);
			expect(instance.code).to.equal(beng.code);
			expect(instance.numeric).to.equal(beng.numeric);

			next();
		});

		it('has code "Beng"', (next) => {
			expect(beng.code).to.equal('Beng');

			next();
		});

		it('has numeric "325"', (next) => {
			expect(beng.numeric).to.equal('325');

			next();
		});

		it('implements toString', (next) => {
			expect(beng.toString).to.be.function();
			expect(beng.toString()).to.equal('Beng');
			expect(String(beng)).to.equal('Beng');
			expect(0 + beng).to.equal('0Beng');
			expect('code:' + beng).to.equal('code:Beng');

			next();
		});

		it('implements toJSON', (next) => {
			expect(beng.toJSON).to.be.function();
			expect(beng.toJSON()).to.equal('Beng');
			expect(JSON.stringify(beng)).to.equal('"Beng"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(beng.valueOf).to.be.function();
			expect(beng.valueOf()).to.equal(325);
			expect(Number(beng)).to.equal(325);
			expect(+beng).to.equal(325);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(beng.valueOf).to.be.function();
			expect(beng.valueOf()).to.equal(325);
			expect(Number(beng)).to.equal(325);
			expect(+beng).to.equal(325);

			expect(0 + beng).to.equal('0Beng');
			expect(String(beng)).to.equal('Beng');

			next();
		});
	});
});
