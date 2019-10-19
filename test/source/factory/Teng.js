/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Teng - Tengwar', () => {
		const teng = factory('Teng');

		it('instances are singletons', (next) => {
			const singleton = factory('Teng');
			const upper = factory('TENG');
			const lower = factory('teng');
			const code = factory.code('Teng');
			const numeric = factory.numeric('290');
			const number = factory.numeric(290);
			const instance = new ISO15924('Teng', '290');

			expect(singleton).to.shallow.equal(teng);
			expect(upper).to.shallow.equal(teng);
			expect(lower).to.shallow.equal(teng);
			expect(code).to.shallow.equal(teng);
			expect(numeric).to.shallow.equal(teng);
			expect(number).to.shallow.equal(teng);
			expect(instance).not.to.shallow.equal(teng);
			expect(instance.code).to.equal(teng.code);
			expect(instance.numeric).to.equal(teng.numeric);

			next();
		});

		it('has code "Teng"', (next) => {
			expect(teng.code).to.equal('Teng');

			next();
		});

		it('has numeric "290"', (next) => {
			expect(teng.numeric).to.equal('290');

			next();
		});

		it('implements toString', (next) => {
			expect(teng.toString).to.be.function();
			expect(teng.toString()).to.equal('Teng');
			expect(String(teng)).to.equal('Teng');
			expect(0 + teng).to.equal('0Teng');
			expect('code:' + teng).to.equal('code:Teng');

			next();
		});

		it('implements toJSON', (next) => {
			expect(teng.toJSON).to.be.function();
			expect(teng.toJSON()).to.equal('Teng');
			expect(JSON.stringify(teng)).to.equal('"Teng"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(teng.valueOf).to.be.function();
			expect(teng.valueOf()).to.equal(290);
			expect(Number(teng)).to.equal(290);
			expect(+teng).to.equal(290);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(teng.valueOf).to.be.function();
			expect(teng.valueOf()).to.equal(290);
			expect(Number(teng)).to.equal(290);
			expect(+teng).to.equal(290);

			expect(0 + teng).to.equal('0Teng');
			expect(String(teng)).to.equal('Teng');

			next();
		});
	});
});
