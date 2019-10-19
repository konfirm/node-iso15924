/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Bamu - Bamum', () => {
		const bamu = factory('Bamu');

		it('instances are singletons', (next) => {
			const singleton = factory('Bamu');
			const upper = factory('BAMU');
			const lower = factory('bamu');
			const code = factory.code('Bamu');
			const numeric = factory.numeric('435');
			const number = factory.numeric(435);
			const instance = new ISO15924('Bamu', '435');

			expect(singleton).to.shallow.equal(bamu);
			expect(upper).to.shallow.equal(bamu);
			expect(lower).to.shallow.equal(bamu);
			expect(code).to.shallow.equal(bamu);
			expect(numeric).to.shallow.equal(bamu);
			expect(number).to.shallow.equal(bamu);
			expect(instance).not.to.shallow.equal(bamu);
			expect(instance.code).to.equal(bamu.code);
			expect(instance.numeric).to.equal(bamu.numeric);

			next();
		});

		it('has code "Bamu"', (next) => {
			expect(bamu.code).to.equal('Bamu');

			next();
		});

		it('has numeric "435"', (next) => {
			expect(bamu.numeric).to.equal('435');

			next();
		});

		it('implements toString', (next) => {
			expect(bamu.toString).to.be.function();
			expect(bamu.toString()).to.equal('Bamu');
			expect(String(bamu)).to.equal('Bamu');
			expect(0 + bamu).to.equal('0Bamu');
			expect('code:' + bamu).to.equal('code:Bamu');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bamu.toJSON).to.be.function();
			expect(bamu.toJSON()).to.equal('Bamu');
			expect(JSON.stringify(bamu)).to.equal('"Bamu"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bamu.valueOf).to.be.function();
			expect(bamu.valueOf()).to.equal(435);
			expect(Number(bamu)).to.equal(435);
			expect(+bamu).to.equal(435);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bamu.valueOf).to.be.function();
			expect(bamu.valueOf()).to.equal(435);
			expect(Number(bamu)).to.equal(435);
			expect(+bamu).to.equal(435);

			expect(0 + bamu).to.equal('0Bamu');
			expect(String(bamu)).to.equal('Bamu');

			next();
		});
	});
});
