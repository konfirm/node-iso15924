/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Thaa - Thaana', () => {
		const thaa = factory('Thaa');

		it('instances are singletons', (next) => {
			const singleton = factory('Thaa');
			const upper = factory('THAA');
			const lower = factory('thaa');
			const code = factory.code('Thaa');
			const numeric = factory.numeric('170');
			const number = factory.numeric(170);
			const instance = new ISO15924('Thaa', '170');

			expect(singleton).to.shallow.equal(thaa);
			expect(upper).to.shallow.equal(thaa);
			expect(lower).to.shallow.equal(thaa);
			expect(code).to.shallow.equal(thaa);
			expect(numeric).to.shallow.equal(thaa);
			expect(number).to.shallow.equal(thaa);
			expect(instance).not.to.shallow.equal(thaa);
			expect(instance.code).to.equal(thaa.code);
			expect(instance.numeric).to.equal(thaa.numeric);

			next();
		});

		it('has code "Thaa"', (next) => {
			expect(thaa.code).to.equal('Thaa');

			next();
		});

		it('has numeric "170"', (next) => {
			expect(thaa.numeric).to.equal('170');

			next();
		});

		it('implements toString', (next) => {
			expect(thaa.toString).to.be.function();
			expect(thaa.toString()).to.equal('Thaa');
			expect(String(thaa)).to.equal('Thaa');
			expect(0 + thaa).to.equal('0Thaa');
			expect('code:' + thaa).to.equal('code:Thaa');

			next();
		});

		it('implements toJSON', (next) => {
			expect(thaa.toJSON).to.be.function();
			expect(thaa.toJSON()).to.equal('Thaa');
			expect(JSON.stringify(thaa)).to.equal('"Thaa"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(thaa.valueOf).to.be.function();
			expect(thaa.valueOf()).to.equal(170);
			expect(Number(thaa)).to.equal(170);
			expect(+thaa).to.equal(170);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(thaa.valueOf).to.be.function();
			expect(thaa.valueOf()).to.equal(170);
			expect(Number(thaa)).to.equal(170);
			expect(+thaa).to.equal(170);

			expect(0 + thaa).to.equal('0Thaa');
			expect(String(thaa)).to.equal('Thaa');

			next();
		});
	});
});
