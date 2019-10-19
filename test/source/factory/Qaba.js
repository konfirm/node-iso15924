/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaba - Codes reserved for private use', () => {
		const qaba = factory('Qaba');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaba');
			const upper = factory('QABA');
			const lower = factory('qaba');
			const code = factory.code('Qaba');
			const numeric = factory.numeric('926');
			const number = factory.numeric(926);
			const instance = new ISO15924('Qaba', '926');

			expect(singleton).to.shallow.equal(qaba);
			expect(upper).to.shallow.equal(qaba);
			expect(lower).to.shallow.equal(qaba);
			expect(code).to.shallow.equal(qaba);
			expect(numeric).to.shallow.equal(qaba);
			expect(number).to.shallow.equal(qaba);
			expect(instance).not.to.shallow.equal(qaba);
			expect(instance.code).to.equal(qaba.code);
			expect(instance.numeric).to.equal(qaba.numeric);

			next();
		});

		it('has code "Qaba"', (next) => {
			expect(qaba.code).to.equal('Qaba');

			next();
		});

		it('has numeric "926"', (next) => {
			expect(qaba.numeric).to.equal('926');

			next();
		});

		it('implements toString', (next) => {
			expect(qaba.toString).to.be.function();
			expect(qaba.toString()).to.equal('Qaba');
			expect(String(qaba)).to.equal('Qaba');
			expect(0 + qaba).to.equal('0Qaba');
			expect('code:' + qaba).to.equal('code:Qaba');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaba.toJSON).to.be.function();
			expect(qaba.toJSON()).to.equal('Qaba');
			expect(JSON.stringify(qaba)).to.equal('"Qaba"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaba.valueOf).to.be.function();
			expect(qaba.valueOf()).to.equal(926);
			expect(Number(qaba)).to.equal(926);
			expect(+qaba).to.equal(926);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaba.valueOf).to.be.function();
			expect(qaba.valueOf()).to.equal(926);
			expect(Number(qaba)).to.equal(926);
			expect(+qaba).to.equal(926);

			expect(0 + qaba).to.equal('0Qaba');
			expect(String(qaba)).to.equal('Qaba');

			next();
		});
	});
});
