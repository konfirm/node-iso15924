/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Guru - Gurmukhi', () => {
		const guru = factory('Guru');

		it('instances are singletons', (next) => {
			const singleton = factory('Guru');
			const upper = factory('GURU');
			const lower = factory('guru');
			const code = factory.code('Guru');
			const numeric = factory.numeric('310');
			const number = factory.numeric(310);
			const instance = new ISO15924('Guru', '310');

			expect(singleton).to.shallow.equal(guru);
			expect(upper).to.shallow.equal(guru);
			expect(lower).to.shallow.equal(guru);
			expect(code).to.shallow.equal(guru);
			expect(numeric).to.shallow.equal(guru);
			expect(number).to.shallow.equal(guru);
			expect(instance).not.to.shallow.equal(guru);
			expect(instance.code).to.equal(guru.code);
			expect(instance.numeric).to.equal(guru.numeric);

			next();
		});

		it('has code "Guru"', (next) => {
			expect(guru.code).to.equal('Guru');

			next();
		});

		it('has numeric "310"', (next) => {
			expect(guru.numeric).to.equal('310');

			next();
		});

		it('implements toString', (next) => {
			expect(guru.toString).to.be.function();
			expect(guru.toString()).to.equal('Guru');
			expect(String(guru)).to.equal('Guru');
			expect(0 + guru).to.equal('0Guru');
			expect('code:' + guru).to.equal('code:Guru');

			next();
		});

		it('implements toJSON', (next) => {
			expect(guru.toJSON).to.be.function();
			expect(guru.toJSON()).to.equal('Guru');
			expect(JSON.stringify(guru)).to.equal('"Guru"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(guru.valueOf).to.be.function();
			expect(guru.valueOf()).to.equal(310);
			expect(Number(guru)).to.equal(310);
			expect(+guru).to.equal(310);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(guru.valueOf).to.be.function();
			expect(guru.valueOf()).to.equal(310);
			expect(Number(guru)).to.equal(310);
			expect(+guru).to.equal(310);

			expect(0 + guru).to.equal('0Guru');
			expect(String(guru)).to.equal('Guru');

			next();
		});
	});
});
