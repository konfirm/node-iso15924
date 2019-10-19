/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Narb - Old North Arabian (Ancient North Arabian)', () => {
		const narb = factory('Narb');

		it('instances are singletons', (next) => {
			const singleton = factory('Narb');
			const upper = factory('NARB');
			const lower = factory('narb');
			const code = factory.code('Narb');
			const numeric = factory.numeric('106');
			const number = factory.numeric(106);
			const instance = new ISO15924('Narb', '106');

			expect(singleton).to.shallow.equal(narb);
			expect(upper).to.shallow.equal(narb);
			expect(lower).to.shallow.equal(narb);
			expect(code).to.shallow.equal(narb);
			expect(numeric).to.shallow.equal(narb);
			expect(number).to.shallow.equal(narb);
			expect(instance).not.to.shallow.equal(narb);
			expect(instance.code).to.equal(narb.code);
			expect(instance.numeric).to.equal(narb.numeric);

			next();
		});

		it('has code "Narb"', (next) => {
			expect(narb.code).to.equal('Narb');

			next();
		});

		it('has numeric "106"', (next) => {
			expect(narb.numeric).to.equal('106');

			next();
		});

		it('implements toString', (next) => {
			expect(narb.toString).to.be.function();
			expect(narb.toString()).to.equal('Narb');
			expect(String(narb)).to.equal('Narb');
			expect(0 + narb).to.equal('0Narb');
			expect('code:' + narb).to.equal('code:Narb');

			next();
		});

		it('implements toJSON', (next) => {
			expect(narb.toJSON).to.be.function();
			expect(narb.toJSON()).to.equal('Narb');
			expect(JSON.stringify(narb)).to.equal('"Narb"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(narb.valueOf).to.be.function();
			expect(narb.valueOf()).to.equal(106);
			expect(Number(narb)).to.equal(106);
			expect(+narb).to.equal(106);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(narb.valueOf).to.be.function();
			expect(narb.valueOf()).to.equal(106);
			expect(Number(narb)).to.equal(106);
			expect(+narb).to.equal(106);

			expect(0 + narb).to.equal('0Narb');
			expect(String(narb)).to.equal('Narb');

			next();
		});
	});
});
