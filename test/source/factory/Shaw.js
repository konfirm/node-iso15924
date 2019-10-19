/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Shaw - Shavian (Shaw)', () => {
		const shaw = factory('Shaw');

		it('instances are singletons', (next) => {
			const singleton = factory('Shaw');
			const upper = factory('SHAW');
			const lower = factory('shaw');
			const code = factory.code('Shaw');
			const numeric = factory.numeric('281');
			const number = factory.numeric(281);
			const instance = new ISO15924('Shaw', '281');

			expect(singleton).to.shallow.equal(shaw);
			expect(upper).to.shallow.equal(shaw);
			expect(lower).to.shallow.equal(shaw);
			expect(code).to.shallow.equal(shaw);
			expect(numeric).to.shallow.equal(shaw);
			expect(number).to.shallow.equal(shaw);
			expect(instance).not.to.shallow.equal(shaw);
			expect(instance.code).to.equal(shaw.code);
			expect(instance.numeric).to.equal(shaw.numeric);

			next();
		});

		it('has code "Shaw"', (next) => {
			expect(shaw.code).to.equal('Shaw');

			next();
		});

		it('has numeric "281"', (next) => {
			expect(shaw.numeric).to.equal('281');

			next();
		});

		it('implements toString', (next) => {
			expect(shaw.toString).to.be.function();
			expect(shaw.toString()).to.equal('Shaw');
			expect(String(shaw)).to.equal('Shaw');
			expect(0 + shaw).to.equal('0Shaw');
			expect('code:' + shaw).to.equal('code:Shaw');

			next();
		});

		it('implements toJSON', (next) => {
			expect(shaw.toJSON).to.be.function();
			expect(shaw.toJSON()).to.equal('Shaw');
			expect(JSON.stringify(shaw)).to.equal('"Shaw"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(shaw.valueOf).to.be.function();
			expect(shaw.valueOf()).to.equal(281);
			expect(Number(shaw)).to.equal(281);
			expect(+shaw).to.equal(281);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(shaw.valueOf).to.be.function();
			expect(shaw.valueOf()).to.equal(281);
			expect(Number(shaw)).to.equal(281);
			expect(+shaw).to.equal(281);

			expect(0 + shaw).to.equal('0Shaw');
			expect(String(shaw)).to.equal('Shaw');

			next();
		});
	});
});
