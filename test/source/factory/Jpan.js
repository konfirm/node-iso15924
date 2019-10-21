/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Jpan - Japanese', () => {
		const jpan = factory('Jpan');

		it('instances are singletons', (next) => {
			const singleton = factory('Jpan');
			const upper = factory('JPAN');
			const lower = factory('jpan');
			const code = factory.code('Jpan');
			const numeric = factory.numeric('413');
			const number = factory.numeric(413);
			const instance = new ISO15924('Jpan', '413');

			expect(singleton).to.shallow.equal(jpan);
			expect(upper).to.shallow.equal(jpan);
			expect(lower).to.shallow.equal(jpan);
			expect(code).to.shallow.equal(jpan);
			expect(numeric).to.shallow.equal(jpan);
			expect(number).to.shallow.equal(jpan);
			expect(instance).not.to.shallow.equal(jpan);
			expect(instance.code).to.equal(jpan.code);
			expect(instance.numeric).to.equal(jpan.numeric);

			next();
		});

		it('has code "Jpan"', (next) => {
			expect(jpan.code).to.equal('Jpan');

			next();
		});

		it('has numeric "413"', (next) => {
			expect(jpan.numeric).to.equal('413');

			next();
		});

		it('implements toString', (next) => {
			expect(jpan.toString).to.be.function();
			expect(jpan.toString()).to.equal('Jpan');
			expect(String(jpan)).to.equal('Jpan');
			expect(0 + jpan).to.equal('0Jpan');
			expect('code:' + jpan).to.equal('code:Jpan');

			next();
		});

		it('implements toJSON', (next) => {
			expect(jpan.toJSON).to.be.function();
			expect(jpan.toJSON()).to.equal('Jpan');
			expect(JSON.stringify(jpan)).to.equal('"Jpan"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(jpan.valueOf).to.be.function();
			expect(jpan.valueOf()).to.equal(413);
			expect(Number(jpan)).to.equal(413);
			expect(+jpan).to.equal(413);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(jpan.valueOf).to.be.function();
			expect(jpan.valueOf()).to.equal(413);
			expect(Number(jpan)).to.equal(413);
			expect(+jpan).to.equal(413);

			expect(0 + jpan).to.equal('0Jpan');
			expect(String(jpan)).to.equal('Jpan');

			next();
		});
	});
});
