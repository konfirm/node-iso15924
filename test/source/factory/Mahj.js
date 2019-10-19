/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Mahj - Mahajani', () => {
		const mahj = factory('Mahj');

		it('instances are singletons', (next) => {
			const singleton = factory('Mahj');
			const upper = factory('MAHJ');
			const lower = factory('mahj');
			const code = factory.code('Mahj');
			const numeric = factory.numeric('314');
			const number = factory.numeric(314);
			const instance = new ISO15924('Mahj', '314');

			expect(singleton).to.shallow.equal(mahj);
			expect(upper).to.shallow.equal(mahj);
			expect(lower).to.shallow.equal(mahj);
			expect(code).to.shallow.equal(mahj);
			expect(numeric).to.shallow.equal(mahj);
			expect(number).to.shallow.equal(mahj);
			expect(instance).not.to.shallow.equal(mahj);
			expect(instance.code).to.equal(mahj.code);
			expect(instance.numeric).to.equal(mahj.numeric);

			next();
		});

		it('has code "Mahj"', (next) => {
			expect(mahj.code).to.equal('Mahj');

			next();
		});

		it('has numeric "314"', (next) => {
			expect(mahj.numeric).to.equal('314');

			next();
		});

		it('implements toString', (next) => {
			expect(mahj.toString).to.be.function();
			expect(mahj.toString()).to.equal('Mahj');
			expect(String(mahj)).to.equal('Mahj');
			expect(0 + mahj).to.equal('0Mahj');
			expect('code:' + mahj).to.equal('code:Mahj');

			next();
		});

		it('implements toJSON', (next) => {
			expect(mahj.toJSON).to.be.function();
			expect(mahj.toJSON()).to.equal('Mahj');
			expect(JSON.stringify(mahj)).to.equal('"Mahj"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(mahj.valueOf).to.be.function();
			expect(mahj.valueOf()).to.equal(314);
			expect(Number(mahj)).to.equal(314);
			expect(+mahj).to.equal(314);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(mahj.valueOf).to.be.function();
			expect(mahj.valueOf()).to.equal(314);
			expect(Number(mahj)).to.equal(314);
			expect(+mahj).to.equal(314);

			expect(0 + mahj).to.equal('0Mahj');
			expect(String(mahj)).to.equal('Mahj');

			next();
		});
	});
});
