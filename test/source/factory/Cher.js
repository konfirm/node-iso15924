/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Cher - Cherokee', () => {
		const cher = factory('Cher');

		it('instances are singletons', (next) => {
			const singleton = factory('Cher');
			const upper = factory('CHER');
			const lower = factory('cher');
			const code = factory.code('Cher');
			const numeric = factory.numeric('445');
			const number = factory.numeric(445);
			const instance = new ISO15924('Cher', '445');

			expect(singleton).to.shallow.equal(cher);
			expect(upper).to.shallow.equal(cher);
			expect(lower).to.shallow.equal(cher);
			expect(code).to.shallow.equal(cher);
			expect(numeric).to.shallow.equal(cher);
			expect(number).to.shallow.equal(cher);
			expect(instance).not.to.shallow.equal(cher);
			expect(instance.code).to.equal(cher.code);
			expect(instance.numeric).to.equal(cher.numeric);

			next();
		});

		it('has code "Cher"', (next) => {
			expect(cher.code).to.equal('Cher');

			next();
		});

		it('has numeric "445"', (next) => {
			expect(cher.numeric).to.equal('445');

			next();
		});

		it('implements toString', (next) => {
			expect(cher.toString).to.be.function();
			expect(cher.toString()).to.equal('Cher');
			expect(String(cher)).to.equal('Cher');
			expect(0 + cher).to.equal('0Cher');
			expect('code:' + cher).to.equal('code:Cher');

			next();
		});

		it('implements toJSON', (next) => {
			expect(cher.toJSON).to.be.function();
			expect(cher.toJSON()).to.equal('Cher');
			expect(JSON.stringify(cher)).to.equal('"Cher"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(cher.valueOf).to.be.function();
			expect(cher.valueOf()).to.equal(445);
			expect(Number(cher)).to.equal(445);
			expect(+cher).to.equal(445);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(cher.valueOf).to.be.function();
			expect(cher.valueOf()).to.equal(445);
			expect(Number(cher)).to.equal(445);
			expect(+cher).to.equal(445);

			expect(0 + cher).to.equal('0Cher');
			expect(String(cher)).to.equal('Cher');

			next();
		});
	});
});
