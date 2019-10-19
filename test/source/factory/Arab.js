/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Arab - Arabic', () => {
		const arab = factory('Arab');

		it('instances are singletons', (next) => {
			const singleton = factory('Arab');
			const upper = factory('ARAB');
			const lower = factory('arab');
			const code = factory.code('Arab');
			const numeric = factory.numeric('160');
			const number = factory.numeric(160);
			const instance = new ISO15924('Arab', '160');

			expect(singleton).to.shallow.equal(arab);
			expect(upper).to.shallow.equal(arab);
			expect(lower).to.shallow.equal(arab);
			expect(code).to.shallow.equal(arab);
			expect(numeric).to.shallow.equal(arab);
			expect(number).to.shallow.equal(arab);
			expect(instance).not.to.shallow.equal(arab);
			expect(instance.code).to.equal(arab.code);
			expect(instance.numeric).to.equal(arab.numeric);

			next();
		});

		it('has code "Arab"', (next) => {
			expect(arab.code).to.equal('Arab');

			next();
		});

		it('has numeric "160"', (next) => {
			expect(arab.numeric).to.equal('160');

			next();
		});

		it('implements toString', (next) => {
			expect(arab.toString).to.be.function();
			expect(arab.toString()).to.equal('Arab');
			expect(String(arab)).to.equal('Arab');
			expect(0 + arab).to.equal('0Arab');
			expect('code:' + arab).to.equal('code:Arab');

			next();
		});

		it('implements toJSON', (next) => {
			expect(arab.toJSON).to.be.function();
			expect(arab.toJSON()).to.equal('Arab');
			expect(JSON.stringify(arab)).to.equal('"Arab"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(arab.valueOf).to.be.function();
			expect(arab.valueOf()).to.equal(160);
			expect(Number(arab)).to.equal(160);
			expect(+arab).to.equal(160);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(arab.valueOf).to.be.function();
			expect(arab.valueOf()).to.equal(160);
			expect(Number(arab)).to.equal(160);
			expect(+arab).to.equal(160);

			expect(0 + arab).to.equal('0Arab');
			expect(String(arab)).to.equal('Arab');

			next();
		});
	});
});
