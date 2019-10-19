/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Yezi - Yezidi', () => {
		const yezi = factory('Yezi');

		it('instances are singletons', (next) => {
			const singleton = factory('Yezi');
			const upper = factory('YEZI');
			const lower = factory('yezi');
			const code = factory.code('Yezi');
			const numeric = factory.numeric('192');
			const number = factory.numeric(192);
			const instance = new ISO15924('Yezi', '192');

			expect(singleton).to.shallow.equal(yezi);
			expect(upper).to.shallow.equal(yezi);
			expect(lower).to.shallow.equal(yezi);
			expect(code).to.shallow.equal(yezi);
			expect(numeric).to.shallow.equal(yezi);
			expect(number).to.shallow.equal(yezi);
			expect(instance).not.to.shallow.equal(yezi);
			expect(instance.code).to.equal(yezi.code);
			expect(instance.numeric).to.equal(yezi.numeric);

			next();
		});

		it('has code "Yezi"', (next) => {
			expect(yezi.code).to.equal('Yezi');

			next();
		});

		it('has numeric "192"', (next) => {
			expect(yezi.numeric).to.equal('192');

			next();
		});

		it('implements toString', (next) => {
			expect(yezi.toString).to.be.function();
			expect(yezi.toString()).to.equal('Yezi');
			expect(String(yezi)).to.equal('Yezi');
			expect(0 + yezi).to.equal('0Yezi');
			expect('code:' + yezi).to.equal('code:Yezi');

			next();
		});

		it('implements toJSON', (next) => {
			expect(yezi.toJSON).to.be.function();
			expect(yezi.toJSON()).to.equal('Yezi');
			expect(JSON.stringify(yezi)).to.equal('"Yezi"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(yezi.valueOf).to.be.function();
			expect(yezi.valueOf()).to.equal(192);
			expect(Number(yezi)).to.equal(192);
			expect(+yezi).to.equal(192);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(yezi.valueOf).to.be.function();
			expect(yezi.valueOf()).to.equal(192);
			expect(Number(yezi)).to.equal(192);
			expect(+yezi).to.equal(192);

			expect(0 + yezi).to.equal('0Yezi');
			expect(String(yezi)).to.equal('Yezi');

			next();
		});
	});
});
