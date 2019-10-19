/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Java - Javanese', () => {
		const java = factory('Java');

		it('instances are singletons', (next) => {
			const singleton = factory('Java');
			const upper = factory('JAVA');
			const lower = factory('java');
			const code = factory.code('Java');
			const numeric = factory.numeric('361');
			const number = factory.numeric(361);
			const instance = new ISO15924('Java', '361');

			expect(singleton).to.shallow.equal(java);
			expect(upper).to.shallow.equal(java);
			expect(lower).to.shallow.equal(java);
			expect(code).to.shallow.equal(java);
			expect(numeric).to.shallow.equal(java);
			expect(number).to.shallow.equal(java);
			expect(instance).not.to.shallow.equal(java);
			expect(instance.code).to.equal(java.code);
			expect(instance.numeric).to.equal(java.numeric);

			next();
		});

		it('has code "Java"', (next) => {
			expect(java.code).to.equal('Java');

			next();
		});

		it('has numeric "361"', (next) => {
			expect(java.numeric).to.equal('361');

			next();
		});

		it('implements toString', (next) => {
			expect(java.toString).to.be.function();
			expect(java.toString()).to.equal('Java');
			expect(String(java)).to.equal('Java');
			expect(0 + java).to.equal('0Java');
			expect('code:' + java).to.equal('code:Java');

			next();
		});

		it('implements toJSON', (next) => {
			expect(java.toJSON).to.be.function();
			expect(java.toJSON()).to.equal('Java');
			expect(JSON.stringify(java)).to.equal('"Java"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(java.valueOf).to.be.function();
			expect(java.valueOf()).to.equal(361);
			expect(Number(java)).to.equal(361);
			expect(+java).to.equal(361);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(java.valueOf).to.be.function();
			expect(java.valueOf()).to.equal(361);
			expect(Number(java)).to.equal(361);
			expect(+java).to.equal(361);

			expect(0 + java).to.equal('0Java');
			expect(String(java)).to.equal('Java');

			next();
		});
	});
});
