/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tang - Tangut', () => {
		const tang = factory('Tang');

		it('instances are singletons', (next) => {
			const singleton = factory('Tang');
			const upper = factory('TANG');
			const lower = factory('tang');
			const code = factory.code('Tang');
			const numeric = factory.numeric('520');
			const number = factory.numeric(520);
			const instance = new ISO15924('Tang', '520');

			expect(singleton).to.shallow.equal(tang);
			expect(upper).to.shallow.equal(tang);
			expect(lower).to.shallow.equal(tang);
			expect(code).to.shallow.equal(tang);
			expect(numeric).to.shallow.equal(tang);
			expect(number).to.shallow.equal(tang);
			expect(instance).not.to.shallow.equal(tang);
			expect(instance.code).to.equal(tang.code);
			expect(instance.numeric).to.equal(tang.numeric);

			next();
		});

		it('has code "Tang"', (next) => {
			expect(tang.code).to.equal('Tang');

			next();
		});

		it('has numeric "520"', (next) => {
			expect(tang.numeric).to.equal('520');

			next();
		});

		it('implements toString', (next) => {
			expect(tang.toString).to.be.function();
			expect(tang.toString()).to.equal('Tang');
			expect(String(tang)).to.equal('Tang');
			expect(0 + tang).to.equal('0Tang');
			expect('code:' + tang).to.equal('code:Tang');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tang.toJSON).to.be.function();
			expect(tang.toJSON()).to.equal('Tang');
			expect(JSON.stringify(tang)).to.equal('"Tang"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tang.valueOf).to.be.function();
			expect(tang.valueOf()).to.equal(520);
			expect(Number(tang)).to.equal(520);
			expect(+tang).to.equal(520);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tang.valueOf).to.be.function();
			expect(tang.valueOf()).to.equal(520);
			expect(Number(tang)).to.equal(520);
			expect(+tang).to.equal(520);

			expect(0 + tang).to.equal('0Tang');
			expect(String(tang)).to.equal('Tang');

			next();
		});
	});
});
