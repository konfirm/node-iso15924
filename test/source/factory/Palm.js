/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Palm - Palmyrene', () => {
		const palm = factory('Palm');

		it('instances are singletons', (next) => {
			const singleton = factory('Palm');
			const upper = factory('PALM');
			const lower = factory('palm');
			const code = factory.code('Palm');
			const numeric = factory.numeric('126');
			const number = factory.numeric(126);
			const instance = new ISO15924('Palm', '126');

			expect(singleton).to.shallow.equal(palm);
			expect(upper).to.shallow.equal(palm);
			expect(lower).to.shallow.equal(palm);
			expect(code).to.shallow.equal(palm);
			expect(numeric).to.shallow.equal(palm);
			expect(number).to.shallow.equal(palm);
			expect(instance).not.to.shallow.equal(palm);
			expect(instance.code).to.equal(palm.code);
			expect(instance.numeric).to.equal(palm.numeric);

			next();
		});

		it('has code "Palm"', (next) => {
			expect(palm.code).to.equal('Palm');

			next();
		});

		it('has numeric "126"', (next) => {
			expect(palm.numeric).to.equal('126');

			next();
		});

		it('implements toString', (next) => {
			expect(palm.toString).to.be.function();
			expect(palm.toString()).to.equal('Palm');
			expect(String(palm)).to.equal('Palm');
			expect(0 + palm).to.equal('0Palm');
			expect('code:' + palm).to.equal('code:Palm');

			next();
		});

		it('implements toJSON', (next) => {
			expect(palm.toJSON).to.be.function();
			expect(palm.toJSON()).to.equal('Palm');
			expect(JSON.stringify(palm)).to.equal('"Palm"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(palm.valueOf).to.be.function();
			expect(palm.valueOf()).to.equal(126);
			expect(Number(palm)).to.equal(126);
			expect(+palm).to.equal(126);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(palm.valueOf).to.be.function();
			expect(palm.valueOf()).to.equal(126);
			expect(Number(palm)).to.equal(126);
			expect(+palm).to.equal(126);

			expect(0 + palm).to.equal('0Palm');
			expect(String(palm)).to.equal('Palm');

			next();
		});
	});
});
