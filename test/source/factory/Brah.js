/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Brah - Brahmi', () => {
		const brah = factory('Brah');

		it('instances are singletons', (next) => {
			const singleton = factory('Brah');
			const upper = factory('BRAH');
			const lower = factory('brah');
			const code = factory.code('Brah');
			const numeric = factory.numeric('300');
			const number = factory.numeric(300);
			const instance = new ISO15924('Brah', '300');

			expect(singleton).to.shallow.equal(brah);
			expect(upper).to.shallow.equal(brah);
			expect(lower).to.shallow.equal(brah);
			expect(code).to.shallow.equal(brah);
			expect(numeric).to.shallow.equal(brah);
			expect(number).to.shallow.equal(brah);
			expect(instance).not.to.shallow.equal(brah);
			expect(instance.code).to.equal(brah.code);
			expect(instance.numeric).to.equal(brah.numeric);

			next();
		});

		it('has code "Brah"', (next) => {
			expect(brah.code).to.equal('Brah');

			next();
		});

		it('has numeric "300"', (next) => {
			expect(brah.numeric).to.equal('300');

			next();
		});

		it('implements toString', (next) => {
			expect(brah.toString).to.be.function();
			expect(brah.toString()).to.equal('Brah');
			expect(String(brah)).to.equal('Brah');
			expect(0 + brah).to.equal('0Brah');
			expect('code:' + brah).to.equal('code:Brah');

			next();
		});

		it('implements toJSON', (next) => {
			expect(brah.toJSON).to.be.function();
			expect(brah.toJSON()).to.equal('Brah');
			expect(JSON.stringify(brah)).to.equal('"Brah"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(brah.valueOf).to.be.function();
			expect(brah.valueOf()).to.equal(300);
			expect(Number(brah)).to.equal(300);
			expect(+brah).to.equal(300);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(brah.valueOf).to.be.function();
			expect(brah.valueOf()).to.equal(300);
			expect(Number(brah)).to.equal(300);
			expect(+brah).to.equal(300);

			expect(0 + brah).to.equal('0Brah');
			expect(String(brah)).to.equal('Brah');

			next();
		});
	});
});
