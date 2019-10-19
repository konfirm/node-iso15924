/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Zsye - Symbols (Emoji variant)', () => {
		const zsye = factory('Zsye');

		it('instances are singletons', (next) => {
			const singleton = factory('Zsye');
			const upper = factory('ZSYE');
			const lower = factory('zsye');
			const code = factory.code('Zsye');
			const numeric = factory.numeric('993');
			const number = factory.numeric(993);
			const instance = new ISO15924('Zsye', '993');

			expect(singleton).to.shallow.equal(zsye);
			expect(upper).to.shallow.equal(zsye);
			expect(lower).to.shallow.equal(zsye);
			expect(code).to.shallow.equal(zsye);
			expect(numeric).to.shallow.equal(zsye);
			expect(number).to.shallow.equal(zsye);
			expect(instance).not.to.shallow.equal(zsye);
			expect(instance.code).to.equal(zsye.code);
			expect(instance.numeric).to.equal(zsye.numeric);

			next();
		});

		it('has code "Zsye"', (next) => {
			expect(zsye.code).to.equal('Zsye');

			next();
		});

		it('has numeric "993"', (next) => {
			expect(zsye.numeric).to.equal('993');

			next();
		});

		it('implements toString', (next) => {
			expect(zsye.toString).to.be.function();
			expect(zsye.toString()).to.equal('Zsye');
			expect(String(zsye)).to.equal('Zsye');
			expect(0 + zsye).to.equal('0Zsye');
			expect('code:' + zsye).to.equal('code:Zsye');

			next();
		});

		it('implements toJSON', (next) => {
			expect(zsye.toJSON).to.be.function();
			expect(zsye.toJSON()).to.equal('Zsye');
			expect(JSON.stringify(zsye)).to.equal('"Zsye"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(zsye.valueOf).to.be.function();
			expect(zsye.valueOf()).to.equal(993);
			expect(Number(zsye)).to.equal(993);
			expect(+zsye).to.equal(993);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(zsye.valueOf).to.be.function();
			expect(zsye.valueOf()).to.equal(993);
			expect(Number(zsye)).to.equal(993);
			expect(+zsye).to.equal(993);

			expect(0 + zsye).to.equal('0Zsye');
			expect(String(zsye)).to.equal('Zsye');

			next();
		});
	});
});
